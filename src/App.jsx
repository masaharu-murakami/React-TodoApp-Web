import { useEffect, useState } from "react";
import Task from "./component/Task";
import {
  Flex,
  Box,
  Center,
  CheckboxGroup,
  Text,
  Input,
  Button
} from '@chakra-ui/react';
import axios from "axios";

function App(){
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");

  const fetch = async () => {
    const res = await axios.get("http://localhost:3010/tasks");
    setTasks(res.data);
  };

  const createTask = async () => {
     await axios.post("http://localhost:3010/tasks", {
      name: name,
      is_done: false,
      //nameとis_doneがRailsのTasksコントローラーのparamsに入るイメージ
     });
    setName(""); //入力フィールドをクリア
    fetch(); //新しいリストを持ってくる
  };

  useEffect(() => {
    fetch();
  }, []);

  const toggleIsDone = (index) => {
    const tasksCopy = [...tasks];
    const isDone = tasks[index].is_done;
    tasksCopy[index].isDone = !isDone;
    setTasks(tasksCopy);
  };

    return (
        <Box mt="64px">
          <Center>
            <Box>
              <Box mb="24px">
                <Text fontSize="24px" fontWeight="bold">
                  タスク一覧
                </Text>
              </Box>
              <Flex mb="24px">
                <Input
                  placeholder="タスク名を入力"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              <Box ml="16px">
                <Button colorScheme="teal" onClick={createTask}>
                  タスクを作成
                </Button>
              </Box>
              </Flex>
              <CheckboxGroup>
                {tasks.map((task, index) => {
                  return (
                    <Task
                      key={index}
                      index={index}
                      name={task.name}
                      ifDone={task.is_done}
                      toggleIsDone={toggleIsDone}
                    />
                  );
                })}

              </CheckboxGroup>
            </Box>
          </Center>
        </Box>
    );
}

export default App;