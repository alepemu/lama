async function AIchat(chats) {
  const response = await fetch('http://localhost:3100/chat', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ chats }),
  });
  const data = await response.json();
  return data.output;
}

module.exports = { AIchat };
