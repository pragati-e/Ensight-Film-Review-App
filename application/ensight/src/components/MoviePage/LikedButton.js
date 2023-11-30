import React from 'react'
import '../../assets/styles/components/LikedButton.css'

const LikeButton = () => {
  return (
    <div className="liked-heart-container" title="Like">
      <div className="liked-svg-filled">
        <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.5,1.917a6.4,6.4,0,0,0-5.5,3.3,6.4,6.4,0,0,0-5.5-3.3A6.8,6.8,0,0,0,0,8.967c0,4.547,4.786,9.513,8.8,12.88a4.974,4.974,0,0,0,6.4,0C19.214,18.48,24,13.514,24,8.967A6.8,6.8,0,0,0,17.5,1.917Z"></path>
        </svg>
      </div>
    </div>
  )
}

export default LikeButton