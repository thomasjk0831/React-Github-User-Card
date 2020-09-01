import React from 'react';
import axios from 'axios';
import Card from './components/Card'
import './App.css';
import {gitUser, gitFollowers} from './tempData'

  

class App extends React.Component{
  constructor(){
    super();
    this.state = {
       followers : gitFollowers,//[],
       user : gitUser,//{},
       userUrl: 'thomasjk0831'
    }
    
  }

  // componentDidMount(){
  //     axios.get(`https://api.github.com/users/${this.state.userUrl}`)
  //     .then((response)=>{
  //       this.setState({ ...this.state,
  //         user : response.data
  //       })
  //     })
  //     .catch((err)=>{
  //       console.log(err)
  //     })

      
  //       axios.get(`https://api.github.com/users/${this.state.userUrl}/followers`)
  //       .then((response)=>{
  //          console.log(response.data)
  //           this.setState({
  //             ...this.state,
  //             followers : response.data
  //           })
  //       })
  //       .catch((err)=>{
  //           console.log(err)
  //       })
      
      
  // }

  render(){
    return(
      <>
        <Card 
          followers={this.state.followers}
           user={this.state.user} 
           userUrl={this.state.userUrl}/>
      </>
    )
  }
}

export default App;
