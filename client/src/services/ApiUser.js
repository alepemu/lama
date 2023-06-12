const BASE_URL = 'http://localhost:3100';
// const BASE_URL = 'http://192.168.0.241:3100';

async function loadUser(userId) {
  const response = await fetch(BASE_URL + '/user/' + userId);
  const user = await response.json();
  const res = user === {} ? 'No data' : user;
  return res;
}

async function createUser(userData) {
  const response = await fetch(BASE_URL + '/register', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });
  const user = await response.json();
  return user;
}

async function logUser(userData) {
  const response = await fetch(BASE_URL + '/login', {
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
