<template>
  <v-row no-gutters align="center" justify="space-between">
    <v-col class="d-none d-sm-flex d-flex flex-row align-center justify-start mb-2 mt-2" cols="12" sm="6" lg=6 xl=6>
       <v-btn
            icon
            color="black"
            x-large
            class="ml-3 mr-3"
        >
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <span class="text-body-2 text-xl-h6 text-lg-h6">
            {{label.masterDetail}}
        </span>
    </v-col>
    <v-col cols="12" sm="auto" class="d-flex align-center justify-end" lg=6 xl=6 md=6>
      <slot name="header-extra-content"></slot>
      <p class="ma-0 mr-4">{{`${getList.length} Registrados`}}</p>
    </v-col>
  </v-row>
</template>

<script>

import { mapGetters } from 'vuex'

export default {
    data() {
        return {
            label: {
                masterDetail: 'Master Detail'
            },
            headers: []
        };
    },
    components: {
    },
    computed: {
        ...mapGetters('model', ['getList']),
    }
};
</script>

<style>
</style>
