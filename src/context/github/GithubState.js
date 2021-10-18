import React, {useReducer} from 'react'
import axios from 'axios'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
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
    const [state, dispatch] = useReducer(GithubReducer, initialState)

    // Search Users
    const searchUsers = async text => {
        setLoading()
        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        // setUsers({users: res.data.items, loading: false})
        dispatch({type: SEARCH_USERS, payload: res.data.items})
        //setUsers(res.data.items)
        //setLoading(false)
    
    
      }

    // Get User
    const getUser = async username => {
        setLoading()
        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
        // this.setState({user: res.data, loading: false})
        // setUser(res.data)
        // setLoading(false)
        dispatch({type: GET_USER, payload: res.data})
      }

    // Get Repos

    // Clear Users
    const clearUsers = () => dispatch({type: CLEAR_USERS})
        // setUsers([])
        // setLoading(false)

    // Set Loading
    const setLoading = () => dispatch({type: SET_LOADING})
    //Use context provider
   return <GithubContext.Provider
       value = {{
           users: state.users,
           user: state.user,
           repos: state.repos,
           loading: state.loading,
           searchUsers,
           clearUsers,
           getUser

       }}
      > {props.children}
   </GithubContext.Provider>
}

export default GithubState

