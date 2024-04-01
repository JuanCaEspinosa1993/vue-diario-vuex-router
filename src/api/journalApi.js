import axios from "axios";

const journalApi = axios.create({
    baseURL: 'https://vue-diario-vuex-router-default-rtdb.firebaseio.com'
})


export default journalApi