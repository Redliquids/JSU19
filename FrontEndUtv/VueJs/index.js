// test chage for git

var app = new Vue({
  el: "#app",
  data: {
    name: 'Jon',
    avatar: 'a1389e6c-ab8f-46ac-9e51-12fc49a59cb4.png',
    players: [
      { name: 'Alice', credits: 1 },
      { name: 'Jon', credits: 2 },
      { name: 'Bob', credits: 3 }
    ],
    value: 1,
    userName: null,
    message: null,
  },
  methods: {
    
    onClick: function() {
      alert('Välkommen till ett Blackjack-spel!');
    },
    decrease: function() {
      this.value = this.value -1
    },
    increase: function() {
      this.value = this.value +1
    },
    onSubmit: function() {
      this.message = 'Hej ' + this.userName + '!';
    },
  }
})



/*

var app = new Vue({
    el: "#app",
    data: {
        message: 'Välkommen till ett Blackjack-spel!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: 'You loaded this page on ' + new Date().toLocaleString()
    }
})

*/