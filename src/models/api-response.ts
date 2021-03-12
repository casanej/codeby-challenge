export interface ApiResponseSuccessWithData<T> {
    readonly success: true;
    readonly data: T
}

export type ApiResponseSuccess<T> = ApiResponseSuccessWithData<T>;

export interface ApiResponseError {
    readonly success: false;
    readonly error: string | ErrorFeedback;
}

interface ErrorFeedback {
    readonly name: string;
    readonly message: string;
    readonly statusCode: number;
    readonly errorCode: number;
}

export type ApiResponse<T> = ApiResponseSuccess<T> | ApiResponseError;