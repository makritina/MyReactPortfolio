import { Link } from 'react-router-dom'
import StyledLink from './styled'
import StyledTopLink from './StyledTopLink'
import me from './images/me.png'

const AboutView = () => {
  return (

    <div className='wrapper container-fluid  w-100 my-auto text-white' id='about'>
      <div className='sidebar'>
        <div className='bg-shadow' />
        <div className='sidebar_inner'>

          <ul className='sidebar_menu'>
            <StyledLink
              to='/'
             >
              <div >Home </div>
            </StyledLink>

            <StyledLink to='/Contact'>
              <div >Contact</div>
            </StyledLink>

          </ul>
          <div className='hrstyleSide' />
        </div>
      </div>

      <div className='main_container '>
        <div className='top_navbar '>

          <ul className='menu'>
            <StyledTopLink
              to='/'
         >
              <div >Home </div>
            </StyledTopLink>

            <StyledTopLink to='/contact'>
              <div >Contact</div>
            </StyledTopLink>
            <div className='hrstyleSideTop' />
          </ul>

        </div>

        <div className='container d-lg-flex  ' id="customhomerow">
          <div className='row  '>

            <div className='row'>
              <div className='col-7'>
                <h1 className='pt-5 pb-5 scale-in-center ' id='customtitle'> About</h1>
              </div>

              <div className='col-5 ' id='customimg'>
                <img className='rounded swing-in-top-fwd'src={me} alt='Tina Makri' />
              </div>

            </div>

            <div className='col-lg-6  justify-content-center ' id='customcol'>

              <div className='fade-in'>
                <h3 className='fs-1'>I'm Tina,</h3>
                <p className='fs-5 slide-in-fwd-center pb-2 '>  I'm Front-End Developer located in Greece.<br />
                Well-organised person, problem solver, with high attention to detail.
                I love working collaboratively, but can also run projects on my own.
                  I enjoy building state-of-the-art, easy to use, user-friendly but most important accessible websites.

              </p>
              </div>

              <hr className='hrstyle' />

              <div className='pb-3 fade-in'>
                <p className='fs-5'> One of my favourite quotes: </p>
                <p className='fs-1' id='customfont'>
         “Always code as if the guy who ends up maintaining your code will be a violent
         psychopath who knows where you live.”<br />
                  <span className='fs-3'>-Martin Golding </span>
                </p>
              </div>

              <hr className='hrstyle' />

              <div className='pb-5 fade-in'>
                <h2> Skills </h2>
                <p className='fs-5 '>
                HTML / CSS / JavaScript / React / Bootstrap / SQL / Python / Sass /
                Git / npm / Django / Wagtail
              </p>
                <div >

                  <Link className='btn scale-up-center text-white fs-5 mt-4 mb-5 mt-5 rounded-pill' to='/contact' role='button 'id='custombtn'>Contact me</Link>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </div>

  )
}
export default AboutView
