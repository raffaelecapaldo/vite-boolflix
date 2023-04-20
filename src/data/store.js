import { reactive } from 'vue';

export const store = reactive({   
    apiUrl: 'https://api.themoviedb.org/3/',
    imagesUrl: 'https://image.tmdb.org/t/p/w500/',
    defaultImage: 'https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg',
    endpoints: {
        search: 'search',
        movie: 'movie',
        tv: 'tv',
        popular: 'popular',
        topRated:'top_rated'
    },
    queryStrings: {
        api_key: '6043bd276afcbd1e16de3c10768340c4',
        query: ''
    },
    shows: [],
    movies: [],
    newRating(rate) {
        rate = parseInt(rate) / 2;
        rate = Math.ceil(rate);
        return rate;
      },


})