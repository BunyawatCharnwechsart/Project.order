class ToppingSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // กำหนดตัวแปรเริ่มต้น
        this.basePrice = 40; // ราคาเริ่มต้นของ
        this.quantity = 1; // จำนวนเริ่มต้น
        this.render();
    }

    async loadStyles() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/css/menucss/cha.css";
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
                    <div class="section-title">เลือกซอส</div>
                    <div class="options">
                        <label><input type="radio" name="sauce" value="ไม่รับ" checked>ไม่รับซอส</label>
                        <label><input type="radio" name="sauce" value="มะเขือเทศ">ซอสมะเขือเทศ</label>
                        <label><input type="radio" name="sauce" value="พริก">ซอสพริก</label>
                    </div>
                </div>

                 <div class="section">
                    <div class="section-title">จำนวนจาน</div>
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

        // โหลด CSS
        this.loadStyles();

        // เพิ่ม Event Listeners
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
            const selectedSweetness = this.shadowRoot.querySelector('input[name="sauce"]:checked').value;
            const totalPrice = this.basePrice * this.quantity;
            
            alert(`คุณได้สั่งจำนวน ${this.quantity} จาน\nเลือกซอส: ${selectedSweetness}\nราคา: ${totalPrice} บาท`);
        });
    }
}

customElements.define("topping-selector", ToppingSelector);
