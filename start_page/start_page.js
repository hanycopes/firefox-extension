// This code is supoosed to print the bookmarks to the console

function onFulfilled(bookmarks) {
    console.log(bookmarks);
  }
  
  function onRejected(error) {
    console.log(`An error: ${error}`);
  }
  
  var gettingBookmarks = browser.bookmarks.get("bookmarkAAAA");
  gettingBookmarks.then(onFulfilled, onRejected);

  // Then we will have a function 