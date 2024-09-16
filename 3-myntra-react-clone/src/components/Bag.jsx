import BagItem from "./BagItem";
import { useSelector } from "react-redux";
import BagItemSummary from "./BagItemSummary";

const Bag = () => {
  const item = useSelector((store) => store.bags);
  return (
    <>
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {item.length !== 0 &&
              item.map((item) => <BagItem key={item.id} item={item} />)}
            {/* <BagItem item={item[0]} /> */}
          </div>
          <div className="bag-summary">
            {item.length !== 0 &&
              item.map((item) => <BagItemSummary key={item.id} item={item} />)}
          </div>
        </div>
      </main>
    </>
  );
};

export default Bag;
