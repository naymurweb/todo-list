import { useState } from "react";
import Button from "../ui/button/Button";
import Input from "../ui/input/Input";

const init = {
  title: "",
  description: "",
  id: "",
  completed: false,
};
const AddTask = ({ allTodo }) => {
  const [input, setInput] = useState({ ...init });

  const handleChange = (e) => {
    setInput((pre) => ({
      ...pre,
      [e.target.name]: e.target.value,
      id: Math.random().toString(36).substr(2, 5),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    allTodo(input);
    setInput({ ...init });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div style={{display:'flex',flexDirection:'column',gap:'20px'}}>
        <span>Title add: </span>
        <Input
          placeholder="title"
          name="title"
          value={input.title}
          handleChange={handleChange}
        />
        <span>Description: </span>
        <Input
          placeholder="description"
          name="description"
          value={input.description}
          handleChange={handleChange}
        /> 
        <Button>Add task</Button>
        </div>
      </form>
    </div>
  );
};

export default AddTask;
