async function loadUser(userId) {
  const response = await fetch('http://localhost:3100/user/' + userId);
  const user = await response.json();
  return user;
}

async function createUser(userData) {
  const response = await fetch('http://localhost:3100/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  // const user = await response.json();
  // console.log(user);
}

async function logUser(userData) {
  const response = await fetch('http://localhost:3100/login', {
    method: 'POST',
    credentials: 'include',
    mode: 'cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  const user = await response.json();
  return user;
}

module.exports = { loadUser, createUser, logUser };
