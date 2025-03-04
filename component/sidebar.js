// Class-sideber
class sidebar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <aside>
        <div class="logo">
            <img src="/JPG/logomormilk.png" alt="Mormilk">
        </div>
        <nav>
            <div class="icon">
                <a href="/index.html"><img src="/JPG/Drinkicon.png"alt="Drinkicon"></a>
            </div>
            <div class="icon">
                <a href="/main/menudessert.html"><img src="/JPG/Desserticon.png"alt="Desserticon"></a>
            </div>
            <div class="icon">
                <a href="/main/menufood.html"><img src="/JPG/foodicon.png.png"alt="Foodicon"></a>
            </div>
            <div class="icon">
                <a href="/main/menucart.html><img src="/JPG/carticon.png"alt="Carticon"></a>
            </div>
            <div class="icon">
                <a href="/main/menubill.html"><img src="/JPG/bill.png"alt="Billicon"></a>
            </div>
        </nav>
    </aside>
        `
    }
}
customElements.define('main-sidebar', sidebar)