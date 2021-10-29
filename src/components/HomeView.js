import StyledHomeLink from './styledLinkhome.js'

const HomeView = () => {
  return (
    <div className='wrapper container-fluid w-100 d-flex vh-100 justify-content-center text-white' id='home'>
      <div className='bg-area w-100 vh-100 slide-in-bottom' />
      <div className='sidebar'>
        <div className='bg-shadow' />
        <div className='sidebar_inner mt-3' id='sidebarmenulinks'>

          <ul className='sidebar_menu'>
            <li><a href='https://www.linkedin.com/in/stamatina-makri-204483206/' target='_blank' rel='noopener noreferrer'> <i className='fab fa-linkedin-in' /> </a></li>
            <li><a href='https://twitter.com/tina_makri ' target='_blank' rel='noopener noreferrer'> <i className='fab fa-twitter' /></a></li>
            <li><a href='https://github.com/makritina' target='_blank' rel='noopener noreferrer'> <i className='fab fa-github' /></a></li>

          </ul>
          <div className='hrstyleSideHome' />
        </div>
      </div>

      <div className='main_container w-100 d-lg-flex m-0 ' >
        <div className='top_navbar' id='homeToplinks'>
          <ul className='menu'>
            <li><a href='https://www.linkedin.com/in/stamatina-makri-204483206/' target='_blank' rel='noopener noreferrer'> <i className='fab fa-linkedin-in' /> </a></li>
            <li><a href='https://twitter.com/tina_makri ' target='_blank' rel='noopener noreferrer'> <i className='fab fa-twitter' /></a></li>
            <li><a href='https://github.com/makritina' target='_blank' rel='noopener noreferrer'> <i className='fab fa-github' /></a></li>

            <div className='hrstyleSideTop' />

          </ul>

        </div>

        <div className='container row ' id='homerow'>

          <div className='container col-lg-5 col-md-8 col-sm-12 col-12 mt-auto mb-5' id='namediv' >

            <div className='row justify-content-center' >
              <h2 className='fw-bold'>Tina Makri </h2>
              <p className='lead'>Front-End Developer,<br />
          based in Greece </p>
            </div>
          </div>

          <div className='container col-lg-6 col-md-6 col-sm-12 col-12 my-auto mr-3 ' id='Homelinks' >
            <StyledHomeLink className='italic ' to='/about'><h1>About</h1></StyledHomeLink>
            <StyledHomeLink className='italic' to='/contact'><h1>Contact</h1></StyledHomeLink>

          </div>

        </div>

      </div>
    </div>

  )
}
export default HomeView
