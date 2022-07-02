import React from "react";
import { useEffect, useState } from "react";
import './Home.css'

function Home () {

    const [names, setNames] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/api/names')
        .then(res => res.json())
        .then(jsonResponse => setNames(jsonResponse.names))
    }, []);

   //submit title a la api
    const handleSubmit = (event) => {
        event.preventDefault();
        const title = event.target.elements.title.value;
        fetch('http://localhost:5000/api/names', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({title})
        })
        .then(res => res.json())
        .then(jsonResponse => setNames(names.concat(jsonResponse.name)))
    }



        
    return(
        <div> 
            <main>
            <h2>Ajouter un(e) Argonaute</h2>
            <form onSubmit={handleSubmit} class="new-member-form">
                
                <label for="name">Nom de l&apos;Argonaute</label>
                <input id="title" name="title" type="text" placeholder="Charalampos" />
                <button type="submit">Envoyer</button>
            </form>
            <h2>Membres de l'équipage</h2>
            <section class="member-list">
                <div id="col" class="member-item">
                <ul>
                {names.map(name => (
                    <li key={name._id}>{name.title}</li>
                ))}
                </ul>
                </div>
            </section>
            </main>
        </div>
    )
}

export default Home;