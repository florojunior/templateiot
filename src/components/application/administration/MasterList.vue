<template>
  <v-row no-gutters>
        <v-card style="width: 100%; height: 100%">
            <v-card-title>
                <v-row no-gutters align="center" justify="center">   
                    <v-col class="d-flex flex-row" cols=4>
                        <v-btn
                            icon
                            color="blue darken-3"
                            large
                        >
                            <v-icon>mdi-plus</v-icon>
                        </v-btn>
                        <v-text-field
                            class="ml-2"
                            v-model="search"
                            prepend-inner-icon="mdi-magnify"
                            placeholder="Pesquisar"
                            label="Buscar"
                            single-line
                            small
                            dense
                            hide-details
                            outlined
                            filled
                            background-color="#fafafa"
                        ></v-text-field>
                    </v-col>
                    <v-col cols=8 class="pl-4">
                        <v-btn
                            icon
                            color="blue darken-3"
                            large
                            
                        >
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                        <v-btn
                            icon
                            color="blue darken-3"
                            large
                        >
                            <v-icon>filter_alt</v-icon>
                        </v-btn>
                        <v-btn
                            icon
                            color="blue darken-3"
                            large
                        >
                            <v-icon>more_vert</v-icon>
                        </v-btn>
                        <v-btn
                            icon
                            color="blue darken-3"
                            large
                            @click="deleteList()"
                        >
                            <v-icon>delete</v-icon>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-card-title>
            <v-card-text>
                <v-row no-gutters>
                    <v-col cols="12">
                        <v-data-table
                            :items="getList"
                            :search="search"
                            v-model="selected"
                            :items-per-page="10"
                            show-select
                            :headers="getHeaderList"
                            :loading="getListLoading"
                            loading-text="Carregando...">
                        </v-data-table>
                    </v-col>
                </v-row>
        </v-card-text>
      </v-card>
      <ModalConfirm/>
    </v-row>
</template>

<script>

import { mapActions, mapGetters } from 'vuex'
import MasterOrder from '@/components/application/administration/MasterOrder.vue';
import ModalConfirm from '@/components/utils/ModalConfirm.vue';

export default {
    data() {
        return {
            search: '',
            selected : [],
            headers: []
        };
    },
    components:{
        MasterOrder,
        ModalConfirm
    },
    computed:{
        ...mapGetters('model', ['getList','getListLoading','getHeaderList']),
    },
    async created(){
        await this.list();
    },
    methods:{
        ...mapActions('model', ['fetchList','setModelSelectedDeleted']),
        ...mapActions('modal', ['showModalConfirm']),
        async list(){
            await this.fetchList();
        },
        async order(filter){
            await this.fetchList(filter);
        },
        async deleteList(){
            this.showModalConfirm();
        }
    },
    watch:{
        selected(newValue, oldValue){
            console.log(newValue);
            this.setModelSelectedDeleted(newValue);
        }
    }
}
</script>

<style>

</style>