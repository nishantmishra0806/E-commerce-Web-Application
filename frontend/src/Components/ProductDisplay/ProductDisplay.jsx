import React, { useContext } from "react";
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from "../../Context/ShopContext";

const ProductDisplay = (props) =>{
    const {product} = props;
    const {addToCart}  = useContext(ShopContext)
   return(
    <div className="productdisplay">
       <div className="productdisplay-left">
          <div className="productdisplay-img-list">
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
            <img src={product.image} alt="" />
          </div>
          <div className="productdisplay-img">
            <img className="productdisplay-main-img" src={product.image} alt="" />
          </div>
       </div>
    <div className="productdisplay-right">
       <h1>{product.name}</h1>
       <div className="productdisplay-right-star">
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_icon} alt="" />
        <img src={star_dull_icon} alt="" />
        <p>(122)</p>
       </div>
         <div className="productdisplay-right-prices">
            <div className="productdisplay-right-prices-old">${product.old_price}</div>
            <div className="productdisplay-right-prices-new">${product.new_price}</div>
          </div>
          <div className="productdisplay-right-description">
          Our shirts are perfect for all your workout needs. With advanced moisture-wicking technology and quick dry design, you’ll have your shirt ready to wear right after your workout. Sweat condensation is eliminated while you train with this shirt. It is easy to wash, and you won’t have to worry about shrinkage!
          </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <p className="productdisplay-right-category">
            <span>Category :</span>Women/men, Tshirt, Crop-Top
           </p>
           <p className="productdisplay-right-category">
            <span>Tags :</span>Modern, Latest
           </p>
          </div>

        </div>
       
   )
}

export default ProductDisplay