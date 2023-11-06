import React, { useState, useEffect } from "react";

const useCall = (method, url, values) => {
  const [data, setData] = useState(null);

  useEffect(async () => {
    let response;
    if (method === "POST") {
      response = await fetch(url, {
        method: "POST",
        headers: new Headers({
          "content-type": "application/json",
        }),
        body: JSON.stringify(values),
      });
    } else {
      response = await fetch(url);
    }
    const responseValue = await response.json();
    setData(responseValue);
  }, []);

  return data;
};

export default useCall;
