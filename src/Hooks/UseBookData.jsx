import { useEffect, useState } from "react";

const UseBookData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await fetch("https://im-sanny.github.io/fake-data/data.json");
      const data = await res.json();
      setData(data);
      setLoading(false);
    };
    fetchData();
  }, []);
  return { data, loading };
};

export default UseBookData;
