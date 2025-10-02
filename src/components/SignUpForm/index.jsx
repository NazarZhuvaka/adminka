import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SIGN_UP_SCHEMA } from '../../schemas/auth'

const initialtState = {
  firstName: ''
}

function SignUpForm () {
  const handleSubmit = (values, actions) => {
    actions.resetForm()
  }

  return (
    <Formik
      initialValues={initialtState}
      onSubmit={handleSubmit}
      validationSchema={SIGN_UP_SCHEMA}
    >
      {formikProps => {
        return (
          <Form>
            <Field
              name='firstName'
              placeholder='Type your firstname'
            />
            <ErrorMessage name='firstName' component='p' />
            <Field
              name='lastName'
              placeholder='Type your lastName'
            />
            <ErrorMessage name='lastName' component='p' />
            <Field
              type='email'
              name='email'
              placeholder='Type your email'
            />
            <ErrorMessage name='email' component='p' />
            <Field
              name='password'
              placeholder='Type your password'
            />
            <ErrorMessage name='password' component='p' />
            <button type='submit'>Send</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignUpForm
