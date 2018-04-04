// @flow
export default class Queue {
  constructor(){
    this.d = [];
  }

  add(e){
    var i = this.d.filter(o => o.time < e.time).length;
    this.d.splice(i, 0, e);
  }

  del(time){
    this.d = this.d.filter(o => o.time != time);
  }

  flush(time){
    const deleted = this.d.filter(o => o.time <= time).length > 0;
    this.d = this.d.filter(o => o.time > time);
    return deleted;
  }

  head(){
    return this.d[0];
  }

  pop(){
    return this.d.shift();
  }

  dump(){
    return this.d;
  }
}
