// all images imported from images directory
import product_01_image_01 from "../images/product_01.jpg";
 import product_01_image_02 from "../images/product_01.1.jpg";
import product_01_image_03 from "../images/product_01.3.jpg";

import product_02_image_01 from "../images/product_2.1.jpg";
import product_02_image_02 from "../images/product_2.2.jpg";
import product_02_image_03 from "../images/product_2.3.jpg";

import product_03_image_01 from "../images/jollof0.jpg";
import product_03_image_02 from "../images/jollof0.jpg";
import product_03_image_03 from "../images/jollof0.jpg";

import product_04_image_01 from "../images/friedrice1.jpg";
import product_04_image_02 from "../images/friedrice1.jpg";
import product_04_image_03 from "../images/friedrice1.jpg";

 import product_05_image_01 from "../images/jollof1.jpg";
 import product_05_image_02 from "../images/jollof1.jpg";
 import product_05_image_03 from "../images/jollof1.jpg";

// import product_06_image_01 from "../images/bread(1).png";
// import product_06_image_02 from "../images/bread(2).png";
// import product_06_image_03 from "../images/bread(3).png";

const products = [
  {
    id: "01",
     title: "Rice and zongo stew",
    price: 60.0,
    image01: product_01_image_01,
    image02: product_01_image_02,
    image03: product_01_image_03,
     category: "Rice",

     desc: "Delicious Rice and zongo stew",
   },

  {
    id: "02",
    title: "Fried Rice",
    price: 50.0,
    image01: product_02_image_01,
    image02: product_02_image_02,
    image03: product_02_image_03,
    category: "Rice",
    
    desc: "Local ghanaian Fried rice",
  },

  {
    id: "03",
    title: "Jollof Rice",
    price: 50.0,
    image01: product_03_image_01,
    image02: product_03_image_02,
    image03: product_03_image_03,
    category: "Rice",
    
    desc: "Local Ghanaian Jollof",
  },

  {
    id: "04",
    title: "Assorted Fried rice",
    price: 110.0,
    image01: product_04_image_01,
    image02: product_04_image_02,
    image03: product_04_image_03,
    category: "Rice",
    
    desc: "Local Ghanaian assorted fried rice.",
  },

  // {
  //   id: "05",
  //   title: "Cheese Burger",
  //   price: 24.0,
  //   image01: product_05_image_01,
  //   image02: product_05_image_02,
  //   image03: product_05_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },
  // {
  //   id: "06",
  //   title: "Royal Cheese Burger",
  //   price: 24.0,
  //   image01: product_01_image_01,
  //   image02: product_01_image_02,
  //   image03: product_01_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  {
    id: "05",
    title: " Assorted Jollof",
    price: 50.0,
    image01: product_05_image_02,
    image02: product_05_image_01,
    image03: product_05_image_03,
    category: "Rice",
    
    desc: "Local Ghanaian Jollof with vegetables and egg.",
  },

  
  // {
  //   id: "10",
  //   title: "Classic Hamburger",
  //   price: 24.0,
  //   image01: product_05_image_02,
  //   image02: product_05_image_01,
  //   image03: product_05_image_03,
  //   category: "Burger",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  // {
  //   id: "11",
  //   title: "Crunchy Bread ",
  //   price: 35.0,
  //   image01: product_06_image_01,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },

  // {
  //   id: "13",
  //   title: "Loaf Bread ",
  //   price: 35.0,
  //   image01: product_06_image_03,
  //   image02: product_06_image_02,
  //   image03: product_06_image_03,
  //   category: "Bread",

  //   desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta ad et est, fugiat repudiandae neque illo delectus commodi magnam explicabo autem voluptates eaque velit vero facere mollitia. Placeat rem, molestiae error obcaecati enim doloribus impedit aliquam, maiores qui minus neque.",
  // },
];

export default products;
