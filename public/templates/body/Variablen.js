<<<<<<< HEAD
const variablen_template = document.createElement("template");
variablen_template.innerHTML = `
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
        In JavaScript a variable... reasonable explanation
        
        </p>
    </div>

    <div class="block" id="block-2">
        <h5>
        var
        </h5>
        <p>text</p>
    </div>

    <div class="block" id="block-2">
        <h5>
        const
        </h5>
        <p>text</p>
    </div>

    <div class="block" id="block-2">
        <h5>
        let
        </h5>
        <p>text</p>
    </div>

  </div>
`;

class Variablen extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(variablen_template.content.cloneNode(true));
  }
}

window.customElements.define("wc-variablen", Variablen);
=======
const variablen_template = document.createElement("template");
variablen_template.innerHTML = `
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
        In JavaScript a variable... reasonable explanation
        
        </p>
    </div>

    <div class="block" id="block-2">
        <h5>
        var
        </h5>
        <p>text</p>
    </div>

    <div class="block" id="block-2">
        <h5>
        const
        </h5>
        <p>text</p>
    </div>

    <div class="block" id="block-2">
        <h5>
        let
        </h5>
        <p>text</p>
    </div>

  </div>
`;

class Variablen extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(variablen_template.content.cloneNode(true));
  }
}

window.customElements.define("wc-variablen", Variablen);
>>>>>>> GitHub/main
