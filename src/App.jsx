import Task from "./component/Task";
import { Box, Center, CheckboxGroup, Text } from '@chakra-ui/react';
import axios from "axios";
import { useEffect, useState } from "react";

function App(){
  const [tasks, setTasks] = useState([]);

  const fetch = async () => {
    const res = await axios.get("http://localhost:3010/tasks");
    console.log(res)
    setTasks(res.data);
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