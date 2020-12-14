// Name: Sinai Park
// User ID: sp46
// Date: 10 / 5 / 2020
// CS336 @Calvin University

async function addDataRows() {
  //log that resuts print when button is licked
  const data_array = new DataService();

  //call to fetchData() block until the data results have been received
  const api_data = await data_array.fetchData();
  const row_data = data_array.getData();

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
function createRow(parentElem, rowData) {


  for (let i = 0; i < rowData.results.length; i++) {
    const item = rowData.results[i];
    const tr = parentElem.insertRow(parentElem.rows.length);
    const cell1 = tr.insertCell(0).innerHTML = item.name.first + " " + item.name.last;
    const cell2 = tr.insertCell(1).innerHTML = item.gender;
    const cell3 = tr.insertCell(2).innerHTML = item.location.street.number + " " + item.location.street.name + item.location.city + ", " + item.location.state + ", " + item.location.country;
    const cell4 = tr.insertCell(3).innerHTML = item.dob.age;
    const cell5 = tr.insertCell(4).innerHTML = item.phone;
    //creating image
    //from source https://www.w3schools.com/jsref/dom_obj_image.asp
    const x = document.createElement("img");
    x.setAttribute("src", item.picture.medium);

    const cell6 = tr.insertCell(5).appendChild(x);

  }
}
