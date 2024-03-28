import React from 'react'
import {useFormik} from 'formik'
import * as yup from 'yup'
import { enqueueSnackbar } from 'notistack'

// Step5 : Validation Schema
const LoginSchema = yup.object().shape({
  email: yup.string().email('Invalid Email').required('Required'),
  password: yup.string().required('required').min(8)

})

const Signup = () => {

  // Step1 : Formik Initialization
  const loginForm = useFormik({
    initialValues: {
    name : '',
      email: '',
      password: ''
    },
    // Step4 : what happens when form is submitted
    onSubmit : async(values , action) => {
      console.log(values);
      const res = await fetch ("http://localhost:3000/user/add",{
        method:'POST',
        body: JSON.stringify(values),
        headers:{
            'Content-Type':'application/json'
        }
      });
      console.log(res.status)
      action.resetForm()

      if (res.status === 200){
        enqueueSnackbar('User Added Successfully', {variant: 'success'})
      } else {
        enqueueSnackbar('User not added', {variant: 'error'})
      }
    } 

    // Step6 : Validation Schema
    // validationSchema: LoginSchema
  })
  return (
    <div style={{
      backgroundImage: `url(${'https://cdn.dribbble.com/userupload/12550075/file/original-6a0b4d9fb62dc22fd37eb8dc24b9319c.jpg?resize=1024x683'})`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      }}>
        <div className="container d-flex justify-content-center align-items-center vh-100">
          <div className="card w-25">
            <h2 className="mt-3 text-center txt">LOGIN</h2>
            <img
              className="logo d-flex mx-auto"
              src="http://cdn.onlinewebfonts.com/svg/img_458466.png"
              alt=""
            />
            {/* Step2 : Handling when submit */}
            <form onSubmit={loginForm.handleSubmit}>
              {/* Step3 : Fields Handling */}
              <input
                className="mt-3 w-75 d-flex mx-auto p-2 rounded"
                type="text"
                placeholder="Enter your email"
                name="name"
                onChange={loginForm.handleChange}
                value={loginForm.values.name}
              />
              <input
                className="mt-3 w-75 d-flex mx-auto p-2 rounded"
                type="email"
                placeholder="Enter your email"
                name="email"
                onChange={loginForm.handleChange}
                value={loginForm.values.email}
              />
              <span style={{color:'red', fontsize: '50px', marginLeft: '10px'}}>{loginForm.errors.email}</span>
              <input
                className="mt-3 w-75 d-flex mx-auto p-1 rounded"
                type="password"
                placeholder="Enter your password"
                name="password"
                onChange={loginForm.handleChange}
                value={loginForm.values.password}
              />
              <span style={{color:'red', fontsize: '10'}}>{loginForm.touched.password && loginForm.errors.password}</span>
              <button type='submit' className="mt-3 btn btn-primary d-flex mx-auto">Login</button>
            </form>
          </div>
        </div>

    </div>
  )
}

export default Signup