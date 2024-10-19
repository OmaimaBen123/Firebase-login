import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");

   const handleSubmit = async(e) => {
     e.preventDefault();
       try {
           await createUserWithEmailAndPassword(auth, email, password);
           const user = auth.currentUser;
         console.log(user);
         console.log('user registered successfully!!!')
       }
       catch (error) {
           console.log(error.message)
       }
   };

  return <form onSubmit={handleSubmit}>
      <div>
        <h2>Sign Up</h2>
        <label>First Name:</label>
        <input type="text" value={fname} onChange={e => setFname(e.target.value)} placeholder="Enter your first name" />
      </div>
      <div>
        <label>Last Name:</label>
        <input type="text" value={lname} onChange={e => setLname(e.target.value)} placeholder="Enter your last name" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Enter your email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Enter your password" />
      </div>
      <button type="submit">Register</button>
    </form>;
};

export default Register;
