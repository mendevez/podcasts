import listennotes from "../api/listennotes";
import { useState, useEffect } from "react";
import axios from "axios";

const FetchPopular = () => {
  const [podcasts, setPodcasts] = useState([]);
  const [loading, setLoading] = useState([]);


  useEffect(() => {
    
    let source = axios.CancelToken.source();

    // fetch popular podcasts
    const fetchPodcasts = async () => {

      try {
        const response = await listennotes.get(`/best_podcasts`, {
          cancelToken: source.token
        });
        setPodcasts(response.data.podcasts);
        setLoading(false);
      } catch (error) {

        
        if (axios.isCancel(error)) {
          console.log("Cancelled due to another request");
        } else {
          throw error;
        }
      }
    };
    fetchPodcasts();

    // Cancel request when component is unmounted
    return () => source.cancel();
  }, []);

  return [podcasts, loading];
};

export default FetchPopular;
