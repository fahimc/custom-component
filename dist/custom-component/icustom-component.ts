export interface ICustomComponent {
	element: HTMLElement;
	props:any;
	PROPS?: any;
	createTemplate?(): void;
	setTemplate(): void;
	render(): void;
	update(): void;
}