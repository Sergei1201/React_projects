import React, { Component } from 'react'
import PropTypes from 'prop-types'


export class Search extends Component {
    state = {
        text: ''
    }

    static propTypes = {
        searchUsers: PropTypes.func.isRequired,
        clearUsers: PropTypes.func.isRequired,
        showClear: PropTypes.bool.isRequired,
    }
    // When we change the text that is typed in the search bar
    onchange = e => 
       // When we create onchange function, we are setting the setState with the name to the alue that is being typed in
        this.setState({ [e.target.name]: e.target.value})
    onSubmit = (e) => {
        // Preventing the default behavior
    e.preventDefault()
    // searching for the user that was typed in the search bar
    this.props.searchUsers(this.state.text)
    // clearing the search bar
    this.setState({text: ''})

 }  
    render() {
        const {clearUsers, showClear} = this.props;
        return (
            <div>

                <form onSubmit = {this.onSubmit} className = 'form'>
                    <input type="text"
                           name = 'text' 
                           placeholder = 'Search users...' 
                           value = {this.state.text}
                           onChange = {this.onchange} 
                            />    
                    <input type='submit' value = 'Search' className = 'btn btn-dark btn-block' />
                </form>
               {showClear && <button className="btn btn-light btn-block" onClick = {clearUsers}>Clear</button>} 
                
                
                
                
            </div>
        )
    }
}

export default Search
