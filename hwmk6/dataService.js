// Name: Sinai Park
// User ID: sp46
// Date: 10 / 5 / 2020
// CS336 @Calvin University

try {
  const fetch = require('node-fetch');
} catch {
}

//class having an array of objects called data
class DataService {
  //a constructor,which does nothing.
  constructor() {
    this.data = [];
  };

  // data = [
  //   {
  //     name: 'Andrew',
  //     gender: 'M',
  //     address: '',
  //     age: 33,
  //     phoneNumber: '(123) 456-7890',
  //   },
  //   {
  //     name: 'Skylar Park',
  //     gender: 'F',
  //     address: '3201 Buron St SE',
  //     age: 18,
  //     phoneNumber: '331-701-104',
  //   },
  //   {
  //     name: 'Elizabeth Smith',
  //     gender: 'F',
  //     address: 'Seoul, South Korea',
  //     age: null,
  //     phoneNumber: '010-110-0010'
  //   },
  //   {
  //     name: 'Chris ',
  //     gender: 'M',
  //     address: 'Greenwish, London, UK',
  //     age: 101,
  //     phoneNumber: '(911)-542-7635'
  //   },
  // ];

  //function to get data
  getData(numRecords) {
    //when parameter is not provided return whole data array
    if (numRecords === undefined) {
      return this.data;
    } else {
      //return only the numRecords of the data array.
      return this.data[numRecords];
    }
  }



  //await/async function to fetchData()
  async fetchData() {
    //try this
    try {
      const response = await fetch('https://randomuser.me/api/?results=10')
      if (!response.ok) {
        console.log('Looks like there was a problem. Status Code: ' +
          response.status);
        return;
      }
      // Examine the text in the response
      this.data = await response.json();
      console.log(JSON.stringify(this.data, undefined, 2));
    } catch (err) {
      console.log('Fetch Error :-S', err);
    }
  };
};


console.log("Testing..."); //Testing...
// //created new instance of DataService
//const test_array = new DataService();

// //test to return the whole data array
// const print_me = test_array.getData();
// //test to return first index of array
// const print_me_too = test_array.getData(3);
// const print_us = test_array.getData("qwerty");
// const print_them = test_array.getData(0);

// console.log(print_me);
// console.log(print_me_too);
// console.log(print_us);
// console.log(print_them);

//code to test fetchData()
// const print_me_2 = test_array.fetchData();
// const me = print_me_2.getData();
// console.log(me);

console.log("Finished."); //Finished