import { useQuery } from "react-query";
import axios from "axios";

const UseApi = (key = "", url = "") => {
  const fetchData = async (url) => {
    console.log("url", url);
    const response = await axios.get(url);
    return response.data;
  };

  const { data, isLoading, error, refetch } = useQuery(key, () =>
    fetchData(url)
  );

  return [data, isLoading, error, refetch];
};
export default UseApi;
