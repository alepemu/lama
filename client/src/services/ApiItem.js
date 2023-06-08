async function loadItem(itemId) {
  const response = await fetch('http://localhost:3100/item/' + itemId);
  const item = await response.json();
  return item;
}

module.exports = { loadItem };
