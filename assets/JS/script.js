// import data from "./data.json" with { type: "json" };
const data = {
  destinations: [
    {
      name: "Moon",
      images: {
        png: "./assets/destination/image-moon.png",
        webp: "./assets/destination/image-moon.webp",
      },
      description:
        "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
      distance: "384,400 km",
      travel: "3 days",
    },
    {
      name: "Mars",
      images: {
        png: "./assets/destination/image-mars.png",
        webp: "./assets/destination/image-mars.webp",
      },
      description:
        "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
      distance: "225 mil. km",
      travel: "9 months",
    },
    {
      name: "Europa",
      images: {
        png: "./assets/destination/image-europa.png",
        webp: "./assets/destination/image-europa.webp",
      },
      description:
        "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
      distance: "628 mil. km",
      travel: "3 years",
    },
    {
      name: "Titan",
      images: {
        png: "./assets/destination/image-titan.png",
        webp: "./assets/destination/image-titan.webp",
      },
      description:
        "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
      distance: "1.6 bil. km",
      travel: "7 years",
    },
  ],
  crew: [
    {
      name: "Douglas Hurley",
      images: {
        png: "./assets/crew/image-douglas-hurley.png",
        webp: "./assets/crew/image-douglas-hurley.webp",
      },
      role: "Commander",
      bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
    },
    {
      name: "Mark Shuttleworth",
      images: {
        png: "./assets/crew/image-mark-shuttleworth.png",
        webp: "./assets/crew/image-mark-shuttleworth.webp",
      },
      role: "Mission Specialist",
      bio: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
    },
    {
      name: "Victor Glover",
      images: {
        png: "./assets/crew/image-victor-glover.png",
        webp: "./assets/crew/image-victor-glover.webp",
      },
      role: "Pilot",
      bio: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
    },
    {
      name: "Anousheh Ansari",
      images: {
        png: "./assets/crew/image-anousheh-ansari.png",
        webp: "./assets/crew/image-anousheh-ansari.webp",
      },
      role: "Flight Engineer",
      bio: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
    },
  ],
  technology: [
    {
      name: "Launch vehicle",
      images: {
        portrait: "./assets/technology/image-launch-vehicle-portrait.jpg",
        landscape: "./assets/technology/image-launch-vehicle-landscape.jpg",
      },
      description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
    },
    {
      name: "Spaceport",
      images: {
        portrait: "./assets/technology/image-spaceport-portrait.jpg",
        landscape: "./assets/technology/image-spaceport-landscape.jpg",
      },
      description:
        "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
    },
    {
      name: "Space capsule",
      images: {
        portrait: "./assets/technology/image-space-capsule-portrait.jpg",
        landscape: "./assets/technology/image-space-capsule-landscape.jpg",
      },
      description:
        "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
    },
  ],
};

let icon = document.querySelector(".icon");
let navigation = document.querySelector("nav ul");
let navigationList = document.querySelectorAll(".navigation");
icon.onclick = function () {
  if (icon.classList.contains("menu")) {
    icon.src = "./assets/shared/icon-close.svg";
    navigation.classList.add("display");
    icon.classList.remove("menu");
  } else {
    icon.src = "./assets/shared/icon-hamburger.svg";
    icon.classList.add("menu");
    navigation.classList.remove("display");
  }
};
for (let items of navigationList) {
  items.addEventListener("click", function (e) {
    // e.preventDefault();
    for (let item of navigationList) {
      item.classList.remove("active");
    }
    items.classList.add("active");
  });
}

// Destination page
// console.log(data);
const destinationName = document.querySelector(".name");
const description = document.querySelector(".description");
const destinationImg = document.querySelector(".destination-img");
const distance = document.querySelector(".distance");
const travel = document.querySelector(".travel");
const destinations = document.querySelectorAll(".destination");

destinations.forEach((destination, index) => {
  destination.addEventListener("click", (e) => {
    for (let item of destinations) {
      item.classList.remove("active-destination");
    }
      destination.classList.add("active-destination");
      let dataDestination = data.destinations[index];
      destinationName.innerHTML = dataDestination.name;
      description.innerHTML = dataDestination.description;
      destinationImg.src = dataDestination.images.webp;
      distance.innerHTML = dataDestination.distance;
      travel.innerHTML = dataDestination.travel;
    });
});

// Crew page
const memberName = document.querySelector(".crew-name");
const bio = document.querySelector(".crew-bio");
const memberImg = document.querySelector(".crew-img");
const memberRole = document.querySelector(".crew-role");
const crew = document.querySelectorAll(".member");

crew.forEach((member, index) => {
  member.addEventListener("click", (e) => {
    for (let item of crew) {
      item.classList.remove("active-member");
    }
      member.classList.add("active-member");
      let memberData = data.crew[index];
      memberName.innerHTML = memberData.name;
      bio.innerHTML = memberData.bio;
      memberImg.src = memberData.images.webp;
      memberRole.innerHTML = memberData.role;
    });
});

// technology page
const techName = document.querySelector(".tech-name");
const techDiscription = document.querySelector(".tech-description");
const techImg = document.querySelector(".tech-img");
const technology = document.querySelectorAll(".tech");

technology.forEach((tech, index) => {
  tech.addEventListener("click", (e) => {
    for (let item of technology) {
      item.classList.remove("active-tech");
    }
      tech.classList.add("active-tech");
      let techData = data.technology[index];
      techName.innerHTML = techData.name;
      techDiscription.innerHTML = techData.description;
      techImg.src = techData.images.portrait;
    });
});