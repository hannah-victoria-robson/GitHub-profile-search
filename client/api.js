import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getUser() {
  return request.get(`${serverURL}/user`).then((response) => response.body)
}
// ***   ***   ***
