<template>
<div>
    <b-table striped hover :items="items" :fields="fields">
        <template slot="HEAD_allSelected" slot-scope="data">
                <b-form-checkbox 
                v-model="allStatus"
            >
            全选
            </b-form-checkbox>
        </template>
        <!-- <template slot="first_name" slot-scope="data">
            sadasda
        </template> -->

        <template 
            v-for="item in fields" 
            :slot="item.key" 
            slot-scope="data"
        >
            <slot :name='item.key' :data="data">
                {{item.key}}
            </slot>
        </template>
    </b-table>
    <b-button  @click="handleSave" variant='primary'>
        保存
    </b-button>
</div>
</template>
<script>


export default {
  name: 'Test',
  props:{
      items:{
          type:Array,
          default(){
              return [ ]
          }
      },
      fields:{
          type:Array,
          default(){
              return []
          }
      },
      beSelectedIdArr:{
          type:Array,
          default(){
              return []
          }
      },
      handleEmitSave:{
          type:Function
      }
  },
  mounted(){

  },
  watch:{
      status:function(val,newVal){
        this.selectedRow = this.selectedRow.filter(item=>{
              return this.status.includes(item.age)
        })
        console.log('43',this.selectedRow)
      },
    //   allStatus(val,oldVal){
    //       if(val!=oldVal){
    //         this.status =this.items.map(a=>{
    //              return a.age
    //           })
    //       }
    //   }
  },
  data () {
      return {
        message:'qwqewq',
        allStatus:false,
        status:[],
        selectedRow:[],
        filterFields:['allSelected'],
      }
  },
  mounted(){
      this.fetchTableData();
      this.initStatus()
  },
  methods:{
      fetchTableData(){
          this.$http.get('/api').then(({data})=>{
        })
      },
      handleItemSelected(item){//在watcher函数前先执行将被点击的Row保存到数组中，在Watcher中会监听状态保存选中的删除非选中的
        this.selectedRow.push(item)
      },
      handleSave(){
          let ArrId = this.status;
          let ArrRow = this.selectedRow;
          this.$emit('handleEmitSave',ArrId,ArrRow);
      },
      initStatus(){//初始化被选中项目
        this.status = this.beSelectedIdArr
      }
  }
}
</script>

<style scoped>

</style>
