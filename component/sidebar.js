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
                <a href="/Main/menudessert.html"><img src="/JPG/Desserticon.png"alt="Desserticon"></a>
            </div>
            <div class="icon">
                <a href="/Main/menufood.html"><img src="/JPG/Foodicon.png"alt="Foodicon"></a>
            </div>
            <div class="icon">
                <a href="/Main/menucart.html"><img src="/JPG/Carticon.png"alt="Carticon"></a>
            </div>
            <div class="icon">
                <a href="/Main/menubill.html"><img src="/JPG/bill.png"alt="Billicon"></a>
            </div>
        </nav>
    </aside>
        `
    }
}
customElements.define('main-sidebar', sidebar)