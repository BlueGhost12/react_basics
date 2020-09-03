import React from 'react';
import '../css/styles.css'

// function for getting year
// const getYear = () => {
//     const newDate = new Date();
//     return newDate.getFullYear();
// }



const Header = (props) => {
    // state = {
    //     keywords: "Hello"
    // }

    // inputChangeHandler = (event) => {
    //     this.setState({
    //         keywords: event.target.value
    //     });
    // }
    return(
        <header>
            <div className="logo">Logo</div>
                <input 
                type="text"
                onChange={ props.keyword }
            />
        </header>
    )
}
export default Header;