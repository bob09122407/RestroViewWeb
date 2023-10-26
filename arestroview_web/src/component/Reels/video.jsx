// import React, { useRef, useEffect } from 'react';
// import './reels.css'; // Import the CSS file for styling
// import { AiOutlineHeart} from 'react-icons/ai';
// import { BiCommentDetail} from 'react-icons/bi';
// import { BsSave} from 'react-icons/bs';

// const Video = ({ src, isActive, username, likes, shares }) => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     if (isActive) {
//       videoRef.current.play();
//     } else {
//       videoRef.current.pause();
//       videoRef.current.currentTime = 0;
//     }
//   }, [isActive]);

//   return (
//     <div className={`video ${isActive ? 'active' : ''}`}>
     
//       <video autoPlay loop controls ref={videoRef}>
//         <source src={src} type="video/mp4" />
//         Your browser does not support the video tag.
//       </video>
//        <div className="icon-home">
        
//           <AiOutlineHeart  className="home-icon" color='white' size="40px"/>
//           <BiCommentDetail  className="comment-icon" color='white' size="35px"/>
//           <BsSave  className="save-icon" color='white' size="30px"/>
          
//        </div>
//     </div>
//   );
// };

// export default Video;

// Video.js
import React, { useRef, useEffect, useState } from 'react';
import './reels.css';
import { AiOutlineHeart ,AiFillHeart} from 'react-icons/ai';
import { BiCommentDetail } from 'react-icons/bi';
import { BsSave } from 'react-icons/bs';
import CommentBox from './comment'; // Import the CommentBox component

const Video = ({ src, isActive, likes, comments, id }) => {
  const videoRef = useRef(null);
  const [showCommentBox, setShowCommentBox] = useState(false);

  useEffect(() => {
    if (isActive) {
      videoRef.current.play();
    } else {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isActive]);

  const [isLiked, setIsLiked] = useState(false); // State to track whether the video is liked

  // ...rest of your code

  const toggleLike = () => {
    // Toggle the like state when the heart icon is clicked
    setIsLiked(!isLiked);
  };
  const openCommentBox = () => {
    setShowCommentBox(true);
  };

  const closeCommentBox = () => {
    setShowCommentBox(false);
  };

  const submitComment = (comment) => {
    // Handle comment submission logic here
    console.log('Comment submitted:', comment);
    closeCommentBox();
  };

  return (
    <div className={`video ${isActive ? 'active' : ''}`}>
      <video autoPlay loop controls ref={videoRef}>
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="icon-home">
        {/* <AiOutlineHeart className="home-icon" color="white" size="40px" /> */}
        {isLiked ? (
          <AiFillHeart className="home-icon" color="red" size="40px" onClick={toggleLike} />
        ) : (
          <AiOutlineHeart className="home-icon" color="white" size="40px" onClick={toggleLike} />
        )}
        <BiCommentDetail
          className="comment-icon"
          color="white"
          size="35px"
          onClick={openCommentBox}
        />
        
        <BsSave className="save-icon" color="white" size="30px" />
      </div>
      {showCommentBox && (
        <CommentBox onClose={closeCommentBox}  comments={comments} reelId={id}/>
      )}
    </div>
  );
};

export default Video;
