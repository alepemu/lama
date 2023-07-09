# LAMA (Life Admin Management Advisor)

Lama is your personal reminder app (or llama) that notifies you with the important stuff that you need to be reminded of. You will not miss again your yearly dentist visit, finish your household obligations or cancel your subscriptions services before they charge you an unnecessary extra month!

You can add items inside of pools and optionally set a date if you want to be notified. A notification will arrive by email when it's due. If you want, you can also receive all your current lists full of items in a single email by clicking a button or set this up to happen every a certain amount of weeks.

As an extra feature a lama chatbot has been included to help answering any day to day life admin question users might have.

<img src="https://res.cloudinary.com/dpzz6vn2w/image/upload/v1688746437/Screenshot_2023-07-07_at_18.13.46_ease3i.png" alt="Llama staring at you" width="500"/>

## Getting started

In order to successfully run the app, you will need to:
  - Have MongoDB installed on your machine.
  - Run `$ npm install` from both /server and /client folders in order to install the required dependencies.

Optionally, include an `.env` file in /server with:
- An alternative `SERVER_PORT` and database `DB_PORT` / `DB_NAME`.
- For the OpenAI chat to work, include an `OPENAI_ORG` and `OPENAI_KEY`.
- To enable emails, add a sender `LAMA_EMAIL` and `LAMA_PW`.  
*(Make sure it has the right third party apps permission enabled)*

Once everything is set up, you can start the app by running  `$ npm run server` in /server and `$ npm start` in /client.

## Tech stack

<img src="https://res.cloudinary.com/dpzz6vn2w/image/upload/v1688745965/Screenshot_2023-07-07_at_18.05.32_ifrcpy.png" alt="LAMA Stack" width="600"/>

<u>Back End:</u> NodeJS, Koa, MongoDB and Mongoose  
<u>Front End:</u> ReactJS with Material UI  
<u>Libraries:</u> OpenAI, DayJS, Nodemailer and node-cron

## Screenshots

<img src="https://res.cloudinary.com/dpzz6vn2w/image/upload/v1688923705/Screenshot_2023-07-09_191741_rtq7o0.jpg" alt="LAMA screenshot 1" width="600"/>

<img src="https://res.cloudinary.com/dpzz6vn2w/image/upload/v1688923705/Screenshot_2023-07-09_191811_ylqujd.jpg" alt="LAMA screenshot 2" width="600"/>

<img src="https://res.cloudinary.com/dpzz6vn2w/image/upload/v1688923705/Screenshot_2023-07-09_192051_esyca2.jpg" alt="LAMA screenshot 2" width="600"/>

<img src="https://res.cloudinary.com/dpzz6vn2w/image/upload/v1688923705/Screenshot_2023-07-09_192600_f0edg0.jpg" alt="LAMA screenshot 2" width="600"/>

## Comments and support

Please feel free to reach out if you would like to contribute or suggest changes or improvements.
