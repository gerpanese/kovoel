const signIn = async (email, password) => {
  return await fetch('/auth/login', {
    method: 'POST',
    body: JSON.stringify({
      email,
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