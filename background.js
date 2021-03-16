function genericOnClick(info, tab) {
    directCopy(info.frameUrl);
}

chrome.contextMenus.create({'title': 'Copy fra&me address',
    'contexts': ['frame'],
    'onclick': genericOnClick});

function directCopy(str) {
    //based on http://stackoverflow.com/a/12693636
    document.oncopy = function (event) {
        event.clipboardData.setData("Text", str);
        event.preventDefault();
    };
    document.execCommand("Copy");
    document.oncopy = undefined;
}