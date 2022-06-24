import { useState, useEffect } from 'react';


import Display from './Display';


import './App.css';



function App() {
         

  const [usersData, setUsersData] = useState();
  /*
  const usersData = [

    {
      "userId": "Rakesh.Ranjan@in.bosch.com",
      "userName": "Rakesh Ranjan",
      "role": "admin"

    },

    {
      "userId": "Aditya@in.bosch.com",
      "userName": "Ranjan",
      "role": "admin"

    },
    {
      "userId": "Ranjan@in.bosch.com",
      "userName": "Rakesh Ranjan",
      "role": "user"

    }

  ];
  */
 
  

  const loadData = () => {
    fetch("https://5w3a2f7pqh.execute-api.ap-southeast-1.amazonaws.com/dev/getusers")
      .then(response => response.json())
      .then(data => {

        alert(JSON.stringify(data.body));
        setUsersData(data.body)
      }

      )
  }
  useEffect(loadData,[]);

  return (
    <div className="App">
      <header >
        Wow Smart
      </header>


      {usersData.map(user =>

        <Display duser={user} age="47" city="noida"> </Display>)



      }



    </div>
  );
}

export default App;
