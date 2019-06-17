import React , { Component } from 'react';
import axios from 'axios';

const list = [
  {
    'id': 1,
    'title': '1st Item',
    'description': 'Description here.'
  },
  {
    'id': 2,
    'title': '2nd Item',
    'description': 'Another description here.'
  },
  {
    'id': 3,
    'title': '3rd Item',
    'description': 'Third description here.'
  }
];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      todos: []
    };
  }

  componentDidMount() {
    axios.get('http://localhost:8000/api/')
        .then(res => {
          this.setState({ todos: res.data });
        })
        .catch(err => { console.log(err); });
  }

  render() {
    return (
      <div>
        {this.state.todos.map(item => (
          <div key={item.id}>
            <h1>{item.title}</h1>
            <span>{item.description}</span>
          </div>  
        ))}
      </div>
    );
  }

}

export default App;
