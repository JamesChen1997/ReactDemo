import { createStore } from 'redux'
import  reducer from './reducer'
//  createStore 是一个函数可以直接执行的，然后接受一个reducer
export default createStore(reducer)