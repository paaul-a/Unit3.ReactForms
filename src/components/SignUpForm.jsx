import { useState } from "react"

let API = 'https://fsa-jwt-practice.herokuapp.com/signup/'


function SignUpForm() {

  const [ username, setUsername ] = useState("")
  const [ password, setPassword ] = useState("")
  const [ error, setError ] = useState(null)
  
  async function handleSubmit(event){
    event.preventDefault()
    try {
      const response = await fetch (API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          username,
          password,
        })
        
      })

      const json = await response.json();
      console.log(json);
      // setToken(json.token)

    } catch(err) {
      setError(error.message)
    }

  }
 




  return (<>

    <h2>Sign Up</h2>
    {error && <p>{error}</p>}

    <form onSubmit={handleSubmit}>
      <label> Username: <input type='text' value={username} onChange={(event) => setUsername(event.target.value)}/>
      </label>

      <label>Password: <input type='text' value={password} onChange={(event) => setPassword(event.target.value)}/>
      </label>

      <button type='submit'>Submit</button>
    </form>

    </>)  

}

export default SignUpForm