import axios from "axios";
import React, { useEffect, useState } from "react";

function User() {
  const [state, setState] = useState({
    isloading: false,
    users: [],
    errorMessage: "",
  });
  useEffect(() => {
    try {
      setState({
        ...state,
        isloading: true,
      });
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) =>{
        console.log(res)
        return setState({
          ...state,
          isloading: false,
          errorMessage: "",
          users: res.data,
        })
      }
      );
    } catch (err) {
      setState({
        ...state,
        isloading: false,
        errorMessage: err,
      });
    }
  }, []);

  return (
    <div className="table_container">
      {state.isloading ? (
        <h2>Loading.....</h2>
      ) : (
        <table className="table">
          <tr className="table_data_row">
            <th className="table_data">id</th>
            <th className="table_data">name</th>
            <th className="table_data">email</th>
            <th className="table_data">username</th>
            <th className="table_data">website</th>
          </tr>
          <tbody>
            {state?.users?.map((user) => {
              return (
                <tr className="table_data_row" key={user.id}>
                  <td className="table_data">{user.id}</td>
                  <td className="table_data">{user.name}</td>
                  <td className="table_data">{user.email}</td>
                  <td className="table_data">{user.username}</td>
                  <td className="table_data">{user.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default User;
