
import React from 'react';
// import ReactDOM from 'react-dom';
import ReactDOM from 'react-dom/client';
import App from './App';


// const name = "Tea";
// ReactDOM.render(<h1>Hello {name}</h1>, document.getElementById('root'))

// const App = (props) => <h1>Hello {props.name}!</h1>


// ReactDOM.render(<App name="Tea" num="123"/>, document.getElementById('root'))
// ReactDOM.render(<App name="Tea" otherName="Lee"/>, document.getElementById('root'))

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />)


//useless, but they showed it
// const App2 = ({name}) => <h1>Hello {name}!</h1>
// ReactDOM.render(<App2 name="Tea Lover" />, document.getElementById('root2'))

console.log("Hi!")


