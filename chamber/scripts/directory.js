const url = "./data/members.json";

async function getMembers() {
    try {
        const response = await fetch(url);
      if (response.ok) {
        const data = await response.json();
        // console.log(data.members);
        displayMembers(data.members);
      } else {
        throw Error(await response.text());
      }
    } catch (error) {
        console.log(error);
    }
  }
  
  getMembers();
  
  function displayMembers(members) {
    members.forEach((member) => {
    
        const memberCards = document.querySelector("#members");
        
        const name = document.createElement("h2");
        name.innerHTML = member.name;
        
        const logo = document.createElement("img");
        logo.setAttribute("src", member.logo);
        logo.setAttribute("alt", `${member.name} logo`);
        logo.setAttribute("loading", "lazy");
        logo.setAttribute("width", "250");
        logo.setAttribute("height", "200");
        
        const url = document.createElement("p");
        url.innerHTML = `<a href="${member.url}" target="_blank">Website</a>`;

        const address = document.createElement("p");
        address.innerHTML = member.address;

        const phone = document.createElement("p");
        phone.innerHTML = `<a href="tel:${member.phone}">${member.phone}</a>`;
        
        const level = document.createElement("p");
        level.innerHTML = member.membershipLevel;
        
        const card = document.createElement("section");
        card.appendChild(logo);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(url);
        card.appendChild(level);
        memberCards.appendChild(card);
    });
}

//grid - list 
const gridbutton = document.querySelector("#grid");
const listbutton = document.querySelector("#list");
const display = document.querySelector("div#members");

gridbutton.addEventListener("click", showGrid);
listbutton.addEventListener("click", showList);

function showGrid() {
  display.classList.add("grid");
	display.classList.remove("list");
}
function showList() {
	display.classList.add("list");
	display.classList.remove("grid");
}
