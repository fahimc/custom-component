import {CustomComponent} from '../../custom-component/custom-component';

export class PersonComponent extends CustomComponent {

	public static get PROPS(): any {
		return {
			'person-name' : '',
			'person-age' : '',
			'person-address' : '',
		}
	}

	constructor(){
		super();
		console.log(this);
	}

	public render(){
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