import React, {useState} from 'react'
import { Avatar } from '@mui/material';
import "./SingleChat.css"



const SingleChat = () => {

    const controllerSend = e => {
        e.preventDefault();
        setMessages([...messages,{message:input}])
        setInput("")
    }
  
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([
    {
        name: "Juan Perez",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg",
        message: "Hola"
    },
    {
        name: "Juan Perez",
        image: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg",
        message: "Hola que tal"
    },
    {
        message: "Que tal"
    }



  ]);
  
  
  
    return (
    <div className='singleChat'>
        <p className='singleChat__timestamp'>HICISTE MATCH CON EL 22/08/22</p>
        {messages.map(message => (

            message.name ? (

                <div className='singleChat__message'>
                    <Avatar className='singleChat__image' alt={message.name} src={message.image} />
                    <p className='singleChat__text'>{message.message}</p>

                </div>


            ) : (

                <div className='singleChat__message'>
                    
                    <p className='singleChat__text__self'>{message.message}</p>

                </div>


            )
        ))}

            <form className='singleChat__input'>
                <input className='singleChat__input__input' value={input} onChange={ e => setInput(e.target.value)} placeholder='Escribe un mensaje...'/>
                <button onClick={controllerSend} type="submit" className="singleChat__input__send">Send</button>
            </form>

      
    </div>
    )}



export default SingleChat
