import BASE_URL from '../index'

// const BASE_URL = 'https://lama.fly.dev';
// const BASE_URL = 'http://localhost:3100';

async function AIchat(chats) {
  const response = await fetch(BASE_URL + '/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chats }),
  });
  const data = await response.json();
  return data.output;
}

export { AIchat };
