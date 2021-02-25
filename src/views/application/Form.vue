<template>
  <div>
      <MasterFormHeader/>
      <MasterForm/>
  </div>
</template>

<script>

import MasterFormHeader from '@/components/application/administration/MasterFormHeader.vue';
import MasterForm from '@/components/application/administration/MasterForm.vue';


export default {
    components:{
        MasterForm,
        MasterFormHeader
    }
}
</script>

<style>

</style>