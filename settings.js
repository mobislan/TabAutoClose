document.addEventListener("DOMContentLoaded", restoreOptions);
document.querySelector("form").addEventListener("submit", saveOptions);


function saveOptions(e) {
  e.preventDefault();
  browser.storage.local.set({
    title_regex: document.querySelector("#title_regex").value
  });
}

function restoreOptions() {

  function setCurrentChoice(result) {
    document.querySelector("#title_regex").value = result.title_regex || "Request blocked";
  }

  function onError(error) {
    console.log(`Error: ${error}`);
  }

  var getting = browser.storage.local.get("title_regex");
  getting.then(setCurrentChoice, onError);
}
