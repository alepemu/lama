async function loadItem(itemId) {
  const response = await fetch('http://localhost:3100/item/' + itemId);
  const item = await response.json();
  return item;
}

async function newItem(itemData) {
  const response = await fetch('http://localhost:3100/item', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const newItem = await response.json();
  return newItem;
}

async function delItem(itemData) {
  const response = await fetch('http://localhost:3100/item', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const deletedItem = await response.json();
  return deletedItem;
}

module.exports = { loadItem, newItem, delItem };
