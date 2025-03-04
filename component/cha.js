class ToppingSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });
        this.basePrice = 40; // ตั้งราคาชาไทยเริ่มต้น
        this.toppingPrice = 5; // ราคาท็อปปิ้งต่อรายการ
        this.quantity = 1; // จำนวนแก้วเริ่มต้น
        this.render();
    }

    async loadStyles() {
        const link = document.createElement("link");
        link.rel = "stylesheet";
        link.href = "/css/menucss/cha.css";
        this.shadowRoot.appendChild(link);
    }

    getSelectedToppings() {
        return [...this.shadowRoot.querySelectorAll('.topping-options input[type="checkbox"]:checked')]
            .filter(input => input.value !== "no-topping") // ไม่นับ "ไม่ใส่"
            .length;
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
                    <div class="section-title">ระดับความหวาน</div>
                    <div class="options">
                        <label><input type="radio" name="sweetness" value="no-sugar"> ไม่หวาน</label>
                        <label><input type="radio" name="sweetness" value="less-sugar"> หวานน้อย</label>
                        <label><input type="radio" name="sweetness" value="normal" checked> หวานปกติ</label>
                        <label><input type="radio" name="sweetness" value="extra-sugar"> หวานมาก</label>
                    </div>
                </div>

                <div class="section">
                    <div class="section-title">ท็อปปิ้ง</div>
                    <div class="options topping-options">
                        <label><input type="checkbox" value="no-topping" checked> ไม่ใส่</label>
                        <label><input type="checkbox" value="boba"> ไข่มุก</label>
                        <label><input type="checkbox" value="fruit-jelly"> ฟรุตสลัด</label>
                        <label><input type="checkbox" value="grass-jelly"> บุกบราวชูการ์</label>
                    </div>
                </div>

                <div class="section">           
                    <div class="section-title">จำนวนแก้ว</div>
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

        this.shadowRoot.querySelectorAll('.topping-options input[type="checkbox"]').forEach(input => {
            input.addEventListener("change", () => {
                if (input.value === "no-topping") {
                    this.shadowRoot.querySelectorAll('.topping-options input[type="checkbox"]').forEach(cb => cb.checked = false);
                    input.checked = true;
                } else {
                    this.shadowRoot.querySelector('input[value="no-topping"]').checked = false;
                }
                this.updateTotalPrice();
            });
        });

        this.shadowRoot.querySelector(".submit-btn").addEventListener("click", () => {
            const toppingCount = this.getSelectedToppings();
            const selectedSweetness = this.shadowRoot.querySelector('input[name="sweetness"]:checked').value;
            const selectedToppings = [...this.shadowRoot.querySelectorAll('.topping-options input[type="checkbox"]:checked')]
                .map(input => input.nextSibling.textContent.trim())
                .join(", ") || "ไม่มี";
            
            const totalPrice = (this.basePrice + toppingCount * this.toppingPrice) * this.quantity;
            
            alert(`คุณได้สั่งจำนวน ${this.quantity} แก้ว\nระดับความหวาน: ${selectedSweetness}\nท็อปปิ้ง: ${selectedToppings}\nราคา: ${totalPrice} บาท`);
        });

        this.loadStyles();
    }
}

customElements.define("topping-selector", ToppingSelector);