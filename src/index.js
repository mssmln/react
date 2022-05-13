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
import PropTypes from 'prop-types';



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
  // constructor(props) {
  //   super(props);
  // }
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
  // constructor(props) {
  //   super(props);
  // }
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
  // constructor(props) {
  //   super(props);
  // }
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


const NonCitrus = () => {
  return (
    <div>
      <h4>Non-Citrus:</h4>
      <ul>
        <li>Apples</li>
        <li>Blueberries</li>
        <li>Strawberries</li>
        <li>Bananas</li>
      </ul>
    </div>
  );
};


const Citrus = () => {
  return (
    <div>
      <h4>Citrus:</h4>
      <ul>
        <li>Lemon</li>
        <li>Lime</li>
        <li>Orange</li>
        <li>Grapefruit</li>
      </ul>
    </div>
  );
};


const Vegetables = () => {
  return (
    <div>
      <h2>Vegetables:</h2>
      <ul>
        <li>Brussel Sprouts</li>
        <li>Broccoli</li>
        <li>Squash</li>
      </ul>
    </div>
  );
};

class Fruits1 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h2>Fruits:</h2>
        <NonCitrus />
        <Citrus />
      </div>
    );
  }
};

class TypesOfFood1 extends React.Component {
  // constructor(props) {
  //    super(props);
  // }
  render() {
    return (
      <div>
        <h1>Types of Food:</h1>
        <Fruits1 />
        <Vegetables />
      </div>
    );
  }
};
ReactDOM.render(<TypesOfFood1 />, document.getElementById('compose_react_components'));


// ------------------------------------------------------------------


const CurrentDate = props => {
  return (
    <div>
      <p>The current date is: { props.date }</p>
    </div>
  );
};

class Calendar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>What date is it?</h3>
        { /* date is our html custom attribute */ }
        <CurrentDate date= { Date() } />
      </div>
    );
  }
};
ReactDOM.render(<Calendar />, document.getElementById('pass_props_to_a_stateless_functional_component'));


// ------------------------------------------------------------------


const List = props => {
  return <p>{ props.tasks.join(", ") }</p>
};

class ToDo extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h1>To Do Lists</h1>
        <h2>Today</h2>
        <List tasks= { ["walk dog", "workout"] }/>
        <h2>Tomorrow</h2>
        <List tasks= { ["cook", "find out a high-value club", "ask Silvia out"] }/>
      </div>
    );
  }
};
ReactDOM.render(<ToDo />, document.getElementById('pass_an_array_as_props'));


// ------------------------------------------------------------------


const ShoppingCart = props => {
  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <p>{ props.items }</p>
    </div>
  )
};
/*
React also has an option to set default props. 
You can assign default props to a component as a 
property on the component itself and React assigns the 
default prop if necessary. This allows you to specify what 
a prop value should be if no value is explicitly provided. 
For example, if you declare MyComponent.defaultProps = { location: 'San Francisco' }, 
you have defined a location prop that's set to the string 
San Francisco, unless you specify otherwise. 
React assigns default props if props are undefined, 
but if you pass null as the value for a prop, it will remain null.
*/
ShoppingCart.defaultProps = { items: 0 }
ReactDOM.render(<ShoppingCart />, document.getElementById('use_default_props'));


// ------------------------------------------------------------------


const Items = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
}

Items.defaultProps = {
  quantity: 0
}

class ShoppingCart1 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <Items quantity={ 10 }/>
  }
};
ReactDOM.render(<ShoppingCart1 />, document.getElementById('override_default_props'));



// ------------------------------------------------------------------


const Items1 = props => {
  return <h1>Current Quantity of Items in Cart: {props.quantity}</h1>
};
/*
React provides useful type-checking features to verify that 
components receive props of the correct type. 
For example, your application makes an API call to 
retrieve data that you expect to be in an array, 
which is then passed to a component as a prop. 
You can set propTypes on your component to require 
the data to be of type array. 
This will throw a useful warning when the data is of any other type.
It's considered a best practice to set propTypes 
when you know the type of a prop ahead of time. 
You can define a propTypes property for a component 
in the same way you defined defaultProps. 
Doing this will check that props of a given key are present with a given type.
*/
Items1.propTypes = { quantity: PropTypes.number.isRequired }

Items1.defaultProps = {
  quantity: 100
};

class ShoppingCart2 extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return <Items1 />
  }
};
ReactDOM.render(<ShoppingCart2 />, document.getElementById('use_propTypes_to_define_the_Props_You_Expect'));



// ------------------------------------------------------------------


class App extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <div>
            <Welcome name="massimiliano" />
        </div>
    );
  }
};

