const h1HTMLbyID = document.getElementById("title")
h1HTML.innerText = "Mon nouveau titre"
h1HTMLbyID.innerHTML = "<p>Mon tres nouveau titre</p>" 

const h1HTMLbyClass = document.getElementsByClassName("title")
h1HTMLbyClass[0].innerText = "Mo, titre recuperé par la classe"

const h1HTMLbyTag = document.getElementsByTagName("h1")
h1HTMLbyTag[0].innerText = "Mon titre recuperé par tag"

const h1RecupByQuerySelector = document.querySelector("body > h1")

const allH1 = document.querySelectorAll("body > h1")

//Manipulation des classes
h1HTMLbyID.style.