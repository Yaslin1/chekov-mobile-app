import { useState, useEffect } from 'react'
import { Center, Box, VStack, Checkbox, HStack, Text } from "native-base";
import TodoHeader from './TodoHeader';

export default function TodoList({user}) {
    const[todoItems, setToDoItems] = useState()

    useEffect(() => {
        if(user) {
            fetch(`https://chekov-api-yc.web.app/tasks/${user.uid}`)
            .then(res => res.json())
            .then(setToDoItems)
            .catch(alert)
        }
    }, [user])

    const handleItemUpdate = (id, done) => {
        const itemUpdate = { id, done : !done }

        fetch(`https://chekov-api-yc.web.app/tasks/${user.uid}`, {
            method: "PATCH",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(itemUpdate)
        })
        .then( res => res.json() )
        .then( data => {
            setToDoItems(data)
        })
        .catch(alert)
    }
    
    return (
        <Center w="100%">
            <Box maxW={300} w="100%">
               <VStack space={4} mt={4}>
                <TodoHeader user={user} setToDoItems={setToDoItems} />
                {!todoItems
                ? <Text fontSize="xl" w="100%" color="coolGray.300" textAlign="center">Loading...</Text>
                : todoItems.map(item => {
                    const thisItemId = item.id
                    const thisItemDone = item.done
                    return (
                    <HStack key={item.id} w="100%" justifyContent="space-between" alignItems="center">
                        <Checkbox 
                            aria-label={item.title}
                            isChecked={item.done}
                            onChange={ () => handleItemUpdate(thisItemId, thisItemDone)}/>
                        <Text fontSize={18} mx={2} 
                         onPress={ () => handleItemUpdate(thisItemId, thisItemDone)}
                        strikeThrough={item.done}
                        color={item.done ? "coolGray.500" : "coolGray.100"}
                        textAlign="left"
                        width="100%"

                        >{item.title} {item.id}</Text>
                    </HStack>
                )})
            }
               </VStack>
            </Box>
        </Center>
    );
}
