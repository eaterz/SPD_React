import React from "react";
import { useEffect, useState } from "react";
import Quote from "./Quote";

export default function QuoteList() {
  const [txt, setTxt] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      const respons = await fetch("https://dummyjson.com/quotes");
      const data = await respons.json();
      console.log(data.quotes);
      setTxt(data.quotes);
      setLoading(false);
    }
    getData();
  }, []);

  const TxtJSX = txt.map((teksts) => {
    return (
      <>
        {loading == true ? (
          <p>ladejas</p>
        ) : (
          <Quote autors={teksts.author} citats={teksts.quote} />
        )}
      </>
    );
  });

  return (
    <div>
      <h1>Quotes</h1>
      {TxtJSX}
    </div>
  );
}
