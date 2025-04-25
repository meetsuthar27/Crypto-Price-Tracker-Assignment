import React, { useState } from "react";
import "./CryptoTable.css";
import { FaCaretUp, FaCaretDown } from "react-icons/fa";
import { TiEquals } from "react-icons/ti";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { MdOutlineInfo } from "react-icons/md";
import { FaMoon, FaSun } from "react-icons/fa";
import { useEffect } from "react";

const sortOptions = [
  { label: "Rank", value: "rank" },
  { label: "Price", value: "price" },
  { label: "1h %", value: "change1h" },
  { label: "24h %", value: "change24h" },
  { label: "7d %", value: "change7d" },
  { label: "Market Cap", value: "marketCap" },
  { label: "Volume (24h)", value: "volume24h" },
  { label: "Supply", value: "supply" },
];

const CryptoTable = () => {
  const coins = useSelector((state: RootState) => state.crypto.coins);
  const [sortKey, setSortKey] = useState("rank");
  const [sortAsc, setSortAsc] = useState(true);

  const sortedCoins = [...coins].sort((a, b) => {
    const valA =
      typeof a[sortKey] === "string" ? parseFloat(a[sortKey]) : a[sortKey];
    const valB =
      typeof b[sortKey] === "string" ? parseFloat(b[sortKey]) : b[sortKey];

    if (valA < valB) return sortAsc ? -1 : 1;
    if (valA > valB) return sortAsc ? 1 : -1;
    return 0;
  });

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortKey(e.target.value);
  };

  const toggleSortOrder = () => {
    setSortAsc((prev) => !prev);
  };

  const [theme, setTheme] = useState<"light" | "dark">("light");

  // Toggle theme function
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.setAttribute("data-theme", newTheme);
  };

  // Set initial theme on component mount
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <div className="crypto-table-container">
      <div className="control-bar">
        <div className="sort-controls">
          <label>Sort by</label>
          <select
            value={sortKey}
            onChange={handleSortChange}
            className="sort-select"
          >
            {sortOptions.map((opt) => (
              <option key={opt.value} value={opt.value}>
                {opt.label}
              </option>
            ))}
          </select>
          <button onClick={toggleSortOrder} className="sort-order-btn">
            {sortAsc ? "ASC" : "DESC"}
          </button>
        </div>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === "dark" ? <FaSun /> : <FaMoon />}
          <span>{theme === "dark" ? " Light Mode" : " Dark Mode"}</span>
        </button>
      </div>
      <table className="crypto-table">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Price</th>
            <th>1h %</th>
            <th>24h %</th>
            <th>7d %</th>
            <th>
              <div className="head-tooltip">
                Market Cap{" "}
                <div className="tooltip">
                  {" "}
                  <div className="tooltip-icon">
                    <MdOutlineInfo />
                  </div>
                  <span className="tooltiptext">
                    The total market value of a cryptocurrency's circulating
                    supply. It is analogous to the free-float capitalization in
                    the stock market. Market Cap = Current Price x Circulating
                    Supply.
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div className="head-tooltip">
                Volume (24h){" "}
                <div className="tooltip">
                  {" "}
                  <div className="tooltip-icon">
                    <MdOutlineInfo />
                  </div>
                  <span className="tooltiptext">
                    A measure of how much of a cryptocurrency was traded in the
                    last 24 hours.
                  </span>
                </div>
              </div>
            </th>
            <th>
              <div className="head-tooltip">
                Circulating Supply{" "}
                <div className="tooltip">
                  {" "}
                  <div className="tooltip-icon">
                    <MdOutlineInfo />
                  </div>
                  <span className="tooltiptext">
                    The amount of coins that are circulating in the market and
                    are in public hands. It is analogous to the flowing shares
                    in the stock market.
                  </span>
                </div>
              </div>
            </th>
            <th>Last 7 Days</th>
          </tr>
        </thead>
        <tbody>
          {sortedCoins.map((coin) => (
            <tr key={coin.rank}>
              <td>{coin.rank}</td>
              <td>
                <div className="name-cell">
                  <div className="logo-container">
                    <img
                      src={coin.logo}
                      alt={`${coin.name} logo`}
                      className="coin-logo"
                    />
                  </div>
                  <div className="name-symbol">
                    <div>{coin.name}</div>
                    <div className="symbol">{coin.symbol}</div>
                  </div>
                </div>
              </td>
              <td>$ {coin.price}</td>
              <td
                className={
                  coin.change1h > 0
                    ? "positive"
                    : coin.change1h < 0
                    ? "negative"
                    : "neutral"
                }
              >
                <div className="change">
                  {coin.change1h > 0 ? (
                    <>
                      <FaCaretUp /> {coin.change1h}%
                    </>
                  ) : coin.change1h < 0 ? (
                    <>
                      <FaCaretDown /> {Math.abs(coin.change1h)}%
                    </>
                  ) : (
                    <>
                      <TiEquals /> 0%
                    </>
                  )}
                </div>
              </td>
              <td
                className={
                  coin.change24h > 0
                    ? "positive"
                    : coin.change24h < 0
                    ? "negative"
                    : "neutral"
                }
              >
                <div className="change">
                  {coin.change24h > 0 ? (
                    <>
                      <FaCaretUp /> {coin.change24h}%
                    </>
                  ) : coin.change24h < 0 ? (
                    <>
                      <FaCaretDown /> {Math.abs(coin.change24h)}%
                    </>
                  ) : (
                    <>
                      <TiEquals /> 0%
                    </>
                  )}
                </div>
              </td>
              <td
                className={
                  coin.change7d > 0
                    ? "positive"
                    : coin.change7d < 0
                    ? "negative"
                    : "neutral"
                }
              >
                <div className="change">
                  {coin.change7d > 0 ? (
                    <>
                      <FaCaretUp /> {coin.change7d}%
                    </>
                  ) : coin.change7d < 0 ? (
                    <>
                      <FaCaretDown /> {Math.abs(coin.change7d)}%
                    </>
                  ) : (
                    <>
                      <TiEquals /> 0%
                    </>
                  )}
                </div>
              </td>
              <td>$ {coin.marketCap}</td>
              <td>$ {coin.volume24h}</td>
              <td>{coin.supply}</td>
              <td>
                <img
                  src={coin.graph}
                  alt={`${coin.name} graph`}
                  className="trend-graph"
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CryptoTable;
