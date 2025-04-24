import "./App.css";
import CryptoTable from "./components/CryptoTable";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setCoins } from "./features/crypto/cryptoSlice";
import { startMockUpdates } from "./features/crypto/mockUpdater";
import mockData from "./mockData";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCoins(mockData));
    startMockUpdates(dispatch);
  }, [dispatch]);

  return (
    <>
      <div className="main-container">
        <div className="header">
          <h1>Real-Time Crypto Price Tracker</h1>
          <h2>Assignment submission by Meet Suthar</h2>
        </div>
        <CryptoTable />
      </div>
    </>
  );
}

export default App;
