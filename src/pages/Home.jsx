<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import appwriteService from "../appwrite/config";
import { Container, PostCard } from '../components';
import { useSelector } from 'react-redux';

function Home() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const user = useSelector(state => state.auth.userData);
=======
import React, {useEffect, useState} from 'react'
import appwriteService from "../appwrite/config";
import {Container, PostCard} from '../components'

function Home() {
    const [posts, setPosts] = useState([])
>>>>>>> 248a250550171b53be0fb7f2bce8dc1a0d021ce2

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
<<<<<<< HEAD
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
                            {user ? 'No posts available. Check back later!' : 'Login to read posts'}
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
=======
                setPosts(posts.documents)
            }
        })
    }, [])
  
    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
>>>>>>> 248a250550171b53be0fb7f2bce8dc1a0d021ce2
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
<<<<<<< HEAD
    );
}

export default Home;
=======
    )
}

export default Home
>>>>>>> 248a250550171b53be0fb7f2bce8dc1a0d021ce2
