chrome.action.onClicked.addListener((tab) => {
  if (!tab.pinned) {
    chrome.tabs.remove(tab.id);
  }
});
