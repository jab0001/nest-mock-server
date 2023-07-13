interface ResponseStatus  {
    success: Boolean
}

interface ResponseResult<T>  {
    result: T
}

interface ResponseError {
    error?: Array<{
    type: string
    description: string
    }>
}

export type StandartResponseForm<T> = ResponseStatus & ResponseError | ResponseStatus & ResponseResult<T>