import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom'
import "./Home.css";
import axios from 'axios';
import { getUsers } from '../../../controllers/users';
import { async } from '@dabeng/react-orgchart';


const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    getUsers();
  }, [])

  const getUser = async () => {
    const response = await axios.get('http://localhost:5000/users');
    if (response.status === 200){
      setData(response.data);
    }
  };

  console.log("data=>", data);


  return (
    <div style={{marginTop:"150px"}}>
      <table className="styled-table">
        <thead>
        <tr>
          <th style={{testAlign: "center"}}>No.</th>
          <th style={{testAlign: "center"}}>Name.</th>
          <th style={{testAlign: "center"}}>Email.</th>
          <th style={{testAlign: "center"}}>Contact.</th>
          <th style={{testAlign: "center"}}>Action.</th>
        </tr>
        </thead>
        <tbody>
          {data.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{index+1}</th>
                <td>{item.name}</td>
                <td>{item.email}</td>
                <td>{item.contact}</td>
                <td>
                  <Link to={`/update/${item.id}`}>
                    <button className="btn btn-edit">Edit</button>
                  </Link>
                  <button className="btn btn-delete">Delete</button>
                  <Link to={`/view/${item.id}`}>
                    <button className="btn btn-view">View</button>
                  </Link>
                </td>
              </tr>
            );
          })}
        </tbody>        
      </table>
    </div>
  )
}

export default Home