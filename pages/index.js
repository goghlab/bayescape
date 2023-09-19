import Wrapper from "./layout/wrapper";
import Home9 from "./home/home_9";
const EventEmitter = require('events');

EventEmitter.defaultMaxListeners = 30;

// Create an instance of EventEmitter and set the maximum listeners for this specific instance
const myEmitter = new EventEmitter();
myEmitter.setMaxListeners(30);

const MainRoot = () => {
  return (
    <Wrapper>
      <Home9 />
    </Wrapper>
  );
};

export default MainRoot;
