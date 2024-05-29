import React, { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import "../CSS/Cart.css";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";

const Cart = () => {
  const { cartItems, clearCart } = useContext(CartContext);
  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const downloadPdf = () => {
    const input = document.getElementById("cart-items-container", "cart-total"); // The element to be converted to PDF

    html2canvas(input)
      .then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        const pdf = new jsPDF();
        pdf.addImage(imgData, "PNG", 0, 0);
        pdf.save("plants-purchase.pdf");
      })
      .catch((error) => {
        console.error("Could not generate PDF: ", error);
      });
  };

  const handleBuyPlants = () => {
    clearCart();
    alert("Plants bought successfully!");
    downloadPdf(); // Call the function to download PDF after the purchase is done
  };

  return (
    <div className="cart">
      <div className="cart-header">
        <h2 className="cart-title">Shopping Cart</h2>
        <p className="cart-total">Total Price: ₹{totalPrice.toFixed(2)}</p>
      </div>
      {cartItems.length === 0 ? (
        <p className="cart-empty">No items in the cart.</p>
      ) : (
        <div id="cart-items-container" className="cart-items">
          {cartItems.map((item, index) => (
            <div key={index} className="cart-item">
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <h3 className="cart-item-name">{item.name}</h3>
                <p className="cart-item-price">Price: ₹{item.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
      {cartItems.length > 0 && (
        <button className="buy-button" onClick={handleBuyPlants}>
          Buy Plants
        </button>
      )}
    </div>
  );
};

export default Cart;
