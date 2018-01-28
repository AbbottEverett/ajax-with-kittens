function getAllCats() {
  axios.get('http://localhost:3000/cats')
    .then(result => {
      const cats = result.data.data
      const items = cats.reduce((acc, cat) => acc + `<li>${cat.name}</li>`, '')
      document.querySelector('ul').innerHTML = items
    })
    .catch(err => {
      console.log('Do not worry, everything is fine.')
    });
}

function createCat(text){
  axios.post('http://localhost:3000/cats', { name: text })
    .then((data) => {
      getAllCats();
    });
}

const createButton = document.getElementById('posts-create');
const input = document.getElementById('new-cat-input');
const form = document.getElementById('new-cat-form');

createButton.addEventListener('click', (e) => {
  e.preventDefault();
  input.style.display = "initial";
});

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const val = input.value;
  input.value = '';
  input.style.display = "none";
  createCat(val);
});
