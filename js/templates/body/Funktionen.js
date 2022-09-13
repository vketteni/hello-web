const funktionen_template = document.createElement("template");
funktionen_template.innerHTML = `
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
        Funktionen sind wichtig, hier ist was ich lernen konnte:
        
        </p>
    </div>

  </div>
`;

class Funktionen extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(funktionen_template.content.cloneNode(true));
  }
}

window.customElements.define("wc-funktionen", Funktionen);