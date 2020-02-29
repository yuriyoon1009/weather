export const errorHandler = value => {
  if (value instanceof Error) {
    return {
      status: false,
      data: null,
      errors: {
        code: value.response.data.cod,
        message: value.response.data.message
      }
    }
  }

  return {
    status: true,
    data: value ? value : {},
    errors: null
  }
}
