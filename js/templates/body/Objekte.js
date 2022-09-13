const objekte_template = document.createElement("template");
objekte_template.innerHTML = `
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
        Objekte sind sehr wichtige Datentypen in JavaScript, gerne würde ich noch mehr dazu erklären.
        
        </p>
    </div>


  </div>
`;

class Objekte extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(objekte_template.content.cloneNode(true));
  }
}

window.customElements.define("wc-objekte", Objekte);
