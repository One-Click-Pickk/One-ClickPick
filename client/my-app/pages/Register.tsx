import axios from 'axios'
import React, { useState } from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
function Register() {
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const routes = useRouter()
    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        try {
            const response = await axios.post("http://localhost:8080/Signup", { name, email, password })
            console.log(response);
         await   routes.push('/')
        } 
        catch (error) {
            console.log(error);
        }
    }
    return (
        
            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name}
                    onChange={(e) => setName(e.target.value)}/>
                </label>
                <label>
                    Email:
                    <input
                        type="text"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input
                        type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
          />
                </label>
                <button type="submit">Login</button>
        </form>
        
      
    )
}
export default Register

