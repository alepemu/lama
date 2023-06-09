async function loadCat(catId) {
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

async function updateCat(catData) {
  // console.log('data', catData);
  return fetch('http://localhost:3100/category', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(catData),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

module.exports = { loadCat, newCat, delCat, updateCat };
