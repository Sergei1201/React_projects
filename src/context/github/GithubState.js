import React, {useReducer} from 'react'
import axios from 'axios'
import githubContext from './githubContext'
import githubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS

} from '../types'
// initial state
const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false
    }
// use reducer
    const [state, dispatch] = useReducer(githubReducer, initialState)

    // Search Users

    // Get User

    // Get Repos

    // Clear Users

    // Set Loading
    //Use context provider
   return <githubContext.Provider
       value = {{
           users: state.user,
           user: state.users,
           repos: state.repos,
           loading: state.loading

       }}
      > {props.children}
   </githubContext.Provider>
}

export default GithubState

