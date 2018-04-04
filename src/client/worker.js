import Router from './internal/router';
import Scheduler from './internal/scheduler';

const rt = new Router();

const sendQueue = () =>{
  //noinspection JSUnresolvedFunction
  postMessage({
    name: 'update',
    data: sc.dump()
  });
};

const sc = new Scheduler(Notification, sendQueue);


rt.addHandler('add', (o) =>{
  sc.add(o.time, o.title);
});

rt.addHandler('del', (t) =>{
  sc.del(t);
});

rt.addHandler('flush', (t) =>{
  sc.flush(t);
});

rt.addHandler('test', () =>{
  sc.c.emit('this is test call', {}); // kick directly notification caller
  return true;
});


onmessage = (event) =>{
  const payload = event.data;
  rt.fire(payload.name, payload.data);
};
