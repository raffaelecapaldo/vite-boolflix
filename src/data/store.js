import { reactive } from 'vue';
import axios from 'axios';


export const store = reactive({
    apiUrl: 'https://api.themoviedb.org/3/',
    imagesUrl: 'https://image.tmdb.org/t/p/w500/',
    defaultImage: 'https://nbcpalmsprings.com/wp-content/uploads/sites/8/2021/12/BEST-MOVIES-OF-2021.jpeg',
    endpoints: {
        search: 'search',
        movies: 'movie',
        tv: 'tv',
        popular: 'popular',
        topRated: 'top_rated',
    },
    queryStrings: {
        api_key: '6043bd276afcbd1e16de3c10768340c4',
        query: ''
    },
    tv: [],
    movies: [],
    extramovies: [],
    extratv: [],
    apiError: false,
    rendering:1,
    newRating(rate) {
        rate = parseInt(rate) / 2;
        rate = Math.ceil(rate);
        return rate;
    },
    getData(endpoint, category) {
        let params = {}
        for (let key in store.queryStrings) {
            if (store.queryStrings[key]) {
                params[key] = store.queryStrings[key]
            }
        }
        axios.get(store.apiUrl + store.endpoints[endpoint] + '/' + store.endpoints[category], { params }).then((res) => {
            if (endpoint != store.endpoints.search) {
                store['extra'+endpoint] = res.data.results;
            }
            else {
                store[category] = res.data.results;
            }
            this.rendering++;//Ogni nuova chiamata forza rendering di search


        }).catch((error) => {
            this.apiError = true;
        })
    },
    notsearched: true,
    searchLoading: false,



})