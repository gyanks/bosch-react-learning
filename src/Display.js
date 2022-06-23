

const Display = (props) => {

    return (

        <div>
            <p> User Id : {props.duser.userId} </p>
            <p> User Name : {props.duser.userName} </p>
            <p> User Role: {props.duser.role} </p>



        </div>

    )


};


export default Display;