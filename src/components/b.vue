<template>
    <AA>
        <slot 
            name="y" 
            :data="data"
        >
            edc
        </slot>
    </AA>
</template>
<script>
import AA from './a.vue'
    export default{
        name:"BB",
        components:{AA},
        data(){
            return {
                data:'aaa'
            }
        }
    }
</script>
