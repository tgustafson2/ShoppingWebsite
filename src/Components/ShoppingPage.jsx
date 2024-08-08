import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";

function ShoppingPage({ itemsArr, addToCart }) {
  const items = itemsArr;
  const [currItems, setCurrItems] = useState(items);
  const [sortSetting, setSortSetting] = useState("default");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    let itemsResult = [...items];
    const re = new RegExp(filter, "i");
    if (filter !== "") {
      itemsResult = itemsResult.filter((item) => re.test(item.title));
    }
    if (sortSetting !== "default") {
      if (sortSetting === "price-asc") {
        itemsResult = itemsResult.sort((a, b) => a.price - b.price);
      } else {
        itemsResult = itemsResult.sort((a, b) => b.price - a.price);
      }
    }
  }, [sortSetting, filter]);

  return (
    <>
      <input type="search" onChange={(e) => setFilter(e.target.value)}></input>
      <select
        name="filter"
        value={sortSetting}
        onChange={(e) => setSortSetting(e.target.value)}
      >
        <option value="default">Default</option>
        <option value="price-asc">Price: Low to High</option>
        <option value="price-desc">Price: High to Low</option>
      </select>
      {currItems.map((item) => {
        <ItemCard
          title={item.title}
          price={item.price}
          imageUrl={item.url}
          addToCart={addToCart}
        />;
      })}
    </>
  );
}

export default ShoppingPage;
