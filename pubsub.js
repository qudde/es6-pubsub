// ** Very tiny and simple ES6 Publish/Subscribe **

class PubSub {

	constructor() {
		this.events = {};
	}

	publish(name, obj) {

		let e = this.events[name];

		if(!e) {
			return;
		}

		let arg = arguments;

		if(this.async) {

		}
		e.forEach(fn => fn.apply(this, [obj]));

	}

	subscribe(name, func) {
  
  		let _this = this;
    
		if(!this.events[name]) {
			this.events[name] = [];
		}

		const index = this.events[name].push(func) -1;

		return {
    		_index: index,
      		name: name,
      		remove: () => _this.remove(name, index)
    	}
	}

	remove(name, index) {

		let e = this.events[name];

		if(e && typeof index === 'undefined') {
			delete this.events[name];
			return true;
		}

		if(e && e[index]) {
			delete e[index];
			return true;
		}

		return false;

	}

	getEvents() {
		return this.events;
	}

}

export default PubSub