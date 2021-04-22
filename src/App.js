import QuoteMachine from "./components/QuoteMachine";

const App = () => {
  const data = [
    {
      quote: "“Be yourself; everyone else is already taken.”",
      author: "Oscar Wilde",
    },
    {
      quote:
        "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
      author: "Albert Einstein",
    },
    {
      quote: "“You only live once, but if you do it right, once is enough.”",
      author: "Mae West",
    },
    {
      quote: "“Always forgive your enemies; nothing annoys them so much.”",
      author: "Oscar Wilde",
    },
    {
      quote:
        "“To live is the rarest thing in the world. Most people exist, that is all.”",
      author: "Oscar Wilde",
    },
  ];

  return (
    <div>
      <QuoteMachine data={data}/>
    </div>
  );
};

export default App;