class Welcome extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
        <div>
          {/*
          The last several challenges covered the basic ways to 
          pass props to child components. But what if the child component 
          that you're passing a prop to is an ES6 class component, 
          rather than a stateless functional component? 
          The ES6 class component uses a slightly different convention to access props.
          Anytime you refer to a class component within itself, 
          you use the this keyword. To access props within a class component, 
          you preface the code that you use to access it with this.
          */}
          <p>Hello, <strong>{this.props.name}</strong>!</p>
        </div>
    );
  }
};
ReactDOM.render(<App />, document.getElementById('Access_Props_Using_this_props'));


/*
Except for the last challenge, you've been passing props to 
stateless functional components. These components act like 
pure functions. They accept props as input and return the same 
view every time they are passed the same props. You may be 
wondering what state is, and the next challenge will cover it 
in more detail. Before that, here's a review of the terminology for components.

A stateless functional component is any function you write 
which accepts props and returns JSX. A stateless component, 
on the other hand, is a class that extends React.Component, 
but does not use internal state (covered in the next challenge). 
Finally, a stateful component is a class component that does maintain 
its own internal state. You may see stateful components referred to 
simply as components or React components.

A common pattern is to try to minimize statefulness and to create 
stateless functional components wherever possible. This helps contain 
your state management to a specific area of your application. 
In turn, this improves development and maintenance of your app 
by making it easier to follow how changes to state affect its behavior.
*/


// ------------------------------------------------------------------


class StatefulComponent extends React.Component {
  constructor(props) {
    super(props);
    /*
    State consists of any data your application needs to know about, 
    that can change over time. You want your apps to respond to 
    state changes and present an updated UI when necessary.
    You create state in a React component by declaring a state 
    property on the component class in its constructor. 
    This initializes the component with state when it is created. 
    The state property must be set to a JavaScript object.
    You have access to the state object throughout the life of your component. 
    You can update it, render it in your UI, and pass it as 
    props to child components. The state object can be as complex 
    or as simple as you need it to be. Note that you must create 
    a class component by extending React.Component in order to create state like this.
    */
    this.state = { name: "max" }
  }
  render() {
    return (
      <div>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<StatefulComponent />, document.getElementById('Create_a_Stateful_Component'));


/*
Once you define a component's initial state, you can 
display any part of it in the UI that is rendered. 
If a component is stateful, it will always have access 
to the data in state in its render() method. 
You can access the data with this.state.

If you want to access a state value within the return 
of the render method, you have to enclose the value in curly braces.

state is one of the most powerful features of components in React. 
It allows you to track important data in your app and render 
a UI in response to changes in this data. If your data changes, 
your UI will change. React uses what is called a virtual DOM, 
to keep track of changes behind the scenes. 
When state data updates, it triggers a re-render of the 
components using that data - including child components 
that received the data as a prop. React updates the actual DOM, 
but only where necessary. This means you don't have to worry 
about changing the DOM. You simply declare what the UI should look like.

Note that if you make a component stateful, no other 
components are aware of its state. Its state is completely 
encapsulated, or local to that component, unless you pass 
state data to a child component as props. 
This notion of encapsulated state is very important 
because it allows you to write certain logic, 
then have that logic contained and isolated in one place in your code.
*/


// ------------------------------------------------------------------


class MyComponent2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'freeCodeCamp'
    }
  }
  render() {
    const NAME = this.state.name;
    return (
      <div>
        <h1>{ NAME }</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent2 />, document.getElementById('Render_State_in_the_User_Interface_Another_Way'));


// ------------------------------------------------------------------


class MyComponent3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Initial State'
    };
    /*
explicitly bind this in the constructor so this becomes bound to the class methods when the component is initialized.

    */
    this.click = this.handleClick.bind(this);
  }
  handleClick() {
    /*
    React expects you to never modify state directly, 
    instead always use this.setState() when state changes occur. 
    Also, you should note that React may batch multiple state 
    updates in order to improve performance. 
    What this means is that state updates through the 
    setState method can be asynchronous. There is an 
    alternative syntax for the setState method which 
    provides a way around this problem.
    */
    this.setState({
      name: "React Rocks!"
    });
  }
  render() {
    return (
      <div>
        <button onClick={this.click}>Click Me</button>
        <h1>{this.state.name}</h1>
      </div>
    );
  }
};
ReactDOM.render(<MyComponent3 />, document.getElementById('Set_State_with_this.setState'));


// ------------------------------------------------------------------


