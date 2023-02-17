"use strict";

// task 1

let url = "https://jsonplaceholder.typicode.com/todos/";

function getData(url) {
  let request = fetch(url);
  return request
    .then((response) => {
      if (response.ok) {
        return response.json();
      }
      throw new Error(`Error: $(response.status)`);
    })
    .then((data) => {
      return data.filter(item => item.title[0] === 'a');
    })
    .catch((error) => console.log(error.message));
}

getData(url).then(returnData => {console.log(returnData)});

// task 2

async function getData1(url) {
  try {
    let request = await fetch(url);

    if (request.ok) {
      let data = await request.json();
      return  data.filter(item => item.title[0] === 'a');
    } else {
      throw new Error(`Error: $(response.status)`);
    }
  } catch(error) {
    console.log(error.message)
  }
}

getData1(url).then(returnData => {
  console.log(returnData)
})
