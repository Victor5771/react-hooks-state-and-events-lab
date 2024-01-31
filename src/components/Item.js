// import React from "react";

// function Item({ name, category }) {
//   return (
//     <li className="">
//       <span>{name}</span>
//       <span className="category">{category}</span>
//       <button className="add">Add to Cart</button>
//     </li>
//   );
// }

// export default Item;

import React, { useState } from "react";

function Item({ name, category }) {
  // Step 1: Add state to track whether the item is in the cart or not
  const [inCart, setInCart] = useState(false);

  // Step 2: Add event handler to toggle the item's cart status
  const toggleCartStatus = () => {
    setInCart(!inCart);
  };

  return (
    <li className={inCart ? "in-cart" : ""}>
      <span>{name}</span>
      <span className="category">{category}</span>
      {/* Step 3: Update button className and text based on cart status */}
      <button className={inCart ? "remove" : "add"} onClick={toggleCartStatus}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
