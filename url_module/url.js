

// https://trainer.qspiders.com/classroom/JCO-MSENDD-A1

// http://localhost:5000/about 

// https://www.google.com/search?q=node+js+interview+questions&oq=node+js+inter&gs_lcrp=EgZjaHJvbWUqBwgAEAAYgAQyBwgAEAAYgAQyBggBEEUYOTIHCAIQABiABDIHCAMQABiABDIHCAQQABiABDIHCAUQABiABDIHCAYQABiABDIHCAcQABiABDIHCAgQABiABDIHCAkQABiABKgCALACAA&sourceid=chrome&ie=UTF-8

//!  url 

//? uniform resourse locator




// http: it is a protocol 
// localhost : domain name 
// portnumber 
// path 
// query parameter

//! import url module

const url = require("url");

//! this is the url 

const reqUrl ='http://localhost:5000/about?name="vk"&player="rcb"';

//! how to parse url 

const urlObj = url.parse(reqUrl,true);

console.log(urlObj);

console.log(urlObj.protocol)

console.log(urlObj.pathname)


console.log(urlObj.query.name)