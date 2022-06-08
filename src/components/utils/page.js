export const getPagesCount = (totalCount, limit) => {
    return Math.ceil(totalCount / limit);
}

export const getPagesArray = (totalPages) => {
    const result = []
    for (let i = 0; i < totalPages; i++) {
        result.push(i + 1)
    }

    return result
}

export const getPostsCountInPage = () => {
    const result = []

    for (let count of [3, 5, 7, 10, 15]) {
        result.push({value: count, name: `Posts in page: ${count}`})
    }
    return result
}