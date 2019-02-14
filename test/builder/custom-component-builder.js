import { CustomComponent } from "../../src/es6/custom-component";
//import "@webcomponents/custom-elements";
export const ComponentName = 'example-component';
export class CustomComponentExample extends CustomComponent {
    static get PROPS(){
        return {
            title:'hello world',
            data:'',
        }
    } 
}
const customElements = {
    define(name,obj){
        const element = document.createElement(div);
        const component
    }
}
//customElements.define(ComponentName, CustomComponentExample);

export class CustomComponentBuilder {
    constructor(){
        this.component = new CustomComponentExample();
        console.log(this.component);
        document.appendChild(this.component);
    }
    build(){
        return this;
    }
}