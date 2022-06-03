import React from 'react';

const SelectFind = ({options, filter, setFilter}) => {
    return (
        <select name="" id="" style={{color: "black", backgroundColor: "white"}}
                value={filter.find}
                onChange={e => setFilter({...filter, find: e.target.value})}
        >
            {options.map(op => (
                    <option key={op.value} value={op.value}>
                        {op.name}
                    </option>
                )
            )}
        </select>
    );
};

export default SelectFind;