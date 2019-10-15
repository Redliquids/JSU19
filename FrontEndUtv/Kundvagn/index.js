var kundvagn = new Vue({
  computed: {
    total() {
      return Object.values(this.products).reduce(
        (accumulator, value) => accumulator + value.price * value.quantity,
        0
      )
    }
  },
  data: {
    products: {
      'dd3ce0a3-1d30-4e3e-bcec-7095590019d9': { name: 'Jacket', price: 200, quantity: 0 },
      'faf68d1f-8f3e-4668-891c-56118cc330f4': { name: 'Pants', price: 100, quantity: 0 },
      'dd2bb41e-7f0a-4cb8-884b-588f9457dd54': { name: 'Shoes', price: 100, quantity: 0 }
    }
  },
  el: '#app',
  methods: {
    addToCart(productId) {
      this.products[productId].quantity++
    }
  }
})




//var test = getCities();
//console.log('test: ' + test);
//console.log('test: ' + test[1].cityName);


/*
var showCities = new Vue({
  created() {
    fetch('https://avancera.app/cities/')
      .then(response => response.json())
      .then(result => {
        this.cities = result
      })
  },
  data: { 
    cities: null
  },
  el: "#cities",
  template: `
  <dl id="cities">
    <template v-for"city in cities">
        <dt> {{ cities.name }} </dt>
        <dd> {{ cities.population }} </dd>
      </template>
  </dl>
`
});
*/

//var cityID = prompt('Enter City ID');
//var cityName = prompt('Enter City Name');
//var cityPop = prompt('Enter City Population');

// id: 2a26c0ec-a79b-4f3c-8655-f9ab51b3301a

function getCities() {
  fetch('https://avancera.app/cities/')
  .then(function (response) {
    return response.json()
  })
  .then(function (result) {
    //console.log(result);

    for(i = 0; i < result.length; i++) {
      console.log('Name: ' + result[i].name);
      console.log('Population: ' + result[i].population);
    }

    return result;
  })
}

function deleteCity() {

}


function updateCity() {
  fetch('https://avancera.app/cities/' + cityID, {
  body: JSON.stringify({ id: cityID, name: cityName, population: cityPop,}),
  headers: {
    'Content-Type': 'application/json'
  },
  method: 'PUT'
}).then(function (response) {
  return response.json()
}).then(function (result) {
  console.log(result)
})
}



/*
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
*/


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