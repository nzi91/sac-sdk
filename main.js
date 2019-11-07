(function() {
    let template = document.createElement('template');
    template.innerHTML = `
       <style>
           
			.tile{
                text-align: center;
                font-size: 70px;
				background-color: #00929f;
				color: white;
				padding: 100px;
				//border-style: solid;
			}
        </style>

        <div class="tile">
            <p>My Custom Widget<br>Q4 2019</p>
        </div>
    `;

    class TextSDK extends HTMLElement{
        constructor() {
            super();

        let shadowRoot = this.attachShadow({mode: 'open'});
        shadowRoot.appendChild(template.content.cloneNode(true));
        
        };

    }

    customElements.define("text-sdk", TextSDK);

})();