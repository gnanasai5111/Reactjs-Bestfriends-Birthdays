import React, { useState } from "react";
import Friend from "./components/Friends";
import friends from "./friend";

function App() {
  var [friend,clear]=useState(friends);

  
  return (
    <>
      <h2 style={{margin:"20px 0"}}>Best Friends</h2>
      <div className="container">
        {friends.map((friend) => {
          return (
            <Friend
              key={friend.id}
              name={friend.name}
              img={friend.img}
              age={friend.age}
              birthday={friend.birthday}
            />
          );
        })}
        <button onClick={()=> clear(friend.splice(0,friend.length))} className="button">Clear All</button>
      </div>
      
    </>
  );
}

export default App;
