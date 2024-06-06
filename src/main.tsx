import ReactDOM from "react-dom";
import App from "./App";

const render = (container: ReactDOM.Container | null) => {
  ReactDOM.render(<App />, container);
};

export default render;
