import React, { useState } from 'react'

import UserProfile from './UserProfile'

function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState([])
  const validUser = []

  const handleInputChange = (event) => {
    const message = event.target.value
    setInput(message)
  }

  const handleClick = (event) => {
    event.preventDefault()
    const user = input
    checkUsername(user)
  }

  function checkUsername(user) {
    const userName = user
    setData([])
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => {
        if (!response.ok) throw new Error(response.status)
        else return response.json()
      })
      .then((data) => {
        setData(data)
      })
      .catch((error) => {
        console.log('error: ' + error)
      })
  }

  return (
    <>
      <h1>Github user search</h1>
      <p>
        Look up the github profile details of any user by entering their
        username into the search bar below and pressing the submit button.
      </p>
      <form>
        <input
          type="text"
          id="message"
          name="message"
          onChange={handleInputChange}
          value={input}
        />
        <button onClick={handleClick}>Submit Username</button>
      </form>
      <UserProfile data={data} />
    </>
  )
}

export default App
