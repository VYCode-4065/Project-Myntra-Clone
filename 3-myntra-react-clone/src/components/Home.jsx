import { useSelector } from "react-redux";
import HomeItems from "./HomeItems";

const Home = () => {
  const items = useSelector((store) => store.item);
  return (
    <main>
      <div className="items-container">
        {items.length !== 0 &&
          items.map((item) => <HomeItems key={item.id} item={item} />)}
      </div>
    </main>
  );
};

export default Home;
