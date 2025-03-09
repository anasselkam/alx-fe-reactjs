
import * as Yup from "yup"
import { Formik, Form, Field, ErrorMessage } from "formik"

const validationSchema= Yup.object({
    username: Yup.string().required("username required"),
    email: Yup.string().email("invalid Email Format").required("Email required"),
    password: Yup.string().required("Password required").min(6)


})

const FormikForm = () => (
    <Formik 
    initialValues= {{
        username: "",
        email: "",
        password: ""
    }}
    validationSchema={validationSchema}
    onSubmit={(values=>{
        if (values.username && values.email && values.password) {
            alert("You signed in")
        } else {
            setErrors(ErrorMessage)
        }

    })}
    > 
    {()=>(
        <Form>
                <label htmlFor="username">Username</label>
                <Field type="text" name='username' onChange={formik.handleChange} />
                <ErrorMessage name="username" component="div" />
                <label htmlFor="email">email</label>
                <Field type="email" name='email' onChange={formik.handleChange} />
                <ErrorMessage name="email" component="div" />

                <label htmlFor="password">Password</label>
                <Field type="password" name='password' onChange={formik.handleChange} />
                <ErrorMessage name="password" component="div" />

                <button type='submit'>sign in</button>
            </Form>

    )}
    </Formik>
   )
   





export default FormikForm
