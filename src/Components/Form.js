import React from 'react'
import '../Styles/Form.css'

const Form = () => {
  
   

  return (
      <> 
      <section className='inputs-containers'>
            <input type='text' placeholder='Enter Your Name'/>
            <input type='text' placeholder='Enter Your Surname'/>
            <input type='text' placeholder='Enter Your Emaill Adress...'/>
            <input type='text' placeholder='Enter Your Password'/>

             <button
              className='button-form'
              onClick={()=> alert('Bienvenidos')}
              > Claim Your Free Trial </button>
      </section>
      </>
  )
}

export  {Form};