class ToppingSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // กำหนดตัวแปรเริ่มต้น
        this.basePrice = 40; // ราคาเริ่มต้นของชาไทย
        this.quantity = 1; // จำนวนแก้วเริ่มต้น
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
                    <div class="section-title">ระดับความหวาน</div>
                    <div class="options">
                        <label><input type="radio" name="sweetness" value="no-sugar"> ไม่หวาน</label>
                        <label><input type="radio" name="sweetness" value="less-sugar"> หวานน้อย</label>
                        <label><input type="radio" name="sweetness" value="normal" checked> หวานปกติ</label>
                        <label><input type="radio" name="sweetness" value="extra-sugar"> หวานมาก</label>
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
            const selectedSweetness = this.shadowRoot.querySelector('input[name="sweetness"]:checked').value;
            const totalPrice = this.basePrice * this.quantity;
            
            alert(`คุณได้สั่งจำนวน ${this.quantity} แก้ว\nระดับความหวาน: ${selectedSweetness}\nราคา: ${totalPrice} บาท`);
        });
    }
}

customElements.define("topping-selector", ToppingSelector);
