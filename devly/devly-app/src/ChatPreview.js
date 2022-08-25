import React from 'react'
import { Avatar } from '@mui/material';
import "./ChatPreview.css"
import { Link, useHistory } from 'react-router-dom';


const ChatPreview = ({name, message, timestamp, profilePic}) => {
  return (
    <Link to={`/chat/${name}`}>
    <div className='chatPreview'>
        <Avatar className='chatPreview__avatar' alt={name} src={profilePic} />
        <div className='chatPreview__info'>
            <h2>{name}</h2>
            <p>{message}</p>
        </div>
        <p className='chatPreview__timestamp'>{timestamp}</p>
      
    </div>
    </Link>
  )
}

export default ChatPreview
