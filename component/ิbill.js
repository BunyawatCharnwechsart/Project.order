document.addEventListener("DOMContentLoaded", function () {
    const menu = document.getElementById("menu");

    const foodItems = [
        { name: "Thai tea", price: 40, status: "เสิร์ฟแล้ว", img: "/Menu/Drink/Thaitea.png" },
    ];

    foodItems.forEach(item => {
        const foodDiv = document.createElement("div");
        foodDiv.classList.add("food-item");

        foodDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="food-info">
                <div class="info-text">${item.name}</div>
                <div class="food-price">${item.price} THB</div>
            </div>
            <button class="status-btn done">
                เสิร์ฟแล้ว
            </button>
        `;

        menu.appendChild(foodDiv);
    });
});

function payNow() {
    const button = document.querySelector(".pay-button");
    button.textContent = "กำลังดำเนินการ...";
    button.disabled = true; // ปิดปุ่มชั่วคราว
    
    setTimeout(() => {
        window.location.href = "payment.html"; // เปลี่ยนหน้าหลังจาก 2 วินาที
    }, 2000);
}
