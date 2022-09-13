
const dom_template = document.createElement("template");
dom_template.innerHTML = `
  <style> 
    .variables {
      background-color: #333;
      border: 0.1px #333 solid;
    }

    .block {
      padding: 0px 10px;
      margin: 10px;
      border: 3px solid antiquewhite;

      
    }  
    
    #block-1 {
    }
    #block-2 {
      width:33.33%;
      border: 2px solid antiquewhite;
      
    }
    #block-3 {
      border-right: none;
    }
    

  </style>

  <div class="variables">  

    <div class="block" id="block-1">
        <p>
        DOM ist die Abkürzung für Document Object Model und stellt den Rahmen unter dem HTML tags miteinander interagieren können dar.
        
        </p>
    </div>

  </div>
`;

class Dom extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(dom_template.content.cloneNode(true));
  }
}

window.customElements.define("wc-dom", Dom);