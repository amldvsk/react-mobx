import React, { Component } from 'react';
import {BrowserRouter, Switch, Route, Link} from 'react-router-dom';
import AddLabel from '../AddLabel';
import './label.css';
import {LabelRoutes} from '../../routes/label';
import AddLabelForm from '../../components/AddLabelsForm';
import {observer, inject} from "mobx-react";

@inject('LabelsStore')
@observer
export default class Label extends Component {

    constructor(props) {
        super(props)

        this.state = {
            labels : [],
        }
        
    }


    _addLabel(label) {
        this.props.LabelsStore.addLabel(label)
    }

    componentWillMount() {
        console.log(this.props)
    }


    


    render() {
        return (
            <div>
                <h1>Label</h1>
                {/* <button className="btn btn-success pull-right"  onClick={ this._addLabel.bind(this) } >add</button> */}
                <form className="form-inline">
                    <div className="form-group" ><input type="text" className="form-control" /></div>
                    <button>search</button>
                </form>

                <AddLabelForm addLabel={this._addLabel.bind(this)} />


                <table className="table">
                    <tbody>
                        { this.props.LabelsStore.labels.map((label, k) => {
                            return (
                                <tr key={k}>
                                    <td>{label.key}</td>
                                    <td>
                                        <table className="table">
                                            <tbody>
                                                <tr>
                                                    <td>{label.lang}</td>
                                                    <td>{label.value}</td>
                                                </tr>
                                                
                                            </tbody>
                                        </table>
                                    </td>
                                </tr>
                            )
                        }) }
                    </tbody>
                </table>


                {/* <LabelRoutes/> */}
            </div>            
            
        )
    }
}