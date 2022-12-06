import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUser } from "./redux/feature/user.feature";

function UserRedux() {
  let userState = useSelector((state) => {
    return state["users"];
  });
  let { loading, users } = userState;
  let dispatch = useDispatch();
  useEffect(() => {
    dispatch(getUser());
  }, [dispatch]);
  return (
    <div className="table_container">
      {loading ? (
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
            {users?.map((item) => {
              return (
                <tr className="table_data_row" key={item.id}>
                  <td className="table_data">{item.id}</td>
                  <td className="table_data">{item.name}</td>
                  <td className="table_data">{item.email}</td>
                  <td className="table_data">{item.username}</td>
                  <td className="table_data">{item.website}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
}

export default UserRedux;
