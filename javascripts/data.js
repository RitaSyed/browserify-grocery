let departments = [];
let items = [];
const cart = [];

const getDepartments = () => {
  return departments;
};

const setDepartments = (departmentsArray) => {
  departments = departmentsArray;
};
const setItems = (itemsArray) => {
  items = itemsArray;
};
const getItems = () => {
  return items;
};

const getItemsByDepartment = (departmentId) => {
  const selectedItems = [];
  items.forEach((item) => {
    if (item.departmentId === departmentId) {
      selectedItems.push(item);
    }
  });
  return selectedItems;
};

const setCart = (itemId, numberToAdd) => {
  const itemPosition = items.map(function (item) {
    return item.id;
  }).indexOf(itemId);
  // console.log(itemPosition);
  // console.log(items[itemPosition]);
  const newItem = items[itemPosition];
  newItem.purchaseNum = numberToAdd;
  console.log(newItem);
  cart.push(newItem);
};

module.exports = {
  getDepartments,
  setDepartments,
  setItems,
  getItems,
  getItemsByDepartment,
  setCart,
};
