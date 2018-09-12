<template>
<div>
<Test
  :items="items"
  :fields="fields"
  :beSelectedIdArr="beSelectedIdArr"
></Test>
</div>
</template>

<script>
import Test from './test.vue';
const items = [
  { isActive: true, age: 40, first_name: 'Dickerson', last_name: 'Macdonald' },
  { isActive: false, age: 21, first_name: 'Larsen', last_name: 'Shaw' },
  { isActive: false, age: 89, first_name: 'Geneva', last_name: 'Wilson' },
  { isActive: true, age: 38, first_name: 'Jami', last_name: 'Carney' }
]
const fields = [
            {key:"allSelected",label:"全选"},
            {key:"isActive",label:'wer'},
            {key:"age",label:'年龄'},
            {key:"first_name",label:'名'},
            {key:"last_name",label:'姓氏'}
        ]
export default {
  name: 'HelloWorld',
  components:{Test},
  data () {
    return {
      items:items,
      fields:fields,
      beSelectedIdArr:[40],
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
