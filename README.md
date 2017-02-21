# es6-pubsub
ES6 PubSub implementation

// Create new event manager
let p = new PubSub();

// Subscribe to 'hello' event
let e = p.subscribe('hello', (data) => console.log(data));

// Publish a 'hello' event
p.publish('hello', 'hello world');

// Remove event listener
e.remove()
