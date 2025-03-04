class ToppingSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.basePrice = 139; // ตั้งราคาขนมปังเริ่มต้น
        this.quantity = 1; // จำนวนชิ้นเริ่มต้น
        this.render();
    }

    async loadStyles() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/css/menucss/dessert.css";
        this.shadowRoot.appendChild(link);
    }

    updateTotalPrice() {
        const totalPrice = this.basePrice * this.quantity;
        this.shadowRoot.querySelector(".total-price").textContent = `ราคา: ${totalPrice} บาท`;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="topping-container">
                <div class="section">           
                    <div class="section-title">จำนวนชิ้น</div>
                    <div class="quantity-controls">
                        <button class="decrease">-</button>
                        <span class="quantity">${this.quantity}</span>
                        <button class="increase">+</button>
                    </div>
                </div>

                <div class="total-price">ราคา: ${this.basePrice} บาท</div>
                <button class="submit-btn">ใส่ตะกร้า</button>
            </div>
        `;

        this.shadowRoot.querySelector(".increase").addEventListener("click", () => {
            this.quantity++;
            this.shadowRoot.querySelector(".quantity").textContent = this.quantity;
            this.updateTotalPrice();
        });

        this.shadowRoot.querySelector(".decrease").addEventListener("click", () => {
            if (this.quantity > 1) {
                this.quantity--;
                this.shadowRoot.querySelector(".quantity").textContent = this.quantity;
                this.updateTotalPrice();
            }
        });

        this.shadowRoot.querySelector(".submit-btn").addEventListener("click", () => {
            const totalPrice = this.basePrice * this.quantity;
            alert(`คุณได้สั่งจำนวน ${this.quantity} ชิ้น\nราคา: ${totalPrice} บาท`);
        });

        this.loadStyles();
    }
}

customElements.define("topping-selector", ToppingSelector);