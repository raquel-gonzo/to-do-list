import React, { useState } from 'react';

const Input = () => {
    return(
        <div>
            <label>Add a task: </label>
            <input type="text" 
            name="task" 
            id="task" 
            placeholder="water plants, pack lunch, etc."/>
    </div>
    ) 
}

export default Input;