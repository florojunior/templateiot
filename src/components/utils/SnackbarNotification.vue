<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="getNotification.show"
      timeout="10000"
      multi-line
      :color="
        getNotification.type === 'default' ? 'primary' : getNotification.type
      "
      @input="closeNotification()"
    >
      {{ getNotification.message }}
      <template v-slot:action="{ attrs }">
        <v-btn text v-bind="attrs" @click="closeNotification()">{{
          button_close
        }}</v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  data() {
    return {
      button_close: 'Fechar',
    };
  },
  computed: {
    ...mapGetters('notification', ['getNotification']),
  },
  methods: {
    ...mapActions('notification', ['closeNotification']),
  },
};
</script>

<style>
</style>
