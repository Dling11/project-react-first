import {React, useState } from 'react'

const Login = () => {
  const [store ,setStore] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    subcribe: false
  })

  function manageInput(event) {
    const { name, value, type, checked } = event.target
    setStore(prevStore=> ({
      ...prevStore,
      [name]: type === "checkbox" ? checked : value
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
  }

  return (
    <section className='contact-section'>
      <form onSubmit={(handleSubmit)}>
        <label htmlFor="email">Email</label>
        <input 
          className='form-type'
          name='email'
          type="email"
          required
          placeholder='Email Adress' 
          value={store.email}
          onChange={manageInput}
        />
        <label htmlFor="password">Password</label>
        <input 
          className='form-type'
          name='password'
          type="password"
          required
          placeholder='Password' 
          value={store.password}
          onChange={manageInput}
        />
        <label htmlFor="confirmPassword">Confirm Password</label>
        <input 
          className='form-type'
          name='confirmPassword'
          type="password"
          required
          placeholder='Confirm Password' 
          value={store.confirmPassword}
          onChange={manageInput}
        />
        <div className='checkbox-input'>
          <input 
          className='checkbox-proper'
            type="checkbox" 
            value={store.subcribe}
            onChange={manageInput}
            name="subcribe"
            id="subscribe"
          />
            <label htmlFor="subscribe">Subscribe to continue</label>
          </div>
        <div className='button-div'>
          <button>Submit</button>
        </div>
      </form>
    </section>
  )
}

export default Login