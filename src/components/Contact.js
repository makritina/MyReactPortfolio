import StyledLink from './styled'
import './Contact.css'
import emailjs from 'emailjs-com'
import StyledTopLink from './StyledTopLink'
import React, { useState } from "react";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';



const Contact = () => {

 //clear on submit
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    console.log(email, name, subject, message);
    // clearing the values
    setEmail(""); setName(""); setSubject(""); setMessage("");
  }


  //send email on submit
  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm("service_dzv68yi",
      "template_zrtn22m",
      e.target,
      "user_3wDfThopCjVfjF7XzXY7w"
    ).then(res => {
      console.log(res);
    }).catch(err => console.log(err))
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

            <StyledLink to='/Work'>
              <div>Work</div>
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
            <StyledTopLink to='/work'>
              <div>Work</div>
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
              className="row justify-content-center slide-in-left formcontent"

            >
              <form onSubmit={sendEmail}  >
                <div className='row'>
                  <div className='col-lg-6 col-sm-6 col-md-6 col-6'>
                    <div className='md-form mb-0'>
                      <TextField style={{ marginBottom: '10px' }} sx={{ input: { color: '#fff' } }}
                        htmlFor='name'
                        helperText="Please enter your name"
                        id="name"
                        label="Name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        InputLabelProps={{
                          style: { color: '#fff' },
                        }}
                        FormHelperTextProps={{ style: { color: '#fff' } }}
                      />

                    </div>
                  </div>

                  <div className='col-6 col-sm-6 col-md-6'>
                    <div className='md-form mb-0'>

                      <TextField fullWidth sx={{ input: { color: '#fff' } }}
                        helperText="Please enter your email"
                        htmlFor='email'
                        id="email"
                        name="email"
                        label="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        InputLabelProps={{
                          style: { color: '#fff' },
                        }}
                        FormHelperTextProps={{ style: { color: '#fff' } }}
                      />

                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className=' col-md-12'>
                    <div className='md-form mb-0'>

                      <TextField fullWidth style={{ marginBottom: '10px' }} sx={{ input: { color: '#fff' } }}
                        helperText="Please enter your subject"
                        htmlFor='subject'
                        id="subject"
                        name="subject"
                        label="Subject"
                        value={subject}
                        onChange={(e) => setSubject(e.target.value)}
                        InputLabelProps={{
                          style: { color: '#fff' },
                        }}
                        FormHelperTextProps={{ style: { color: '#fff' } }}
                      />

                    </div>
                  </div>
                </div>

                <div className='row'>
                  <div className='col-md-12'>
                    <div className='md-form'>
                      <TextField fullWidth sx={{ input: { color: '#fff' } }}
                        type='text'
                        helperText="Please enter your message"
                        id="message"
                        name="message"
                        rows='2'
                        label="Message"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                        InputLabelProps={{
                          style: { color: '#fff' },
                        }}
                        FormHelperTextProps={{ style: { color: '#fff' } }}
                      />
                    </div>
                  </div>
                </div>
                <div className='d-flex justify-content-end'>
                  <Button variant="contained" endIcon={<SendIcon />}
                    type="submit" onClick={handleSubmit}
                     className='btn scale-up-center text-white fs-5 mt-4 mb-5 mt-5 rounded-pill'
                    id='custombtnform'
                  >
                    Send
                  </Button>
                </div>
              </form>
            </div>
          </div>


          <div
            className=' col-lg-4 col-12 col-md-12  col-sm-12 mt-auto   '
            id='links'
          >
            
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
  )
}

export default Contact
