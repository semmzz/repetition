import React from 'react';
import {useMemo} from "react";

const useSortedPosts = (posts, sort) => {
    const sortedPosts = useMemo(() => {
        if (sort) {
            return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
        }
        return posts;
    }, [sort, posts]);
    return sortedPosts;
}


export const usePosts = (posts, filter) => {
    const sortedPosts = useSortedPosts(posts, filter.sort)

    const sortedAndSearchedPosts = useMemo(() => {
        // eslint-disable-next-line default-case
        switch (filter.find) {
            case 'all':
                return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.query.toLowerCase())
                    || el.body.toLowerCase().includes(filter.query.toLowerCase()))
            case 'title':
                return sortedPosts.filter(el => el.title.toLowerCase().includes(filter.query.toLowerCase()))
            case 'body':
                return sortedPosts.filter(el => el.body.toLowerCase().includes(filter.query.toLowerCase()))
        }
    }, [filter.query, sortedPosts, filter.find]);

    return sortedAndSearchedPosts;
}
