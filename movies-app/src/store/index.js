import { createStore } from "vuex";

import axios from "axios";




const baseURL="http://localhost:5000/"



  



export default createStore({
  state: {

    movies: [],
   
  },

  mutations: {
    SET_MOVIES(state, movies) {
      state.movies = movies;
    }

   

  },
  actions: {
    async getMovies({ commit }) {
      try {
        const response = await axios.get(baseURL+"/movies");
        console.log(response.data);
        commit("SET_MOVIES", response.data);
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    },
   
    

    
   
  },
  getters: {},
  modules: {},
});
