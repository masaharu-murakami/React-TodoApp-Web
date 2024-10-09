import Task from "./component/Task";
import { Box, Center, CheckboxGroup, Text } from '@chakra-ui/react';
import './App.css';

function App(){
    return (
        <Box mt="64px">
          <Center>
            <Box>
              <Box mb="24px">
                <Text fontsize="24px" fontWeight="bold">
                  タスク一覧
                </Text>
              </Box>
              <CheckboxGroup>
                <Task name="買い物" />
                <Task name="ランニング" />
                <Task name="プログラミングの学習" />
              </CheckboxGroup>
            </Box>
          </Center>
        </Box>
    );
}

export default App;