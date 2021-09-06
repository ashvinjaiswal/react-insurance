import React, { useState, useEffect } from "react";
import "./style.css";
import QuoteInfo from "./quote";
import AddonCardList from "./addon-list";
import Loading from "./Loading";


export default function App() {
  const [loading, setLoading] = useState(true);
  const [quote, setQuote] = useState([]);

  const fetchQuote = async () => {
    let url = "http://localhost:8000/quote";
    setLoading(true);
    try {
      const response = await fetch(url);
      const quote = await response.json();
      setLoading(false);
      setQuote(quote);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  useEffect(() => {
    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className="container">
        <Loading />
      </div>
    );
  }

  return (
    <div className="container">
      <header>
        <h1>Home Insurance</h1>
      </header>
      <main>
        {quote[0] && <QuoteInfo quote={quote} />}
        <section>
          <h2>Tailor your cover with our optional extra</h2>
          <AddonCardList />
        </section>
      </main>
    </div>
  );
}
