const totalCategories = document.querySelectorAll("#categories .item");
console.log(`Number of categories: ${totalCategories.length}`);

totalCategories.forEach((category) => {
  console.log(`Category: ${category.firstElementChild.textContent}`);
  console.log(`Elements: ${category.lastElementChild.children.length}`);
});