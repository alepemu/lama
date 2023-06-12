const BASE_URL = 'http://localhost:3100';
// const BASE_URL = 'http://192.168.0.241:3100';

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
  // console.log('parsed', parsedRes);
  return parsedRes;
}

module.exports = { loadItem, newItem, delItem, updItem };
