(function()  {
    let template = document.createElement("template");
    template.innerHTML = `
        <style>
			.appearance {
				background-color: #00929f;
				color: white;
				padding: 5px;
			}
		</style>
		<form id="form" class="appearance">
            <fieldset>
                <legend>Styling Properties</legend>
                <table>
                    <tr>
                        <td>You can set your styling properties here</td>
                    </tr>
                </table>
            </fieldset>
        </form>
    `;

    class TextSDKStyling extends HTMLElement {
        constructor(){
            super();
            this._shadowRoot = this.attachShadow({mode: "open"});
            this._shadowRoot.appendChild(template.content.cloneNode(true));
        }
    }

    customElements.define("text-sdk-styling", TextSDKStyling); 
})();