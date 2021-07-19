//vue compo. two params. 1-name of component, 2- an object that contains methods/data
//template uses a stirng and defines html and general markup for our component
// Vue.component("click-counter", {
//   //template: '<button @click="count++">{{count}}</button>',

//   //x-template
//   template: "#click-counter-template",
//   data() {
//     return {
//       count: 0,
//     };
//   },
// });

Vue.component("plan-picker", {
  //template is a blueprint(shape) of component
  template: "#plan-picker-template",
  data() {
    return {
      plans: ["The single", "The curious", "The Addict"],
    };
  },
});

//props are dynamic data dervied from outside of component
Vue.component("plan", {
  template: "#plan-template",
  //data type of props. choosing object is the best practice than array
  //props: ["name"],
  props: {
    // name: String === as below
    //default value will be used when props is not provided,
    // required means
    name: {
      type: String,
      default: "Ally",
      required: true,
    },

    price: Number,
  },
});

//it mounts element with id
new Vue({
  el: "#app",
});
