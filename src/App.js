import React, {Fragment} from 'react';
import { useState } from 'react';
import Navbar from './components/layout/Navbar';
//import UserItem from './components/users/UserItem';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import Alert from './components/layout/Alert';
import { About } from './components/pages/About';
import './App.css';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


const App = () =>  {
  // state = {
  //   users: [],
  //   user: {},
  //   repos: [],
  //   loading: false,
  //   alert: null
  // }
 const [users, setUsers] = useState([])
 const [user, setUser] = useState({})
 const [repos, setRepos] = useState([])
 const [loading, setLoading] = useState(false)
 const [alert, setAlert] = useState(null)
  // async componentDidMount() {
  //   this.setState({loading: true})
  // const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
  // this.setState({users: res.data, loading: false})
  // }

   const searchUsers = async text => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // setUsers({users: res.data.items, loading: false})
    setUsers(res.data.items)
    setLoading(false)


  }

  // Getting a single GitHub user
   const getUser = async username => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // this.setState({user: res.data, loading: false})
    setUser(res.data)
    setLoading(false)
  }

  // Getting user's repos
    const getUserRepos = async username => {
    setLoading(true)
    const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    // this.setState({repos: res.data, loading: false})
    setRepos(res.data)
    setLoading(false)
  }

  // Clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false)
  }
  //this.setState({users: [], loading: false})


  // Show an alert if there's nothing in the search bar
  const showAlert = (msg, type) => {
    setAlert(msg, type)
    setTimeout(() => setAlert(null), 5000)
  }
 
    //const {loading, users, alert, user, repos} = this.state;
    
  
   
    return (

      <Router> 

         
      

     <div className = 'App'>
      <Navbar />
      <div className="container">
        <Alert alert = {alert} />
        
         
          <Switch>
            <Route exact path = '/' render = {props =>(
          <Fragment>

              <Search searchUsers ={searchUsers} clearUsers = {clearUsers} showClear ={(users.length) > 0 ? true : false} setAlert = {showAlert} />
              <Users loading = {loading} users = {users} />
      
          </Fragment>
            )}/>
            <Route exact path = '/about' component = {About} />
            <Route exact path = '/user/:login' render = {props => (
            <User {...props} getUser = {getUser} getUserRepos = {getUserRepos} user = {user} loading = {loading}
            repos = {repos} />
            )} />
          </Switch> 
        
        
        

         

        
     

      </div>
    
     </div>
       
    
     </Router>

      
        
      
      
    );

 
}

export default App;
