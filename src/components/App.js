import React, { Component } from 'react';
import Projects from './Projects';
import SocialProfiles from './SocialProfiles';
import profile from '../assets/profile.png'
import Title from './Title';
import Jokes from './Jokes';


class App extends Component {
    state = {displayBio : false};
    // constructor(){
    //     super();
    //     this.state = {displayBio : false};
    //     console.log("Component this", this);

    //     this.toggleDisplayBio =  this.toggleDisplayBio.bind(this);
    // }

    toggleDisplayBio = () => {
        this.setState({displayBio: !this.state.displayBio});
    }
    // toggleDisplayBio(){
    //     this.setState({displayBio: !this.state.displayBio});
    // }
    render() {        return (
        <div>
            <img src={profile} alt='profile' className='profile'/>
                <h1>Hello!</h1>
                <p>My name is Nick</p>
                <Title/>
                <p>I'm always looking forward to projects!</p>
   
           {
           this.state.displayBio ? ( 
            <div>
                <p>I live in DC Metro</p>
                <p>My favorite language is anything</p>
                <p>Besides this, I love rollercoasters!</p>
                <button onClick={this.toggleDisplayBio}>Show less</button>
            </div>) : (
                <div>
                    <button onClick={this.toggleDisplayBio}>Read more</button>
                </div>
            )
           }
           <hr/>
           <div>
           <Projects/>
            </div>
            <hr/>
            <div>
           <SocialProfiles/>
            </div>
          </div>
        )
    }
}



export default App;