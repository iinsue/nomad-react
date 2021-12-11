import { useState, useEffect } from "react";

const App = () => {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const [chooseCoin, setChooseCoin] = useState();
  const [convert, setConvert] = useState(0);
  const [result, setResult] = useState(true);

  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);

  const onListChange = (event) => {
    setChooseCoin(event.target.value);
  };

  const onSubmit = (event) => {
    event.preventDefault();
    const list = chooseCoin.split(":");
    const coinPrice = parseFloat(list[1]);
    if (money === 0) {
      return;
    } else {
      setConvert(money / coinPrice);
      setResult(false);
    }
  };

  const onMoneyChange = (event) => {
    setMoney(event.target.value);
    console.log(event.target.value);
  };

  return (
    <div>
      <h1>The Coins {loading ? null : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <select onChange={onListChange}>
          <option>Choose your Coin</option>
          {coins.map((coin) => (
            <option key={coin.id}>
              {coin.name} ({coin.symbol}):{coin.quotes.USD.price}USD
            </option>
          ))}
        </select>
      )}
      <form onSubmit={onSubmit}>
        <label htmlFor="USD">USD : </label>
        <input
          id="USD"
          type="text"
          value={money}
          onChange={onMoneyChange}
          placeholder="Money"
        />
        <button>Convert</button>
      </form>
      <p>{result ? null : `You can buy ${convert} coin`}</p>
    </div>
  );
};

export default App;
