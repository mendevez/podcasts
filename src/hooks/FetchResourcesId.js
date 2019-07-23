import { useState, useEffect } from "react";
import listennotes from "../api/listennotes";
import axios from "axios";

const FetchResources = (type, id) => {
  const [resources, setResources] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();

    const fetchResource = async () => {
      try {
        const response = await listennotes.get(`/${type}/${id}`, {
          cancelToken: source.token
        });
        setResources(response.data);
        setLoading(false);
      } catch (error) {
        if (axios.isCancel(error)) {
          console.log("Cancelled due to another request");
        } else {
          throw error;
        }
      }
    };
    fetchResource(type, id);

    return () => source.cancel();
  }, [type, id]);

  return [resources, loading];
};

export default FetchResources;