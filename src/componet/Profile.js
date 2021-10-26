import React from 'react'

function Profile({photo,bio,profession,fullName,myfunction}) {
      return (
            
                  
                    <div className="container" > 
  <div className="card-wrapper">
    <div className="card">
      <div className="card-image">
        <img src={photo} alt="profile one" />
      </div>
      <ul className="social-icons">
        <li>
          <a href>
            <i className="fab fa-facebook-f" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-instagram" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-twitter" />
          </a>
        </li>
        <li>
          <a href>
            <i className="fab fa-dribbble" />
          </a>
        </li>
      </ul>
      <div className="details">
        <h2>{fullName}
          <br />
          <span className="job-title">{profession}</span>
          <p> {bio} </p>
        </h2>
      </div>
    </div>
  </div>{/* end box wrapper */} 
  
</div>
         
      )
}

Profile.defaultProps={
      bio:"this is "
}
export default Profile
