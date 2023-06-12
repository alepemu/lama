const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'lama.cw.solo@gmail.com',
    pass: 'pckjoxurjiiofjqg',
  },
});

const mailAll = (userData) => {
  const userContent = [];

  userData.categories.forEach((cat) => {
    let items = [];
    cat.items.forEach((item) => {
      items.push(`<li>${item.title}</li>`);
    });

    userContent.push(`<h3>Category: ${cat.name}</h3><ul>${items.join('')}</ul>`);
  });

  const htmlContent = `
<p>Hi ${userData.name}, this is your current list of reminders:</p>
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

  console.log('ready to send');
  // send();
};

const mailItem = (itemData) => {
  console.log('itemData', itemData);

  const mailOptions = {
    from: '"LAMA🦙 Notifications" <lama.cw.solo@gmail.com>',
    to: itemData.email,
    subject: `${itemData.name.toUpperCase()}! 🦙🦙🦙 ${itemData.title}`,
    html: `<p>Hi ${itemData.name}, you programmed a reminder for:</p><h3>${itemData.title}</h3><p>"${itemData.start_date}"</p>`,
  };

  async function send() {
    try {
      await transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  console.log('ready to send');
  send();
};

module.exports = { mailAll, mailItem };
