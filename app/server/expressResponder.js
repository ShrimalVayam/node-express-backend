import { MESSAGES } from '../utils/errors'

const success = (res, data) => {
  const message = 'Request Processed Successfully'
  if (data) res.status(200).json({ data, message })
}

const failed = (res, errorObj) => {
  if (errorObj) {
    const { type, errorMessage } = errorObj
    res.boom[type](errorMessage)
  } else {
    res.boom.internal(MESSAGES.SERVER_ERROR)
  }
}

export { success, failed }
