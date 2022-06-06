import React from 'react';

const Pagination = ({
                        pagesArray, currentPage, setCurrentPage,
                        limit, setLimit, postsInPageArray
                    }) => {
    return (
        <div className='page__wrapper'>
            <div className='pages'>
                {pagesArray.map(p => (
                    <div key={p}
                         className={p === currentPage ? 'page active' : 'page'}
                         onClick={() => setCurrentPage(p)}
                    >
                        {p}
                    </div>
                ))}
            </div>

            <div className='postsCount'>
                <select style={{color: "black", backgroundColor: "white"}}
                        value={limit}
                        onChange={e => setLimit(e.target.value)}
                >
                    {postsInPageArray.map(p => (
                        <option
                            key={p.value}
                            value={p.value}
                        >{p.name}</option>
                    ))}

                </select>
            </div>
        </div>
    );
};

export default Pagination;