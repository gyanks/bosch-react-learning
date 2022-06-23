import logo from './logo.svg';
import Display from './Display';


import './App.css';

function App() {

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


 

  return (
    <div className="App">
      <header >
        Wow Smart
      </header>
      {
        usersData.map(user => 
          
          <Display duser={user}> </Display> )

         

      }



    </div>
  );
}

export default App;
