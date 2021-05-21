import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

const axios = Axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  }
})

const CONFIGS = [
  {
    page: 'Каталог',
    errors: [
      {
        name: 'Відсутній логотип на панелі навігації',
        value: 1,
        selected: false,
        isFinded: false,
      },
      {
        name: 'Не підсвічується активне посилання',
        value: 1,
        selected: false,
        isFinded: false,
      },
      {
        name: 'Колір іконки телефону',
        value: 1,
        selected: false,
        isFinded: false,
      },
      {
        name: 'Позиція тексту в карточкі з Новинками',
        value: 1,
        selected: false,
        isFinded: false,
      },
      {
        name: 'Кнопка сортування не працює',
        value: 2,
        selected: false,
        isFinded: false,
      },
      {
        name: 'Пошук не працює',
        value: 2,
        selected: false,
        isFinded: false,
      },
      {
        name: 'Пошук не працює',
        value: 2,
        selected: false,
        isFinded: false,
      },
    ]
  },
  {
    page: 'TEST',
    errors: [
      {
        name: 'TEST',
        value: 1,
        selected: false
      },
    ]
  }
];

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    CONFIGS: CONFIGS,

    config: CONFIGS[0],

    currentUser: null
  },
  mutations: {
    'LOG_USER'(state, payload) {
      state.currentUser = payload
      localStorage.setItem("user", JSON.stringify(payload));
    },
    'LOG_OUT'(state) {
      state.currentUser = null;
      localStorage.removeItem("user");
    },
    'SET_CONFIG'(state, payload) {
      state.config = payload
    },
    'FIND_ERROR'(state, id) {
      state.config.errors[id].selected = false;
      state.config.errors[id].isFinded = true;
    }
  },
  actions: {
    signIn({ commit }, form) {
      return axios.post('/auth/signIn', form)
        .then((res) => {
          if (res.status) {
            commit('LOG_USER', res.data.user)
          } else {
            this.error = res.message;
          }
          return Promise.resolve(res.data)

        })
    },
    signUp({ commit }, form) {
      return axios.post('/auth/signUp', form)
        .then((res) => {
          if (res.status) {
            commit('LOG_USER', res.data.user)
          } else {
            this.error = res.message;
          }
          return Promise.resolve(res.data)

        })
    },
    changePage({ state, commit }, index) {
      commit('SET_CONFIG', state.CONFIGS[index])
    }
  },
  modules: {
  }
})
