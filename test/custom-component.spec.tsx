import {PersonComponentBuilder} from './builder/person-component-builder';
test('component renders with props', () => {
	const builder = new PersonComponentBuilder();
	const personComponent = builder.getComponent();
  	
  	expect(personComponent).toBeDefined();
});