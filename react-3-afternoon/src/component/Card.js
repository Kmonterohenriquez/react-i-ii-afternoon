import React, { Component } from 'react'
import '../css/Card.css'

class Card extends Component {
    state = {  }
    render() {
        const person = this.props.person;
        
        return (
            <div className='Card-container '>
                <div className='content sm-container'>
        <p className='counter'>{this.props.curr+1}/{this.props.people.length}</p>
                    <h1 className='name'>{person.name.first} {person.name.last}</h1>
                    <p className='from'><strong>From:</strong> {person.city}, {person.country}</p>
                    <p className='job_title'><strong>Job Title:</strong> {person.title}</p>
                    <p className='employer'><strong>Employer:</strong> {person.employer}</p>
                    <p><strong>Favorite Movies:</strong></p>
        {person.favoriteMovies.map((movie, i)=><li key={i}>{i+1}.   {movie}</li>)}
                </div>
            </div>
        );
    }
}

export default Card;