export class CustomComponent extends HTMLElement {
    static get PROPS() {
        return {}
    }

    static get observedAttributes() {
        return this.PROPS ? Object.keys(this.PROPS) : [];
    }

    constructor(...args) {
        const self = super(...args);
        this.props = this.constructor['PROPS'] ? this.constructor['PROPS'] : [];
        this.createElement();
        this.createTemplate();

        return self;
    }

    createElement() {
        this.element = document.createElement('div');
    }

    createTemplate() {
        this.setTemplate();

        let shadowRoot = this.attachShadow({
            mode: 'open'
        });
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
