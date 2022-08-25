import React from 'react'
import Chat from './Chat'
const ChatList = () => {
  return (
    <div className='chatList'>
        <Chat
            name='Juan Perez'
            message='Hola'
            timestamp='hace unos segundos'
            profilePic='https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg'
        />
        <Chat
            name='Mark Jones'
            message='Hola que tal'
            timestamp='hace 1 hora'
            profilePic='https://espnpressroom.com/us/files/2010/04/RS609386_20180801_MR2_4507-scaled-e1589989200242.jpg'
        />
        <Chat
            name='Tiago'
            message='Que tal'
            timestamp='hace 3 horas'
            profilePic='https://laletrade.com/~qnqtlnqh/images/biografia/Tiago-PZK.jpg'
        />
        <Chat
            name='Jorge'
            message='Como estas'
            timestamp='hace 30 minutos'
            profilePic='https://www.cubacute.com/wp-content/uploads/2022/03/jorge-masvidal.jpg'
        />                      
    </div>
  )
}

export default ChatList
