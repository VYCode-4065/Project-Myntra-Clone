import { MdAdd, MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { bagSliceAction } from "../store/bagSlice";
const HomeItems = ({ item }) => {
  const addHai = [];
  const dispatch = useDispatch();
  const handleAdd = () => {
    addHai.push(item.id);
    dispatch(bagSliceAction.addtoBag(item));
  };
  const handleRemove = (itm) => {
    console.log(itm);

    dispatch(bagSliceAction.removefromBag(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button
        type="button"
        className="btn w-100 btn-success mt-3 me-2"
        onClick={handleAdd}
      >
        <MdAdd />
        Add to cart
      </button>
      <button
        type="button"
        className="btn w-100 btn-danger mt-3 me-2"
        onClick={() => {
          handleRemove(item.id);
        }}
      >
        <MdDelete />
        Remove from cart
      </button>
    </div>
  );
};

export default HomeItems;
