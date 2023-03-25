//import {useReducer, useState} from 'react';
import {connect} from 'react-redux';
import * as ActionCreators from 'actions';

// function reducer(state, action){
//   switch(action.type){
//     case 'increment':{
//       return {count:state.count + 1};
//     }
//     case 'decrement':{
//       return {count:state.count - 1};
//     }
//     default:
//     return state;
//   }
// }

// function App(){
//   const [{count}, dispatch] = useReducer(reducer, {count:0});
//   const increment = () => dispatch({type:'increment'})
//   const decrement = () => dispatch({type:'decrement'})
//   return (
//     <div>
//       <h2>Cpunt:{count}</h2>
//       <button onClick={increment}>+</button>
//       <button onClick={decrement}>-</button>
//     </div>
//   );
// }

// export default App;


function App(props) {
  const {count, step, dispatch} = props;
  const increment = () => dispatch(ActionCreators.increment());
  const decrement = () => dispatch(ActionCreators.decrement());
  const onChange = ({target:{value}}) => dispatch(ActionCreators.setStep(Number(value)));
  return (
    <div>
      <h2>Count:{count}</h2>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
      <input type='number' value={step} onChange={{onChange}} />
    </div>
  );
}

function mapStateToProps(state){
  return state;
}
// const withProps = connect(mapStateToProps);
// const ComponentWithProps = withProps(App);

// export default ComponentWithProps;
export default connect(mapStateToProps)(App);