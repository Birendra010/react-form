

import { FieldValues, useForm } from 'react-hook-form'


//  const email = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,20}$/;
//  const pass = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
//  const phone = /^[6789]\d{9}$/;











interface FormData {
  name: string,
  email: string,
  phone: number,
  password: number
}
const FormWithHooks = () => {

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const onSubmit = (data: FieldValues) => console.log(data)
  return (
    
    <form onSubmit={handleSubmit(onSubmit)} className=' container h-100 w-50  shadow-lg p-3 mb-5  border border-info mt-5'>


      <h1 className='text-uppercase text-center mb-3'>Registation</h1>
          <div >

            <div className="mb-3"><label htmlFor="name" className="form-label">Your Name</label><input
              {...register('name', { required: true, minLength: 3 })}
              id='name' type="text" className="form-control" />
              {errors.name?.type === 'required' && <p className='text-danger'>the name field is required</p>}
              {errors.name?.type === 'minLength' && <p className='text-danger'>the name must be at least 3 characters</p>}
        </div>
        <div className="mb-3"><label htmlFor="email" className="form-label">Your Email</label><input
          {...register('email', { required: true, minLength: 3 })}
          id='email' type="text" className="form-control" />
          {errors.email?.type === 'required' && <p className='text-danger'>the email field is required</p>}
        </div>



        <div className="mb-3"><label htmlFor="phone" className="form-label">Your Phone</label><input
          {...register('phone', { required: true ,minLength:10,  })}
              id='phone' type="number" className="form-control" />
          {errors.phone?.type === 'required' && <p className='text-danger'>the phone field is required</p>}
          {errors.phone?.type === 'minLength'  && <p className='text-danger'>invalid phone number</p>}

        
        
        </div>

        <div className="mb-3"><label htmlFor="password" className="form-label">Your Password</label><input
          {...register('password', { required: true, minLength: 6})}
          id='password' type="password" className="form-control" />
          {errors.password?.type === 'required' && <p className='text-danger'>the password field is required</p>}
          {errors.password?.type === 'minLength' && 'maxLength' && <p className='text-danger'>the password  must be min  6 characters </p>}


        </div>
      </div>
      

      <div className='d-flex justify-content-center'>


          <button className="btn btn-primary">Submit</button>
      </div>


        </form>










    // <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-3 mb-5 w-100">



    //   <div className="mask d-flex align-items-center h-100 gradient-custom-3">
    //     <div className="container h-100">
    //       <div className="row d-flex justify-content-center align-items-center h-100">
    //         <div className="col-12 col-md-9 col-lg-7 col-xl-6">
    //           <div className="card" style={{ borderRadius: " 15px;" }}>
    //             <div className="card-body p-2">
    //               <h2 className="text-uppercase text-center mb-3">Create an account</h2>

    //               <form>

    //                 <div className="form-outline ">Your Name
    //                   <input  {...register('name', { required: true, minLength: 3 })} type="text" id="name" className="form-control form-control-md  " />
    //                   {errors.name?.type === 'required' && <p className='text-danger'>the name field is required</p>}
    //                   {errors.name?.type === 'minLength' && <p className='text-danger'>the name must be at least 3 characters</p>}
    //                   <label className="form-label" htmlFor="name"></label>
    //                 </div>

    //                 <div className="form-outline ">Your Email
    //                   <input type="email" id="email" className="form-control form-control-md " />
    //                   <label className="form-label" htmlFor="email"></label>
    //                 </div>

    //                 <div className="form-outline ">Your Phone
    //                   <input type="number" id="phone" className="form-control form-control-md " />
    //                   <label className="form-label" htmlFor="phone"></label>
    //                 </div>

    //                 <div className="form-outline ">Password
    //                   <input type="password" id="password" className="form-control form-control-md " />
    //                   <label className="form-label" htmlFor="password"></label>
    //                 </div>



    //                 <div className="form-check d-flex justify-content-center mb-2">
    //                   <input className="form-check-input me-2 border border-dark" type="checkbox" value="" id="form2Example3cg" />
    //                   <label className="form-check-label shadow-lg" htmlFor="form2Example3g">
    //                     I agree all statements in <a href="#!" className="text-blue-900"><u>Terms of service</u></a>
    //                   </label>
    //                 </div>

    //                 <div className="d-flex justify-content-center">
    //                   <button type="button"
    //                     className="btn btn-primary btn-block  gradient-custom-2 text-body">Register</button>
    //                 </div>

    //                 <p className="text-center text-muted mt-2 mb-0">Have already an account? <a href="#!"
    //                   className=" text-blue-900"><u>Login here</u></a></p>

    //               </form>

    //             </div>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>

    // </form>













  )
}

export default FormWithHooks;