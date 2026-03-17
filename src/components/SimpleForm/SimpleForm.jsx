import React from 'react';

const SimpleForm = () => {
    const handleClick =(e)=>{
        // console.log("click submit button")
        e.preventDefault()
        console.log(e.target.name.value)
        console.log(e.target.email.value)

    }
    return (
        <div>
            <h3>Simple form</h3>
            <form onSubmit={handleClick}>
                <input type="text" placeholder='name' name='name' /><br />
                <input type="email" placeholder='email' name='email' /><br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default SimpleForm;