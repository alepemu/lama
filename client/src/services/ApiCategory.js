const BASE_URL = 'http://localhost:3100';
// const BASE_URL = 'http://192.168.0.241:3100';

async function loadCat(catId) {
  const response = await fetch(BASE_URL + '/category/' + catId);
  const category = await response.json();
  return category;
}

async function newCat(catData) {
  const response = await fetch(BASE_URL + '/category', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(catData),
  });
  const newCategory = await response.json();
  return newCategory;
}

async function delCat(catData) {
  const response = await fetch(BASE_URL + '/category', {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(catData),
  });
  const deletedCategory = await response.json();
  return deletedCategory;
}

async function updateCat(catData) {
  return fetch(BASE_URL + '/category', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(catData),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
}

module.exports = { loadCat, newCat, delCat, updateCat };
