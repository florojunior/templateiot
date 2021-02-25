<template>
  <div>
      <MasterFormEditHeader/>
      <MasterFormEdit/>
  </div>
</template>

<script>

import MasterFormEditHeader from '@/components/application/administration/MasterFormEditHeader.vue';
import MasterFormEdit from '@/components/application/administration/MasterFormEdit.vue';


export default {
    components:{
        MasterFormEdit,
        MasterFormEditHeader
    }
}
</script>

<style>

</style>