import React from 'react'

function Card(props){

    const {followers,user,userInput, userUrl,updateInput, updateUrl} = props

    function inputHandler(e){
        updateInput(e.target.value)
    }

    function submitHandler(e){
        e.preventDefault()
        updateUrl()
    }

    return(
        <div className="main-container">
            <h1>Github Profile</h1>
            <form onSubmit={submitHandler}>
                <label>
                    <input
                      type="text"
                      name="userUrl"
                      value={userInput}
                      onChange={inputHandler}
                      placeholder="Enter Github user"></input>
                </label>
                <button>submit</button>
            </form>
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
              
              
    
    
    
        
    
        
    
    

    

