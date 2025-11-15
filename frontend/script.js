fetch("http://localhost:5000/api/products")
  .then(res => res.json())
  .then(data => {
    const featured = document.getElementById("featured-products");
    featured.innerHTML = data.map(p => `
      <div class="product-card">
        <img src="${p.image}" alt="${p.name}" width="150" />
        <h4>${p.name}</h4>
        <p>₹${p.price}</p>
      </div>
    `).join("");
  });
