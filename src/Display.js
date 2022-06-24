

const Display = (props) => {

    return (

        <div>
            <p> User Id : {props.duser.userid} </p>
            <p> User Name : {props.duser.FirstName} </p>
            <p> User Role: {props.duser.lastname} </p>

              <p> City {props.city}</p>
              <p> Age : {props.age}</p>

        </div>

    )


};


export default Display;