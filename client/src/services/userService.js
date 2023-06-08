async function createUserApi(userData) {
  const response = await fetch('http://localhost:3100/user', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
  });

  const user = await response.text();
  const parsedUser = JSON.parse(user);
  console.log(parsedUser);
  //   return parsedUser
}

module.exports = { createUserApi };
