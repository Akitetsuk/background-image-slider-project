const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];

Vue.createApp({
  data() {
    return {
      index: 0
    }
  },

  methods:{
    buttonRight(){
       // TODO: Decrementar el index
       this.index--
      // TODO-2: Mirar si hemos llegado a 0 y entonces...
      if(this.index < 0){
        this.index = pictures.length -1
      }
    },
    buttonLeft(){
       // TODO: Incrementar el index
       this.index++
      // TODO-2: Mirar si hemos llegado al número máximo de elementos del array y entonces...
      if(this.index >  pictures.length -1){
        this.index = 0
    }
  }
  },

  computed: {
    getUrl() {
      return `url('./img/${pictures[this.index]}.jpeg')`; // tenemos que devolver un string a la ruta de la foto actual. Por ejemplo, la ruta de la primera foto es '../img/pictures[0]'
    }
  }

}).mount('#app')
