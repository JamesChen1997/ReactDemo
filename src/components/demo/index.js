import './index.css'
import store from '../../redux/store'
import { createAddAction,createSubAction  } from '../../redux/actions'
import Demoo from '../demo2/index'
function Demo() {
    const  add = ()=>{
        console.log('add')
        store.dispatch(createAddAction(1))
    }
    const  sub = () =>{
        console.log('sub')
        store.dispatch(createSubAction(1))
    }
    return (
        <div className='demowrap' >
            <p>当前求和为{store.getState()}</p>
            <button onClick={add} >+1</button>
            <button onClick={sub} >-1</button>

            <Demoo />
        </div>
    )
}
export default Demo