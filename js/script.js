const { createApp } = Vue;

createApp({
  // una lista di todo
  // che posso vedere e eliminare quelli che ho già fatto

  data() {
    return {
      randomEmailList: [],
    }
},
randomEmail: "",

created() {

    for(i = 0; i < 10; i++) {
      
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail').then((res) => {


            randomEmail = res;

            this.randomEmailList.push(randomEmail.data.response)

        })

    };

  },



}).mount('#app');