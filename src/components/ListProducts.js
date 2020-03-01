import React from "react";

const ListProducts = ({ dataset, className }) => {
  // console.log('dataset is',dataset);
  const listItems = dataset.map((item,index) => {
    const classFirstItem = (index===0) ? "first" : "";
    return(
    <li className={`product-item ${classFirstItem}`} key={index}>
      <div className="product-thumbnail"><img src={item.src} alt="product" /></div>
      <div className="product-infobox">
        <h4>{item.productName}</h4>
        <div className="extra-info">
          <span>Rp {item.price}</span>
          <span>{item.amountSold} sold</span>
        </div>
      </div>
    </li>)
  });
  return (
    <ul className="list-products">
      {listItems}
    </ul>
  );
}
export default ListProducts;