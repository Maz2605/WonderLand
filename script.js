
function goToPage(link) {
  window.location.href = link;
}

const productData = {
  "product1": {
      name: "Sữa chua sấy vị phô mai",
      image: "assets//Picture1.png",
      prices: {
          "50g": 60000,
          "100g": 115000
      }
  },
  "product2": {
      name: "Sữa chua sấy vị trái cây mix",
      image: "assets//Picture2.png",
      prices: {
          "50g": 65000,
          "100g": 125000
      }
  },
  "product3": {
      name: "Sữa chua sấy đông trùng hạ thảo",
      image: "assets//Picture3.png",
      prices: {
          "50g": 90000,
          "100g": 170000
      }
  }
};

document.getElementById('product-select').addEventListener('change', updateProduct);
document.getElementById('weight-select').addEventListener('change', updatePrice);

let currentProduct = 'product1';
        let currentWeight = '50g';
        let quantity = 1;

        document.getElementById('product-select').addEventListener('change', updateProduct);
        document.getElementById('weight-select').addEventListener('change', updateWeight);
        document.getElementById('quantity-input').addEventListener('input', updateQuantity);
        document.getElementById('increase').addEventListener('click', increaseQuantity);
        document.getElementById('decrease').addEventListener('click', decreaseQuantity);

        function updateProduct() {
            currentProduct = document.getElementById('product-select').value;
            const product = productData[currentProduct];
            document.getElementById('product-title').textContent = product.name;
            document.getElementById('main-image').src = product.image;
            updatePrice();
        }

        function updateWeight() {
            currentWeight = document.getElementById('weight-select').value;
            updatePrice();
        }

        function updateQuantity() {
            quantity = parseInt(document.getElementById('quantity-input').value);
            if (isNaN(quantity) || quantity < 1) {
                quantity = 1;
                document.getElementById('quantity-input').value = 1;
            }
            updateTotalPrice();
        }

        function increaseQuantity() {
            quantity++;
            document.getElementById('quantity-input').value = quantity;
            updateTotalPrice();
        }

        function decreaseQuantity() {
            if (quantity > 1) {
                quantity--;
                document.getElementById('quantity-input').value = quantity;
                updateTotalPrice();
            }
        }

        function updatePrice() {
            const product = productData[currentProduct];
            const price = product.prices[currentWeight];
            document.getElementById('current-price').textContent = formatPrice(price);
            updateTotalPrice();
        }

        function updateTotalPrice() {
            const product = productData[currentProduct];
            const price = product.prices[currentWeight];
            const total = price * quantity;
            document.getElementById('total-price').textContent = `Tổng giá: ${formatPrice(total)}`;
        }

        function formatPrice(price) {
            return price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
        }

        // Khởi tạo với sản phẩm đầu tiên
        updateProduct();