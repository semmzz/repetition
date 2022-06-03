import React from 'react';

const SelectSort = ({defaultValue, options, ...props}) => {
    return (
        <select
            style={{color: "black", backgroundColor: 'white', marginTop: 10}}
            {...props}
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