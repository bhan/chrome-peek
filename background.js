chrome.browserAction.onClicked.addListener(function(tab) {
    console.log(tab);
    // do nothing if the tab is a new tab or not ready
    if(tab.url === "chrome://newtab/" || tab.status !== "complete")
        return;

    // inject the code into the tab
    chrome.tabs.executeScript(null, {file: "content_script.js"});

    // to remove, use parent.removeChild(child)
});
