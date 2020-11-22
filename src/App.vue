<template>
  <v-app>
    <v-app-bar app dark color="#354A5F">
      <v-toolbar-title >
        <p color="text--white mb-0 pb-0 text-center" style="margin-bottom: 0px !important">Log4decision</p>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
          <v-icon>mdi-account-circle</v-icon>
        </v-btn>
      <!-- -->
    </v-app-bar>
    <v-main style="background-color: #f7f7f7">
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
  name: 'App',
  components: {
    Modal,
  },
};
</script>

<style></style>
