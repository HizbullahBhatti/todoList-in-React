import { React, useState, useRef, useEffect } from "react";
import "./style.css";

const getLocalData=()=>{
  const list=localStorage.getItem("mytodolist");
  if(list){
    return JSON.parse(list);
  }else{
    return [];
  }
}
const Todo = () => {
  const [inputData, setInputData] = useState(""); // for input data
  const [items, setItems] = useState(getLocalData()); // for storing todo list
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const addItems = () => {
    if (!inputData) {
      alert("Please fill the data");
    } else {
      const myNewInputData = {
        id: new Date().getTime().toString(),
        name: inputData,
      }
      setItems([...items, myNewInputData]);
      setInputData("");
    }
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((curElem) => {
      return curElem.id !== id;
    });
    console.log(updatedItems);
    setItems(updatedItems);
  };

  const removeAll = () => {
    setItems([]);
  }

  useEffect(()=>{
    localStorage.setItem("mytodolist",JSON.stringify(items));
  },[items]);

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="not found" />
            <figcaption>Add your List here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              ref={inputRef}
              placeholder="Add Items ... "
              className="form-control"
              value={inputData}
              onChange={(event) => {
                setInputData(event.target.value);
              }}
            />
            <i className="fa fa-plus add-btn" onClick={addItems}></i>
          </div>

          <div className="showItems">
            {items.map((curElement) => {
              return (
                <div className="eachItem" key={curElement.id}>
                  <h3>{curElement.name}</h3>
                  <div className="todo-btn">
                    <i className="far fa-edit add-btn"></i>
                    <i className="far fa-trash-alt add-btn" onClick={()=>deleteItem(curElement.id)}></i>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="showItems">
            <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAll}>
              <span>CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
