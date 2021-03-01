<template>
  <v-row class="pa-0 ma-0 d-flex justify-space-between">
    <v-col cols=4>
        <div class="d-flex justify-start align-center">
            <v-img
            style="border-radius: 50%;"
                lazy-src="https://picsum.photos/id/11/10/6"
                max-height="100"
                min-height="100"
                max-width="100"
                min-width="100"
                src="https://picsum.photos/id/11/500/300"
            ></v-img>
            <div class="ml-4">
                <p>{{LABELS.formEditHeaderTitle}}</p>
            </div>
        </div>
    </v-col>
    <v-col cols=4 class="d-flex justify-end align-center flex-row p6-2">
            <v-btn
              rounded
              color="primary"
              dark
              height="30"
              width="150"
              dense
              class="ma-0 ml-2"
              @click="edit()"
            >
              Salvar
            </v-btn>
            <v-btn
              outlined
              rounded
              dense
              width="150"
              height="30"
              color="primary"
              class="ma-0 ml-2"
              dark
              @click="cancel()"
            >
              Cancelar
            </v-btn>
    </v-col>
  </v-row>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import Tracker from '../../../model/tracker';
import { LABELS } from '@/model/configController'

export default {
    data() {
      return {
        tracker:{},
        LABELS,
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
        ...mapActions('model', ['edit']),
        ...mapActions('modal', ['showModal']),
        async save(){
            await this.fetchRegister(this.tracker);
            this.showModal({
                title: this.modal.success.title,
                message: this.modal.success.message,
                buttonText: this.modal.success.buttonText,
            });
        },
        cancel(){
          this.$router.push({ name: `list` }, {});
        }
    }
    
}
</script>

<style scoped>
    .full-width{
        width: 100%
    }
</style>