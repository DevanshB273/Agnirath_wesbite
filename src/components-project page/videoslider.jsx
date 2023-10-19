import React from 'react';
import './videoslider.css'

const VideoPlaceholder = () => {
  return (
    <div className="video-placeholder">
      <video autoPlay loop muted>
        <source src="" type="video/mp4" />
        {/* Add additional source elements for different video formats (e.g., WebM, Ogg) */}
        Your browser does not support the video tag.
      </video>
    </div>
  );
}

export default VideoPlaceholder;

