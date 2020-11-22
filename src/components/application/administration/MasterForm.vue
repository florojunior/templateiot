<template>
  <v-row class="pa-0 ma-0 ">
    <v-col cols=12 class="pa-0 ma-0 pb-2" style="box-shadow: 0 0 0.25rem 0 rgba(0,0,0,0.15), inset 0 -0.0625rem 0 0 #d9d9d9">
        <div class="full-width d-flex justify-end pr-0">
            <v-btn icon color="blue">
                <v-icon>mdi-close</v-icon>
            </v-btn>
        </div>
        <div>
            <v-row class="pa-0 ma-0">
                <v-col cols="5" class="pt-0 mt-0 pb-0 mt-0">
                    <p class="text--secondary text-xs-h6 text-sm-subtitle-1 text-md-subtitle-1 text-lg-subtitle-1 text-xl-subtitle-1">Cadastrar Caminhão</p>
                </v-col>
                <v-col cols="7" class="d-flex justify-end pr-2 pt-0 mt-0 pb-0">
                    <v-btn color="green" outlined class="mr-2" @click="save()">
                        Salvar
                        <v-icon left dark class="ml-2 mr-0 pr-0">
                            mdi-check-circle-outline
                        </v-icon>
                    </v-btn>
                    <v-btn color="red" outlined>
                        Cancelar
                        <v-icon left dark class="ml-2 mr-0 pr-0">
                            mdi-check-circle-outline
                        </v-icon>
                    </v-btn>
                </v-col>
            </v-row>
        </div>
    </v-col>
    <v-col cols=12 style="background-color: white">
        <v-form>
            <v-row class="d-flex flex-column justify-center align-center">
                <v-col cols=6 class="pb-0 pl-2 pr-2">
                    <v-text-field
                        label="Placa"
                        dense
                        class="white--text"
                        v-model="tracker.dsPlate"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols=6 class="pa-0 pl-2 pr-2">
                    <v-select
                        :items="countries"
                        label="País"
                        item-value="countryInitials"
                        item-text="country"
                        v-model="tracker.dsCountry"
                        dense
                        outlined
                    ></v-select>
                </v-col>
                <v-col cols=6 class="pa-0 pl-2 pr-2">
                    <v-select
                        v-model="tracker.dsRegion"
                        :items="regions"
                        label="Estado"
                        item-text="region"
                        
                        dense
                        outlined
                    ></v-select>
                </v-col>
            </v-row>
        </v-form>
    </v-col>
  </v-row>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Tracker from '../../../model/tracker';

export default {
    data() {
      return {
        tracker:{},
        modal: {
            success: {
                title: 'Ação realizada com sucesso',
                message: 'Um novo caminhão foi adicionado na base de dados',
                buttonText: 'FECHAR',
            },
                error: {
                title: 'Erro ao processar a requisição!',
                message: 'Se o problema persistir, favor contatar o suporte.',
                buttonText: 'VOLTAR PARA LOGIN',
            },
        }
      }
    },
    computed:{
      ...mapGetters('main', [
                    'countries'
      ]),
      regions(){
        const country = this.countries.find((country)=> {
            return country.countryInitials == this.tracker.dsCountry
        });
        if(country){
            return country.regions;
        }else{
            return [];
        }
      }
    },
    created: function(){
        this.tracker = new Tracker();
    },
    methods:{
        ...mapActions('tracker', ['fetchRegister']),
        ...mapActions('modal', ['showModal']),
        async save(){
            await this.fetchRegister(this.tracker);
            this.showModal({
                title: this.modal.success.title,
                message: this.modal.success.message,
                buttonText: this.modal.success.buttonText,
            });
        }
    }
    
}
</script>

<style scoped>
    .full-width{
        width: 100%
    }
</style>