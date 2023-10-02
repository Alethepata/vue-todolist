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
            ],
            newTasks:''
            
        }
    },
    methods:{
        addTasks(){
            const newTask = {
                task: this.newTasks,
                isDone: false
            }
            this.tasks.unshift(newTask);
            this.newTasks='';
            
        },
        removeTask(index){
            this.tasks.splice(index,1)
        },
        done(task){
            (task.isDone == false) ?  task.isDone= true : task.isDone = false

        }
    }



}).mount('#app')