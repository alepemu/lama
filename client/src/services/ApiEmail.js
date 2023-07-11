const BASE_URL = 'https://lama.fly.dev';

async function sendEmail(userId) {
  await fetch(BASE_URL + '/email/' + userId);
}

export { sendEmail };
