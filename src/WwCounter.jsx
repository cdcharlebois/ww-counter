import { Component, createElement } from "react";
import { hot } from "react-hot-loader/root";

// import { HelloWorldSample } from "./components/HelloWorldSample";
import "./ui/WwCounter.css";

class WwCounter extends Component {
    constructor(props) {
        super(props);
        this.increment = this.increment.bind(this);
    }

    increment() {
        const { attribute } = this.props;
        attribute.setValue(attribute.value.plus(1));
    }

    render() {
        const { attribute } = this.props;
        return (
            <div onClick={this.increment}>
                The current value is {attribute.displayValue}. Click to increment.
            </div>
        )
    }
}

export default hot(WwCounter);
