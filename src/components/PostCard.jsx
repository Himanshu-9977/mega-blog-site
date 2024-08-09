import React from 'react';
import appwriteService from "../appwrite/config";
import { Link } from 'react-router-dom';
import { Calendar, User } from 'lucide-react';

function PostCard({ $id, title, featuredImage, author, createdAt }) {
    return (
        <Link to={`/post/${$id}`} className="group">
            <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-2xl hover:-translate-y-1 relative">
                <div className="aspect-w-16 aspect-h-9 overflow-hidden">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-6">
                    <h2 className="text-xl font-bold text-gray-800 dark:text-white mb-2 line-clamp-2 group-hover:text-blue-500 transition-colors duration-300">
                        {title}
                    </h2>
                    <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mt-4">
                        <User size={16} className="mr-2" />
                        <span>{author || 'Unknown Author'}</span>
                        <span className="mx-2">•</span>
                        <Calendar size={16} className="mr-2" />
                        <span>{new Date(createdAt).toLocaleDateString()}</span>
                    </div>
                </div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </div>
        </Link>
    );
}

export default PostCard;