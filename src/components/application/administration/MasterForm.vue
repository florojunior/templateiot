<template>
  <v-row class="pa-0 ma-0 ">
    <v-col cols=12 style="background-color: white">
        <v-form>
            <v-tabs v-model="tab" background-color="#f7f7f7">
                <v-tab>Informações Gerais</v-tab>
                <v-tab>Detalhes</v-tab>
            </v-tabs>
            <v-tabs-items v-model="tab">
                <v-tab-item>
                    <v-container>
                        <v-form id="form" ref="form">                    
                        <v-row class="d-flex flex-column">
                            <v-col cols=6>
                                <v-text-field
                                    required 
                                    :rules="[nameRules.required]"
                                    v-model="form.dsDriverName"
                                    dense
                                    :label="labels.nome"
                                ></v-text-field>
                            </v-col>
                            <v-col cols=6>
                                <v-text-field
                                    v-model="form.dsDriverEmail"
                                    dense
                                    :rules="[emailRules.required]"
                                    :label="labels.email"
                                ></v-text-field>
                            </v-col>
                            <v-col cols=6>
                                <v-text-field
                                    dense
                                    :label="labels.cpf"
                                    :rules="[cpfRules.required]"
                                    v-model="form.dsDriverTaxnumber"
                                ></v-text-field>
                            </v-col>
                            <v-col cols=6>
                                <v-text-field
                                    dense
                                    :rules="[telephoneRules.required]"
                                    :label="labels.celular"
                                    v-model="form.nrDriverPhone"
                                ></v-text-field>
                            </v-col>
                            <v-col cols=6>
                                <v-text-field
                                    dense
                                    :label="labels.cnh"
                                    :rules="[cnhRules.required]"
                                    v-model="form.nrDriverLicense"
                                ></v-text-field>
                            </v-col>
                            <v-col cols=6>
                                <v-menu
                                    ref="validadeCNHDatePicker"
                                    v-model="validadeCNHDatePicker"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px" 
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="validadeCNHDateFormatted"
                                        :label="labels.validadeCNH"
                                        readonly
                                        dense
                                        v-bind="attrs"
                                        @blur="date = parseDate(validadeCNHDateFormatted)"
                                        v-on="on"
                                        >
                                        <v-icon>mdi-calendar</v-icon>
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="date"
                                        no-title
                                        @input="validadeCNHDatePicker = false"
                                    ></v-date-picker>
                                    </v-menu>
                                </v-col>
                            <v-col cols=6>
                                <v-menu
                                    ref="ultimoTreinamentoDatePicker"
                                    v-model="ultimoTreinamentoDatePicker"
                                    :close-on-content-click="false"
                                    transition="scale-transition"
                                    offset-y
                                    max-width="290px"
                                    min-width="290px" 
                                    >
                                    <template v-slot:activator="{ on, attrs }">
                                        <v-text-field
                                        v-model="ultimoTreinamentoDateFormatted"
                                        :label="labels.ultimaTreinamento"
                                        readonly
                                        dense
                                        v-bind="attrs"
                                        @blur="ultimoTreinamentoDate = parseDate(ultimoTreinamentoDateFormatted)"
                                        v-on="on"
                                        >
                                        <v-icon>mdi-calendar</v-icon>
                                        </v-text-field>
                                    </template>
                                    <v-date-picker
                                        v-model="ultimoTreinamentoDate"
                                        no-title
                                        @input="ultimoTreinamentoDatePicker = false"
                                    ></v-date-picker>
                                </v-menu>
                            </v-col>
                            <div class="d-flex">
                                <v-col cols=3>
                                    <v-text-field
                                        dense
                                         v-model="form.dsDriverAddress"
                                        :label="labels.endereco"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols=3>
                                    <v-text-field
                                        dense
                                        v-model="form.dsDriverNeighborhood"
                                        :label="labels.bairro"
                                    ></v-text-field>
                                </v-col>
                            </div>
                            <div class="d-flex">
                                <v-col cols=3>
                                    <v-text-field
                                        dense
                                        v-model="form.dsDriverCity"
                                        :label="labels.cidade"
                                    ></v-text-field>
                                </v-col>
                                <v-col cols=3>
                                    <v-text-field
                                        dense
                                        v-model="form.dsDriverPostalcod"
                                        :label="labels.cep"
                                    ></v-text-field>
                                </v-col>
                            </div>
                            <v-col cols=6>
                                <v-text-field
                                    dense
                                    v-model="form.dsDriverCountry"
                                    :label="labels.pais"
                                ></v-text-field>
                            </v-col>
                            <v-col cols=6>
                                <v-text-field
                                    dense
                                    v-model="form.dsDriverRegion"
                                    :label="labels.estado"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        </v-form> 
                    </v-container>
                </v-tab-item>
            </v-tabs-items>
    </v-form>
    </v-col>
  </v-row>
