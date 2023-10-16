import Button from "../components/Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Harikishan" title="Harikishan" />
          <Button onClickHandler={handleClick} value="Shubrajyothi" title="Shubrajyothi" />
          <Button onClickHandler={handleClick} value="Cycle" title="Cycle" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
