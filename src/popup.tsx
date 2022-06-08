import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import { Button, ChakraProvider, Container, Input, ListItem, UnorderedList } from "@chakra-ui/react"

const lottery = (items: string[]) => {
  const num = items.length
  return items[Math.floor(Math.random() * num)]
}

const Popup = () => {
  const [selected, setSelected] = useState('')

  useEffect(() => {
    const hoge = chrome.storage.local.get()
  }, []);

  const onClickLottery = () => {
    const dummy = ['A', 'B', 'C']
    const result = lottery(dummy)
    setSelected(result)
  }

  return (
    <>
      <ChakraProvider>
        <Container centerContent>
          <Input placeholder="usage" />
          <UnorderedList>
            <ListItem>
              Random Select: {selected}
            </ListItem>
          </UnorderedList>
          <Button
            onClick={() => onClickLottery()}
            style={{ marginRight: "5px" }}
          >
            count up
          </Button>
        </Container>
      </ChakraProvider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(<React.StrictMode>
  <Popup />
</React.StrictMode>);
