import React, {Component} from "react";

class Pill extends Component {

    handleClick = (e) => {
        if (this.props.handlePillClick) {
            this.props.handlePillClick(this.props.label);
        }
    }

    render() {
        const {label, action, like, highlighted} = this.props;

        if (like) {
            return (
                <div className="pill pill--like">
                    <svg>
                        <path fill="none" d="M0 0h24v24H0V0zm0 0h24v24H0V0z" />
                        <path d="M13.12 2.06L7.58 7.6c-.37.37-.58.88-.58 1.41V19c0 1.1.9 2 2 2h9c.8 0 1.52-.48 1.84-1.21l3.26-7.61C23.94 10.2 22.49 8 20.34 8h-5.65l.95-4.58c.1-.5-.05-1.01-.41-1.37-.59-.58-1.53-.58-2.11.01zM3 21c1.1 0 2-.9 2-2v-8c0-1.1-.9-2-2-2s-2 .9-2 2v8c0 1.1.9 2 2 2z" />
                    </svg>
                </div>
            );
        } else {
            return (
                <div onClick={this.handleClick} className={"pill" + (action ? " pill--action" : "") + (highlighted ? " pill--highlighted" : "")} >{label}</div>
            );
        }
        
    }
}

export default Pill;