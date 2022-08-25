import React from 'react'
import { Avatar } from '@mui/material';
import './SeeUser.css'
import { Link, useHistory } from 'react-router-dom';
const User = ({name, bio, profilePic}) => {
  return (

    <Link to={`/user`}>
  
        <img className="image" src="https://akamai.sscdn.co/uploadfile/letras/fotos/8/8/1/3/8813775304b42f299e99a34ba0ba37fd.jpg" alt='Rodrigo'  />
        <div className='details'>
            
            <h2 className='name'>Rodrigo</h2>
            <div className='bioabout'>
           
              <p className='about'>Sobre Mi</p>
              <p className='bio'>Me llamo Rodrigo vivo en Córdoba y me gusta cantar</p>
            </div>
        </div>
        
      

    </Link>
  )
}

export default User