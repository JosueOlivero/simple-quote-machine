import { useState } from "react";

import '../UI/QuoteMachine.css';

// import QuoteItems from "./QuoteItems";

const QuoteMachine = (props) => {
  const selected = props.data[Math.floor(Math.random() * props.data.length)];

  const [quote, setQuote] = useState(selected.quote);
  const [author, setAuthor] = useState(selected.author);

  const clickHandler = () => {
    const new_selected = props.data[Math.floor(Math.random() * props.data.length)];
    setQuote(new_selected.quote);
    setAuthor(new_selected.author);
  };

  return (
    <div className='container'>
      <div className='machine-container'>
        <h1>{quote}</h1>
        <h2>-{author}</h2>
      </div>
      <button className='btn' onClick={clickHandler}>Change quote!</button>
    </div>
  );
};

export default QuoteMachine;
