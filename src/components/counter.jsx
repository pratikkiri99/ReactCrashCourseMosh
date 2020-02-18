import React, { Component } from 'react';

class Counter extends Component {

    state = {
        counterValue: this.props.initValue
        //,tags : ['Tag1', 'Tag2', 'Tag3']
    }

    /*constructor() {
        super();
        this.increamentCount = this.increamentCount.bind(this);
    }*/

    render() {
        //console.log(this.props);
        return (
            <React.Fragment>
                <span className={this.getCountClass()}>{this.formatCount()}</span>
                <button className="btn btn-secondary btn-sm" onClick={this.increamentCount}>Increament</button>
                {/*<ul>
                    //{this.state.tags.map(tag => <li key={tag}>{tag}</li>)}
                //</ul>*/}
                <button className="btn btn-danger btn-sm" onClick={()=>this.props.onDelete(this.props.id)}>Delete</button>
            </React.Fragment>
         );
    }

    getCountClass() {
        let classes = "badge m-2 badge-";
        classes += this.state.counterValue === 0 ? "warning" : "primary";
        return classes;
    }

    formatCount() {
        return this.state.counterValue === 0 ? 'Zero' : this.state.counterValue;
    }

    increamentCount = () => {
        this.setState({
            counterValue: this.state.counterValue + 1 
        });
    }

}

export default Counter;