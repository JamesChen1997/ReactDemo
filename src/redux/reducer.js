import {ADD,SUB} from './type'
export default function count ( preState=10,action ) {
      const {type,data} = action
      switch( type ){
          case ADD :
              console.log('reducers-add',data)
              return preState+=data ;
          case SUB :
              console.log('reducers-sub',data)
              return preState-=data ;
          default :
              return preState
      }
}