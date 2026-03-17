import React from 'react';

const FromAction = () => {
    const handleFromData =(formData)=>{
        console.log(formData.get("name"));
        console.log(formData.get("email"))
    }
    return (
        <div>
            <h3>From action</h3>
            <form action={handleFromData}>
                <input type="text" name='name' placeholder='name' /><br />
                <input type="email" name='email' placeholder='email' /><br />
                <button type='submit'>Submit</button>
            </form>
        </div>
    );
};

export default FromAction;