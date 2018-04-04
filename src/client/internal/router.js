export default class Router {
  constructor(){
    this.h = {};
  }

  addHandler(name, func){
    this.h[name] = func;
  }

  fire(name, ...data){
    var h = this.h[name];
    if (h)return h(...data);
    return null;
  }
}

