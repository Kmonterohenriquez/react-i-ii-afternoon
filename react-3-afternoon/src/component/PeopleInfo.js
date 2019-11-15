import React, { Component } from 'react'
import data from './data'
import Card from './Card'
import '../css/PersonInfo.css'

class PeopleInfo extends Component {
    state = {
        people: data,
        i: 0,
     }

     handleClick = (e) => {
        if (e.target.name === 'next') {
          this.setState({
            i: this.state.i + 1
          })
        } else {
          this.setState({
            i: this.state.i - 1
          })
        }
      }

    render() {
        const people = this.state.people;
        console.log(people);
        var i= this.state.i;
        var disabledPrev= i ===0? true:false;
        var disabledNext= i <= people.length-2? false: true;
        console.log('people length is: ',people.length)

        return (
            <div className='container'>
                {/* {people[0].title} */}
                <Card curr={this.state.i} person={people[this.state.i]} index={this.state.i} people={this.state.people}/>
                <div className='btn-container'>
                    <button disabled={disabledPrev} name='previous' onClick={this.handleClick}><i className="fas fa-angle-left"></i>Previous</button>
                    <div className='center-btn'>
                        <button name='edit' >Edit</button>
                        <button name='delete'> Delete</button>
                        <button   name='new'> New</button>
                    </div>
                    <button disabled={disabledNext}  name='next' onClick={this.handleClick}>Next<i className="fas fa-chevron-right"></i></button>
                </div>
            </div>
        );
    }
}

export default PeopleInfo;