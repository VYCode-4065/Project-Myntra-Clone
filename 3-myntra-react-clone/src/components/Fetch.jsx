import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Home from "./Home";
import { itemSliceAction } from "../store/itemSlice";
import { fetchingSliceAction } from "../store/fetchingSlice";

const Fetch = () => {
  const fetchStatus = useSelector((store) => store.fetching);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchingSliceAction.fetchingInitiate());
    fetch("http://localhost:8080/items")
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchingSliceAction.fetchingDone());
        dispatch(itemSliceAction.addItem(data));
      });
  }, []);
  return;
};

export default Fetch;
