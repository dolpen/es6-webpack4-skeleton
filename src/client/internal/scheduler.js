import Queue from './queue';
import Entity from './entity';
import Caller from './caller';

export default class Scheduler {

  constructor(n, f){
    this.q = new Queue();
    this.c = new Caller(n);
    this.s = null; // t is timer (setTimeout)
    this.f = f;
  }

  onUpdate(f){
    this.f = f;
  }

  add(time, message){
    this.q.add(new Entity(time, message));
    this.resetTimer();
    //this.c.emit('通知を追加しました');
  }

  del(time){
    this.q.del(time);
    this.resetTimer();
    //this.c.emit('通知を削除しました');
  }

  flush(time){ // unix time
    if (this.q.flush(time)){
      this.resetTimer();
      this.c.emit('通知をスキップしました');
    }
  }

  resetTimer(){
    if (this.s){
      clearTimeout(this.s);
    }
    this.f();
    var p = this.q.head();
    if (!p)return;
    var ms = p.time - (new Date()).getTime();
    this.s = setTimeout((function(){
      var e = this.q.pop();
      this.c.emit(e.message, {});
      this.s = null;
      this.resetTimer();
    }).bind(this), ms);
  }

  dump(){
    return this.q.dump();
  }
}

