import React from "react";

const ListProducts = ({ dataset, className }) => {
  // console.log('dataset is',dataset);
  const listItems = dataset.map((item,index) => {
    const classFirstItem = (index===0) ? "first" : "";
    return(
    <li className={`product-item ${classFirstItem}`} key={index}>
      <div className="product-thumbnail"><img src="https://ecs7.tokopedia.net/img/cache/700/product-1/2019/4/24/1779754/1779754_f6a9267c-8cc0-44b9-8347-c794499a77bc_700_700.jpg" alt="product" /></div>
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