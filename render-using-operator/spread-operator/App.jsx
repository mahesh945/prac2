import React, {useState} from "react";

function App() {
    const [contact, setContact] = useState({
        fname:"",
        lname:"",
        email:""
    });

function handleChange(event){
    const {name, value} = event.target;

    setContact(preValue => {
        return {
            ...preValue,
            [name]:value
        };
    });

}

    return (
        <div className="container">
            <h1>
                Hello {contact.fname} {contact.lname}
            </h1>
            <p>
                {contact.email}
            </p>
            <form>
            <input onChange = {handleChange} name="fname" value={contact.fname} placeholder="First Name" />
            <input onChange = {handleChange} name="lname" value={contact.lname} placeholder="Last Name" />
            <input onChange = {handleChange} name="email" value={contact.email} placeholder="Email" />
            <button>Submit</button>
            </form>
            

        </div>
    );
} 

export default App;