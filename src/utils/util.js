export const getErrorMessage = (err) => {
    const errorMessage = Object.values(err.errors)[0]?.message
    return errorMessage;
}