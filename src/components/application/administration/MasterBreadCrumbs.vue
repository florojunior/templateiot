<template>
<div style="background-color:#f7f7f7">
<v-breadcrumbs
      :items="items"
      large
    ></v-breadcrumbs>
</div>
  
</template>

<script>

import { routerPath } from '../../../model/configController';

export default {
    data (){
        return {
            routerPath,
            items: [
                {
                    text: 'Página Inicial',
                    disabled: false,
                    href: '/',
                },
                {
                    text: 'Item Menu Inicial',
                    disabled: false,
                    href: routerPath,
                },
                {
                    text: 'Master Detail',
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