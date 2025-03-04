// Card-menu
function createProductItem(name, price, image, link) {
    const item = document.createElement("div");
    item.className = "products-item";
    item.onclick = () => window.location.href = link;

    const imgContainer = document.createElement("div");
    imgContainer.className = "products-img";

    const img = document.createElement("img");
    img.src = image;
    img.alt = name;

    const nameContainer = document.createElement("div");
    nameContainer.className = "products-name";

    const nameText = document.createElement("p");
    nameText.textContent = `${name} - ${price}฿`; // แสดงชื่อเมนูพร้อมราคา

    imgContainer.appendChild(img);
    nameContainer.appendChild(nameText);
    item.appendChild(imgContainer);
    item.appendChild(nameContainer);

    return item;
}

// เพิ่มสินค้าลงในหน้าเว็บ
const productList = document.getElementById("product-list");

const products = [
    { name: "Cocoa", price: 40, image: "/Menu/Drink/cocoa.png", link: "/main/menu/cocoa.html" },
    { name: "Latte", price: 40, image: "/Menu/Drink/latte.png", link: "/main/menu/latte.html" },
    { name: "Thaitea", price: 40, image: "/Menu/Drink/Thaitea.png", link: "/main/menu/thaitea.html" },
    { name: "Greentea", price: 40, image: "/Menu/Drink/Greentea.png", link: "/main/menu/greentea.html" },
    { name: "Americano", price: 40, image: "/Menu/Drink/Americano.png", link: "/main/menu/americano.html" },
    { name: "Strawberry Flappe", price: 40, image: "/Menu/Drink/strawbarryflappe.png", link: "/main/menu/strawberry.html" },
    { name: "Bluehawaii Soda", price: 40, image: "/Menu/Drink/Bluehawaiisoda.png", link: "/main/menu/bluehawaii.html" },
    { name: "Honey Lemon Soda", price: 40, image: "/Menu/Drink/Honeylemonsoda.png", link: "/main/menu/honeylemon.html" },
];

products.forEach(product => {
    const productItem = createProductItem(product.name, product.price, product.image, product.link);
    productList.appendChild(productItem);
});