class MyComponent4 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      visibility: false
    };
    this.toggle = this.toggleVisibility.bind(this)
  }
  toggleVisibility() {
    /*
    Sometimes you might need to know the previous state 
    when updating the state. However, state updates may 
    be asynchronous - this means React may batch multiple 
    setState() calls into a single update. This means you 
    can't rely on the previous value of this.state or this.props 
    when calculating the next value.
    Instead, you should pass setState a function that allows you 
    to access state and props. Using a function with setState 
    guarantees you are working with the most current values of state and props.
    */
    this.setState(state => ({
      visibility: !state.visibility
    }))
  }
  render() {
    if (this.state.visibility) {
      return (
        <div>
          <button onClick={this.toggle}>Click Me</button>
          <h1>Now you see me!</h1>
        </div>
      );
    } else {
      return (
        <div>
          <button onClick={this.toggle}>Click Me</button>
        </div>
      );
    }
  }
}
ReactDOM.render(<MyComponent4 />, document.getElementById('Use_State_to_Toggle_an_Element'));


// ------------------------------------------------------------------


class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.increment = this.incrementMethod.bind(this);
    this.decrement = this.decrementMethod.bind(this);
    this.reset = this.resetMethod.bind(this);
  }
  incrementMethod() {
    this.setState(state => ({
      count: state.count +1
    }))
  }
  decrementMethod() {
  this.setState(state => ({
    count: state.count -1
  }))
  }
  resetMethod() {
    this.setState({
      count: 0
  })
}
  render() {
    return (
      <div>
        <button className='inc' onClick={this.increment}>Increment!</button>
        <button className='dec' onClick={this.decrement}>Decrement!</button>
        <button className='reset' onClick={this.reset}>Reset</button>
        <h1>Current Count: {this.state.count}</h1>
      </div>
    );
  }
};
ReactDOM.render(<Counter />, document.getElementById('Write_a_Simple_Counter'));


// ------------------------------------------------------------------


class ControlledInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleInputChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }
  render() {
    return (
      <div>
        <input onChange={this.handleInputChange} value={this.state.input} />
        <h4>Controlled Input:</h4>
        <p>{this.state.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<ControlledInput />, document.getElementById('Create_a_Controlled_Input'));


// ------------------------------------------------------------------


class MyForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      submit: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  handleSubmit(event) {
    //to prevent the default form submit behavior which will refresh the web page. 
    event.preventDefault();
    this.setState(state => ({
      submit: state.input 
    }))
  }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.handleChange} value={this.state.input} />
          <button type='submit'>Submit!</button>
        </form>
        <h1>{this.state.submit}</h1>
      </div>
    );
  }
}
ReactDOM.render(<MyForm />, document.getElementById('Create_a_Controlled_Form'));


// ------------------------------------------------------------------


class MyApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'CamperBot'
    }
  }
  render() {
    return (
       <div>
         {/*
         A common pattern is to have a stateful component 
         containing the state important to your app, that 
         then renders child components. You want these components 
         to have access to some pieces of that state, which are passed in as props.
         This pattern illustrates some important paradigms in React. 
         The first is unidirectional data flow. State flows in one 
         direction down the tree of your application's components, 
         from the stateful parent component to child components. 
         The child components only receive the state data they need. 
         The second is that complex stateful apps can be broken down 
         into just a few, or maybe a single, stateful component. 
         The rest of your components simply receive state from the 
         parent as props, and render a UI from that state. 
         It begins to create a separation where state management 
         is handled in one part of code and UI rendering in another. 
         This principle of separating state logic from UI logic is 
         one of React's key principles. When it's used correctly, 
         it makes the design of complex, stateful applications much easier to manage.
         */}
         <Navbar name={this.state.name}/>
       </div>
    );
  }
};

class Navbar extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
    <div>
      <h1>Hello, my name is: {this.props.name}</h1>
    </div>
    );
  }
};
ReactDOM.render(<MyApp />, document.getElementById('Pass_State_as_Props_to_Child_Components'));


// ------------------------------------------------------------------


class MyApp1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: ''
    }
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }
  render() {
    return (
       <div>
         {/*
         You can pass state as props to child components, 
         but you're not limited to passing data. 
         You can also pass handler functions or any method 
         that's defined on a React component to a child component. 
         This is how you allow child components to interact with their parent components.
         */}
          <GetInput input={this.state.inputValue} handleChange={this.handleChange}/>
          <RenderInput input={this.state.inputValue}/>
       </div>
    );
  }
};

class GetInput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>Get Input:</h3>
        <input
          value={this.props.input}
          onChange={this.props.handleChange}/>
      </div>
    );
  }
};

class RenderInput extends React.Component {
  // constructor(props) {
  //   super(props);
  // }
  render() {
    return (
      <div>
        <h3>Input Render:</h3>
        <p>{this.props.input}</p>
      </div>
    );
  }
};
ReactDOM.render(<MyApp1 />, document.getElementById('Pass_a_Callback_as_Props'));
