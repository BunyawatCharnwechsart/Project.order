class ToppingSelector extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: "open" });

        // กำหนดตัวแปรเริ่มต้น
        this.basePrice = 10; // ราคาเริ่มต้นของปลาไทยากิ
        this.quantity = 1; // จำนวนตัวเริ่มต้น
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
                    <div class="section-title">เลือกไส้</div>
                    <div class="options">
                        <label><input type="radio" name="filling" value="coconut"> มะพร้าวอ่อน</label>
                        <label><input type="radio" name="filling" value="golden-thread"> ฝอยทองนม</label>
                        <label><input type="radio" name="filling" value="spinach-cheese"> ผักโขมอบชีส</label>
                        <label><input type="radio" name="filling" value="curry-chicken"> กระหรี่ไก่</label>
                        <label><input type="radio" name="filling" value="nutella"> นูเทลล่า</label>
                        <label><input type="radio" name="filling" value="ham-cheese"> แฮมชีส</label>
                        <label><input type="radio" name="filling" value="orange-jam"> แยมส้ม</label>
                        <label><input type="radio" name="filling" value="blueberry-jam"> แยมบลูเบอรี่</label>
                        <label><input type="radio" name="filling" value="strawberry-jam"> แยมสตรอเบอรี่</label>
                    </div>
                </div>

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
            const selectedFilling = this.shadowRoot.querySelector('input[name="filling"]:checked');
            if (selectedFilling) {
                const selectedValue = selectedFilling.value;
                const totalPrice = this.basePrice * this.quantity;
                alert(`คุณได้สั่งปลาไทยากิจำนวน ${this.quantity} ตัว\nไส้ที่เลือก: ${selectedValue}\nราคา: ${totalPrice} บาท`);
            } else {
                alert("กรุณาเลือกไส้");
            }
        });
    }
}

customElements.define("topping-selector", ToppingSelector);
