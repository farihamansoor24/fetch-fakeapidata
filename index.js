const fakeApiLink = 'https://fakestoreapi.com/products';
const dataContainer = document.getElementById('data-container');

function renderData(data) {
    data.forEach(item => {
      dataContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${item.image}" alt="${item.title}">
          <div class="card-body">
            <h5 class="card-title">${item.title.slice(0,30)}</h5>
            <p class="card-text">${item.description.slice(0, 100)}...<br><a href="#" class="btn btn-primary mt-3">Read More</a></p>
            <p class="card-text"><strong>$${item.price.toFixed(2)}</strong></p>
          </div>
        </div>
      `;
    });
}


fetch(fakeApiLink)
  .then(response => {
    if (!response.ok) {
      throw new Error(`Network response was not ok (${response.status})`);
    }
    return response.json();
  })
  .then(data => {
    console.log('API data:', data);
    renderData(data);
  })
  .catch(error => {
    console.error('Fetch error:', error);
  });