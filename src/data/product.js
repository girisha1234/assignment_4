// src/data/products.js
import laptopImg from '../assets/macbook.jpg';
import iphoneImg from '../assets/iphone.jpg';
import ipadImg from '../assets/ipad.jpg';

export const products = [
  {
    name: "Apple MacBook Air",
    img: laptopImg,
    price: 119378,
    description: "2022 Apple MacBook Air with M2 chip and 13.6-inch display",
    link: "https://www.apple.com/in/macbook-air/",
  },
  {
    name: "iPhone 16 Pro",
    img: iphoneImg,
    price: 62345,
    description: "Latest iPhone 16 Pro with A17 Bionic chip and triple camera",
    link: "https://www.apple.com/in/iphone/",
  },
  {
    name: 'Apple iPad Air 13"',
    img: ipadImg,
    price: 87234,
    description: "13-inch iPad Air with M1 chip and Apple Pencil support",
    link: "https://www.apple.com/in/ipad-air/",
  },
];