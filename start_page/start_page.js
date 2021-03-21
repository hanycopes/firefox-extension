function makeIndent(indentLength) {
  return ".".repeat(indentLength);
}

function logItems(bookmarkItem, indent) {
  if (bookmarkItem.url) {
    var urls = bookmarkItem.url
    var limit = urls.length
    for (var i = 1; i < limit ; i +=1){
      var ids = "bookmark-" + i
      updateHTML(ids,urls)
  }

  } else {
    console.log(makeIndent(indent) + "Bookmark");
    indent++;
  }
  if (bookmarkItem.children) {
    for (child of bookmarkItem.children) {
      logItems(child, indent);
    }
  }
  indent--;
}

function logTree(bookmarkItems) {
  logItems(bookmarkItems[0], 0);
}

function onRejected(error) {
  console.log(`An error: ${error}`);
}
function updateHTML(elmId, value) {
  var elem = document.getElementById(elmId);
  if(typeof elem !== 'undefined' && elem !== null) {
    elem.innerHTML = value;
  }
}
var gettingTree = browser.bookmarks.getTree();
gettingTree.then(logTree, onRejected);