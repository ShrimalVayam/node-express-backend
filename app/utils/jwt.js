import jwt from 'jsonwebtoken'

import config from '../../config/app'

const jwtSecret = config.get('jwt.secretToken')

const generateJWT = (payload) => jwt.sign({ payload }, jwtSecret)

export default generateJWT
