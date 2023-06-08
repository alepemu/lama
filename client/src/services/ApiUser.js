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

  const user = await response.text();
  const parsedUser = JSON.parse(user);
  // console.log(parsedUser);
  //   return parsedUser
}

module.exports = { loadUser, createUser };
