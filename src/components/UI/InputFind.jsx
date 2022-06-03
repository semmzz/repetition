import React from 'react';

const InputFind = ({value, onChange}) => {
    return (
        <input type="text" style={{marginTop: 15, color: "black"}}
               value={value}
               onChange={e => onChange(e.target.value)}
               placeholder='Find...'
        />
    );
};

export default InputFind;