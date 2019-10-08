import React, { Component } from 'react';
import { connect } from 'react-redux';

class Counter extends Component {
  
// changeHandler = (action, value) => {
//   // eslint-disable-next-line 
//    switch(action) {
//        case 'inc':
//            this.setState( (prevState) => {return {count: prevState.count + 1 }})
//            break;
//        case 'dec':
//            this.setState( (prevState) => {return {count: prevState.count - 1 }})
//            break;
//         case 'add':
//            this.setState( (prevState) => {return {count: prevState.count + value }})
//            break;
//         case 'rem':
//            this.setState( (prevState) => {return {count: prevState.count - value }})
//            break;
//    }
// }
   render() {
       return(
           <div className='num'>
               <div><h3>Current number: {this.props.count}</h3></div>
               <div>
                   <button onClick={this.props.onIncCounter}>Add 1</button>
                   <button onClick={this.props.onDecCounter}>Remove 1</button>
                   <button onClick={this.props.onAddCounter}>Add 5</button>
                   <button onClick={this.props.onRemCounter}>Remove 5</button>
               </div>
           </div>
       );
   }
}

const mapStateToProps = state => {
    return {
        count: state.counter
    }
}

const mapDispatchToProps = dispatch=> {
    return {
        onIncCounter: () => dispatch ({type: 'INCREASE'}),
        onDecCounter: () => dispatch ({type: 'DECREASE'}),
        onAddCounter: () => dispatch ({type: 'ADD', value:5}),
        onRemCounter: () => dispatch ({type: 'REMOVE', value:5})
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Counter);