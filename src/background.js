chrome.action.onClicked.addListener((tab) => {
  chrome.tabs.query({ highlighted: true, windowId: tab.windowId }, (tabs) => {
    if (tabs.length > 1) {
      const unpinnedTabIds = tabs.filter((t) => !t.pinned).map((t) => t.id);
      if (unpinnedTabIds.length > 0) {
        chrome.tabs.remove(unpinnedTabIds);
      }
      return;
    }

    // Single tab: only close if not pinned
    if (tab.pinned) {
      return;
    }

    chrome.tabs.remove(tab.id);
  });
});
