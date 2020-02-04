import Vue from "vue";

new Vue({
  el: "#app",
  template: `<div>Hello from {{vue}}</div>`,
  data: {
    vue: "the other side!"
  }
});
