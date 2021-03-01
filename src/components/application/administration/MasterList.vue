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
                            @click="addNew()"
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
                            @click="fetchFilter()"
                        >
                            <v-icon>mdi-refresh</v-icon>
                        </v-btn>
                        <v-menu offset-y>
                            <template v-slot:activator="{ on, attrs }">
                                <v-btn
                                    icon
                                    color="blue darken-3"
                                    large
                                    v-bind="attrs"
                                    v-on="on"
                                >
                                    <v-icon>filter_alt</v-icon>
                                </v-btn>
                            </template>
                            <v-list>
                                <v-list-item
                                v-for="(item, index) in getFilterList"
                                :key="index"
                                >
                                <v-list-item-title>
                                    <v-checkbox
                                        dense
                                        v-model="selectedFilter"
                                        :value="item"
                                        :label="`${item.description}`"
                                    ></v-checkbox>    
                                </v-list-item-title>
                                </v-list-item>
                            </v-list>
                        </v-menu>
                        
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
                            :disabled="getListSelectedDeleted.length == 0"
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
                            :value="itemSelected"
                            v-model="selected"
                            @click:row="editSelected"
                            :items-per-page="10"
                            show-select
                            item-key="idDriver"
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
            headers: [],
            itemSelected: {},
            selectedFilter: []
        };
    },
    components:{
        MasterOrder,
        ModalConfirm
    },
    computed:{
        ...mapGetters('model', ['getList','getListLoading','getHeaderList','getFilterList','getListSelectedDeleted']),
        listParam(){
            return {
                
            }
        }
    },
    async created(){
        //await this.list();
    },
    methods:{
        ...mapActions('model', ['fetchList','fetchListFiltered','setModelSelectedDeleted','setSelectedModelEdit','setModelSelectedFilter']),
        ...mapActions('modal', ['showModalConfirm']),
        async list(){
            //await this.fetchList();
        },
        async order(filter){
            await this.fetchList(filter);
        },
        async deleteList(){
            this.showModalConfirm();
        },
        async editSelected(valor){
            this.setSelectedModelEdit(valor);
            this.$router.push({ path: '/driver/editform' }, {});
        },
        async addNew(){
            this.$router.push({ path: '/driver/form' }, {});
        },
        async fetchFilter(){
            this.fetchListFiltered(this.search);
        }
    },
    watch:{
        selected(newValue, oldValue){
            this.setModelSelectedDeleted(newValue);
        },
        selectedFilter(newValue, oldValue){
            this.setModelSelectedFilter(newValue);
        }
    }
}
</script>

<style>

</style>