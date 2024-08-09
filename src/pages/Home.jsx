import React, { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.auth.userData);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
      setLoading(false);
    });
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen">
        <Container>
          <div className="flex justify-center items-center h-full">
            <h1 className="text-3xl font-bold text-white hover:text-gray-400 transition-colors duration-300">
              {user
                ? "No posts available. Check back later!"
                : "Login to read posts"}
            </h1>
          </div>
        </Container>
      </div>
    );
  }

  return (
    <div className="w-full py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.$id} className="h-full">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Home;
