import React from 'react';
import InputFind from "./UI/InputFind";
import SelectFind from "./UI/SelectFind";
import SelectSort from "./UI/SelectSort";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <InputFind
                filter={filter}
                setFilter={setFilter}
            />

            <SelectFind
                filter={filter}
                setFilter={setFilter}

                options={[
                    {value: 'all', name: 'Везде'},
                    {value: 'title', name: 'В названии'},
                    {value: 'body', name: 'В описании'},
                ]}
            />
            <br/>

            <SelectSort
                defaultValue="Сортировать:"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}
                filter={filter}
                setFilter={setFilter}
            />
        </div>
    );
};

export default PostFilter;