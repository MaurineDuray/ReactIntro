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
  membre5 :{
    nom: "Napoléon",
    age: 4
  }
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
  handleClick = (id,nb) => {
    // modification du state
    // copier le state et modifier et puis setter
    const league = {...this.state.league} 
    league[id].age += nb
    this.setState({league}) // si pas le même nom format league:league
  }

  handleShow =()=>{
    const isShow = !this.state.isShow //retourne l'inverse
    this.setState({isShow})
  }

  handleChange = (event, id) =>{
    const league = {...this.state.league} //on copie la valeur avant de la changer
    const nom = event.target.value //récupère la valeur de l'input
    league[id].nom = nom
    this.setState({league:league})
  }

  hideName = (id)=>{
    const league = {...this.state.league}
    league[id].nom = "X"
    league[id].age =0
    this.setState({league})
  }
  render() { 
    // return (
    //   // ici react et jsx
    // );
    // return React.createElement('div',{className: 'App'}, React.createElement('h1', null, "React App"))

    const list = Object.keys(this.state.league).map(iteration=>{
      //map boucle dans un tableau en reconstruisant un tableau avec le return
      return (
        <Membre 
        key={iteration} 
        age={this.state.league[iteration].age} 
        nom={this.state.league[iteration].nom}
        handleChange= {(event)=>{this.handleChange(event,iteration)}} 
        hideName = {()=>this.hideName(iteration)}
        plus = {this.state.plus}
        handleClick = {()=>{this.handleClick(iteration,this.state.plus)}}/>
        //key = clé unique nécessaire pour React (voir recommandation dans la console grâce au React StrictMode)
        
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
          {/* appel du tableau et il le parcours lui même */}
          
         
        </div>
        
      </Fragment>
      
    );
  }
}
 
export default App;