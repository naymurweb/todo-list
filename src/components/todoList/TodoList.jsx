import Button from "../ui/button/Button";

const TodoList = ({ todo, delateItem, updateItem }) => {
  const design = {
    border: "1px solid gray",
    margin: "20px 0px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
  };

  return (
    <div>
      {todo.map((item) => (
        <div key={item.id} style={design}>
          {item.completed === true ? (
            <div style={{ backgroundColor: "yellow" }}>
              <h3>Title: {item.title}</h3>
              <p>Description: {item.description}</p>
            </div>
          ) : (
            <div style={{ backgroundColor: "white" }}>
              <h3>Title: {item.title}</h3>
              <p>Description: {item.description}</p>
            </div>
          )}

          <div>
            <input type="checkbox" onClick={() => updateItem(item.id)} />
            <Button delateItem={() => delateItem(item.id)}>Delate</Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
