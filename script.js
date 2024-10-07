let reduxState = {
    post: 0,
    name: "Aman",
    age: 23

}

function reducer(state, action) {
    // console.log(action)
    if(action.type==='post/increment'){
        return{...state , post: state.post +1}
    }
    else if(action.type ==='post/decrement'){
        return{...state , post: state.post -1}
    }
    else if(action.type==='post/incrementby'){
        return{...state , post: state.post+action.palyload}
        // console.log(action)
      }
    return state
   
  
}
//*** what Redux will do ***/
// reduxState = reducer(reduxState)
 reduxState = reducer(reduxState, {type: 'post/increment'})
 console.log(reduxState)
 reduxState = reducer(reduxState, {type: 'post/increment'})
 console.log(reduxState)
 reduxState = reducer(reduxState, {type: 'post/decrement'})
 console.log(reduxState)

 reduxState = reducer(reduxState, {type: 'post/incrementby', palyload: 10})
 console.log(reduxState)

 reduxState = reducer(reduxState, {type: 'post/incrementby', palyload: 20})
 console.log(reduxState)

 reduxState = reducer(reduxState, {type: 'post/incrementby', palyload: 25})
 console.log(reduxState)







// let state = {
//     count: 0
// }

// let previous = state
// function increament(){
//     //*** Mutating State ***/
//     // state.count = state.count +1
    
//     //***Not Mutating State ***/
//     state = {count: state.count + 1}
// }
// increament()
// console.log(state)
// // document.write(state)
