import React from 'react';

const Rainbow = (wrappedComponent) =>  {


    const colours = [ "red", "pink", "orange", "blue", "green", "yellow"];
    const randomColours = colours[Math.floor(Math.random()*5 )];
    const className = randomColours + '-text';

    return (props) => {
        return (
            <div className={className}>
                <wrappedComponent {...props}/>
            </div>
        )
    }
}

export default Rainbow;