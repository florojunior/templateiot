<template>
  <v-dialog v-model="getModalConfirm.show" persistent max-width="360px">
    <v-card>
      <v-card-text>
        <v-row>
          <v-col cols=12 class="pa-12 pb-8">
            <p>{{label}}</p>
          </v-col>
          <v-col cols=12 class="d-flex flex-column pa-12 pt-0 pb-4">
            <v-btn
              rounded
              color="primary"
              dark
              class="mb-4"
              @click="deleteItems()"
            >
              Sim
            </v-btn>
            <v-btn
              outlined
              rounded
              color="primary"
              dark
              @click="closeModalConfirm()"
            >
              Cancelar
            </v-btn>
          </v-col>
        </v-row>
        </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
export default {
  data() {
        return {
            label: 'Tem certeza que deseja excluir item?'
        };
    },
  computed: {
    ...mapGetters('modal', ['getModalConfirm']),
    ...mapGetters('model', ['getListSelectedDeleted']),
  },
  methods: {
    ...mapActions('modal', ['closeModalConfirm']),
    ...mapActions('model', ['fetchDeleteItems']),
    handleClose() {
      this.closeModal();
    },
    deleteItems(){
      this.fetchDeleteItems(this.getListSelectedDeleted);
      this.closeModalConfirm();
    }
  },
};
</script>

<style>
</style>
