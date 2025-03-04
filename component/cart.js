const cartItems = [
    { id: 1, name: "Thai tea", image: "/Menu/Drink/Thaitea.png", price: 40, quantity: 1 }
];

function renderCart() {
    const cartContainer = document.getElementById("cart-container");
    cartContainer.innerHTML = ""; // ล้าง HTML เดิมก่อน

    if (cartItems.length === 0) {
        cartContainer.innerHTML = "<p class='empty-cart'>ไม่มีสินค้าในตะกร้า</p>";
        document.getElementById("item-list").innerHTML = "";
        document.getElementById("total-price").textContent = "0";
        return;
    }

    cartItems.forEach((item, index) => {
        const cartItem = document.createElement("div");
        cartItem.className = "cart-item";

        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <span>${item.name}</span>

            <div class="quantity">
                <button onclick="decreaseQuantity(${index})">−</button>
                <input type="text" value="${item.quantity}" readonly>
                <button onclick="increaseQuantity(${index})">+</button>
            </div>

            <span>${item.price * item.quantity} THB</span>

            <button class="delete-btn" onclick="removeItem(${index})">🗑</button>
        `;

        cartContainer.appendChild(cartItem);
    });

    renderSummary(); // ✅ อัปเดต Total ทุกครั้งที่เปลี่ยนแปลงตะกร้า
}

function increaseQuantity(index) {
    cartItems[index].quantity++;
    renderCart(); // ✅ อัปเดตทั้งตะกร้าและ Total
}

function decreaseQuantity(index) {
    if (cartItems[index].quantity > 1) {
        cartItems[index].quantity--;
        renderCart(); // ✅ อัปเดตทั้งตะกร้าและ Total
    }
}

function removeItem(index) {
    cartItems.splice(index, 1);
    renderCart(); // ✅ อัปเดตทั้งตะกร้าและ Total
}

function renderSummary() {
    const itemList = document.getElementById("item-list");
    itemList.innerHTML = ""; // ล้างข้อมูลก่อน

    let total = 0;
    cartItems.forEach(item => {
        total += item.price * item.quantity;
        const itemRow = document.createElement("p");
        itemRow.innerHTML = `${item.name} x ${item.quantity}: <strong>${item.price * item.quantity} THB</strong>`;
        itemList.appendChild(itemRow);
    });

    document.getElementById("total-price").textContent = total;
}

function placeOrder() {
    if (cartItems.length === 0) {
        alert("ไม่มีสินค้าในตะกร้า กรุณาเลือกสินค้าก่อนสั่งซื้อ!");
        return;
    }
    alert("คำสั่งซื้อของคุณถูกส่งแล้ว!");
}

renderCart(); // โหลดข้อมูลเริ่มต้น