import React from 'react'
import { connect } from "react-redux";
import { buyBook } from "../redux";
function BookContainer(props){
  return(
    <div>
      <h1>Number of Book-{props.numberOfBook}</h1>
      <button onClick={props.buyBook}>Buy book</button>
    </div>
  )
}

const mapStateToProps=(state)=>{
return{
  numberOfBook:state.numberOfBook
}
}

const mapDispatchtoProps=(dispatch)=>{
  return{
    buyBook:function(){
      dispatch(buyBook());
    }
  }
}
export default connect(mapStateToProps,mapDispatchtoProps)(BookContainer);