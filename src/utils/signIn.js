const signIn = async (username, password) => {
  return await fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      username,
      password
    }),
    headers: new Headers({
      'Content-Type': 'application/json',
      Accept: 'application/json',
    })
  });
}

export { 
  signIn 
};