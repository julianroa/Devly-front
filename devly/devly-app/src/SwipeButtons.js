import React from 'react'
import './SwipeButtons.css'
import ReplaySharpIcon from '@mui/icons-material/ReplaySharp';
import CloseSharpIcon from '@mui/icons-material/CloseSharp';
import StarRateSharpIcon from '@mui/icons-material/StarRateSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import BoltSharpIcon from '@mui/icons-material/BoltSharp';
import IconButton from '@mui/material/IconButton';

const SwipeButtons = () => {
  return (
    <div className="swipeButtons">
        <IconButton className="swipeButtons__replay">
        <ReplaySharpIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipeButtons__close">
        <CloseSharpIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipeButtons__star">
        <StarRateSharpIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipeButtons__favorite">
        <FavoriteSharpIcon fontSize='large' />
        </IconButton>
        <IconButton className="swipeButtons__bolt">
        <BoltSharpIcon fontSize='large' />
        </IconButton>
      
    </div>
  );
};

export default SwipeButtons
