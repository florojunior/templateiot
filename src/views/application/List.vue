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
    components:{
        MasterList,
        MasterHeaderList
    },
    created(){
    }
}
</script>

<style>

</style>