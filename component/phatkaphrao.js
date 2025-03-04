class ToppingSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.basePrice = 40; // ตั้งราคาเริ่มต้น
        this.toppingPrice = 10; // ราคาท็อปปิ้งต่อรายการ
        this.quantity = 1; // จำนวนเริ่มต้น
        this.render();
    }

    async loadStyles() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/css/menucss/cha.css";
        this.shadowRoot.appendChild(link);
    }

    getSelectedToppings() {
        const selectedTopping = this.shadowRoot.querySelector('.topping-options input[type="radio"]:checked');
        return selectedTopping && selectedTopping.value !== "no-topping" ? 1 : 0;
    }

    updateTotalPrice() {
        const toppingCount = this.getSelectedToppings();
        const totalPrice = (this.basePrice + toppingCount * this.toppingPrice) * this.quantity;
        this.shadowRoot.querySelector(".total-price").textContent = `ราคา: ${totalPrice} บาท`;
    }

    render() {
        this.shadowRoot.innerHTML = `
            <div class="topping-container">
                <div class="section">
                    <div class="section-title">ระดับความเผ็ด</div>
                    <div class="options">
                        <label><input type="radio" name="spiciness" value="no-spice"> ไม่เผ็ด</label>
                        <label><input type="radio" name="spiciness" value="less-spice"> เผ็ดน้อย</label>
                        <label><input type="radio" name="spiciness" value="normal" checked> เผ็ดปกติ</label>
                        <label><input type="radio" name="spiciness" value="extra-spice"> เผ็ดมาก</label>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">ท็อปปิ้ง</div>
                    <div class="options topping-options">
                        <label><input type="radio" name="topping" value="no-topping" checked> ไม่ใส่</label>
                        <label><input type="radio" name="topping" value="ไข่เจียว">ไข่เจียว</label>
                        <label><input type="radio" name="topping" value="ไข่ดาว">ไข่ดาว</label>
                        <label><input type="radio" name="topping" value="ไข่เจียวดาว">ไข่เจียวดาว</label>
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

        this.shadowRoot.querySelectorAll('.topping-options input[type="radio"]').forEach(input => {
            input.addEventListener("change", () => {
                this.updateTotalPrice();
            });
        });

        this.shadowRoot.querySelector(".submit-btn").addEventListener("click", () => {
            const toppingCount = this.getSelectedToppings();
            const selectedSpiciness = this.shadowRoot.querySelector('input[name="spiciness"]:checked').value;
            const selectedTopping = this.shadowRoot.querySelector('input[name="topping"]:checked').nextSibling.textContent.trim();
            
            const totalPrice = (this.basePrice + toppingCount * this.toppingPrice) * this.quantity;
            
            alert(`คุณได้สั่งจำนวน ${this.quantity} จาน\nระดับความเผ็ด: ${selectedSpiciness}\nท็อปปิ้ง: ${selectedTopping}\nราคา: ${totalPrice} บาท`);
        });

        this.loadStyles();
    }
}

customElements.define("topping-selector", ToppingSelector);
