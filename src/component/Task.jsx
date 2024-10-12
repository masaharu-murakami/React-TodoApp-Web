import { CloseIcon } from "@chakra-ui/icons";
import { Checkbox, Box, Text } from "@chakra-ui/react";


function Task(props) {
  console.log('Task ID:', props.id);
  return (
    <Box mb="16px">
      <Checkbox
        isChecked={props.isDone}
        colorScheme="blue"
        size="lg"
        onChange={() => {
          props.toggleIsDone(props.index);
        }}
      >
        <Text>{props.name}</Text>
      </Checkbox>
      <CloseIcon onClick={() => props.destroyTask(props.id)}/>
    </Box>
  );
};

export default Task
