//3. You have an interface for Product, containing the product's id, name, price, and category. You want to filter an array of Products based on a specific criterion and value.
/* Write a TypeScript generic function that takes this array, a criterion , and returns a new array containing only the products that match the given criterion and value. Use a generic type parameter in the function signature to ensure type safety. */

interface IProduct {
  id: string;
  name: string;
  price: number;
  category: string;
}

const myProducts: IProduct[] = [
  {
    id: "1",
    name: "T-Shirt",
    price: 500,
    category: "Clothing",
  },
  {
    id: "2",
    name: "T-Shirt",
    price: 600,
    category: "Clothing",
  },
  {
    id: "3",
    name: "T-Shirt",
    price: 700,
    category: "Clothing",
  },
  {
    id: "4",
    name: "Mobile",
    price: 1700,
    category: "Gadgets",
  },
];

function getArrayItem<T, K extends keyof T>(
  arr: T[],
  index: number,
  key: K
): T[K] {
  const item = arr[index];

  return item[key];
}
const users = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
];

console.log(getArrayItem(users, 0, "name"));
