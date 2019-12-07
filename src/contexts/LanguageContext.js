//Only make use of it only where we want to connect it
//That is why we are making a seperate file for context
import React from 'react'; 

//default value is english
const Context = React.createContext('english');

export class LanguageStore extends React.Component {
    state = { langauge : 'english' }

   onLanguageChange = (language) => {
        this.setState({language}); 
    }

    render() {
        return (
            <Context.Provider value = {{...this.state,onLanguageChange: this.onLanguageChange}}>
                {this.props.children }
            </Context.Provider>
        )
    }

}

export default Context;