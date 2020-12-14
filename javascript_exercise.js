
const clothing = [
  {
    cost: 13.95,
    gender: 'M',
    name: 'shirt',
    size: 'XL',
  },
  {
    cost: 6.95,
    gender: 'W',
    name: 'scarf',
    size: 3,
  },
  {
    cost: 44.95,
    gender: 'M',
    name: 'jeans',
    size: 'M',
  },
  {
    cost: 22.95,
    gender: 'W',
    name: 'shirt',
    size: 'L',
  },
  {
    cost: 22.95,
    gender: 'M',
    name: 'shirt',
    size: 'S',
  },
  {
    cost: 13.95,
    gender: 'M',
    name: 'belt',
    size: 44,
  },
  {
    cost: 19.95,
    gender: 'W',
    name: 'panties',
    size: 'M',
  },
  {
    cost: 17.95,
    gender: 'M',
    name: 'undershirts',
    size: 'XL',
  },
  {
    cost: 33.95,
    gender: 'W',
    name: 'pants',
    size: 'S',
  },
  {
    cost: 17.95,
    gender: 'W',
    name: 'shirt',
    size: 'L',
  },
  {
    cost: 67.95,
    gender: 'M',
    name: 'hat',
    size: 'XL',
  },

];



function func1(el) {
  if (el.cost < 10) {
    return el;
  }
}
const newArray = clothing.filter(func1);


function func2(el) {
  if (el.cost >= 10) {
    if (el.gender == "M") {
      return el;
    }
  }
}
const newArray2 = clothing.filter(func2);



function func3(el1, el2) {
  return el1.cost - el2.cost;
}
const newArray3 = clothing.filter(func2).sort(func3);

console.log(newArray);
console.log(newArray2);
console.log(newArray3);
