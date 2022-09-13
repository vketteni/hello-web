<<<<<<< HEAD
const datentypen_template = document.createElement("template");
datentypen_template.innerHTML = `
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
        In JavaScript the main data types are number, string, and object.
        
        </p>
    </div>

    <div class="block" id="block-2">
        <h5>
        Number
        </h5>
        <p>text</p>
    </div>

    <div class="block" id="block-2">
        <h5>
        String
        </h5>
        <p>text</p>
    </div>

    <div class="block" id="block-2">
        <h5>
        Object
        </h5>
        <p>text</p>
    </div>

  </div>
`;

class Datentypen extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(datentypen_template.content.cloneNode(true));
  }
}

window.customElements.define("wc-datentypen", Datentypen);
=======
const datentypen_template = document.createElement("template");
datentypen_template.innerHTML = `
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
        In JavaScript the main data types are number, string, and object.
        
        </p>
    </div>

    <div class="block" id="block-2">
        <h5>
        Number
        </h5>
        <p>text</p>
    </div>

    <div class="block" id="block-2">
        <h5>
        String
        </h5>
        <p>text</p>
    </div>

    <div class="block" id="block-2">
        <h5>
        Object
        </h5>
        <p>text</p>
    </div>

  </div>
`;

class Datentypen extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(datentypen_template.content.cloneNode(true));
  }
}

window.customElements.define("wc-datentypen", Datentypen);
>>>>>>> GitHub/main
