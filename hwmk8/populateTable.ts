// Name: Sinai Park
// User ID: sp46
// Date: 10 / 5 / 2020
// CS336 @Calvin University


import { DataService } from './dataService';


async function addDataRows(): Promise<void> {

  //log that resuts print when button is licked
  const data_array = new DataService();

  //call to fetchData() block until the data results have been received
  const api_data = await data_array.fetchData();
  const row_data = data_array.getData(0);

  //DOM element with id "rows"
  const row_id = document.getElementById("rows");

  createRow(row_id, row_data);


  //row_data.forEach((element) => {
  //   createRow(row_id, element);
  // });
  //
}

/**function createRow
  *
  *passes in the DOM element with id "rows" and single obj of data
  *create row and insert it into the table
 */
function createRow(parentElem: any, rowData: any): void {


  for (let i = 0; i < rowData.results.length; i++) {
    const item = rowData.results[i];
    const tr = parentElem.insertRow(parentElem.rows.length);
    tr.insertCell(0).innerHTML = item.name.first + " " + item.name.last;
    tr.insertCell(1).innerHTML = item.gender;
    tr.insertCell(2).innerHTML = item.location.street.number + " " + item.location.street.name + item.location.city + ", " + item.location.state + ", " + item.location.country;
    tr.insertCell(3).innerHTML = item.dob.age;
    tr.insertCell(4).innerHTML = item.phone;
    //creating image
    //from source https://www.w3schools.com/jsref/dom_obj_image.asp
    const x = document.createElement("img");
    x.setAttribute("src", item.picture.medium);
    tr.insertCell(5).appendChild(x);

  }
}
