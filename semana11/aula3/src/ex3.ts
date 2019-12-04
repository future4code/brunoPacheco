import axios, { AxiosResponse } from "axios";

const numero1 = 5
const numero2 = 10
const numero3 = 15

const promise1:AxiosResponse = axios.get(numero1);
const promise2:AxiosResponse = axios.get(numero2);
const promise3:AxiosResponse = axios.get(numero3);

Promise.all([promise1, promise2, promise3]).then((values) => {
    console.log(values);
})