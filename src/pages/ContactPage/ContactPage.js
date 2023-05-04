import React from 'react'
import styles from './ContactPage.module.css'
import {useForm } from 'react-hook-form'

function ContactPage() {
  let {
    register,
    handleSubmit,
    formState: {errors},
    reset
  } = useForm({mode:'all'})

  const onSubmit = (data)=>{
    console.log (data)
    reset()
  
  }

const firstnameInp = register('firstname', {
  required: 'Field is required',
  minLength: {
    value: 3,
    message: 'Field is required'
    
  }
})
const lastnameInp = register ('lastname', {
  required: 'Field is required',
  minLength: {
    value: 3,
    message: 'Field is required' 
  }
})


const emailInp = register ('email', {
  required: 'Field is required',
  pattern:{
    value: /^([A-z])+([0-9-_.])*([A-z0-9-_.])*@([A-z])+([0-9-_.])*([A-z0-9-_.])*[.]([A-z]){2,3}$/,
    message: 'Your email adresse is invalid'
  }
})

const EnquiryInp = register('enquiry', {
  required: 'Field is required',
  maxLength: {
  value: 300,
  message: 'Your enquiry is too long' 
  }
})
  return (
    
    <div className="container">
				<h1 className="page_title">Contact me</h1>
                <div className={styles.contact_form}>  
                <div className={styles.contact_me}>
                  <img src= '/images/photo.png' alt='photo'  />
                    <h3>Ask your question...</h3>
                  
                </div>
                <div className={styles.contact_container}> 
                  <div className={styles.contact_form}> 
                    <form onSubmit={handleSubmit(onSubmit)}>
                      <div className={styles.contact_form} >
                        <label>
                          <input placeholder='First name'
                            {...firstnameInp}/>
                          </label>
                        </div>
                        {errors.firstname && <p style ={{color:'#FF6464', fontSize:'15px'}}>{errors.firstname.message}</p>}

                        <div className={styles.contact_form} >
                          <label>
                            <input 
                            placeholder='Last name'
                            {...lastnameInp}/>
                          </label>
                        </div>
                        {errors.lastname && <p style ={{color:'#FF6464', fontSize:'15px'}}>{errors.lastname.message}</p>}

                        <div className={styles.contact_form} >
                          <label>
                            <input 
                            placeholder='Email'
                            {...emailInp}/>
                          </label>
                        </div>

                        {errors.email && <p style ={{color:'#FF6464', fontSize:'15px'}}>{errors.email.message}</p>}

                        <div className={styles.contact_form} >
                          <label>
                          <textarea type='text'
                            placeholder='Your question'
                            {...EnquiryInp}/>
                          </label>
                        </div>

                        {errors.enquiry && <p style ={{color:'#FF6464', fontSize:'15px'}}>{errors.enquiry.message}</p>}

                        <div className={styles.contact_form} >
                            <button  type='submit'>Send message</button>
                        </div>
                    </form>
                  </div>
                </div>
              </div>
		</div>
  )
}

export default ContactPage