const createUser = async (firstname, lastname, email, password) => {
  return await fetch('/auth/register', {
    method: 'POST',
    body: JSON.stringify({
      name: firstname + ' ' + lastname,
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
  createUser 
};