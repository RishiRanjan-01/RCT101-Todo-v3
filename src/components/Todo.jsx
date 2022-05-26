import React, { useEffect, useState } from "react";
import TodoInput from "./TodoInput";
// import { v4 as uuid } from "uuid";
import "./Todo.css";
import TodoList from "./TodoList";
import axios from "axios";

const Todo = () => {
  const [data, setData] = useState([]);
  // const [finishedTask, setFinishedTask] = useState([]);
  const [toggle, setToggle] = useState(true);
  const [page, setPage] = useState(1);
  const [limit,setLimit] = useState(5);
  const [totalcount, setTotalCount] = useState()

  // let toggle = false;

  // console.log(page)
  // console.log(totalcount);

  useEffect(() => {
    axios.get(`http://localhost:8008/todos?_page=${page}&_limit=${limit}`).then((res) => {
      console.log(res.data);
      setData(res.data);
      setTotalCount(Number(res.headers["x-total-count"]))
    });
  }, [page, limit]);

  const HandleAdd = (title1) => {
    // console.log(title1);

    axios
      .post("http://localhost:8008/todos", {
        // method:"POST",
        // headers:{
        //   "content-type":"application/json"
        // },
        // body:JSON.stringify({
        title: title1,
        status: false,
        //  }),
      })
      .then((res) => {
        setData([...data, res.data]);
        // console.log(res.data);
      });

    // const payload = {
    //   title: title,
    //   status: false,
    //   id: uuid(),
    // };
    // setData([...data, payload]);
    // console.log(data);
  };

  const HandleCompletedItem = (id) => {
    // alert(id)
    let updatedList = data.map((item) =>
      item.id === id ? { ...item, status: !item.status } : item
    );
    setData(updatedList);

    // console.log(finishedTask);
  };

  const HandleDelete = (id) => {
    let updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
  };

  return (
    <div>
      <div className="inputBox">
        <TodoInput onClick={HandleAdd} />
      </div>
      <div className="ShowList">
        <div>
          {data
            .filter((item) => (toggle ? true : item.status))
            .map((item) => {
              return (
                <TodoList
                  key={item.id}
                  {...item}
                  handleChange={HandleCompletedItem}
                  HandleDelete={HandleDelete}
                />
              );
            })}
          <div>
            <button disabled={page<=1} onClick={()=>setPage(page-1)}>{"<"}</button>
            <select onChange={(e)=>{setLimit(Number(e.target.value))}}>
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
            </select>
            <button disabled={totalcount< page*limit} onClick={()=>setPage(page+1)}>{">"}</button>
          </div>
        </div>
        <button className="showbtn" onClick={() => setToggle(!toggle)}>
          {toggle ? "Show Completed Task" : "Show All Task"}
        </button>
      </div>
    </div>
  );
};

export default Todo;
