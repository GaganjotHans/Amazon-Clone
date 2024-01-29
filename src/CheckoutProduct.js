// import React  from "react";
// import "./CheckoutProduct.css";
// import StarIcon from "@mui/icons-material/Star";
// import { useStateValue } from "./StateProvider";

// function CheckoutProduct({ id, image, title, price, rating }) {
//   // eslint-disable-next-line
//   const [{ basket }, dispatch] = useStateValue();
//   const removeFromBasket = () => {
//     dispatch({
//       type: "REMOVE_FROM_BASKET",
//       id: id,
//     });
//   };
//   return (
//     <div className="checkoutProduct">
//       <img className="checkoutProduct__image" src={image} alt="ProductImage" />

//       <div className="checkoutProduct__info">
//         <p className="checkoutProduct__title">{title}</p>
//         <p className="checkoutProduct__price">
//           <small>$</small>
//           <strong>{price}</strong>
//         </p>
//         <div className="checkoutProduct__rating">
//           {Array(rating)
//             .fill()
//             .map((_, i) => (
//               <p>
//                 <StarIcon />
//               </p>
//             ))}
//         </div>
//         <button onClick={removeFromBasket}>Remove from Basket</button>
//       </div>
//     </div>
//   );
// }

// export default CheckoutProduct;

import React, { forwardRef } from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "./StateProvider";
import StarIcon from "@mui/icons-material/Star";

const CheckoutProduct = (props, ref) => {
  const { id, image, title, price, rating } = props;
  const [, dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id,
    });
  };

  return (
    <div className="checkoutProduct" ref={ref}>
      <img src={image} alt={title} className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          <small>$ </small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span role="img" aria-label="rating_emoji" key={i}>
                <StarIcon style={{ fill: "#E1E15C" }} />
              </span>
            ))}
          {rating < 5 &&
            Array(5 - rating)
              .fill()
              .map((_, i) => (
                <span role="img" aria-label="rating_emoji" key={i}>
                  <StarIcon style={{ fill: "#E1E15C" }} />
                </span>
              ))}
        </div>
        <button onClick={removeFromBasket}>Remove from Basket</button>
      </div>
    </div>
  );
};

export default forwardRef(CheckoutProduct);
