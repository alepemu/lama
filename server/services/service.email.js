const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lama.cw.solo@gmail.com',
    pass: 'pckjoxurjiiofjqg',
  },
});

const mailerSend = (userData) => {
  const user = {
    name: userData.name,
    email: userData.email,
  };

  const mailOptions = {
    from: '"LAMA Notifications" <lama.cw.solo@gmail.com>',
    to: user.email,
    subject: `Hey ${user.name.toUpperCase()}! Don't miss your reminders!`,
    html: `<P>Hi ${user.name}, here is your current list of reminders</p><h2>Category</h2><p>Item reminder</p><p>Item reminder</p><p>Item reminder</p>`,
  };

  async function send() {
    await transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log('Email sent: ' + info.response);
      }
    });
  }

  send();
};

module.exports = { mailerSend };

// const user = {
//   name: 'Mario',
//   email: 'lama.cw.solo@gmail.com'
// }

// const mailOptions = {
//   from: '"LAMA Notifications" <lama.cw.solo@gmail.com>',
//   to: user.email,
//   subject: `Hey ${user.name.toUpperCase()}! Don't miss your reminders!`,
//   html: `<P>Hi ${user.name}, here is your current list of reminders</p><h2>Category</h2><p>Item reminder</p><p>Item reminder</p><p>Item reminder</p><h2>Category</h2><p>Item reminder</p><p>Item reminder</p><p>Item reminder</p><h2>Category</h2><p>Item reminder</p><p>Item reminder</p><p>Item reminder</p>`,
// };

// send();

// async function send() {
//   const result = await transporter.sendMail(mailOptions, function (error, info) {
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });
// }
