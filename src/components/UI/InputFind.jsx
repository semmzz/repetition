import React from 'react';

const InputFind = (props) => {
    return (
        <input type="text" style={{marginTop: 15, color: "black"}}
               placeholder='Find...'
               {...props}
        />
    );
};

export default InputFind;