export const Errors = {
  unauthorized: 'unauthorized',
  forbidden: 'forbidden',
  internal: 'internal',
  badRequest: 'badRequest',
  notFound: 'notFound',
  conflict: 'conflict'
}

export const Messages = {
  internal: 'An error occurred while processing your request. Please try again later.',
  emailAlreadyRegistered: 'Email already registered! Please login',
  emailNotRegistered: 'Email is not registered',
  incorrectPassword: 'The password entered is incorrect',
  resourceConflict: resource => `The ${resource} already exists`,
  resourceNotFound: resource => `${resource} not found`
}
