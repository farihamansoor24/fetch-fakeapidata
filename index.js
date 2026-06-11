//const fakeApiLink = 'https://fakestoreapi.com/products';
const products = [
  {
    id: 1,
    name: "Laptop",
    category: "Electronics",
    price: 80000,
    image: "./images/laptop.jpeg"
  },
  {
    id: 2,
    name: "Smartphone",
    category: "Electronics",
    price: 50000,
    image: "./images/smartphone.webp"
  },
  {
    id: 3,
    name: "Headphones",
    category: "Electronics",
    price: 5000,
    image: "./images/headphone.jpeg"
  },
  {
    id: 4,
    name: "Smart Watch",
    category: "Electronics",
    price: 12000,
    image: "./images/smartwatch.jpg"
  },
  {
    id: 5,
    name: "T-Shirt",
    category: "Clothing",
    price: 1500,
    image: "./images/tshirt.jpeg"
  },
  {
    id: 6,
    name: "Jeans",
    category: "Clothing",
    price: 2500,
    image: "./images/jeans.jpg"
  },
  {
    id: 7,
    name: "Jacket",
    category: "Clothing",
    price: 4500,
    image: "./images/jacket.jpg"
  },
  {
    id: 8,
    name: "Sneakers",
    category: "Footwear",
    price: 6000,
    image: "./images/sneakers.jpg"
  },
  {
    id: 9,
    name: "Running Shoes",
    category: "Footwear",
    price: 5500,
    image: "./images/running_shoes.jpeg"
  },
  {
    id: 10,
    name: "Sandals",
    category: "Footwear",
    price: 2000,
    image: "./images/sandal.jpg"
  },
  {
    id: 11,
    name: "Backpack",
    category: "Accessories",
    price: 3000,
    image: "./images/backpack.jpeg"
  },
  {
    id: 12,
    name: "Handbag",
    category: "Accessories",
    price: 3500,
    image: "./images/handbag.jpeg"
  },
  {
    id: 13,
    name: "Sunglasses",
    category: "Accessories",
    price: 1800,
    image: "./images/sunglasses.jpeg"
  },
  {
    id: 14,
    name: "Water Bottle",
    category: "Home",
    price: 800,
    image: "./images/water_bottle.jpg"
  },
  {
    id: 15,
    name: "Coffee Mug",
    category: "Home",
    price: 600,
    image: "./images/coffee_mug.jpeg"
  },
  {
    id: 16,
    name: "Table Lamp",
    category: "Home",
    price: 2200,
    image: "./images/table_lamp.jpeg"
  },
  {
    id: 17,
    name: "Book",
    category: "Books",
    price: 700,
    image: "./images/book.jpeg"
  },
  {
    id: 18,
    name: "Notebook",
    category: "Books",
    price: 300,
    image: "./images/notebook.jpeg"
  },
  {
    id: 19,
    name: "Gaming Mouse",
    category: "Electronics",
    price: 2500,
    image: "./images/gaming-mouse.jpeg"
  },
  {
    id: 20,
    name: "Keyboard",
    category: "Electronics",
    price: 3500,
    image: "./images/keyboard.jpeg"
  }
];
const dataContainer = document.getElementById('data-container');

function showAllProducts(data) {
    data.forEach(item => {
      dataContainer.innerHTML += `
        <div class="card" style="width: 18rem;">
          <img class="card-img-top" src="${item.image}" alt="${item.name}">
          <div class="card-body">
            <h5 class="card-title">${item.category}</h5>
            <p class="card-text"><strong>${item.name}</strong></p>
            <p class="card-text"><strong>$ ${item.price}</strong></p>
          </div>
        </div>
      `;
    });
}

showAllProducts(products);

function searchItems(itemName){
    const filteredProducts = products.filter(product => 
      product.name.toLowerCase().includes(itemName.toLowerCase()) || 
      product.category.toLowerCase().includes(itemName.toLowerCase())
    );
    dataContainer.innerHTML = '';
    showAllProducts(filteredProducts);
}
// fetch(fakeApiLink)
//   .then(response => {
//     return response.json();
//   })
//   .then(data => {
//     console.log('API data:', data);
//     renderData(data);
//   })
//   .catch(error => {
//     console.error('Fetch error:', error);
//   });