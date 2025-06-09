import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router";

function Github() {
  /*
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(`https://api.github.com/users/ngmi-sky`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, []);
*/

  const data = useLoaderData();

  return (
    <div className="text-gray text-3xl m-5 text-center">
      Github followers :{data.followers}
      <img src={data.avatar_url} alt="Git Profile" width={300} />
    </div>
  );
}

export default Github;

export const githubInfoLoader = async () => {
  const res = await fetch(`https://api.github.com/users/ngmi-sky`);
  return res.json();
};
