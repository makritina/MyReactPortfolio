import './Work.css'
import StyledLink from './styled'
import StyledTopLink from './StyledTopLink'

const Work = () => {
  return (

    <div className='wrapper container-fluid  w-100 my-auto text-white' id='work'>
      <div className='sidebar'>
        <div className='bg-shadow' />
        <div className='sidebar_inner'>

          <ul className='sidebar_menu'>
            <StyledLink
              to='/'
            >
              <div >Home </div>
            </StyledLink>

            <StyledLink to='/About'>
              <div >About</div>
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

            <StyledTopLink to='/About'>
              <div >About</div>
            </StyledTopLink>

            <StyledTopLink to='/contact'>
              <div >Contact</div>
            </StyledTopLink>
            <div className='hrstyleSideTop' />
          </ul>

        </div>

        <div className=' work-container' >
          <div className="row " id="work-col">
            <div className="col-lg-6 slide-in-top header" >
              <h1> My Work</h1>
            </div>

            <div className="col-lg-6 projects">
              <ul>
                <li > <a href="https://moviebrowserapp.netlify.app" target='_blank' rel='noopener noreferrer'><h2 className="scale-in-center">Api Website</h2> </a>
                  <p className="text-focus-in text-white">Movie Broswer project build with React, API.</p>
                </li>
                <li >  <a href="https://burgerwebsitee.netlify.app" target='_blank' rel='noopener noreferrer'><h2 className="scale-in-center">Burchor Burger Website</h2> </a>
                  <p className="text-focus-in text-white">A Burchor website build with React.</p>
                </li>
                <li >  <a href="https://conf-project.netlify.app" target='_blank' rel='noopener noreferrer'><h2 className="scale-in-center">Conference Website</h2> </a>
                  <p className="text-focus-in text-white">A website build with Bootstrap.</p>
                </li>
              </ul>
            </div>

          </div>



        </div>
      </div>
    </div>

  )
}

export default Work