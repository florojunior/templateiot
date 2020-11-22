<template>
    <v-row class="d-flex flex-column" align="start" justify="start" no-gutters>
        <v-col cols=12>
          <MasterHeader/>
        </v-col>
        <v-col cols="12">
            <v-row class="ma-0 pa-0">
                <v-col class="ma-0 pa-0" cols=4>
                    <MasterList/>
                </v-col>
                <v-col class="ma-0 pa-0" cols=8>
                    <MasterDetail/>
                </v-col>
            </v-row>
        </v-col>
    </v-row>

</template>

<script>

import MasterList from '@/components/application/administration/MasterList.vue';
import MasterHeader from '@/components/application/administration/MasterHeader.vue';
import MasterDetail from '@/components/application/administration/MasterDetail.vue';

export default {
    components:{
        MasterList,
        MasterHeader,
        MasterDetail
    }
}
</script>

<style>

</style>