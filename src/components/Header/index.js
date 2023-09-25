import {Component} from 'react'

import {RiMenuAddFill} from 'react-icons/ri'
import {MdOutlineClose} from 'react-icons/md'

import {Link} from 'react-router-dom'

import './index.css'

class Header extends Component {
  state = {showNavItems: false}

  onClickMenuButton = () => {
    this.setState({showNavItems: true})
  }

  onClickCloseButton = () => {
    this.setState({showNavItems: false})
  }

  render() {
    const {showNavItems} = this.state

    return (
      <div className="header-container">
        <nav className="nav-container">
          <div className="logo-container">
            <Link to="/" className="nav-link">
              <h1 className="web-logo">
                COVID19<span className="india">INDIA</span>
              </h1>
            </Link>
          </div>

          <ul className="nav-items-lg-view">
            <li className="nav-list-item-lg">
              <Link to="/" className="nav-link">
                <p className="nav-item-title-lg">Home</p>
              </Link>
            </li>
            <li className="nav-list-item-lg">
              <Link to="/about" className="nav-link">
                <p className="nav-item-title-lg">About</p>
              </Link>
            </li>
          </ul>
          <div className="nav-items-sm-view">
            <button
              type="button"
              className="menu-button"
              onClick={this.onClickMenuButton}
            >
              <RiMenuAddFill size={25} />
            </button>
          </div>
        </nav>
        {showNavItems && (
          <div className="nav-sm">
            <ul className="list-container-sm">
              <li className="nav-item-sm">
                <Link to="/" className="nav-link">
                  <p className="nav-title-sm">Home</p>
                </Link>
              </li>
              <li className="nav-item-sm">
                <Link to="/about" className="nav-link">
                  <p className="nav-title-sm">About</p>
                </Link>
              </li>
            </ul>
            <button
              type="button"
              className="close-button"
              onClick={this.onClickCloseButton}
            >
              <MdOutlineClose size={16} />
            </button>
          </div>
        )}
      </div>
    )
  }
}

export default Header
