// import React from 'react'

// Create Form and Accessing input field 



import { FormEvent, useState } from "react"

const Form = () => {
    const [Person , setPerson] = useState({
        name: '',
        age:''
})
   
        const handleSubmit = (event: FormEvent) => {
            event.preventDefault();
        //    console.log(Person)
    }


  return (
      <form onSubmit={handleSubmit}>
          <div className="mb-3"><label htmlFor="name" className="form-label">Name</label><input onChange={(event) => setPerson({...Person,name:event.target.value})
          }
          
              
              id='name' type="text" className="form-control" /></div>



          <div className="mb-3"><label htmlFor="age" className="form-label">Age</label><input
          onChange={(event)=>setPerson({...Person,age:event.target.value})}    id='age' type="number" className="form-control" /></div>
          <button className="btn btn-primary">Submit</button>
   </form>
  )
}

export default Form