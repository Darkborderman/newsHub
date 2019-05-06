function createFeedList() {
  const feedList = document.createElement('ul');
  feedList.setAttribute("id","feedList");
  if(existFeed()){
    document.getElementById("feedList").remove();
  }
  document.getElementById('container').append(feedList);
}
function addFeed(feedList){
  let 
}

function removeFeed() {

}
function existFeed() {
  return document.getElementById("feedList") !== null;
}

function showFeed() {
  if (existFeed()) {
    removeFeed();
  }
  createFeed();
}
