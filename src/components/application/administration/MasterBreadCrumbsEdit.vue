<template>
<div style="background-color:#f7f7f7">
<v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
</div>
  
</template>

<script>

import { routerPath, breadCrumbLabel } from '../../../model/configController';
import { mapGetters} from 'vuex';

export default {
    computed:{
      ...mapGetters('main', ['breadCrumbsEditName'])
    },
    created(){
        this.items = [
                {
                    text: 'Página Inicial',
                    disabled: false,
                    href: '/',
                },
                {
                    text: this.breadCrumbLabel.listLabel,
                    disabled: false,
                    href: routerPath,
                },
                {
                    text: `${this.breadCrumbsEditName}`,
                    disabled: false,
                    href: routerPath+"/editform",
                },
            ]
    },
    data (){
        return {
            routerPath,
            breadCrumbLabel,
            items: []
        }
    },
}
</script>

<style>

</style>