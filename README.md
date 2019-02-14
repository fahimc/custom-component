# custom-component

## About  
`CustomComponent` is a small base `class` to provide `react` like props and template rendering to custom elements . Nothing special is happening in this class and everything is native. There's hooks in the custom elements lifecycle to render when attribute values change. 

When attributes change `setTemplate()` is called. Out of the box this method sets the `innerHTML` of a component with the output of `render()`. For canvas elements you can override this method.

```js 
attributeChangedCallback(name, oldValue, newValue) {
        this.props[name] = newValue;
        this.setTemplate();
    }
```   

## Props (watched attributes)
Props much like in react are attributes which are passed into the component and when modifed, `attributeChangedCallback` is called within the custom elements lifecycle. 

In `customElements` you would list the keys of the attributes within the `observedAttributes` static method. In `CustomComponent`, you set those keys and default values in a static get method called `PROPS` and then this will be used in `observedAttributes` and to set defaults in the `props` object.

```js
static get PROPS() {
    return {
        myAttribute: 'value'
    }
}
```

## Rendering 
`CustomComponent` has a `render()` method which needs to return a template string. This= is used once the `props` changes to update the `innerHTML` of the element.

```js
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
```

## Creating a Custom Element  
In order to create a `customElement` you need to import `CustomComponent` and create a class that extends it. 

```js
import {CustomComponent} from './node_modules/custom-component/dist/custom-component';
class Person extends CustomComponent {
}
```

Next you will need to set the attributes you want to use as `props`

```js
import {CustomComponent} from './node_modules/custom-component/dist/custom-components';
class Person extends CustomComponent {
	static get PROPS(){
        'person-name': '',
        'person-age': 0,
	}
}
```
Now set the template for your component. You can use `this.props` to access your data attributes.

```js
import {CustomComponent} from './node_modules/custom-component/dist/custom-components';
class Person extends CustomComponent {
	static get PROPS(){
        'person-name': '',
        'person-age': 0,
    }
    public render(){
        return `
            <div>
            <p>Name: ${this.props['person-name']}</p>
            <p>Age: ${this.props['person-age']}</p>
            <slot></slot>
            </div>
        `;
    }
}
```
Finally, as with `customElements` you need to registry the component to a tag.

```js
customElements.define('person-component', Person);
```

Now just import the class into your project and add the tag in the DOM.

```html
<body>
    <person-component person-name="Fahim Chowdhury" person-age="23"/>
</body>
```

## Life Cycle  
The standard custom element life cycle remains the same with some additional hooks applied to them. 

`createElement()`: creates the dom element. If you override, then ensure you set `this.element` to a new dom element. `this.element = document.createElement('div');`. Called in the constructor.

`createTemplate()`: this calls `setTemplate()` and appends the element to the `shadowRoot`. Called in the constructor.

`setTemplate()`: Gets the template from `render()` and applies it to the innerHTML of the element.  

`render()`: returns a template string.

`attributeChangedCallback()`: calls `setTemplate()`

## Forcing the element to update
You can call the `update()` method on the element to update the template manually. 


