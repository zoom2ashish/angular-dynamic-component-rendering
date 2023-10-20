# Use cases

## Use Case 1
Nowadays, Angular projects use lots of external UI libraries providing off-the-shelf functionalities and UI components, for example, Angular Material, bootstrap etc. These external libraries are black-box functionality and can't be modified without updating the library.

However, frequently developers come across a scenario where they need to inject specific component or tap into DOM elements of components rendered by these libraries.
I came across such scenario where I needed to render

## Use case 2
Dynamically render the components at given template node. Get the ViewContainerRef of the template node, and append the dynamically created component to the template node.

# Concepts
- Standalone Components
- ViewContainerRef
- ComponentFactoryResolver

# Run application

- Checkout this application
- Install all necessary npm packages using `npm install` command
- Run application `npm run start`

# System Requirements
- Node.js >=v16
- Chrome Browser