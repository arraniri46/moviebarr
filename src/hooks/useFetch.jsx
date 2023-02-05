import { useEffect, useState } from "react";
import axios from "axios";

const useFetch = (URL) => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);

      try {
        const { data } = await axios.get(URL);
        setData(data.results);
      } catch (error) {
        console.log(error);
        setIsLoading(true);
      }
    }

    fetchData();
  }, []);

  return { data, isLoading };
};

export default useFetch;
