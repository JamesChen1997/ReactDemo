/*
这个是用上React-redux的组件
*/
import {connect,useSelector} from 'react-redux'
import {createAddAction,createSubAction} from '../../redux/actions'
function Demo( props ) {
    console.log( 'props',props )
    const toAdd = ()=>{props.ADD(1)}
    const toSub = ()=>{props.SUB(1)}
    useSelector((state)=>{
        
    })
    return (
        <div className='demo2' >
            <h2>React-redux版的求案例</h2>
            <p>当前求和为{props.count}</p>
            <button onClick={toAdd} >+</button>
            <button onClick={toSub} >-</button>
        </div>
    )
}
let mapStateToProps = (state)=>{ 
     console.log(state)
     return { count:state } 
}
let mapDispatchToProps = (dispatch)=>{
     return {
        ADD: (data) =>  dispatch( createAddAction(data) ),
        SUB: (data) =>  dispatch( createSubAction(data) ) 
     } 
}
export default connect(mapStateToProps,mapDispatchToProps)(Demo)
