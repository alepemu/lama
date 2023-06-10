const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lama.cw.solo@gmail.com',
    pass: 'pckjoxurjiiofjqg',
  },
});

const mailerSend = (userData) => {
  const userContent = [];

  userData.categories.forEach((cat) => {
    let items = [];
    cat.items.forEach((item) => {
      items.push(`<li>${item.title}</li>`);
    });

    userContent.push(`<h3>Category: ${cat.name}</h3><ul>${items.join('')}</ul>`);
  });

  const htmlContent = `
<P>Hi ${userData.name}, this is your current list of reminders:</p>
${userContent.join('')}
`;

  const mailOptions = {
    from: '"LAMA🦙 Notifications" <lama.cw.solo@gmail.com>',
    to: userData.email,
    subject: `Hey ${userData.name.toUpperCase()}! Don't miss your reminders! 🦙🦙🦙`,
    html: htmlContent,
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
