import {reactive} from 'vue'


export default async function useFetch(url) {
    const responce = await fetch(url, {
        method: 'GET'
    })
    const {products = []} = reactive(await responce.json())
    return  products
}