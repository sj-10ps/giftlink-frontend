import React from 'react'
import { Link } from 'react-router-dom'
import {Formik,Form,Field}  from 'formik'
import * as Yup from "yup"
import IP from '../utils/IP'
import { toast } from 'react-toastify'
import axios from 'axios'
import { useAuthContext } from '../contexts/AuthProvider'
const Registerform = () => {
    const {SignIn}=useAuthContext()
    const handleSubmit=async(values)=>{
       
          const formdata=new FormData()
          Object.entries(values).forEach(([key,value])=>{
            formdata.append(key,value)
          })

          try {
            const res=await axios.post(`${IP}/register`,formdata)
            toast.success(res.data.message)
          
            const res2=await axios.post(`${IP}/login`,{email:values.email,password:values.password})
            SignIn(res2.data.token,res2.data.data)
        
          } catch (error) {
             console.log(error)
             toast.error(error.response.data.message)
          }
    }

    const initialvalues={
        firstname:"",
        lastname:"",
        email:"",
        password:""
    }
    const validationSchema=Yup.object({
        firstname:Yup.string().required("firstname is required").min(3,"atleast 3 letters required"),
        lastname:Yup.string(),
        email:Yup.string().email("must be a valid email").required("email is required"),
        password:Yup.string().min(6,"atleast 6 characters required").required("password is required")
    })
  return (
    <Formik initialValues={initialvalues} validationSchema={validationSchema} onSubmit={handleSubmit}>
    {({touched,errors})=>(
         <Form className='px-8 w-full max-w-lg py-5 bg-white shadow-xl rounded-lg group flex flex-col gap-4 mx-2' >
          <h2 className='text-2xl font-bold text-center'>Register</h2>     
        <label htmlFor="firstname" className='capitalize font semibold'>First name</label>
        <Field type="text"  className='p-2 placeholder:text-slate outline rounded-lg focus:bg-amber-100' placeholder='Enter your Firstname' name='firstname'/>
        {touched.firstname&&errors.firstname&&(
            <div className="text-red-500 text-sm mt-1">{errors.firstname}</div>
        )}
        <label htmlFor="lastname" className='capitalize font semibold'>last name</label>
        <Field type="text"  className='p-2 placeholder:text-slate outline rounded-lg focus:bg-amber-100' placeholder='Enter your last name(optional)' name='lastname'/>  
        {touched.lastname&&errors.lastname&&(
            <div className="text-red-500 text-sm mt-1">{errors.lastname}</div>
        )}   
        <label htmlFor="email" className='capitalize font semibold'>email</label>
        <Field type="text"  className='p-2 placeholder:text-slate outline rounded-lg focus:bg-amber-100' placeholder='Enter your email' name='email'/>
        {touched.email&&errors.email&&(
            <div className="text-red-500 text-sm mt-1">{errors.email}</div>
        )}  
          <label htmlFor="password" className='capitalize font semibold'>password</label>
        <Field type="password"  className='p-2 placeholder:text-slate  outline rounded-lg focus:bg-amber-100' placeholder='Enter your password' name='password'/>
        {touched.password&&errors.password&&(
            <div className="text-red-500 text-sm mt-1">{errors.password}</div>
        )}  
        <input type="submit" value={'submit'} className='bg-blue-900 text-white capitalize  py-2 px-5 hover:opacity-80'/>
        <p className='flex gap-1'>Already a member?<Link to={'/loginpage'} className='text-blue-700 hover:opacity-80'>Login Here</Link></p>
     
    </Form>
    )}
    </Formik>
  )
}

export default Registerform
