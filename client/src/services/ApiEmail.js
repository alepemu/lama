import BASE_URL from '../index'

async function sendEmail(userId) {
  await fetch(BASE_URL + '/email/' + userId);
}

export { sendEmail };
