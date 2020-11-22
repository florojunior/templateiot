<template>
  <div>
    <div class="d-flex flex-grow-1 justify-center align-content-center" style="height: calc(100vh);">
      <router-view></router-view>
    </div>
    <Modal />
    <!--<SnackbarNotification />-->
  </div>
</template>

<script>
import Modal from '@/components/utils/Modal.vue';
//import SnackbarNotification from '@/components/utils/SnackbarNotification.vue';

export default {
  components: {
    Modal,
  },
  data: () => ({
  }),
  computed: {
    hide() {
      return (
        this.$route.path == '/'
      );
    },
  },
  created() {},
};
</script>

<style>
</style>
