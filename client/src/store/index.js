import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'
import router from '../router/index';

const axios = Axios.create({
  baseURL: 'http://localhost:8000/api',
  headers: {
    'Content-Type': 'application/json',
  }
})
import firebase from 'firebase';
import 'firebase/database';

var firebaseConfig = {
  apiKey: "AIzaSyCHr_FqKER__XR8ptVozAV29_imwCcde5c",
  authDomain: "diploma-38b59.firebaseapp.com",
  databaseURL: "https://diploma-38b59-default-rtdb.firebaseio.com",
  projectId: "diploma-38b59",
  storageBucket: "diploma-38b59.appspot.com",
  messagingSenderId: "652370882400",
  appId: "1:652370882400:web:67896b0b80bd635b947805"
};

firebase.initializeApp(firebaseConfig);
const testsDb = firebase.database().ref("tests/")

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

    currentUser: null,

    isTestModalOpen: false,
    tests: null,
    activeTest: null,
    testTime: 0,
    timeInterval: null,
    testFinished: false,
    testResult: null
  },
  mutations: {
    'LOG_USER'(state, payload) {
      state.currentUser = payload
      localStorage.setItem("diploma_user", JSON.stringify(payload));
    },
    'LOG_OUT'(state) {
      state.currentUser = null;
      localStorage.removeItem("diploma_user");
    },
    'SET_CONFIG'(state, payload) {
      state.config = payload
    },
    'FIND_ERROR'(state, id) {
      debugger
      state.config.errors[id].selected = false;
      state.config.errors[id].isFinded = true;
      state.config.errors[id].testTime = state.testTime;
    },
    'TOGGLE_TEST_MODAL'(state) {
      state.isTestModalOpen = !state.isTestModalOpen
    },
    'LOAD_TESTS'(state, tests) {
      state.tests = tests;
    },
    'START_TEST'(state, { test, errors }) {
      state.config = errors;
      state.activeTest = test;
      state.testTime = 0;
      state.timeInterval = setInterval(() => {
        state.testTime++;
      }, 1000);
      router.push({ name: 'Preview' });
    },
    'END_TEST'(state, result) {
      state.testResult = result;
      state.testTime = 0;
      clearInterval(state.timeInterval);
      state.timeInterval = null;
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
    },

    saveTest({state, commit}, {title, description}) {
      return axios.post('/test/', {
        title,
        description,
        author_id: state.currentUser.id,
        errors: state.config
      })
        .then((res) => {
          commit('TOGGLE_TEST_MODAL')
          return Promise.resolve(res.data)
        })
        .catch(error => { console.log(error) })
    },
    getTests({ commit }) {
      axios.get('/test/')
        .then((res) => {
          commit('LOAD_TESTS', res.data.tests)
        })
        .catch(error => { console.log(error) })
    },
    removeTest({ dispatch }, id) {
      axios.delete('/test/', { data: { "id": id}})
        .then(() => {
          dispatch('getTests')
        })
        .catch(error => { console.log(error) })
    },
    startTest({ commit }, test) {
      if (test.config_url && test.config_url[0] === '-') {
        testsDb.child(test.config_url)
          .on('value', (snapshot) => {
            commit('START_TEST', { test, errors: snapshot.val() })
          })
      }
    },
    endTest({ state, commit }) {
      axios.post('/test/finish', {
        config: state.config,
        time: state.testTime,
        test: state.activeTest,
        user: state.currentUser.id
      })
        .then(res => {
          commit('END_TEST', res.data)
        })
        .catch(error => { console.log(error) })
    }
  },
  getters: {
    isTeacher: state => state.currentUser.type === 'teacher',
  },
  modules: {
  }
})
