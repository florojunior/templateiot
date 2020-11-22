<template>
    <div>
        <v-card elevation="1" tile>
            <v-card-title class="pa-2">
                <p class="pa-0 mb-0 text-xs-h6 text-sm-subtitle-1 text-md-subtitle-1 text-lg-subtitle-1 text-xl-subtitle-1 font-weight-medium text--secondary">Caminhões cadastrados (65)</p>
            </v-card-title>
        </v-card>
        <MasterSearch/>
    </div>
</template>

<script>

import { mapActions, mapGetters } from 'vuex';
import MasterSearch from '@/components/application/administration/MasterSearch.vue';

export default {
    components:{
        MasterSearch
    }
}
</script>

<style>

</style>