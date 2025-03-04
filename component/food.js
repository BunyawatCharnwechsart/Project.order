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
    nameText.textContent = `${name} - ${price}฿`; // เพิ่มราคาข้างชื่อเมนู

    imgContainer.appendChild(img);
    nameContainer.appendChild(nameText);
    item.appendChild(imgContainer);
    item.appendChild(nameContainer);

    return item;
}

// เพิ่มสินค้าลงในหน้าเว็บ
const productList = document.getElementById("product-list");

const products = [
    { name: "ผัดกะเพรา", price: 40, image: "/Menu/Food/ผัดกระเพรา.png", link: "/main/menu/phatkaphrao.html" },
    { name: "กระเพราเครื่องในไก่", price: 40, image: "/Menu/Food/กระเพราเคนื่องในไก่.png", link: "/main/menu/chickenentrails.html" },
    { name: "ข้าวไข่เจียวกุ้ง", price: 40, image: "/Menu/Food/ข้าวไข่เจียวกุ้ง.png", link: "/main/menu/Shrimpomelette.html" },
    { name: "กระเพราปลาหมึก", price: 40, image: "/Menu/Food/กระเพราปลาหมึก.png", link: "/main/menu/phatkaphraosquid.html" },
    { name: "ผัดกระเพรากุ้ง", price: 40, image: "/Menu/Food/ผัดกระเพรากุ้ง.png", link: "/main/menu/phatkaphraoshrimp.html" },
    { name: "ผัดกระเพราทะเล", price: 40, image: "/Menu/Food/ผัดกระเพราทะเล.png", link: "/main/menu/phatkaphraosea.html" },
    { name: "มาม่าต้มยำทะเล", price: 60, image: "/Menu/Food/มาม่าต้มยำทะเล.png", link: "/main/menu/mamatale.html" },
    { name: "ไข่เจียวหมูสับ", price: 40, image: "/Menu/Food/ไข่เจียวหมูสับ.png", link: "/main/menu/omelette.html" },
];

products.forEach(product => {
    const productItem = createProductItem(product.name, product.price, product.image, product.link);
    productList.appendChild(productItem);
});
