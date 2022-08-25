import React, {useEffect, useState} from 'react'
import './TinderCards.css'
import TinderCard from 'react-tinder-card'
import database from "./firebase";


function TinderCards() {
    
  

    /*const [person,setPerson] = useState([
    {
        name: "Juan Perez",
        url: "https://upload.wikimedia.org/wikipedia/commons/3/3f/Juan_Perez_July_2013.jpg"
    },
    {
        name: "Mark Jones",
        url: "https://espnpressroom.com/us/files/2010/04/RS609386_20180801_MR2_4507-scaled-e1589989200242.jpg"
    }

    ]);*/
   
    const [person,setPerson] = useState([]);

    useEffect(() => {

        const unsuscribe = database.collection("person").onSnapshot(snapshot => (
            setPerson(snapshot.docs.map(doc => doc.data()))
        ));

        return () => {
            unsuscribe();
        }

    }, [])

    return (
        <div className="tinderCards">
            <div className="tinderCards__contenedor">
                {person.map(person => (

                    <TinderCard
                        className="swipe"
                        key={person.name}
                        preventSwipe={['up','down']}
                    >
                        <div 
                            className="card"
                            style={{backgroundImage:`url(${person.url})`}}
                        >
                            <h2>{person.name}</h2>
                        </div>

                    </TinderCard>
                        

                ))}
            </div>
        </div>
    )
}

export default TinderCards
