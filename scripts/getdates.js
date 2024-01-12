// alert(document.lastModified);
document.querySelector("#lastModified").textContent = document.lastModified;

let getTheDate = new Date;
document.querySelector("#year").textContent = getTheDate.getFullYear();