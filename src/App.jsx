import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import "./components/Searchtool.jsx";
import Searchtool from "./components/Searchtool.jsx";
import Info from "./components/info.jsx";
const Cors="http://localhost:8001/"
function App() {
  const [username, setUserName] = useState("");

  const onsearch = (username) => {
    setUserName(username);
  };

  const [data, setdata] = useState({});
  const getData = async () => {
    const token = "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";
    const api = `${Cors}https://api.github.com/users/${username}`;
    const response = await fetch(api
    //   , {
    //   headers: {
    //     Authorization: `Bearer ${token}`,
    //     "X-Github-Api-Version": "2022-11-28",
    //   },
    // }
    );
    console.log(response)
    const results = await response.json();
    console.log(username);
    return results;
  };
  useEffect(() => {
    getData().then((data) => setdata(data));
    
  }, [username]);

  return (
    <>
      <Searchtool onsearch={onsearch} />
      <Info
        image={data.avatar_url}
        heading={data.login}
        repo={data.public_repos}
        country={data.location}
        paragraph={data.bio}
      />
    </>
  );
}

export default App;
