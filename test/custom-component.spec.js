import {CustomComponentBuilder, ComponentName} from './builder/custom-component-builder';
import {CustomComponent  } from "../src/es6/custom-component";
test('component created', () => {
    let builder;
    let customComponent;
    beforeEach(() => {
        builder = new CustomComponentBuilder().build();
        console.log(builder);
    });
    expect(customComponent).toBeDefined();
    expect(document.querySelector(ComponentName)).toBeDefined();
});