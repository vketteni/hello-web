const arr_meth_temp = document.createElement("template");
arr_meth_temp.innerHTML = `
  <style> 
    .array-methods {
      height:700px; /* only works with .block height */
      margin:55px 0px 85px 0px ;
      background-color: #333;
      // padding: 1px;
      // border: 5px #333 solid;
    }

    .block {
      height:700px;
      background-color: #333;
      float:left;
      width: 33.333%;
      border:0px solid #ccc;
      padding:10px;
      box-sizing:border-box;
    }  
    
    #block-1 {
      border-right: solid;
      border-color: antiquewhite;
    }
    #block-2 {
      border-right: solid;
      border-color: antiquewhite;
    }
    #block-3 {
      border-right: none;
    }
    

  </style>

  <div class="array-methods">  
    <div class="block" id="block-1">
            <h4>.forEach</h4>
            <p>
            The forEach method takes a Callback function as Input which is then executed on every element of the array.
            </p>
            <p>
            Let's take this example array 
            <br> num = [1,2,3,4,5], and the
            <br> function
             logToConsole (item, index, arr) {
              console.log(item);
            }.
            </p>
            <p>If we call num.forEach(logToConsole);
            the output will be the logging of
            <br>1 <br>2 <br>3 <br>4 <br>5
            <br>to the console.</p>
            <p>The forEach method return value is undefined. </p>

    </div>
    
    <div class="block" id="block-2">
      <h4>.map</h4>
        <div id="box-1">
        <p>
        The map method takes a callback function as an input which is then executed on each element of the array, and returns it as a new array.
        </p>
        <p> 
        Let's take this example array 
        <br> pricelist = [1, 3, 3, 5], and the
        <br> function incFivPct (item, index, arr) {
          return item + (item*0.05);
        }.
        </p>
        <p> When pricelist.map(incFivPct); is called. The output will be a returned array of the form
        <br> [ 1.05, 3.15, 3.15, 5.25 ].
        </p>
        
        </div>
    </div>

    <div class="block">
        <h4>.filter</h4>
        <p>
        The filter method takes as input a callback function and returns as output a new array with  the elements of the old array for which when taken as inputs the callback function returns a boolean value of true.
        </p>
        <p>
        For example 
        <br>weekdays = [0, 1, 2, 3, 4, 5, 6]; and
        <br>function weekend (item, index, arr) {
          <br>&nbsp;&nbsp;&nbsp;&nbsp;
          if (item > 4) return true;
          <br>&nbsp;&nbsp;&nbsp;&nbsp;
          return false;
          <br>
        }
        </p>
        <p> 
        So when weekdays.filter(weekend); is called. The output will be the return of a new array object of the form
        <br>
        [ 5, 6 ]. 
        </p>
    </div>
    </div>
`;

class ArrayMethods extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({ mode: "open" });
    this.shadowRoot.appendChild(arr_meth_temp.content.cloneNode(true));
  }
}

window.customElements.define("wc-array-methods", ArrayMethods);