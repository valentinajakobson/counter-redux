import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {

   render() {
       return(
           <div className='num'>
               <div><h3>Current number: {this.props.count}</h3></div>
               <div>
                   <button onClick={this.props.onIncCounter}>Add 1</button>
                   <button onClick={this.props.onDecCounter}>Remove 1</button>
                   <button onClick={this.props.onAddCounter}>Add 5</button>
                   <button onClick={this.props.onRemCounter}>Remove 5</button>
                   <button onClick={this.props.onStoreResult}>Store value</button>
                
                   <ul>
                       {this.props.storedResult.map(item => (
                        <li key={item.id}>{item.value}</li>
                       ))}
                   </ul>
               </div>
           </div>
       );
   }
}

const mapStateToProps = state => {
    return {
        count: state.counter,
        storedResult: state.results
    }
}

const mapDispatchToProps = dispatch=> {
    return {
        onIncCounter: () => dispatch ({type: 'INCREASE'}),
        onDecCounter: () => dispatch ({type: 'DECREASE'}),
        onAddCounter: () => dispatch ({type: 'ADD', value:5}),
        onRemCounter: () => dispatch ({type: 'REMOVE', value:5}),
        onStoreResult: () => dispatch ({type: 'STORE_RESULT'}),
        onDeleteResult: () => dispatch ({type: 'DELETE_RESULT'})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);