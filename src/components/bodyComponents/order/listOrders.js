import productList from "../inventory/productList";

/* CUSTOMER DATA */

const customer = {
  firstName: "M",
  lastName: "KHUMAEDI",
  position: "Software Engineer",
  mobile: "+62 81947996680",
};


/* FUNCTION TO GENERATE PRODUCTS */

const generateProducts = (index) => {
  return [
    {
      quantity: 5,
      product: productList[index % productList.length],
    },
    {
      quantity: 5,
      product: productList[1],
    },
    {
      quantity: 5,
      product: productList[2],
    },
  ];
};


/* GENERATE ORDERS */

const orders = Array.from({ length: 19 }, (_, i) => {
  return {
    id: i + 1,
    products: generateProducts(i),
    customer: customer,
  };
});


export default orders;