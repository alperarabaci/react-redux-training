import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux'
import * as actionTypes from '../../store/actions';


class Counter extends Component {    
    /*
    Bu bi ise yaramıyor alttakiler kullanılıyor.
    state = {
        counter: 0,
        results: []
    }
    */

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter.bind(this, 1)} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter.bind(this, 1)}  />
                <CounterControl label="Add 5" clicked={this.props.onIncrementCounter.bind(this, 5)} />
                <CounterControl label="Subtract 5" clicked={this.props.onDecrementCounter.bind(this, 5)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    <li>{this.props.storedResults.map((result, index) => {
                            return  <li key={result.id} onClick={this.props.onDeleteResult.bind(this, index)}>{result.value}</li>        
                    })}</li>
                               
                </ul>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        ctr: state.ctr.counter,
        storedResults: state.res.results
    };
};

const mapDispatchToProps = dispatch => {
    return {
        onIncrementCounter: (value) => dispatch({type: actionTypes.INCREMENT, value: value}),
        onDecrementCounter: (value) => dispatch({type: actionTypes.DECREMENT, value: value}),    
        onStoreResult: (result) => dispatch({type:'STORE_RESULT', result: result}),
        onDeleteResult: (index) => dispatch({type:'DELETE_RESULT', index: index})
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);