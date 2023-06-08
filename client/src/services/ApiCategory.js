async function loadCat(catId) {
  const response = await fetch('http://localhost:3100/getcategory', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ _id: catId }),
  });
  const category = await response.json();
  return category;
}

module.exports = { loadCat };
