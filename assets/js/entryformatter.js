var entries = {
  "crossfade": {
    "title": "CrossFade",
    "description": "A simple (but deep) puzzle game. Pressing a tile toggles the lights on all tiles in that row and column. Try to turn off all the lights! (New version with improved UI coming to a Google Play store near you!)",
    "image": "images/crossfade.png",
    "image_url": "https://l-e-webb.github.io/crossfade",
    "links": [
      ["Play in browser", "https://l-e-webb.github.io/crossfade"],
      ["Source", "https://github.com/l-e-webb/crossfade"]
    ]
  },
  "budabest_guide": {
    "title": "Budapest Guide",
    "description": "A static app providing trivia about Budapest, Hungary. Designed to demonstrate ViewPager usage and image formatting in Android.",
    "image": "images/budapest_guide.png",
    "image_url": "https://github.com/l-e-webb/budabest_guide",
    "links": [
      ["Source", "https://github.com/l-e-webb/budabest_guide"]
    ]
  },
  "book_listing": {
    "title": "Book Listing",
    "description": "A simple app which queries the Google Books API to deliver book titles related to a search term. Designed to demonstrate networking and JSON parsing in Android.",
    "image": "images/book_listing.png",
    "image_url": "https://github.com/l-e-webb/book_listing",
    "links": [
      ["Source", "https://github.com/l-e-webb/book_listing"]
    ]
  },
  "guardian_science_reader": {
    "title": "Guardian Science Reader",
    "description": "Displays latest science & technology articles by querying The Guardian's API. Designed to demonstrate AdapterView usage and two-pane tablet UI in Android.",
    "image": "images/guardian_science_reader.png",
    "image_url": "https://github.com/l-e-webb/guardian_science_reader",
    "links": [
      ["Source", "https://github.com/l-e-webb/guardian_science_reader"]
    ]
  },
  "space_kerfuffle": {
    "title": "Space Kerfuffle!",
    "description": "A arcade-style space combat game, named in honor of \"Spacewar!\" (the first ever video game). Designed to demonstrate basic 2D game development techniques.",
    "image": "images/space_kerfuffle.png",
    "image_url": "https://l-e-webb.github.io/space_kerfuffle",
    "links": [
      ["Play in browser", "https://l-e-webb.github.io/space_kerfuffle"],
      ["Source", "https://github.com/l-e-webb/space_kerfuffle"]
    ]
  },
  "outbreak": {
    "title": "Outbreak",
    "description": "A mobile remake of the classic Atari game Breakout. Designed to demonstrate accelerometer controls.",
    "image": "images/outbreak.png",
    "image_url": "https://l-e-webb.github.io/outbreak",
    "links": [
      ["Play in browser", "https://l-e-webb.github.io/outbreak"],
      ["Source", "https://github.com/l-e-webb/outbreak"]
    ]
  },
  "asteroidal_projection": {
    "title": "Asteroidal Projection",
    "description": "A arcade-style space combat game, but with a twist. The entire infinite 2D playing field is projected radially (or mapped homeomorphically, for the topolgy nerds out there) into a disk.",
    "image": "images/asteroidal_projection.png",
    "image_url": "https://l-e-webb.github.io/asteroidal_projection",
    "links": [
      ["Play", "https://l-e-webb.github.io/asteroidal_projection"],
      ["Source", "https://github.com/l-e-webb/asteroidal_projection"]
    ]
  },
  "stereographic_maze": {
    "title": "Stereographic Maze",
    "description": "Have you ever wanted to navigate a maze on the surface of the sphere, viewed from the comfort of your 2D monitor? No? Oh. Well, in stereographic maze, you can do just that.",
    "image": "images/stereographic_maze.png",
    "image_url": "https://tangledwebgames.itch.io/stereographic_maze",
    "links": [
      ["Play", "https://tangledwebgames.itch.io/stereographic_maze"],
      ["Source", "https://github.com/l-e-webb/stereographic_maze"]
    ]
  },
  "interpolate": {
    "title": ".interpolate()",
    "description": "Not a game, but a Lagrange Polynomial visualizer. Graphs polynomials that pass through a specific set of points. Can be used to experiment with draggable interpolation points, or make pretty animations.",
    "image": "images/interpolate.png",
    "image_url": "https://l-e-webb.github.io/interpolate",
    "links": [
      ["Use", "https://l-e-webb.github.io/interpolate"],
      ["Source", "https://github.com/l-e-webb/interpolate"]
    ]
  },
  "the_blue_room": {
    "title": "The Blue Room",
    "description": "A re-imagining of the classic room escape adventure game, in The Blue Room, the real obstacle to escape is the protagonist's depression and agoraphobia.",
    "image": "images/the_blue_room.png",
    "image_url": "https://tangledwebgames.itch.io/the_blue_room",
    "links": [
      ["Download", "https://tangledwebgames.itch.io/the_blue_room"]
    ]
  },
  "housewarming": {
    "title": "Housewarming",
    "description": "A one-person effort for Global Game Jam 2019 (prompt: What does home mean to you?), Housewarming is a dialogue-based point-and-click adventure game.",
    "image": "images/housewarming.png",
    "image_url": "https://tangledwebgames.itch.io/housewarming",
    "links": [
      ["Download", "https://tangledwebgames.itch.io/housewarming"]
    ]
  },
  "ultraviolet_nowhere": {
    "title": "Ultraviolet Nowhere",
    "description": "An atmospheric (literally) experience. Point your telescope into the void, and the void may look back. Made for Global Game Jam 2018 (prompt: transmission).",
    "image": "images/ultraviolet_nowhere.png",
    "image_url": "https://tangledwebgames.itch.io/ultraviolet_nowhere",
    "links": [
      ["Play in browser", "https://l-e-webb.github.io/ultraviolet_nowhere"]
    ]
  },
  "bad_moon": {
    "title": "Bad Moon",
    "description": "A short action game. Fly around on rocket skates and fight your way through waves of malicious drones. Made for Global Game Jam 2017 (prompt: waves).",
    "image": "images/bad_moon.png",
    "image_url": "https://calamityjive.itch.io/badmoon",
    "links": [
      ["Play in browser", "https://calamityjive.itch.io/badmoon"]
    ]
  }
};


