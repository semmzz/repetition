import React from 'react';

const InputFind = ({filter, setFilter}) => {
    return (
        <input type="text" style={{marginTop: 15, color: "black"}}
               value={filter.query}
               onChange={e => setFilter({...filter, query: e.target.value})}
               placeholder='Find...'
        />
    );
};

export default InputFind;