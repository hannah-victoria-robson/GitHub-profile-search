import React from 'react'

function UserProfile({ data }) {
  const avatar = data.avatar_url
  const username = data.login
  const followers = data.followers
  const repos = data.public_repos
  const profileLink = data.html_url

  return (
    <>
      <h3>Search results for username: {username}</h3>
      <img alt="Avatar for user" src={`${avatar}`}></img>
      <p>Username: {username}</p>
      <p>Followers: {followers}</p>
      <p>Number of public repos: {repos}</p>
      <p>
        <a href={`${profileLink}`}>Link to profile on github</a>
      </p>
    </>
  )
}

export default UserProfile
