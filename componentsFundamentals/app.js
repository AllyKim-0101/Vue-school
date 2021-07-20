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

//props are dynamic data dervied from outside of component. plan component is nesdted in plan-picker component
let PlanComponent = {
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
};

//below is global component (not ideal so making a local compo for better user experience)
// Vue.component("plan-picker", {
//   //template is a blueprint(shape) of component
//   template: "#plan-picker-template",
//   //plan component is locally registered in plan-picker,this means that plan compo can not be used outside
//   components: {
//     plan: PlanComponent,
//   },
//   data() {
//     return {
//       plans: ["The single", "The curious", "The Addict"],
//     };
//   },
// });

let planPickerComponent = {
  //template is a blueprint(shape) of component
  template: "#plan-picker-template",
  //plan component is locally registered in plan-picker,this means that plan compo can not be used outside
  components: {
    plan: PlanComponent,
  },
  data() {
    return {
      plans: ["The single", "The curious", "The Addict"],
    };
  },
};

//it mounts element with id
//planPicker does not have a parent component so add components to register below
new Vue({
  el: "#app",
  components: {
    planPicker: planPickerComponent,
  },
});
