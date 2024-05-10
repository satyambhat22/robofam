import React from 'react';


const Card = ({name,username,email,id}) => {
  return (
    <div className = "bg-light-green dib b3 pa3 ma2 grow bw2 shadow-5">
    <img alt = 'robots' src = {`https://www.robohash.org/${id}`} />
  
    <div className = 'tc'>
     <h1 > {name} </h1>
     <p> {username} </p>
     <p> {email} </p>
     
  </div>
    </div>


    )

 
}

export default Card;