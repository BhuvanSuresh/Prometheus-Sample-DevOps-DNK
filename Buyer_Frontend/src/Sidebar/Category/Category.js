import "./Category.css";
import Input from "../../components/Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Cosmetics"
          title="Cosmetics"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Household"
          title="Household"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Pots"
          title="Pots"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Handicrafts"
          title="Handicrafts"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
