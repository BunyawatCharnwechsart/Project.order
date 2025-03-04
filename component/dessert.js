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
    { name: "ขนมปังอบเนยนมน้ำตาล", price: 20, image: "/Menu/Dessert/ขนมปังอบเนยนมน้ำตาล.png", link: "/main/menu/bms.html" },
    { name: "ช็อกโกแลตโทสต์", price: 139, image: "/Menu/Dessert/ช็ิอกโกแลตโทสต์.png", link: "/main/menu/chocoToast.html" },
    { name: "บานาน่าคาราเมลโทสต์", price:139, image: "/Menu/Dessert/บานาน่าคาราเมลโทสต์.png", link: "/main/menu/bananatoast.html" },
    { name: "ปลาไทยากิ", price: 10, image: "/Menu/Dessert/ปลาไทยากิ.png", link: "/main/menu/taiyaki.html" },
    { name: "ปังปิ้งเนยนมน้ำตาล", price: 20, image: "/Menu/Dessert/ปังปิ้งเนยนมน้ำตาล.png", link: "/main/menu/fbms.html" },
    { name: "ปังปิ้งแยมสตรอว์เบอร์รี่", price: 20, image: "/Menu/Dessert/ปังปิ้งแยมสเตอเบอร์รี่.png", link: "/main/menu/yamstraw.html" },
    { name: "ปังปิ้งโอริโอ้", price: 20, image: "/Menu/Dessert/ปังปิ้งโอริโอ้.png", link: "/main/menu/oreo.html" },
    { name: "วานิลาฮันนี่โทสต์", price:139, image: "/Menu/Dessert/วานิลาฮันนี่โทสต์.png", link: "/main/menu/vanila.html" },
];

products.forEach(product => {
    const productItem = createProductItem(product.name, product.price, product.image, product.link);
    productList.appendChild(productItem);
});
