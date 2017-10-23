function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  const rankedLists = document.querySelectorAll('.ranked-list');
  const firstList = rankedLists[0];
  const secondList = rankedLists[1];

  let children = firstList.children;
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }

  children = secondList.children;
  for (let i = 0; i < children.length; i++) {
    children[i].innerHTML = parseInt(children[i].innerHTML) + n;
  }
}

function deepestChild() {
  let node = document.querySelector('#grand-node');
  let nextNode = node.children[0];
  while (nextNode) {
    node = nextNode;
    nextNode = node.children[0]
  }
  return node;
}