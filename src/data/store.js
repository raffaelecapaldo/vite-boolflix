import { reactive } from 'vue';

export const store = reactive({   
    apiUrl: 'https://api.themoviedb.org/3/',
    endpoints: {
        search: 'search',
        movie: 'movie',
        tv: 'tv',
    },
    queryStrings: {
        api_key: '6043bd276afcbd1e16de3c10768340c4',
        query: ''
    },
    shows: [],
    movies: [],


})