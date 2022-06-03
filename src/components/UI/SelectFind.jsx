import React from 'react';

const SelectFind = ({options, value, setValue}) => {
    return (
        <select name="" id="" style={{color: "black", backgroundColor: "white"}}
                value={value}
                onChange={e => setValue(e.target.value)}
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