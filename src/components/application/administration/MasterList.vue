<template>
  <v-row class="ma-0 pa-6 pt-0" style="background-color: #f7f7f7">
      <v-col cols="12" v-for="itemList in getList" :key="itemList.id" class="ma-0 mt-0 mb-1 pa-0 pr-2">
          <v-hover v-slot="{ hover }">
            <v-card tile
            :class="{ 'on-hover': hover }"
            :elevation="hover ? 1 : 0" >
                <v-card-title class="ma-0 pa-0">
                    <v-row class="ma-0 pa-1">
                        <v-col class="ma-0 pa-1">
                            <p class="text-left mb-0">{{itemList.title}}</p>
                        </v-col>
                        <v-col class="ma-0 pa-1">
                            <p class="text-right mb-0">{{itemList.id}}</p>
                        </v-col>
                    </v-row>
                </v-card-title>
                <v-card-text class="ma-0 pa-0">
                    <v-row class="ma-0 pa-1">
                        <v-col class="ma-0 pa-1" cols=6>
                            <p class="text-left mb-0">{{itemList.description}}</p>
                            <p class="text-left mb-0">{{itemList.subdescription}}</p>
                        </v-col>
                        <v-col class="ma-0 pa-1" cols=6>
                            <p class="text-right mb-0">{{itemList.active == "N" ? 'Desativado' : 'Ativo'}}</p>
                        </v-col>
                    </v-row>
                </v-card-text>
            </v-card>
          </v-hover>  
      </v-col>
      <MasterOrder/>
  </v-row>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import MasterOrder from '@/components/application/administration/MasterOrder.vue';

export default {
    components:{
        MasterOrder
    },
    computed:{
        ...mapGetters('model', ['getList']),
    },
    async created(){
        await this.list();
    },
    methods:{
        ...mapActions('model', ['fetchList']),
        async list(){
            await this.fetchList();
        },
        async order(filter){
            await this.fetchList(filter);
        }
    }
}
</script>

<style>

</style>