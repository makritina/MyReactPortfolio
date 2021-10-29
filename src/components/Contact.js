import StyledLink from './styled'
import emailjs from 'emailjs-com'
import StyledTopLink from './StyledTopLink'
import React, { useState, useEffect } from "react";



const Contact = () => {
  const initialState = "Submit";
  const [buttonText, setButtonText] = useState("Submit");

  useEffect(() => {
    if(buttonText !== initialState){
      setTimeout(() => setButtonText(initialState), [1500])
    }
  }, [buttonText])

  const changeText = (text) => setButtonText(text);



  function sendEmail(e){
    e.preventDefault();

    emailjs.sendForm("service_dzv68yi",
                     "template_zrtn22m",
                     e.target,
                     "user_3wDfThopCjVfjF7XzXY7w"
                   ).then(res=>{
                     console.log(res);
                   }).catch(err=> console.log(err))
  }

  return (
    <div
      className='wrapper container-fluid  d-flex  justify-content-center text-white'
      id='contact'
    >
      <div className='bg-area-contact slide-in-top' />
      <div className='sidebar'>
        <div className='bg-shadow' />
        <div className='sidebar_inner'>
          <ul className='sidebar_menu'>
            <StyledLink to='/'>
              <div>Home </div>
            </StyledLink>

            <StyledLink to='/about'>
              <div>About</div>
            </StyledLink>
          </ul>
          <div className='hrstyleSide' />
        </div>
      </div>

      <div className='main_container '>
        <div className='top_navbar '>
          <ul className='menu'>
            <StyledTopLink to='/'>
              <div>Home </div>
            </StyledTopLink>

            <StyledTopLink to='/about'>
              <div>About</div>
            </StyledTopLink>
            <div className='hrstyleSideTop' />
          </ul>
        </div>

        <div className='container row'>
          <div
            className='container col-lg-8 col-md-10 col-sm-12 col-12  mt-lg-5'
            id='form'
          >
            <h2 className='scale-in-center'>Hello.</h2>



            <div
              className= "row justify-content-center slide-in-left formcontent"

            >
              <form onSubmit={sendEmail}>
                <div className='row'>
                  <div className='col-lg-6 col-sm-6 col-md-6 col-6'>
                    <div className='md-form mb-0'>
                      <label htmlFor='name'>Your name</label>
                      <input
                        type='text'
                        id='name'
                        name='name'
                        className='form-control border-light text-white'
                        required
                      />
                    </div>
                  </div>

                  <div className='col-6 col-sm-6 col-md-6'>
                    <div className='md-form mb-0'>
                      <label htmlFor='email'>Your email</label>
                      <input
                        type='text'
                        id='email'
                        name='email'
                        className='form-control  border-light text-white'
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className=' col-md-12'>
                    <div className='md-form mb-0'>
                      <label htmlFor='subject'>Subject</label>
                      <input
                        type='text'
                        id='subject'
                        name='subject'
                        className='form-control  text-white'
                        required
                      />
                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-12'>
                    <div className='md-form'>
                      <label htmlFor='message'>Your message</label>
                      <textarea
                        type='text'
                        id='message'
                        name='message'
                        rows='2'
                        className='form-control md-textarea text-white'
                        required
                       />
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <button
                  onClick={() => changeText("Thank you")}
                    type='submit'
                    className='btn scale-up-center text-white fs-5 mt-4 mb-5 mt-5 rounded-pill'
                    id='custombtnform'
                  >
                    {buttonText}
                  </button>
                </div>
              </form>
            </div>
          </div>


          <div
            className=' col-lg-4 col-12 col-md-12  col-sm-12 mt-auto   '
            id='links'
          >
            <div className='rounded ' id='customborder'>
              <p className='m-0'> Thessaloniki, Greece</p>
              <p className='m-0'>makristamatina19@gmail.com</p>
              <p className='m-0'>
                <a
                  href='https://www.linkedin.com/in/stamatina-makri-204483206/'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  {' '}
                  LinkedIn{' '}
                </a>{' '}
                /{' '}
                <a
                  href='https://twitter.com/tina_makri '
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Twitter
                </a>{' '}
                /{' '}
                <a
                  href='https://github.com/makritina'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  GitHub
                </a>{' '}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
