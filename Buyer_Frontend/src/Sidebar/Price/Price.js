import Input from "../../components/Input";
import "./Price.css";

const Price = ({ handleChange }) => {
  return (
    <>
      <div className="ml">
        <h2 className="sidebar-title price-title">Price</h2>

        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handleChange={handleChange}
          value={300}
          title="0 - 300"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={700}
          title="300 - 700"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={1500}
          title="700 - 1500"
          name="test2"
        />

        <Input
          handleChange={handleChange}
          value={5000}
          title="over 1500"
          name="test2"
        />
      </div>
    </>
  );
};

export default Price;
