const productdetail={
    name:"laptop",
    price: 80000,
    color: "gray",
    harddisk: "250GB",
};
console.log("Below the product detail");
for(let keys of Object.keys(productdetail)){
    console.log(`${keys} : ${productdetail[keys]}`);
}