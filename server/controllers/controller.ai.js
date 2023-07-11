'use strict';

const { openai } = require('../services/service.ai');

exports.sendMessage = async (ctx) => {
  try {
    const { chats } = ctx.request.body;
    console.log('chats', chats);
    const result = await openai.createChatCompletion({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content:
            'You can help with life admin management tasks and should send very short messages',
        },
        ...chats,
      ],
    });

    ctx.body = {
      output: result.data.choices[0].message,
    };
    ctx.status = 202;
  } catch (error) {
    console.log(error.message);
    ctx.body = { output: { role: 'Error', content: 'Sorry, Lama AI-Bot has been temporary disabled' } };
    ctx.status = 500;
  }
};
