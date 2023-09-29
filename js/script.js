const {createApp} = Vue;

createApp({

    data(){
        return{
            tasks:[
                {
                    task:'Comprare la pappa di Artù',
                    isDone:false
                },
                {
                    task:'Pagare la bolletta',
                    isDone:true
                },
                {
                    task:'Ripassare Vue',
                    isDone:false
                }
            ]
        }
    }



}).mount('#app')