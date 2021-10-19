import React, {useReducer} from 'react'
import AlertContext from './alertContext'
import AlertReducer from './alertReducer'

import {
    SET_ALERT,
    REMOVE_ALERT
} from '../types'
// initial state
const AlertState = props => {
    const initialState = null
// use reducer
    const [state, dispatch] = useReducer(AlertReducer, initialState)

    const setAlert = (msg, type) => {
     dispatch({type: SET_ALERT, payload: {msg, type}})
     setTimeout(() => dispatch({type: REMOVE_ALERT}), 5000)
        
      }
      
    
      
    //Use context provider
   return <AlertContext.Provider
       value = {{
           alert: state,
           setAlert

       }}
      > {props.children}
   </AlertContext.Provider>
   }

export default AlertState

