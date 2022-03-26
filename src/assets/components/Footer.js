import SocialLinks from './SocialLinks'
import React from 'react'

const Footer = ({ githubUrl, link, twitter }) => {
  return (
    <footer className='d-flex flex-column justify-content-center align-items-center bg-dark'>
      <SocialLinks githubUrl={githubUrl} link={link} twitter={twitter} />
      <p className='lead my-3 text-white'>
        &copy; Made with <span role='img' aria-label='heart'>♥️</span> by{' '}
        <a
          id='myInfo'
          href='https://github.com/Jonathan-Martin1'
          rel='noreferrer'
        >
          Jonathan Martin
        </a>
      </p>
    </footer>
  )
}

export default Footer
