import { z as ZOD, ZodType } from 'zod';

export function numericEnum<TValues extends readonly number[]>(
  values: TValues
) {
  return ZOD.number().superRefine((val, ctx) => {
    if (!values.includes(val)) {
      ctx.addIssue({
        code: ZOD.ZodIssueCode.invalid_enum_value,
        options: [...values],
        received: val,
      });
    }
  }) as ZodType<TValues[number]>;
}
