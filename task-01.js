
const categoriesList = document.querySelectorAll("#categories .item");
const numCategories = categoriesList.length;
console.log("Number of categories:", numCategories);
console.log(" ");

categoriesList.forEach(function(category) {
  const categoryName = category.querySelector("h2").textContent;
  
  const numElements = category.querySelectorAll("ul li").length;
  
  console.log("Category:", categoryName);
  console.log("Elements:", numElements);
  console.log(" ");
  });