import {useState,useEffect,useMemo} from 'react'
import Demo from '../demo/index'
import {Button} from 'antd'
import './add.css'
function Add(props) {
    let  [initAge,changeAge] = useState(0)
    let  [name,setName]      = useState('jamesChen')
    
    // useMemo(()=>{
    //     console.log('岁月不饶人啊......')
    // },[initAge])
    
    let  addAge = ()=>{
      changeAge( initAge++ )
    }
    
    useEffect(()=>{
      addAge()
      return ()=>{
      }
    },[initAge])
    return (
      <div className='addWrap' >
         <div>
             <h2>我是Add组件</h2>
             我今年<span>{initAge}</span>岁
             <Button onClick={ addAge } type="primary" >增加我的年龄</Button>
         </div>
         <div>
             我的名字是 <span>{name}</span>
             <Button type="primary"  onClick={ ()=>{setName(name+'*')} } >改变我的名字</Button>
         </div>
         <h2>Redux</h2>
         <Demo />
      </div>
    );
  }
export default Add;