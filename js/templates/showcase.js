<<<<<<< HEAD
class Showcase extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section id="showcase">
        <div class="container">
            <h1>${this.getAttribute('header-text')} ${this.getAttribute('type')} </h1>

        </div>
    </section>
`;
  }
}

window.customElements.define("wc-showcase", Showcase);
=======
class Showcase extends HTMLElement {
  constructor() {
    super();

    this.innerHTML = `
    <section id="showcase">
        <div class="container">
            <h1>${this.getAttribute('header-text')} ${this.getAttribute('type')} </h1>

        </div>
    </section>
`;
  }
}

window.customElements.define("wc-showcase", Showcase);
>>>>>>> GitHub/main
