import { Messages } from '../utils/errors'

const checker = (res, result) => {
  if (result.error) {
    failed(res, result.error)
  } else {
    success(res, result)
  }
}

const success = (res, data) => {
  const message = 'Request Processed Successfully'
  if (data) res.status(200).json({ data, message })
}

const failed = (res, errorObj) => {
  if (errorObj) {
    const { type, message } = errorObj
    res.boom[type](message || Messages[type])
  } else {
    res.boom.internal(Messages.SERVER_ERROR)
  }
}

export { success, failed, checker }
