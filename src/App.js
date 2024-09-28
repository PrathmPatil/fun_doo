import logo from "./logo.svg";
import "./App.css";
import Header from "./Components/header";
import List from "./Components/List";
import { useEffect, useState } from "react";
import { fetchContent } from "./Components/fetchContent";
import {  Modal } from "antd";
import Button from "./Components/button";
import Footer from "./Components/footer";

function App() {
  const [modal, setModal] = useState(false);
  const [task,setTask]=useState('')
  const [isValidate,setValidation]=useState(false)
  const listDataArray = [
    { title: "Task 1", status: "pending" },
    { title: "Task 2", status: "Done" },
    { title: "Task 3", status: "pending" },
    { title: "Task 4", status: "Think" },
    { title: "Task 4", status: "completed" },
    { title: "Task 6", status: "pending" },
    { title: "Task 7", status: "Done" },
    { title: "Task 8", status: "pending" },
    { title: "Task 9", status: "Done" },
    { title: "Task 10", status: "Think" },
  ];
  const [taskdata, setTaskData] = useState();
  // http://localhost:9000/data
  const fetchTasks = async () => {
    try {
      const response = await fetch("http://localhost:8080/data");
      const data = await response.json();
      setTaskData(data);
    } catch (error) {
      console.error("Error fetching tasks:", error);
    }
  };



  useEffect(() => {
    fetchTasks();
  }, []);
  const submit =async (e) => {
    e.preventDefault()
    setValidation(true)
    if(!task || task === '')
    {
      return
    }
    setValidation(false)
const data={_id: taskdata?.length+1,
status: 'Think',
title: task}
    try {
      const response = await fetch('http://localhost:8080/data', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
  
      if (!response.ok) {
        throw new Error('Failed to add data');
      }
  console.log(response)
  setTask('')
  fetchTasks()
      console.log('Data added successfully');
    } catch (error) {
      console.error(error.message);
    }
    console.log(task)
    setModal(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header
          title={"TODO"}
          main_header={true}
          setModal={setModal}
          modal={modal}
          style={{height:'40px'}}
        />
      </header>
      <main className="App-main">
        <List title={"Thing To DO"} data={taskdata} status={"Think"} fetchTasks={fetchTasks} />
        <List title={"Doing"} data={taskdata} status={"pending"} fetchTasks={fetchTasks} />
        <List title={"Done"} data={taskdata} status={"Done"} fetchTasks={fetchTasks}/>
        <Modal
          open={modal}
          onCancel={() => {
            setModal(false);
            setTask('')
            setValidation(false)
          }}

          footer={false}
        >
          <h1 style={{ textAlign: "center" }}>Add Task</h1>
          <form>
            <div style={{display:'flex',flexDirection:'column',marginBottom:'10px'}}> 
            <input id="input1" style={{height:'30px',width:'458px',padding:'2px 5px',marginRight:'10px' }} onChange={(e)=>{setTask(e.target.value)}} value={task}></input>
<label style={{color:'red',fontSize:'15px',display:isValidate && (!task || task === '')?'block':'none'}}>Please enter task</label>
            </div>
            <Button title={'Submit'} backgroundColor={'green'} onclick={(e)=>{submit(e)}} />
          </form>
        </Modal>
      </main>
      <Footer />
    </div>
  );
}

export default App;
