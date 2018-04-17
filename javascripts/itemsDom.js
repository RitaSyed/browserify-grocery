const itemsOutputDiv = document.getElementById('items');

const itemsDomString = (items) => {
  let domString = '';
  items.forEach((item) => {
    // domString += `<h3>${item.name}</h3>`;
    domString += `<div class="col-sm-3 text-center item">`;
    domString +=    `<div class="panel panel-info">`;
    domString +=      `<div class="panel-heading">`;
    domString +=        `<h3 class="panel-title">${item.name}</h3>`;
    domString +=      `</div>`;
    domString +=      `<div class="panel-body">`;
    domString +=        `<img src="${item.img}">`;
    domString +=      `</div>`;
    domString +=    `</div>`;
    domString += `</div>`;
  });
  return domString;
};

const printToDom = (items) => {
  itemsOutputDiv.innerHTML = itemsDomString(items);
};
module.exports = printToDom;
