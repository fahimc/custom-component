import {ICustomElement} from '../custom-element/icustom-element';
import {ICustomComponent} from './icustom-component';


export class CustomComponent extends  HTMLElement implements ICustomElement, ICustomComponent {
	public element:HTMLElement;
	public props:any;

	public static get PROPS(): any {
		return {
		}
	}

	public static get observedAttributes(): string[] {
		return this.PROPS ? Object.keys(this.PROPS) : [];
	}

	constructor(){
		super();
		this.props = {...(this.constructor['PROPS'] ? this.constructor['PROPS'] : [])};
		this.element = document.createElement('div');
		this.createTemplate();
	}

	public createTemplate() {
		this.setTemplate();

		let shadowRoot = this.attachShadow({mode: 'open'});
		shadowRoot.appendChild(this.element);
	}

	public attributeChangedCallback(name, oldValue, newValue) {	
		this.props[name] = newValue;
		this.setTemplate();
	}

	public setTemplate(){
		this.element.innerHTML = this.render();
	}

	public update(){
		this.setTemplate();
	}

	public render(){
		 return `
			<div>
			</div>
		`;
	}
}