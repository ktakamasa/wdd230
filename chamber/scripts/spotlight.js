const url = "./data/members.json";
async function getMembers() {
  const response = await fetch(url);
  const data = await response.json();

  const spotlightMembers = data.members.filter(
    (level) =>
      level.membershipLevel == "Gold" || level.membershipLevel == "Silver"
  );
  displayMembers(spotlightMembers);
}

getMembers();

const displayMembers = (members) => {
  for (let i = 0; i < 3; i++) {
    // console.table(members) // make sure only gold and silver members
    index = Math.floor(Math.random() * members.length);
    selectedMember = members[index];
    members.splice(index, 1); //will delete selected member from list to prevent repeat company
    // console.table(selectedMember)
    displaySpotlightCard(selectedMember);
  }
};

const spotlightCard = document.querySelector(".cards");
function displaySpotlightCard(member) {
  const card = document.createElement("section");
  card.className = "spotlight";
  const company = document.createElement("h2");
  company.innerHTML = member.name;

  const logo = document.createElement("img");
  logo.setAttribute("src", member.logo);
  logo.setAttribute("alt", `${member.name} logo`);
  logo.setAttribute("loading", "lazy");
  logo.setAttribute("width", "250");
  logo.setAttribute("height", "200");

  const address = document.createElement("p");
  address.innerHTML = member.address;

  const phone = document.createElement("p");
  phone.innerHTML = `<a href="tel:${member.phone}">${member.phone}</a>`;

  const url = document.createElement("a");
  url.innerHTML = `Visit ${member.name}`;
  url.href = member.url;

  card.appendChild(company);
  card.appendChild(logo);
  card.appendChild(address);
  card.appendChild(phone);
  card.appendChild(url);
  spotlightCard.appendChild(card);
}
