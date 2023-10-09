import React from 'react'
import './../styles/footer.scss';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

export default function FooterComp() {
  return (
    <footer>

      <div className='social-icons'>
        <a href="https://github.com/raul0073?tab=repositories" target='_blank' rel='noopener noreferrer'>
          <FaGithub className='icon' color={"white"} />
        </a>
        <a href="https://www.linkedin.com/in/raz-massami/" target='_blank' rel='noopener noreferrer'>
          <FaLinkedin className='icon' color={"white"} />
        </a>
      </div>
      <h2>HIRE ME</h2>
      <a href='#navbar' className='rocket'>&uarr;</a>
      <a href='#navbar' className='rocket'>&uarr;</a>
    </footer>

  )
}
