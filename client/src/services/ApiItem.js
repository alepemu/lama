const BASE_URL = 'https://lama.fly.dev';

async function loadItem(itemId) {
  const response = await fetch(BASE_URL + '/item/' + itemId);
  const item = await response.json();
  return item;
}

async function newItem(itemData) {
  const response = await fetch(BASE_URL + '/item', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const newItem = await response.json();
  return newItem;
}

async function delItem(itemData) {
  const response = await fetch(BASE_URL + '/item', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const deletedItem = await response.json();
  return deletedItem;
}

async function updItem(itemData) {
  const response = await fetch(BASE_URL + '/item', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const parsedRes = await response.json();
  return parsedRes;
}

export { loadItem, newItem, delItem, updItem };
