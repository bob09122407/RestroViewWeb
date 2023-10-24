import React, { useState, useEffect } from 'react';
import videos from './data.js';
import Video from './video.jsx';
import { useDispatch, useSelector } from 'react-redux';
import './reels.css';
import { gsap } from 'gsap';
import { getAllReels } from '../../actions/reelAction.js';

const useVideoRefs = (videoCount) => {
  const videoRefs = Array.from({ length: videoCount }, () => React.createRef());
  return videoRefs;
};

const VideoFeed = () => {
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const videoRefs = useVideoRefs(videos.length);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllReels());
  }, [dispatch]);

  const reelsData = useSelector((state) => state.reelsReducer.reelall);
  
  useEffect(() => {
    const handleScroll = (event) => {
      if (event.deltaY > 0 && currentVideoIndex < videos.length - 1) {
        // Animate scrolling down
        gsap.to(videoRefs[currentVideoIndex].current, {
          duration: 0.5,
          top: '-100%',
          opacity: 0,
          onComplete: () => setCurrentVideoIndex(currentVideoIndex + 1),
        });
      } else if (event.deltaY < 0 && currentVideoIndex > 0) {
        // Animate scrolling up
        setCurrentVideoIndex(currentVideoIndex - 1);
        gsap.fromTo(
          videoRefs[currentVideoIndex - 1].current,
          { top: '100%', opacity: 0 },
          { duration: 0.5, top: '0%', opacity: 1 }
        );
      }
    };

    const handleKeyDown = (event) => {
      if (event.key === 'ArrowDown' && currentVideoIndex < videos.length - 1) {
        gsap.to(videoRefs[currentVideoIndex].current, {
          duration: 0.5,
          top: '-100%',
          opacity: 0,
          onComplete: () => setCurrentVideoIndex(currentVideoIndex + 1),
        });
      } else if (event.key === 'ArrowUp' && currentVideoIndex > 0) {
        setCurrentVideoIndex(currentVideoIndex - 1);
        gsap.fromTo(
          videoRefs[currentVideoIndex - 1].current,
          { top: '100%', opacity: 0 },
          { duration: 0.5, top: '0%', opacity: 1 }
        );
      }
    };

    window.addEventListener('wheel', handleScroll);
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentVideoIndex, videoRefs]);

  if (!reelsData || reelsData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="video-feed">
      <div className="video-feed-inner">
        {reelsData.data.map((video, index) => (
          <Video
            key={index}
            ref={videoRefs[index]}
            src={video.video_url}
            isActive={index === currentVideoIndex}
            // username={video.username}
            likes={video.likes}
            comments={video.comments}
            id={video._id}
          />
        ))}
      </div>
    </div>
  );
};

export default VideoFeed;
