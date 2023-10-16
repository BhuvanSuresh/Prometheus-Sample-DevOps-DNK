import { BsFillBagFill } from "react-icons/bs";
import axios from "axios"; // Import Axios

const Card = ({ id,img, title, star, reviews, prevPrice, newPrice, productId }) => {
  // Function to handle the POST request
  const handleAddToCart = () => {
    // You can customize the data to send in the request body as needed
    const data = {
      productId: id,
    };

    // Send a POST request to "/placeOrder" API
    axios
      .post("/api/placeOrder", data)
      .then((response) => {
        // Handle the response as needed (e.g., show a success message)
        console.log("Item added to cart:", response.data);
        console.log("Order placed for id"+id);
      })
      .catch((error) => {
        // Handle errors (e.g., show an error message)
        console.error("Error adding item to cart:", error);
        console.log("Order placed for id "+id);
      });
  };

  return (
    <>
      <section className="card">
        <img src={img} alt={title} className="card-img" />
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>
          <section className="card-price">
            <div className="price">₹ {newPrice}</div>
            <div className="bag">
              <BsFillBagFill className="bag-icon" />
            </div>
          </section>
        </div>
        <button onClick={handleAddToCart}>Buy</button>
      </section>
    </>
  );
};

export default Card;
