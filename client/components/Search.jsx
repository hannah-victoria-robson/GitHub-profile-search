import React from 'react'

function Search() {
  const [user, setUser] = useState('')
  const [input, setInput] = useState('')

  const handleInputChange = (event) => {
    setInput(event.target.value)
  }

  const handleClick = (event) => {
    event.preventDefault()
    setUser(input)
    console.log(input)
  }

  // useEffect((){})
  return (
    <>
      <h1>Github user search</h1>
      <p>
        Look up the github profile details of any user by entering their
        username into the search bar below and pressing the submit button.
      </p>
      <input
        type="text"
        id="message"
        name="message"
        onChange={handleInputChange}
        value={input}
      />
      <button onClick={handleClick}>Submit Username</button>
    </>
  )
}

export default Search
