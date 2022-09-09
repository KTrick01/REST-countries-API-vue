import { defineStore } from "pinia";
import { useGetData } from '../composables/getData';

export const useCounterStore = defineStore("counter",() => {
    const { data, getData } = useGetData();
    getData(
        'https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,cca3'
    );
    
    const AllCountries = data.value
        console.log(data.value)
    return{
        AllCountries
    }
});
