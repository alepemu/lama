async function loadItem(itemId) {
  const response = await fetch('http://localhost:3100/getitem', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id: itemId }),
  });
  const item = await response.json();
  return item;
}

module.exports = { loadItem };
