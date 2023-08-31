

// import { FieldValues, useForm } from 'react-hook-form'

// interface FormData {
//   name: string,
//   age: number
// }
const FormWithHooks = () => {

  // const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  // const onSubmit = (data: FieldValues) => console.log(data)
  return (
//     <form onSubmit={handleSubmit(onSubmit)}>
//       <div >
        
//         <div className="mb-3"><label htmlFor="name" className="form-label">Name</label><input
//           {...register('name', { required: true, minLength: 3 })}
//           id='name' type="text" className="form-control" />
//           {errors.name?.type === 'required' && <p className='text-danger'>the name field is required</p>}
//           {errors.name?.type === 'minLength' && <p className='text-danger'>the name must be at least 3 characters</p>}
//         </div>



//         <div className="mb-3"><label htmlFor="age" className="form-label">Age</label><input
//           {...register('age', { required: true })}
//           id='age' type="number" className="form-control" />
//           {errors.age?.type === 'required' && <p className='text-danger'>the age field is required</p>}</div>
// </div>
      


//       <button className="btn btn-primary">Submit</button>

//     </form>
    




    




    <form className="shadow-3xl p-3 mb-5 w-75">

      
  
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-12 col-md-9 col-lg-7 col-xl-6">
              <div className="card" style={{ borderRadius: " 15px;" }}>
                <div className="card-body p-2">
                  <h2 className="text-uppercase text-center mb-3">Create an account</h2>

                  <form>

                    <div className="form-outline ">Your Name
                      <input type="text" id="form3Example1cg" className="form-control form-control-lg " />
                      <label className="form-label" htmlFor="form3Example1cg"></label>
                    </div>

                    <div className="form-outline ">Your Email
                      <input type="email" id="form3Example3cg" className="form-control form-control-lg " />
                      <label className="form-label" htmlFor="form3Example3cg"></label>
                    </div>

                    <div className="form-outline ">Password
                      <input type="password" id="form3Example4cg" className="form-control form-control-lg " />
                      <label className="form-label" htmlFor="form3Example4cg"></label>
                    </div>

                    <div className="form-outline ">Repeat your password
                      <input type="password" id="form3Example4cdg" className="form-control form-control-lg " />
                      <label className="form-label" htmlFor="form3Example4cdg"></label>
                    </div>

                    <div className="form-check d-flex justify-content-center mb-4">
                      <input className="form-check-input me-2 border border-dark" type="checkbox" value="" id="form2Example3cg" />
                      <label className="form-check-label shadow-lg" htmlFor="form2Example3g">
                        I agree all statements in <a href="#!" className="text-blue-900"><u>Terms of service</u></a>
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="button"
                        className="btn btn-primary btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>

                    <p className="text-center text-muted mt-4 mb-0">Have already an account? <a href="#!"
                      className=" text-blue-900"><u>Login here</u></a></p>

                  </form>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </form>
    






    





  )
}

export default FormWithHooks;