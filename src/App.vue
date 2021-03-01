<template>
  <v-app>
    <v-main style="background-color: white">
      <v-container fluid class="pa-0">
        <router-view></router-view>
        <Modal />
      </v-container>
    </v-main>

    <v-footer app>
      <!-- -->
    </v-footer>
  </v-app>

</template>

<script>
import Home from '@/views/Home';
import Modal from '@/components/utils/Modal';

export default {
  name: 'AppOne',
  components: {
    Modal,
  },
};
</script>

<style></style>
