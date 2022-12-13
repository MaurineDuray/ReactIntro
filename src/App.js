import React, {Component, Fragment} from 'react';
import './App.css'
import Membre from './components/Membre';
import Button from './components/Button';

const league = {
  membre1 :{
    nom: "Batman",
    age: 46
  },
  membre2 :{
    nom: "Superman",
    age: 46
  },
  membre3 :{
    nom: "Wonder Woman",
    age: 79
  },
  membre4 :{
    nom: "Catwoman",
    age: 31
  },
}

class App extends Component {
  state = { 
    league: league,
    plus: 2,
    isShow: true
   } 

  componentDidMount(){
    console.log('montage')
  }

  componentDidUpdate(){
    console.log("Je recharge mon composant et mise à jour ")
  }

  componentWillUnmount(){
    console.log("démontage")
  }
  handleClick = (nb) => {
    // modification du state
    // copier le state et modifier et puis setter
    const league = {...this.state.league} 
    league.membre1.age += nb
    this.setState({league})
  }

  handleShow =()=>{
    const isShow = !this.state.isShow //retourne l'inverse
    this.setState({isShow})
  }

  render() { 
    // return (
    //   // ici react et jsx
    // );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, "React App"))

    const list = Object.keys(this.state.league).map(iteration=>{
      return (
        <Membre key={iteration} age={this.state.league[iteration].age} nom={this.state.league[iteration].nom} />
      )
    })
    return (
      <Fragment> 
        <div className='App'>
          <h1>React App</h1>
          <h4>{this.props.titre}</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi nesciunt minima assumenda ratione, voluptatum, quod labore distinctio, repudiandae mollitia ex aspernatur? Voluptatem ipsam similique dolores reprehenderit consectetur quae accusantium aliquam unde hic harum culpa minus ex eveniet, eos dolor ipsa quia numquam. Expedita ipsum odio debitis velit explicabo quas ad illo ex numquam nemo, error quam accusamus possimus est dolorum? Aut distinctio id cupiditate pariatur, impedit voluptatum? Dolorem quas ex accusamus libero fugit aspernatur, nihil veniam unde nam qui id magnam explicabo non voluptatum, rem quis. Sed exercitationem at ducimus dolor, inventore, quos nisi asperiores vel repellendus, dolorem autem earum.</p>
          {this.state.league.membre1.nom}
         
          {list}
          <Membre
            age={4}
            nom="Napoléon"
          >
            {this.state.isShow ? <strong>Je suis l'empereur! </strong> :null}
              <button onClick={this.handleShow}>
                {this.state.isShow? 'Cacher' : 'Montrer'}
              </button>
          </Membre>
          
          <Button 
            plus = {this.state.plus}
            vieillir = {()=>this.handleClick(this.state.plus)}
           
          />
         
        </div>
        
      </Fragment>
      
    );
  }
}
 
export default App;