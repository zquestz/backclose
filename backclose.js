document.addEventListener('keydown', closeMe, true);

function closeMe(e) {
  if (goingBack(e)) {
    if (!(window.history.length > 1)) {
      chrome.extension.sendRequest({closeMe: true});
    }
  }
}

function goingBack(e) {
  return ((e.metaKey == true || e.ctrlKey == true || e.altKey == true) && (e.keyIdentifier == "U+005B" || e.keyIdentifier == "Left"));
}
