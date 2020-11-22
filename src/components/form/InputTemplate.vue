<template>
   <v-col cols=6 class="pb-0 pl-2 pr-2">
        <v-text-field
            label="Placa"
            dense
            class="white--text"
            v-model="model"
            outlined
        ></v-text-field>
    </v-col>
</template>

<script>
export default {
    props:{
        model: String,
    }
}
</script>

<style>

</style>