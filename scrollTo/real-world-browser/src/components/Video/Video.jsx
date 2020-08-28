import React from 'react';
// import video from '../../assets/videos/tech.3840x2160px.8320kbps.mp4';
import video from '../../assets/videos/tech.1920x1080px.1000kbps.mp4';
import VideoBackground from './Video.styles';

const Video = () => (
  <VideoBackground autoPlay muted loop poster='../../assets/videos/loading.png'>
    <source src={video} type='video/mp4' />
  </VideoBackground>
);

export default Video;