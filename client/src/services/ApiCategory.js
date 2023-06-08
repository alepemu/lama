async function loadCat(catId) {
  console.log('catId en api', typeof catId, catId);
  const response = await fetch('http://localhost:3100/category/' + catId);
  const category = await response.json();
  return category;
}

async function newCat(catData) {
  const response = await fetch('http://localhost:3100/category', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(catData),
  });
  const newCategory = await response.json();
  return newCategory;
}

async function delCat(catData) {
  const response = await fetch('http://localhost:3100/category', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(catData),
  });
  const deletedCategory = await response.json();
  return deletedCategory;
}

module.exports = { loadCat, newCat, delCat };
