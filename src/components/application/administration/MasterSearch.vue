<template>
  <v-row class="ma-0 d-flex justify-space-between" style="background-color: #f7f7f7">
        <v-col cols="10" sm="10" md="4" lg=4 xl=4 class="pa-0 pl-6 pt-2 pr-8">
            <v-text-field
                x-small
                solo dense
                v-model="valueSearch"
                label="Procurar por"
                append-icon="mdi-magnify"
                color="primary"
            ></v-text-field>
        </v-col>
        <v-col cols="2" sm="2" md="4" lg=3 xl=3 class="pl-6 pt-2 d-flex justify-end">
            <v-btn
                color="primary"
                fab
                dark
                small
            >
                <v-icon>mdi-plus</v-icon>
            </v-btn>
            <v-btn
                color="primary"
                fab
                dark
                small
                @click="orderBy()"
            >
                <v-icon>mdi-filter</v-icon>
            </v-btn>
        </v-col>
    </v-row>
</template>

<script>

import { mapActions } from 'vuex';

export default {
    data:()=>{
        return {
            valueSearch: ""
        }
    },
    watch:{
        valueSearch(newValue, oldValue){
            this.fetchListFiltered(newValue);
        }
    },
    async created(){
    },
    methods:{
        ...mapActions('model', ['fetchListFiltered']),
        ...mapActions('modal', ['showModalOrder']),
        orderBy(){
            this.showModalOrder({
                show: true
            })
        }
    }    
}
</script>

<style>

</style>