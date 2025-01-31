import React from 'react'

export const Contact = () => {

  const handleFormSubmit = (formData) => {
    console.log(formData.entries());
  }

  return (
    <section className='section-contact'>
      <h2 className='container-title'>Contact Us</h2>

      <div className='contact-wrapper container'>
        <form action={handleFormSubmit}>
          <input
            type='text'
            required
            autoComplete='off'
            placeholder='Enter you name'
            name='username'
          />

          <input
              type="email"
              className="form-control"
              placeholder="Enter you email"
              name="email"
              required
              autoComplete="off"
          />

          <textarea
              className="form-control"
              rows="10"
              placeholder="Enter your message"
              name="message"
              required
              autoComplete="off">
          </textarea>  

          <button value="send" type='submit'>Send</button>

        </form>
      </div>
    </section>
  )
}
