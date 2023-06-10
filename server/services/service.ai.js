'use strict';

const { Configuration, OpenAIApi } = require('openai');

const configuration = new Configuration({
  organization: 'org-G728DbIVH5tN4LLocwJTyQGd',
  apiKey: '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',
});

const openai = new OpenAIApi(configuration);

module.exports = { openai };
