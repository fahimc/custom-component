import {PersonComponent} from '../../src/example-component/person-component/person-component';

export class PersonComponentBuilder {
	private element:HTMLElement;
	constructor(){
		this.element = document.createElement('person-component');
	}

	public build(){
		document.body.appendChild(this.element);
		return this;
	}

	public getComponent(){
		this.element = document.querySelector('person-component');
		return this.element;
	}
}