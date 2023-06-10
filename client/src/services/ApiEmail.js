async function sendEmail(userId) {
  await fetch('http://localhost:3100/email/' + userId);
}

module.exports = { sendEmail };
