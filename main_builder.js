(function()  {
    let template = document.createElement("template");
    template.innerHTML = `
		<img class="img" src="https://sac.ruhr.agency/text-sdk/Logo_320x132(public).png" alt="NextLytics AG Logo">
		<form id="form">
			<fieldset>
				<legend>Builder Properties</legend>
				<table>
					<tr>
						<td>Set your builder properties here</td>
					</tr>
				</table>
			</fieldset>
		</form>
		<style>
			:host {
				background-color: #00929f;
				color: white;
				display: block;
				padding: 1em 1em 1em 1em;
			}
			.img {
				display: block;
  				margin-left: auto;
  				margin-right: auto;
  				width: 50%;
			}
		</style>
    `;

    class TextSDKBuilder extends HTMLElement {
        constructor(){
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define("text-sdk-builder", TextSDKBuilder); 
})();