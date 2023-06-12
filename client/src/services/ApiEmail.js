const BASE_URL = 'http://localhost:3100';
// const BASE_URL = 'http://192.168.0.241:3100';

async function sendEmail(userId) {
  await fetch(BASE_URL + '/email/' + userId);
}

module.exports = { sendEmail };
