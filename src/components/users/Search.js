import React from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'


const Search = ({searchUsers, clearUsers, showClear, setAlert }) => {
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
        setAlert('Please enter a name...', 'light')
    } else {
    // searching for the user that was typed in the search bar
    searchUsers(text)
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
               {showClear && <button className="btn btn-light btn-block" onClick = {clearUsers}>Clear</button>} 
                
                
                
                
            </div>
        )
    
}
Search.propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
    setAlert: PropTypes.func.isRequired
}

export default Search
