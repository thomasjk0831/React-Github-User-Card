import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import './App.css';

  

class App extends React.Component{
  constructor(){
    super();
    this.state = {
       followers : [],
       user : {},
       userInput: '',
       userUrl: 'thomasjk0831'
    }
    
  }

  componentDidMount(){
      axios.get(`https://api.github.com/users/${this.state.userUrl}`)
      .then((response)=>{
        this.setState({ ...this.state,
          user : response.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })

      
        axios.get(`https://api.github.com/users/${this.state.userUrl}/followers`)
        .then((response)=>{
           console.log(response.data)
            this.setState({
              ...this.state,
              followers : response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
      
      
  }

  componentDidUpdate(prevProps, prevState){
    if(prevState.userUrl !== this.state.userUrl){
      axios.get(`https://api.github.com/users/${this.state.userUrl}`)
      .then((response)=>{
        this.setState({ ...this.state,
          user : response.data
        })
      })
      .catch((err)=>{
        console.log(err)
      })

      
        axios.get(`https://api.github.com/users/${this.state.userUrl}/followers`)
        .then((response)=>{
           console.log(response.data)
            this.setState({
              ...this.state,
              followers : response.data
            })
        })
        .catch((err)=>{
            console.log(err)
        })
    }

  }

  
  updateInput= (input)=>{
    this.setState({
      ...this.state, 
      userInput : input
    })
  }

  updateUrl = () => {

    
     this.setState({
       ...this.state,
       userUrl : this.state.userInput,
       userInput: '',
       
     })
     
  }
    
     
     
     

  

  render(){
    return(
      <>
        <Card 
          followers={this.state.followers}
           user={this.state.user} 
           userInput = {this.state.userInput}
           userUrl={this.state.userUrl}
           updateInput={this.updateInput}
           updateUrl = {this.updateUrl}
           />
      </>
    )
  }
}

export default App;
