import BASE_URL from '../index'

// const BASE_URL = 'https://lama.fly.dev';
// const BASE_URL = 'http://localhost:3100';

async function sendEmail(userId) {
  await fetch(BASE_URL + '/email/' + userId);
}

export { sendEmail };
