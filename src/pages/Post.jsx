import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import appwriteService from "../appwrite/config";
import { Button, Container } from "../components";
import parse from "html-react-parser";
import { useSelector } from "react-redux";

export default function Post() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  const { slug } = useParams();
  const navigate = useNavigate();

  const userData = useSelector((state) => state.auth.userData);

  const isAuthor = post && userData ? post.userId === userData.$id : false;

  useEffect(() => {
    if (slug) {
      appwriteService.getPost(slug).then((post) => {
        if (post) setPost(post);
        else navigate("/");
        setLoading(false);
      });
    } else navigate("/");
  }, [slug, navigate]);

  const deletePost = () => {
    appwriteService.deletePost(post.$id).then((status) => {
      if (status) {
        appwriteService.deleteFile(post.featuredImage);
        navigate("/");
      }
    });
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
        <div className="animate-spin rounded-full h-32 w-32 border-t-4 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return post ? (
    <div className="py-8 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700 min-h-screen">
      <Container>
        <div className="w-full flex justify-center mb-6 relative border border-gray-700 rounded-xl shadow-2xl p-4 bg-gray-800">
          <img
            src={appwriteService.getFilePreview(post.featuredImage)}
            alt={post.title}
            className="rounded-xl max-h-96 object-cover transition-transform duration-500 transform hover:scale-105"
          />
          {isAuthor && (
            <div className="absolute right-6 top-6 flex space-x-3">
              <Link to={`/edit-post/${post.$id}`}>
                <Button bgColor="bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:from-green-500 hover:to-green-700">
                  Edit
                </Button>
              </Link>
              <Button
                bgColor="bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:from-red-500 hover:to-red-700"
                onClick={deletePost}
              >
                Delete
              </Button>
            </div>
          )}
        </div>
        <div className="w-full mb-6">
          <h1 className="text-4xl font-bold text-gray-200 tracking-wide">
            {post.title}
          </h1>
        </div>
        <div className="prose prose-lg max-w-none text-gray-300">
          {parse(post.content)}
        </div>
      </Container>
    </div>
  ) : (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-700">
      <p className="text-gray-400 text-lg">Post not found.</p>
    </div>
  );
}
