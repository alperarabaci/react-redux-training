import React, { Component } from 'react';

import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';

import { connect } from 'react-redux'
import * as actions from '../../store/actions/';


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
                <CounterControl label="Increment" clicked={() => this.props.onIncrementCounter(1)} />
                <CounterControl label="Decrement" clicked={() => this.props.onDecrementCounter(1)}  />
                <CounterControl label="Add 5" clicked={() => this.props.onIncrementCounter(5)} />
                <CounterControl label="Subtract 5" clicked={() =>this.props.onDecrementCounter(5)}  />
                <hr />
                <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    <li>{this.props.storedResults.map((result, index) => {
                            return  <li key={result.id} onClick={() => this.props.onDeleteResult(index)}>{result.value}</li>        
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
        //onIncrementCounter: (value) => dispatch({type: actions.INCREMENT, value: value}),
        onIncrementCounter: (value) => dispatch(actions.increment(value)),
        onDecrementCounter: (value) => dispatch(actions.decrement(value)),    
        onStoreResult: (result) => dispatch(actions.storeResult(result)),
        onDeleteResult: (index) => dispatch(actions.deleteResult(index))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);