import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/lib/integration/react'
import configureStore from './store/store';
import Hello from './Hello';
import Main from './containers/main'
import './style.css';

let { store, persistor } = configureStore();

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Provider store={store}>
               <PersistGate loading={null} persistor={persistor}>
                   <div className="App">
                       <Main/>
                   </div>
               </PersistGate>
           </Provider>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
