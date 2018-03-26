const googleOauth = (googleApi, accessToken) => {
  return fetch(`${googleApi}?access_token=${accessToken}`)
  .then(response => response.json())
  .then(json => json.email);
}

const isTokenValid = email => {
  return fetch('auth/google/isTokenValid', {
    method: 'POST',
    body: JSON.stringify({
      email
    }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  })
  .then(response => response.json());
}

export {
  googleOauth,
  isTokenValid
}
