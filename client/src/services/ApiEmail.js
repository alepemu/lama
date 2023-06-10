
async function sendEmail(userId) {
    // console.log(userId);
    // const response = 
    await fetch('http://localhost:3100/email/' + userId);
    // const parsedRes = await response.json()
    // console.log('response', response);  
    // console.log('parsed', parsedRes);  
    // return parsedRes;
  }
  
  module.exports = { sendEmail };
  