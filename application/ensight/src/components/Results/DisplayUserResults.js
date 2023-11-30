import React from 'react'
import '../../assets/styles/pages/Browse.css'
import '../../assets/styles/pages/DisplayUser.css'
import FollowButton from '../FollowButton.js'

const UserResults = ({ UserNumber, isFollowing, onFollowToggle }) => {
  const FollowUser = {
    borderRadius: '100px',
  }

  return (
    <div className="ResultContent Results DisplayResults">
      <div className="UserResults">
        <span className="UserPicResults DisplayUserPic"></span>
        <div className="MoviePosterDetails DisplayUserPlacing">
          <h5 className="DisplayPosterTitle">Username{UserNumber}</h5>
        </div>
      </div>
      <div className="DisplayBioContainer">
        <h6 className="DisplayBio">This is a bio</h6>
      </div>
      <div className="ResultExtra">
        <div className="ResultExtraInfo">
          {/* Replace # by the number of lists they made */}
          <h3>#</h3>
          <h3 className="ResultStatement">lists</h3>
        </div>
        <div className="ResultExtraInfo">
          {/* Replace # by the number of user they follow */}
          <h3>#</h3>
          <h3 className="ResultStatement">following</h3>
        </div>
        <div className="ResultExtraInfo">
          {/* Replace # by the number of user follow them */}
          <h3>#</h3>
          <h3 className="ResultStatement">followers</h3>
        </div>
        <FollowButton
          UserNumber={`follow-button-${UserNumber}`}
          style={FollowUser}
          isFollowing={isFollowing}
          onFollowToggle={onFollowToggle}
        />
      </div>
    </div>
  )
}

export default UserResults
