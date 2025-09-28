import { Formik, Form, Field, ErrorMessage } from 'formik'
import { SIGN_IN_SCHEMA } from '../../schemas'

const initialtState = {
  firstName: ''
}

function SignInForm () {
  const handleSubmit = (values, actions) => {
    actions.resetForm()
  }
  return (
    <Formik
      initialValues={initialtState}
      onSubmit={handleSubmit}
      validationSchema={SIGN_IN_SCHEMA}
    >
      {() => {
        return (
          <Form>
            <Field type='email' name='email' />
            <ErrorMessage name='email' component='span' />
            <Field type='text' name='password' />
            <ErrorMessage name='password' component='span' />
            <button type='submit'>Send</button>
          </Form>
        )
      }}
    </Formik>
  )
}

export default SignInForm
