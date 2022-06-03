import React from 'react';
import InputFind from "./UI/InputFind";
import SelectFind from "./UI/SelectFind";
import SelectSort from "./UI/SelectSort";

const PostFilter = ({filter, setFilter}) => {
    return (
        <div>
            <InputFind
                value={filter.query}
                onChange={e => setFilter({...filter, query: e.target.value})}
            />

            <SelectFind
                value={filter.find}
                onChange={e => setFilter({...filter, find: e.target.value})}

                options={[
                    {value: 'all', name: 'Везде'},
                    {value: 'title', name: 'В названии'},
                    {value: 'body', name: 'В описании'},
                ]}
            />

            <br/>

            <SelectSort
                value={filter.sort}
                onChange={e => setFilter({...filter, sort: e.target.value})}

                defaultValue="Сортировать:"
                options={[
                    {value: 'title', name: 'По названию'},
                    {value: 'body', name: 'По описанию'},
                ]}

            />
        </div>
    );
};

export default PostFilter;