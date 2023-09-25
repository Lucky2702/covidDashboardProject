import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <div className="not-found-container">
    <div className="not-found-img-container">
      <img
        src="https://res.cloudinary.com/dy1hy2x3d/image/upload/v1695649534/not-found_xxhef7.jpg"
        alt="not found"
        className="not-found-image"
      />
    </div>

    <h1 className="not-found-heading">Page Not Found</h1>
    <p className="not-found-para">
      we’re sorry, the page you requested could not be found <br />
      Please go back to the homepage
    </p>
    <Link to="/">
      <button type="button" className="to-home-button">
        Home
      </button>
    </Link>
  </div>
)

export default NotFound
