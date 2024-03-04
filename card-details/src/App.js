import React, { useState, useEffect } from "react"


interface userItem{
  page:Number
  results:Number
  seed:String
  
}
function App() {
  const [users,setUser]=useState([]);
  useEffect(()=>{
    fetch("https://randomuser.me/api/?page=1&results=1&seed=abc").then((result)=>{
      result.json().then((resp)=>{
        // console.warn(resp)
        setUser(resp)
      })
    })
  },[])
  console.warn(users)
  return (
    <div className="App" >


<section>
		<div class="main-topic">
			<div class="left-text">
      
        {
          users.map((item)=>{
            <tr>
              <td>{item.result}</td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td></td>

            </tr>
          })
        }
      <tr>{Image.picture}</tr>
			</div>
			<div class="right-picture">
        
			</div>
			<div class="clear"></div>
		</div>
	</section>

    </div>
  );
}

export default App;
