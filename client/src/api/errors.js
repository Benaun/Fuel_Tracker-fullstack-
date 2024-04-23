export const errorCatch = (error) => {
    const message = error?.respons?.data?.message

    return message
        ? error.respons.data.message === 'object'
            ? message[0]
            : message
        : error.message
}