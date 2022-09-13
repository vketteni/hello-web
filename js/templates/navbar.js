
class Navbar extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <nav id="navbar">
        <div class="container">
            <ul>
                <li><a href="Start.html">Start</a></li>
                <li><a href="Variablen.html">Variablen</a></li>
                <li><a href="Datentypen.html">Datentypen</a></li>
                <li><a href="Objekte.html">Objekte</a></li>
                <li><a href="Funktionen.html">Funktionen</a></li>
                <li><a href="Array_Methods.html">Array_Methods</a></li>
                <li><a href="DOM.html">DOM</a></li>
            </ul>
        </div>
    </nav>
`;
  }
}

window.customElements.define("wc-navbar", Navbar);
