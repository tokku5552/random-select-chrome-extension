import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, ChakraProvider } from "@chakra-ui/react"

const lottery = () => {
  //
}

const Popup = () => {
  const [count, setCount] = useState(0);
  const [currentURL, setCurrentURL] = useState<string>();

  useEffect(() => {
    chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
      setCurrentURL(tabs[0].url);
    });
    const hoge = chrome.storage.local.get()
    console.log(hoge)
  }, []);


  return (
    <>
      <ChakraProvider>
        <ul style={{ minWidth: "700px" }}>
          <li>Current URL: {currentURL}</li>
          <li>Current Time: {new Date().toLocaleTimeString()}</li>
        </ul>
        <Button
          onClick={() => setCount(count + 1)}
          style={{ marginRight: "5px" }}
        >
          count up
        </Button>
      </ChakraProvider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<React.StrictMode>
  <Popup />
</React.StrictMode>);