function getEntryFragment(entryKey) {
  var entry = entries[entryKey];
  var links = "<p>";
  for (let i = 0; i < entry["links"].length; i++) {
    var linkEntry = entry["links"][i];
    links += makeLinkTag(linkEntry[0], linkEntry[1]);
    if (i < entry["links"].length - 1) {
      links += "; ";
    }
  }
  links += "</p>";
  var entryTemplate = `
  <div class="row entryRow">
    <div class="col-12 innerEntryRow">
      <h4>${entry["title"]}</h4>
    </div>
    <div class="col-4 col-12-medium innerEntryRow">
      <a href="${entry["img_url"]}" class="image fit">
        <img src="${entry["image"]}">
      </a>
    </div>
    <div class="col-8 col-12-medium innerEntryRow">
      <p>${entry["description"]}</p>
      ${links}
    </div>
  </div>
  `;
  return document.createRange().createContextualFragment(entryTemplate);
}

function makeLinkTag(text, url) {
  return `
  <a href="${url}">${text}</a>
  `;
}

function addEntries() {
  var androidAppSection = document.getElementById("androidAppSection");
  androidAppSection.appendChild(getEntryFragment("guardian_science_reader"));
  androidAppSection.appendChild(getEntryFragment("book_listing"));
  androidAppSection.appendChild(getEntryFragment("budabest_guide"));
  var mobileGameSection = document.getElementById("mobileGameSection");
  mobileGameSection.appendChild(getEntryFragment("crossfade"));
  mobileGameSection.appendChild(getEntryFragment("space_kerfuffle"));
  mobileGameSection.appendChild(getEntryFragment("outbreak"));
  var mathSection = document.getElementById("mathSection");
  mathSection.appendChild(getEntryFragment("stereographic_maze"));
  mathSection.appendChild(getEntryFragment("asteroidal_projection"));
  mathSection.appendChild(getEntryFragment("interpolate"));
  mathSection.appendChild(getEntryFragment("crossfade"));
  var desktopGameSection = document.getElementById("gamesSection");
  desktopGameSection.appendChild(getEntryFragment("the_blue_room"));
  desktopGameSection.appendChild(getEntryFragment("housewarming"));
  desktopGameSection.appendChild(getEntryFragment("ultraviolet_nowhere"));
  desktopGameSection.appendChild(getEntryFragment("bad_moon"));
}

addEntries();
