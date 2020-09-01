import React from 'react'

function Card(props){

    const {followers,user,userUrl} = props

    return(
        <div>
            <h1>Github Profile</h1>
            <div className="user-container">
              <img className="user-pic" src= {user.avatar_url} />
              <div className="user-info">
                <p>{user.name}</p>
                <p>Location: {user.location}</p>
                <p>{user.html_url}</p>
                <p>{user.bio}</p>
              </div>
              
            </div>
            <div className="followers-container">

                <h3>Followers: {user.followers}</h3>
                <div className="followers">
                {
                    followers.map((item)=>{
                        return (
                            <div className="follower-card">
                                <img src ={item.avatar_url} width="200px" height="200px"/>
                                <p>{item.login}</p>
                                
                                </div>
                        )
                    })
                }
                </div>
                
            </div>
        </div>
     )
}
    

export default Card
              
              
    
    
    
        
    
        
    
    

    

