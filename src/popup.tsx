import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import {
  Box,
  Button,
  ChakraProvider,
  Container,
  List,
  ListItem,
} from "@chakra-ui/react";
import { AddForm } from "./components/AddForm";

export type Names = {
  key: string;
  names: string[];
};

const lottery = (items: string[]) => {
  const num = items.length;
  return items[Math.floor(Math.random() * num)];
};

const Popup = () => {
  const [selected, setSelected] = useState("");
  const [namesObject, setNamesObject] = useState<{ [key: string]: Names }>({});

  useEffect(() => {
    chrome.storage.local.get().then((value) => {
      setNamesObject(value);
    });
  }, []);

  const onClickLottery = () => {
    const dummy = ["A", "B", "C"];
    const result = lottery(dummy);
    setSelected(result);
  };

  return (
    <>
      <ChakraProvider>
        <Box w="540px">
          <Container centerContent>
            <AddForm />
            <List>
              {Object.keys(namesObject).map((key) => {
                return (
                  <ListItem>
                    {key}:{namesObject[key].names}
                  </ListItem>
                );
              })}
            </List>
            Random Select: {selected}
            <Button
              onClick={() => onClickLottery()}
              style={{ marginRight: "5px" }}
            >
              START!
            </Button>
          </Container>
        </Box>
      </ChakraProvider>
    </>
  );
};

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <Popup />
  </React.StrictMode>
);
