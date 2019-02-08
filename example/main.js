define("custom-element/icustom-element", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("custom-component/icustom-component", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
});
define("custom-component/custom-component", ["require", "exports"], function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class CustomComponent extends HTMLElement {
        static get PROPS() {
            return {};
        }
        static get observedAttributes() {
            return this.PROPS ? Object.keys(this.PROPS) : [];
        }
        constructor() {
            super();
            this.props = Object.assign({}, (this.constructor['PROPS'] ? this.constructor['PROPS'] : []));
            this.element = document.createElement('div');
            this.createTemplate();
        }
        createTemplate() {
            this.setTemplate();
            let shadowRoot = this.attachShadow({ mode: 'open' });
            shadowRoot.appendChild(this.element);
        }
        attributeChangedCallback(name, oldValue, newValue) {
            this.props[name] = newValue;
            this.setTemplate();
        }
        setTemplate() {
            this.element.innerHTML = this.render();
        }
        update() {
            this.setTemplate();
        }
        render() {
            return `
			<div>
			</div>
		`;
        }
    }
    exports.CustomComponent = CustomComponent;
});
define("example-component/person-component/person-component", ["require", "exports", "custom-component/custom-component"], function (require, exports, custom_component_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    class PersonComponent extends custom_component_1.CustomComponent {
        static get PROPS() {
            return {
                'person-name': '',
                'person-age': '',
                'person-address': '',
            };
        }
        constructor() {
            super();
            console.log(this);
        }
        render() {
            return `
			<div>
			<p>Name: ${this.props['person-name']}</p>
			<p>Age: ${this.props['person-age']}</p>
			<p>Address: ${this.props['person-address']}</p>
			<slot></slot>
			</div>
		`;
        }
    }
    customElements.define('person-component', PersonComponent);
});
