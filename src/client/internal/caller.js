export default class Caller {
  constructor(n){
    this.n = n;
    this.valid = !!n;
    this.init();
  }

  init(){
    const p = this.n.permission;
    if (p === 'granted'){
      this.valid = true;
    } else if (p === 'default'){
      this.n.requestPermission((r) => this.valid = r === 'granted');
    } else{
      this.valid = false;
    }
  }

  emit(message, opts){
    if (!this.valid){
      //eslint-disable-next-line no-console
      console.log(message);
    } else{
      var n = new Notification(message, opts);
      setTimeout(n.close.bind(n), 5000);
    }
  }
}
