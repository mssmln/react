// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
  //   <React.StrictMode>
  //     <App />
  //   </React.StrictMode>
  // );
  
  // // If you want to start measuring performance in your app, pass a function
  // // to log results (for example: reportWebVitals(console.log))
  // // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
  // reportWebVitals();
  
  

import React from 'react';
import ReactDOM from 'react-dom';


const JSX = <h1>Hello JSX!</h1>;
ReactDOM.render(JSX, document.getElementById('create_a_simple_jsx_element'));


// ------------------------------------------------------------------



const JSX1 = <div>
  <h1>title</h1>
  <p>para</p>
  <ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
  </ul>
</div>
ReactDOM.render(JSX1, document.getElementById('create_a_complex_jsx_element'));


// ------------------------------------------------------------------




const JSX2 = (
  <div>
  { /* this is a comment */ }
    <h1>This is a block of JSX</h1>
    <p>Here's a subtitle</p>
  </div>
);
ReactDOM.render(JSX2, document.getElementById('add_comments_in_jsx'));



// ------------------------------------------------------------------




const JSX3 = (
  <div className="myDiv">
    <h1>Add a class to this div</h1>
  </div>
);
ReactDOM.render(JSX3, document.getElementById('define_an_html_class_in_jsx'));


// ------------------------------------------------------------------




const JSX4 = (
  <div>
    <h2>Welcome to React!</h2> <br />
    <p>Be sure to close all tags!</p>
    <hr />
  </div>
);
ReactDOM.render(JSX4, document.getElementById('learn_about_self-closing_jsx_tags'));


// ------------------------------------------------------------------




const MyComponent = () => <div>my component</div>;
ReactDOM.render(MyComponent(), document.getElementById('create_a_stateless_functional_component'));


// ------------------------------------------------------------------




class MyComponent1 extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div><h1>rendered a component by importing react</h1></div>
    );
  }
};
ReactDOM.render(<MyComponent1 />, document.getElementById('create_a_react_component'));


// ------------------------------------------------------------------



const ChildComponent = () => {
  return (
    <div>
      <p>I am the child</p>
    </div>
  );
};

class ParentComponent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div>
        <h1>I am the parent</h1>
        <ChildComponent />
      </div>
    );
  }
};
ReactDOM.render(<ParentComponent />, document.getElementById('create_a_component_with_composition'));



// ------------------------------------------------------------------



const TypesOfFruit = () => {
  return (
    <div>
      <h2>Fruits:</h2>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};

const Fruits = () => {
  return (
    <div>
      <TypesOfFruit />
    </div>
  );
};

class TypesOfFood extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits />
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood />, document.getElementById('use_react_to_render_nested_components'));



// ------------------------------------------------------------------

