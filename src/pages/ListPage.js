import React from "react";
import PostItem from '../components/PostItem';
import {useState, useEffect} from 'react';
import "../listpage.css";


export default function ListPage() {
    
    const [posts, setPosts] = useState([]);
        useEffect(() => {
        async function getData() {
            const response = await fetch("http://webapp.kallemersh.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
                        console.log(data);
            setPosts(data);
        }
        getData();
    }, []); 
    return (
        <>
        <section className="list">
            <h3>Indkøbskurv</h3>
        </section>
                    <section className="grid-container-list">
                    {posts.map(post => (
                    <PostItem key={post.id} post={post} />
                 ))}
                </section>
        </>
    );
    
}