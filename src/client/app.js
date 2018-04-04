import React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import Router from './internal/router';
import { update } from './actions/reservation';
import Container from './components/container';


const store = createStore(reducer);
const worker = new Worker('worker.js');
const rt = new Router();

// fire redux action from worker message
rt.addHandler('update', (data) =>{
  store.dispatch(update(data));
});

worker.onmessage = (event) =>{
  const payload = event.data;
  rt.fire(payload.name, payload.data);
};

const add = (mills, title) =>{
  worker.postMessage({
    name: 'add',
    data: {
      time: mills, title: title
    }
  });
};


const del = (time) =>{
  worker.postMessage({
    name: 'del',
    data: time
  });
};


render(
    <Provider store={store}>
      <Container add={add} del={del}/>
    </Provider>,
    document.getElementById('app')
);

