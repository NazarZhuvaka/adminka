import * as yup from 'yup'

export const SIGN_UP_SCHEMA = yup.object({
  firstName: yup.string().required().min(1).max(50),
  lastName: yup.string().required().min(1).max(50),
  email: yup.string().email().required(),
  password: yup.string().min(5).max(50).matches()
})

export const SIGN_IN_SCHEMA = yup.object({
  password: yup.string().min(5).max(50).matches(),
  email: yup.string().email().required()
})
