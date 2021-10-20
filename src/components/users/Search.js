import React from 'react'
import { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'
import AlertContext from '../../context/alert/alertContext'


const Search = () => {
    const githubContext = useContext(GithubContext)
    const alertContext = useContext(AlertContext)
    // state = {
    //     text: ''
    // }
    const [text, setText] = useState('')
    // When we change the text that is typed in the search bar
    const onchange = e => 
       // When we create onchange function, we are setting the setState with the name to the value that is being typed in
       setText(e.target.value)
    const onSubmit = e => {
        // Preventing the default behavior
    e.preventDefault()

    // Alert if there is nothing in the search bar
    if(text ==='') {
        alertContext.setAlert('Please enter a name...', 'light')
    } else {
    // searching for the user that was typed in the search bar
    githubContext.searchUsers(text)
    // clearing the search bar
    setText('')
    }
    
    

 }  
        return (
            <div>

                <form onSubmit = {onSubmit} className = 'form'>
                    <input type="text"
                           name = 'text' 
                           placeholder = 'Search users...' 
                           value = {text}
                           onChange = {onchange} 
                            />    
                    <input type='submit' value = 'Search' className = 'btn btn-dark btn-block' />
                </form>
               {(githubContext.users.length) > 0 && <button className="btn btn-light btn-block" onClick = {githubContext.clearUsers}>Clear</button>} 
                
                
                
                
            </div>
        )
    
}

export default Search
