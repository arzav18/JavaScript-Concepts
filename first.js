/* Fetch API:
It provides an interface for fetching (sending/receiving) resources.
It uses Request and Response objects.
The fetch() method is used to fetch a resource.
let promise = fetch(url, [options]) */


const URL = "https://catfact.ninja/fact";

const getFacts = async () => {
    console.log("getting data...");
    let response = await fetch(URL);
    console.log(response);
    let data = await response.json();
    console.log(data);
}


/* JSON() method:
returns a second promise that resolves with the result of parsing the response body text as JSON
Input is JSON, Output is JS Object. */