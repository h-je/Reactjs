import React, { useEffect, useState } from "react";

function Login() {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    useEffect(() => {
      if (localStorage.getItem('userInfo')) {
      }  
    }, [])

    async function login(){
        console.warn(username,password)
        let item = {username, password};
        let result = await fetch("http://localhost:8080/api/login",
        {
            method:'POST',
            headers: {
                "Content-Type":"application/json",
                "Accept" : 'application/json'
            },
            body:JSON.stringify(item)
        });
        result = await result.json()
        localStorage.setItem("userInfo",JSON.stringify(result))
    }
    return (
        <div>
            <h1>Login Page</h1>
            <div className="col-sm-6 offset-sm-3">
                <input type="text" placeholder="username"
                onChange={(e) => setUsername(e.target.value) }
                className="form-control" />
                <br/>
                <input type="password" placeholder="password"
                onChange={(e) => setPassword(e.target.value) }
                className="form-control" />
                <br/>
                <button onClick={login} className="btn btn-primary">Login</button>
            </div>

        </div>
    );
}
export default Login