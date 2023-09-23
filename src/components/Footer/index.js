import {VscGithubAlt} from 'react-icons/vsc'
import {FiInstagram} from 'react-icons/fi'
import {FaTwitter} from 'react-icons/fa'

import './index.css'

const Footer = () => (
  <div className="footer-container">
    <h1 className="footer-heading">
      COVID19<span className="ind">INDIA</span>
    </h1>
    <p className="footer-para">
      we stand with everyone fighting on the front lines
    </p>
    <ul className="footer-icon-container">
      <li className="footer-icon-git">
        <VscGithubAlt />
      </li>
      <li className="footer-icon-ins">
        <FiInstagram />
      </li>
      <li className="footer-icon-x">
        <FaTwitter />
      </li>
    </ul>
  </div>
)

export default Footer
