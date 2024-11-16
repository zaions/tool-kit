export type ClassValue =
  | string
  | number
  | boolean
  | undefined
  | null
  | ClassDictionary
  | ClassArray
  | ClassNameGeneratorFunction;

export interface ClassDictionary {
  [id: string]: unknown;
}

export interface ClassArray extends Array<ClassValue> {}

export interface ClassNameGeneratorFunction {
  toString(): string;
}

// Type guards
function isObject(
  value: ClassValue
): value is ClassDictionary | ClassNameGeneratorFunction {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

const hasOwnProperty = {}.hasOwnProperty;

// Base implementation
function appendClassBase(value: string, newClass: string): string {
  if (!newClass) {
    return value;
  }
  return value ? value + ' ' + newClass : newClass;
}

// Standard implementation
function parseValueStandard(arg: ClassValue): string {
  if (typeof arg === 'string' || typeof arg === 'number') {
    return arg.toString();
  }

  if (!arg || typeof arg !== 'object') {
    return '';
  }

  if (Array.isArray(arg)) {
    return classNames.apply(null, arg);
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes('[native code]')
  ) {
    return arg.toString();
  }

  let classes = '';
  for (const key in arg as ClassDictionary) {
    if (hasOwnProperty.call(arg, key) && (arg as ClassDictionary)[key]) {
      classes = appendClassBase(classes, key);
    }
  }

  return classes;
}

export function classNames(...args: ClassValue[]): string {
  let classes = '';

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg) {
      classes = appendClassBase(classes, parseValueStandard(arg));
    }
  }

  return classes;
}

// Dedupe implementation
class StorageObject {
  [key: string]: boolean;

  constructor() {
    Object.setPrototypeOf(this, null);
  }
}

const SPACE = /\s+/;

function appendStringDedupe(classSet: StorageObject, str: string): void {
  const array = str.split(SPACE);
  const length = array.length;

  for (let i = 0; i < length; i++) {
    classSet[array[i]] = true;
  }
}

function appendArrayDedupe(classSet: StorageObject, array: ClassValue[]): void {
  const length = array.length;
  for (let i = 0; i < length; i++) {
    appendValueDedupe(classSet, array[i]);
  }
}

function appendObjectDedupe(
  classSet: StorageObject,
  object: ClassDictionary | ClassNameGeneratorFunction
): void {
  if (
    object.toString !== Object.prototype.toString &&
    !object.toString.toString().includes('[native code]')
  ) {
    classSet[object.toString()] = true;
    return;
  }

  for (const k in object) {
    if (hasOwnProperty.call(object, k)) {
      classSet[k] = !!(object as ClassDictionary)[k];
    }
  }
}

function appendValueDedupe(classSet: StorageObject, arg: ClassValue): void {
  if (!arg) return;

  if (typeof arg === 'string') {
    appendStringDedupe(classSet, arg);
  } else if (typeof arg === 'number') {
    appendStringDedupe(classSet, arg.toString());
  } else if (Array.isArray(arg)) {
    appendArrayDedupe(classSet, arg);
  } else if (isObject(arg)) {
    appendObjectDedupe(classSet, arg);
  }
}

export function classNamesDedupe(...args: ClassValue[]): string {
  const classSet = new StorageObject();
  appendArrayDedupe(classSet, args);

  let classes = '';
  for (const key in classSet) {
    if (classSet[key]) {
      classes += classes ? ' ' + key : key;
    }
  }

  return classes;
}

// Bind implementation
function parseValueBind(this: any, arg: ClassValue): string {
  if (typeof arg === 'string') {
    return (this && this[arg]) || arg;
  }

  if (!arg || typeof arg !== 'object') {
    return '';
  }

  if (Array.isArray(arg)) {
    return classNamesBind.apply(this, arg);
  }

  if (
    arg.toString !== Object.prototype.toString &&
    !arg.toString.toString().includes('[native code]')
  ) {
    return arg.toString();
  }

  let classes = '';
  for (const key in arg as ClassDictionary) {
    if (hasOwnProperty.call(arg, key) && (arg as ClassDictionary)[key]) {
      classes = appendClassBase(classes, (this && this[key]) || key);
    }
  }

  return classes;
}

export function classNamesBind(this: any, ...args: ClassValue[]): string {
  let classes = '';

  for (let i = 0; i < args.length; i++) {
    const arg = args[i];
    if (arg) {
      classes = appendClassBase(classes, parseValueBind.call(this, arg));
    }
  }

  return classes;
}
