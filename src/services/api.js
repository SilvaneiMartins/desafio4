/*
* Desenvolvedor: Silvanei Martins;
* Email: silvaneimartins_rcc@hotmail.com;
* WhatsApp: (69) 9.8405-2620;  
* Desafio 04: Conceitos do React Native;
*/
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3333",
});

export default api;
