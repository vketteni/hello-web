class Header extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
            <header id="main-header">
                <div class="container">
                    <h1>Lernprojekt nach dem Crashkurs für JavaScript</h1>
                </div>
            </header>
        `;
  }
}

window.customElements.define("wc-header", Header);
