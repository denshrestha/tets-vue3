<script setup>
import useFetch from '../composables/usefetch'
import ProductCard from '../components/ProductCard.vue'

const products = await useFetch('https://dummyjson.com/products')
</script>
<template>
    <v-row v-if="products.length">
        <v-col 
        cols="12" 
        md="4"
        v-for="product in products"
        :key="product.id"
        >
        <product-card :card-data="product"/>
        </v-col>
    </v-row>
    <span v-else>LOADING...</span>
</template>