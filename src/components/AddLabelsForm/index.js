import React, { Component } from 'react';



export default class AddLabelForm extends Component {

    constructor(props) {
        super(props)

        this.state = {
            key: "",
            value : "",
            lang : ""
        }
        this.index = 0;
    }


    _addLabel(e) {
        e.preventDefault();
        const label = {...this.state};
        label.id = ++this.index;
        this.props.addLabel(label);
    }

    _changeValue(e) {
        const state = this.state;
        state[e.target.name] = e.target.value;
        this.setState(state)
        
    }

    render() {
        return (
            <form className="form-inline">
                <div className="form-group" ><input type="text" value={this.state.key} onChange={ this._changeValue.bind(this) } name="key" className="form-control" placeholder="key" /></div>
                <div className="form-group" ><input type="text" value={this.state.lang} onChange={ this._changeValue.bind(this) } name="lang" className="form-control" placeholder="lang"/></div>
                <div className="form-group" ><input type="text" value={this.state.value} onChange={ this._changeValue.bind(this) } name="value" className="form-control" placeholder="value" /></div>
                <button onClick={ this._addLabel.bind(this) }>add</button>
            </form>
        )
    }


}