</template>

<script>

import { mapGetters, mapActions } from 'vuex';
import { nameRules, emailRules, cpfRules, cnhRules, telephoneRules } from '@/validations';

export default {
    created() {
      this.unsubscribe = this.$store.subscribeAction((action) => {
        if (action.type === 'model/save') {
            if (this.$refs.form.validate()){
                this.save();
            }
        }
      });
    },
    beforeDestroy() {
      this.unsubscribe();
    },
    data: vm => ({
        tab: null,
        nameRules,
        emailRules,
        cpfRules,
        cnhRules,
        telephoneRules,
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
        },
        labels:{
            email: "E-mail",
            nome: "Nome",
            cpf: "CPF",
            celular: "Celular",
            cnh: "Carteira de motorista",
            validadeCNH: "Validade da CNH",
            ultimaTreinamento: "Ultima Treinamento",
            endereco: "Endereço",
            bairro: "Bairro",
            cidade: "Cidade",
            cep: "CEP",
            pais: "País",
            estado: "Estado"
        },
        form:{
            dsDriverEmail: null,
            dsDriverName: null,
            dsDriverTaxnumber: null,
            nrDriverPhone: null,
            nrDriverLicense: null,
            dtDriverLicenseValid: null,
            dtDriverTrainingValid: null,
            dsDriverAddress: null,
            dsDriverNeighborhood: null,
            dsDriverRegion: null,
            dsDriverPostalcod: null,
            dsDriverCountry: null,
            dsDriverCity: null
        },
        validadeCNHDatePicker: false,
        validadeCNHDateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        date: new Date().toISOString().substr(0, 10),
        ultimoTreinamentoDatePicker: false,
        ultimoTreinamentoDateFormatted: vm.formatDate(new Date().toISOString().substr(0, 10)),
        ultimoTreinamentoDate: new Date().toISOString().substr(0, 10)
    }),
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
      },
      modelJSON(){
        return {
            driver: {
            dsDriverEmail: this.form.dsDriverEmail,
            dsDriverName: this.form.dsDriverName,
            dsDriverTaxnumber: this.form.dsDriverTaxnumber,
            nrDriverPhone: this.form.nrDriverPhone,
            nrDriverLicense: this.form.nrDriverLicense,
            dtDriverLicenseValid: this.date,
            dtDriverTrainingValid: this.ultimoTreinamentoDate,
            dsDriverAddress: this.form.dsDriverAddress,
            dsDriverNeighborhood: this.form.dsDriverNeighborhood,
            dsDriverRegion: this.form.dsDriverRegion,
            dsDriverPostalcod: this.form.dsDriverPostalcod,
            dsDriverCountry: this.form.dsDriverCountry,
            dsDriverCity: this.form.dsDriverCity,
            dsDriverLicenseCountry: "br",
            flDriverChecklist: "N",
            flDriverLocked: "N",
            flDriverMine: "N",
            flDriverPhoneSmartphone: "Y",
            flProcessSpot: "N",
            idDriver: 0,
            idUser: 1,
            nrDriverPhoneCountry: "55",
            nrDriverPhoneMno: ""
        }}
      }
    },
    watch: {
        date (val) {
            this.validadeCNHDateFormatted = this.formatDate(this.date)
        },
        ultimoTreinamentoDate (val) {
            this.ultimoTreinamentoDateFormatted = this.formatDate(this.ultimoTreinamentoDate)
        }
    },
    methods:{
        ...mapActions('model', ['fetchRegister']),
        ...mapActions('modal', ['showModal']),
        async save(){
            await this.fetchRegister(this.modelJSON);
            /*this.showModal({
                title: this.modal.success.title,
                message: this.modal.success.message,
                buttonText: this.modal.success.buttonText,
            });*/
        },
        parseDate (date) {
            if (!date) return null

            const [month, day, year] = date.split('/')
            return `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`
        },
        formatDate (date) {
            if (!date) return null

            const [year, month, day] = date.split('-')
            return `${day}/${month}/${year}`
        },
    }
    
}
</script>

<style scoped>
    .full-width{
        width: 100%
    }
</style>