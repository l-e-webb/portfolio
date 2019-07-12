var entries = {
  "example": {
    "title": "Example Entry",
    "description": "Lorem ipsum enim sapien, blandit ullamcorper elementum eu, condimentum eu elit.",
    "image": "images/pic01.jpg",
    "image_url": "https://google.com",
    "links": [
      ["Play", "https://google.com"],
      ["Source", "https://google.com"]
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
    <div class="col-4 col-12-medium">
      <a href="${entry["img_url"]}" class="image fit">
        <img src="${entry["image"]}">
      </a>
    </div>
    <div class="col-8 col-12-medium">
      <h3>${entry["title"]}</h3>
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
  var mobile = document.getElementById("mobileSection");
  mobileSection.appendChild(getEntryFragment("example"));
  mobileSection.appendChild(getEntryFragment("example"));
}

addEntries();
