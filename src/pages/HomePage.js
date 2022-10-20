import PostItem from "../components/PostItem"
import {useState, useEffect} from "react";
import React from "react";

export default function HomePage() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        async function getData() {
            const response = await fetch("http://wordpress.mitmulti.dk/wp-json/wp/v2/posts?_embed");
            const data = await response.json();
						console.log(data);
            setPosts(data);
        }
        getData();
    }, []);
    
    return (  
        <section className="grid-container">
            
            {posts.map(post => (
		    <PostItem key={post.id} post={post} />
    ))}
        </section>
    );
}
