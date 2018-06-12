var myDiv = document.getElementById('jumboTitle');
var optInLink = document.getElementById('optInLink');
optInLink.addEventListener("click", function(){
    myDiv.innerText = myDiv.innerText + 1;
});
//myDiv.innerText = "Hello from Sydney";