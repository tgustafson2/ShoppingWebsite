import { useEffect, useState } from "react";
import ItemCard from "./ItemCard";
import { useOutletContext } from "react-router-dom";

function ShoppingPage() {
  const {itemsArr, addToCart} = useOutletContext();
  // console.log(items);
  const [currItems, setCurrItems] = useState(itemsArr);
  const [sortSetting, setSortSetting] = useState("default");
  const [filter, setFilter] = useState("");
  useEffect(() => {
    let itemsResult = [...itemsArr];
    const re = new RegExp(filter, "i");
    if (filter !== "") {
      itemsResult = itemsResult.filter((item) => re.test(item.title) || re.test(item.description));
    }
    if (sortSetting !== "default") {
      if (sortSetting === "price-asc") {
        itemsResult = itemsResult.sort((a, b) => a.price - b.price);
      } else {
        itemsResult = itemsResult.sort((a, b) => b.price - a.price);
      }
    }
    // console.log(itemsResult);
    setCurrItems(itemsResult);
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
        return (<ItemCard
          key={item.id}
          title={item.title}
          price={item.price}
          imageUrl={item.image}
          addToCart={addToCart}
        />)
      })}
    </>
  );
}

export default ShoppingPage;
