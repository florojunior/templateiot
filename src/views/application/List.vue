<template>
  <div>
      <MasterHeaderList/>
      <MasterList/>
  </div>
</template>

<script>

import MasterList from '@/components/application/administration/MasterList.vue';
import MasterHeaderList from '@/components/application/administration/MasterHeaderList.vue';


export default {
    created(){
    },
    components:{
        MasterList,
        MasterHeaderList
    }
}
</script>

<style>

</style>