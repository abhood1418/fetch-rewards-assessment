import { useState, useEffect } from 'react';
import { getAllData, postForm } from '../services/post';
import axios from 'axios';


const Form = () => {

  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const respData = await axios.get("https://frontend-take-home.fetchrewards.com/form");
      setData(respData.data);
      console.log(data);
    };
    fetchData();
  }, []);

  return (
  <h1>Hello World</h1>
)

}

export default Form;
