const app = new Vue({
    el: '#app',
    data:{
        titulo: 'Create your to-do list below',
        tareas:[],
        nuevaTarea:''
    },
    methods:{
        agregarLista: function(){
            this.tareas.push({
                nombre:this.nuevaTarea,
                estado: false
            });
            this.nuevaTarea='';  

        },
        editarTarea: function(index){
            this.tareas[index].estado = true;
        },
        eliminar:function(index){
            this.tareas.splice(index,1);
       
        }
    }
}) 

