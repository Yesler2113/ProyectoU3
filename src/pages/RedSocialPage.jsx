
import React, { useState, useEffect } from "react";
import { Navbar, TweetList } from "../Components";
import axios from "axios";

export const RedSocialPage = () => {
  const [tweets, setTweets] = useState([]);

  const addTweet = (newTweet) => {
    setTweets([newTweet, ...tweets]);
  };

  /*useEffect(() => {
    const fetchTweets = async () => {
      try {
        const response = await axios.get("https://localhost:7074/api/publication/user");
        setTweets(response.data);
      } catch (error) {
        console.error("Error fetching tweets:", error);
      }
    };

    fetchTweets();
  }, []);*/

  return (
    <div className="flex-auto h-screen bg-gray-700 overflow-hidden ">
      <Navbar addTweet={addTweet} />
      <div className={`flex-auto ml overflow-y-auto max-h-screen`}>
        <h1 className="text-3xl font-bold text-black m-3">Redes Sociales</h1>
        <p className="flex text-lg text-white m-3">
          A continuación se presentan las redes sociales de la empresa, donde
          podrás encontrar información y actualizaciones sobre nuestros A
          continuación se presentan las red
        </p>
        {/* Renderiza el componente TweetList */}
        <TweetList tweets={tweets} />
      </div>
    </div>
  );
};