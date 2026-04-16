import { useEffect, useState } from "react";
import axios from "axios";
import UploadForm from "../components/UploadForm";
import CardList from "../components/CardList";

const Home = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    try {
      const res = await axios.get("http://localhost:3000/api/posts");
      setPosts(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-10">
          Image Upload Cards
        </h1>

        <UploadForm fetchPosts={fetchPosts} />

        <CardList posts={posts} />
      </div>
    </div>
  );
};

export default Home;