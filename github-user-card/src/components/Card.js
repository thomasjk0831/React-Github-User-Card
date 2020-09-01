import React from 'react'

function Card(props){

    const {followers,user,userUrl} = props

    return(
        <div>
            <h1>Github Card</h1>
            <div>
              <img className="user-pic" src= {user.avatar_url} />
              <div>
                <p>{user.name}</p>
                <p>Location: {user.location}</p>
                <p>{user.html_url}</p>
                <p>{user.bio}</p>
              </div>
              
            </div>
            <div>
                <p>Followers: {user.followers}</p>
                {
                    followers.map((item)=>{
                        return (
                            <div>
                                <img src ={item.avatar_url}/>
                                <p>{item.login}</p>
                                
                                </div>
                        )
                    })
                }
            </div>
        </div>
     )
}
    

export default Card
              
              
    
    
    
        
    
        
    
    

    

