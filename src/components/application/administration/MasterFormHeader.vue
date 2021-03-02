<template>

  <v-row class="pa-0 ma-0 d-flex justify-space-between">
    <v-col cols=12 class="pa-0 ma-0">
        <MasterBreadCrumbs/>
    </v-col>
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
                <p>{{LABELS.formHeaderTitle}}</p>
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
              @click="save()"
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
import { routerPath } from '@/model/configController' 
import Tracker from '../../../model/tracker';
import { LABELS } from '@/model/configController'
import MasterBreadCrumbs from './MasterBreadCrumbs';

export default {
  components:{
    MasterBreadCrumbs
  },
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
    created: function(){
        this.tracker = new Tracker();
    },
    methods:{
        ...mapActions('model', ['fetchRegister','save']),
        ...mapActions('modal', ['showModal']),
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