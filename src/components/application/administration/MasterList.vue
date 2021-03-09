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
                            @keyup.enter="fetchFilter()"
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
                            :items="listTable"
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
import ModalConfirm from '@/components/utils/ModalConfirm.vue';
import { routerPath, breadCrumbLabel, lockedFlagParam } from '../../../model/configController';

export default {
    data() {
        return {
            unsubscribe: null,
            lockedFlagParam,
            breadCrumbLabel,
            routerPath,
            search: '',
            selected : [],
            headers: [],
            itemSelected: {},
            selectedFilter: []
        };
    },
    components:{
        ModalConfirm
    },
    computed:{
        ...mapGetters('model', ['getList','getListLoading','getHeaderList','getFilterList','getListSelectedDeleted']),
        listParam(){
            return {
                
            }
        },
        listTable(){
            return this.getList.filter((model)=> model[lockedFlagParam] != 'Y');
        }
    },
    watch:{
        selected(newValue){
            this.setModelSelectedDeleted(newValue);
        },
        selectedFilter(newValue){
            this.setModelSelectedFilter(newValue);
        }
    },
    async created(){
        this.unsubscribe = this.$store.subscribeAction((action) => {
            if (action.type === 'model/refreshList') {
                this.fetchFilter();
            }
        });
    },
    methods:{
        ...mapActions('model', ['fetchList','fetchListFiltered','setModelSelectedDeleted','setSelectedModelEdit','setModelSelectedFilter']),
        ...mapActions('modal', ['showModalConfirm']),
        ...mapActions('main', ['setBreadCrumbsEditName']),
        async list(){
            //await this.fetchList();
        },
        async order(filter){
            await this.fetchList(filter);
        },
        async deleteList(){
            this.showModalConfirm();
        },
        async editSelected(selected){
            this.setSelectedModelEdit(selected);
            this.setBreadCrumbsEditName(selected[breadCrumbLabel.propEditModelName]);
            this.$router.push({ path: `${routerPath}/editform` }, {});
        },
        async addNew(){
            this.$router.push({ path: `${routerPath}/form` }, {});
        },
        async fetchFilter(){
            this.fetchListFiltered(this.search);
        }
    }
}
</script>

<style>

</style>