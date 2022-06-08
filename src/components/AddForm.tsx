import { AddIcon } from "@chakra-ui/icons";
import { SimpleGrid, Input, Button, List, ListItem, AlertDialog } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { Names } from "../popup";
export const AddForm = () => {
    const [names, setNames] = useState([''])

    const onSave = (names: string[]) => {
        const data: Names = {
            key: Date.now().toString(),
            names: names
        }
        chrome.storage.local.set(data)
    }

    return (
        <>
            <List>
                {names.map((name, index) => {
                    return (
                        <ListItem>
                            <Input placeholder="name" onChange={(event) => {
                                setNames(names.map((v, k) => {
                                    if (k === index) {
                                        return event.target.value
                                    } else {
                                        return v
                                    }
                                }))
                            }} />
                        </ListItem>
                    )
                })}
                <Button
                    onClick={() => { setNames([...names, '']) }}
                >
                    <AddIcon />
                </Button>
            </List>
            <Button onClick={() => {
                onSave(names)
            }}>Save</Button>
        </>
    );
}