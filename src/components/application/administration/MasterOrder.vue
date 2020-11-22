<template>
  <v-dialog v-model="getModalOrderr.show" persistent max-width="360px">
    <v-card>
      <v-card-title class="text-subtitle-1">Ordenar Por</v-card-title>

      <v-card-text class="text-body-2">
        <v-radio-group
          v-model="fieldSelected"
          row
        >
          <v-radio
            v-for="(field) in fields"
            :key="field.dsPlate"
            :label="field.description"
            :value="field.field"
          ></v-radio>
        </v-radio-group>
        <v-radio-group
          v-model="directionSelected"
          row
        >
          <v-radio
            v-for="(direction) in directions"
            :key="direction.description"
            :label="direction.description"
            :value="direction.field"
          ></v-radio>
        </v-radio-group>
        {{directionSelected}} 
      </v-card-text>

      <v-card-actions class="d-flex justify-end">
        <v-btn color="primary" @click="filter()">Filtrar
          <v-icon right>mdi-card-search-outline</v-icon>
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Order from '@/model/order';

export default {
  data(){
    return {
      fieldSelected:"",
      directionSelected:"",
      fields:[],
      directions:[]
    }
  },
  created: function(){
    const orderModel = new Order();
    orderModel.getOrderListHeader().forEach(element => {
      this.fields.push(element);
    });

    orderModel.getDirectionHeader().forEach(element => {
      this.directions.push(element);
    });
  },
  computed: {
    ...mapGetters('modal', ['getModalOrderr']),
  },
  methods: {
    ...mapActions('modal', ['closeModalOrder']),
    ...mapActions('model', ['fetchListOrdered']),
    handleClose() {
      this.fetchListOrdered({
          field: this.fieldSelected, 
          direction: this.directionSelected
        });
    },
    async filter(){
      await this.fetchListOrdered({
          field: this.fieldSelected, 
          direction: this.directionSelected
        });
      
      this.closeModalOrder();
    }
  },
};
</script>

<style>
</style>
