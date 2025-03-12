import axios from 'axios';

const api = axios.create({
  baseURL: 'http://10.89.240.72:5000/api/v1/',
  headers:{
    accept: "application/json"
  }
});

const sheets = {
    postCadastro: (user) => api.post("user/", user),
    postLogin: (user) => api.post("login/", user),
    postEvento: (evento) => api.post("evento/", evento),
    postIngresso: (ingresso) => api.post("ingresso/", ingresso),
    postOrganizador: (organizador) => api.post("org/", organizador)
}

export default sheets;