export enum ResponseCodeEnum {
	success = 'success',
	failed = 'failed',
	notFound = 'notFound', // data not found
	badRequest = 'badRequest', // Means data is invalid
	serverError = 'serverError', // some server error (try catch etc, which is not covered by defined cases and is in default else case)
	created = 'created',
	deleted = 'deleted',
	updated = 'updated',
	tooManyRequests = 'tooManyRequests',
	invalidRequest = 'invalidRequest', // invalid url/api request which does not exists in express app router/routes for that OnRequest expressHandler
	unAuthenticated = 'unAuthenticated',
	unAuthorized = 'unAuthorized',
	itemExists = 'itemExists',
}

export enum ResponseStatusEnum {
	success = 200,
	failed = 500,
	notFound = 404,
	badRequest = 400,
	created = 201,
	unAuthenticated = 401,
	unAuthorized = 403,
	tooManyRequests = 429,
	invalidRequest = 410,
	itemExists = 400,
}

export enum FormFieldType {
	text = 'text',
	email = 'email',
	password = 'password',
	date = 'date',
	select = 'select',
}

export enum RequestTypeEnum {
	get = 'get',
	post = 'post',
	put = 'put',
	delete = 'delete',
}

export enum LinkTargetEnum {
	blank = '_blank',
}

export enum SearchParamKeysEnum {
	encryptedDataSearchParam = 's',
}
export enum RequestContentType {
	Json = 'application/json',
	FormData = 'multipart/form-data',
}

export enum RequestStatusEnum {
	approved = 'approved',
	rejected = 'rejected',
}

export enum TransferMethodEnum {
	easypaisa = 1,
	jazzcash = 2,
} 