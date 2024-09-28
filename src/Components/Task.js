import { DeleteOutlined, RightCircleOutlined } from "@ant-design/icons";
import React, { useEffect, useState } from "react";

function Task({ icon, title, value,fetchTasks }) {
  const [getData, setData] = useState();
  const [apiError, setError] = useState();
  const set_data = async () => {
    try {
      const response = await fetch(`http://localhost:8080/data/${getData._id}`, {
        method: "GET", // Use GET method for retrieving data
        headers: {
          "Content-Type": "application/json",
        },
      });
  
      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }
  
      const jsonData = await response.json(); // Parse response JSON data
      console.log(jsonData); // Log retrieved data
      console.log("Data retrieved successfully");
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const updateData = async (value) => {
    console.log(value)
    try {
      const response = await fetch(`http://localhost:8080/data/${value?._id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({_id:value?._id}),
      });
  
      if (!response.ok) {
        throw new Error("Failed to update data");
      }
      console.log(response)
  if(response.status === 200){
    fetchTasks()
      console.log("Data updated successfully");}
    } catch (error) {
      console.error(error.message);
    }
  };
  
  const deleteData = async (value) => {
    try {
      const response = await fetch(`http://localhost:8080/data/${value?._id}`, {
        method: "DELETE", 
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({_id: value?._id}),
      });
  
      if (!response.ok) {
        throw new Error("Failed to delete data"); 
      }
      fetchTasks()
      console.log("Data deleted successfully"); // Corrected success message
    } catch (error) {
      console.error(error.message);
    }
  };
  
  
  
  useEffect(() => {
    if (getData) {
      set_data();
      console.log(getData);
    }
  }, [getData]);

  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems:'center',
          borderBottom: "2px solid grey",
          height: "30px",
          margin: "5px 5px",
          background:'#3c873cb5'
        }}
      >
        <p style={{ margin: "0px", padding: "0px 20px" }}>{title}</p>{" "}
        {icon === "Think" || icon === "pending" ? (
          <p style={{ margin: "0px", padding: "0px 20px" }}>
            <RightCircleOutlined
              onClick={() => {
                updateData(value);
              }}
            />
          </p>
        ) : (
          <p style={{ margin: "0px", padding: "0px 20px" }}><DeleteOutlined onClick={() => {
            deleteData(value);
          }}/></p>
        )}
      </div>
    </div>
  );
}

export default Task;
