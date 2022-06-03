import React from 'react';

const SelectFind = ({options, ...props}) => {
    return (
        <select name="" id="" style={{color: "black", backgroundColor: "white"}}
                {...props}
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