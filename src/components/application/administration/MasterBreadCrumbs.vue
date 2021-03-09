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

export default {
    data (){
        return {
            breadCrumbLabel,
            routerPath,
            items: [
                {
                    text: 'Página Inicial',
                    disabled: false,
                    href: '/',
                },
                {
                    text: breadCrumbLabel.listLabel,
                    disabled: false,
                    href: routerPath,
                },
                {
                    text: breadCrumbLabel.formLabel,
                    disabled: false,
                    href: routerPath+"/form",
                },
            ]
        }
    },
}
</script>

<style>

</style>