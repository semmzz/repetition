import React from 'react';

const SelectSort = ({defaultValue, options, filter, setFilter}) => {
    return (
        <select
            style={{color: "black", backgroundColor: 'white', marginTop: 10}}
            value={filter.sort}
            onChange={e=> setFilter({...filter, sort: e.target.value})}
        >
            <option disabled value=''>{defaultValue}</option>

            {options.map(op => (
                <option key={op.value} value={op.value}>
                    {op.name}
                </option>
            ))}
        </select>
    );
};

export default SelectSort;