import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const state = {hello:"Hey!"};

const mutations = {};

const actions = {};

export const store = new Vuex.Store({ state, mutations, actions });
