import { useState, useEffect } from "react";
import listennotes from "../api/listennotes";
import axios from "axios";

const FetchPodcastById = (type, id) => {
  const [podcast, setPodcast] = useState([]);
  const [loading, setLoading] = useState([]);

  useEffect(() => {
    let source = axios.CancelToken.source();

    // Fetch podcasts and episodes
    const fetchPodcast = async () => {
      try {
        const response = await listennotes.get(`/${type}/${id}`, {
          cancelToken: source.token
        });
        setPodcast(response.data);
        setLoading(false);
      } catch (error) {
        
        if (axios.isCancel(error)) {
          console.log("Cancelled due to another request");
        } else {
          throw error;
        }
      }
    };
    fetchPodcast(type, id);

    // Cancel request when component is unmounted
    return () => source.cancel();
  }, [type, id]);

  return [podcast, loading];
};

export default FetchPodcastById;