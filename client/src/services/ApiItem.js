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

// async function updItem(itemData) {
//   return fetch('http://localhost:3100/item', {
//     method: 'PUT',
//     headers: { 'Content-Type': 'application/json' },
//     body: JSON.stringify(itemData),
//   })
//     .then((res) => res.json())
//     .catch((err) => console.log(err));
// }

async function updItem(itemData) {
  const response = await fetch('http://localhost:3100/item', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(itemData),
  });
  const parsedRes = await response.json()
  // console.log('parsed', parsedRes);  
  return parsedRes;
}

module.exports = { loadItem, newItem, delItem, updItem };
