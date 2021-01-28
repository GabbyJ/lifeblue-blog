import React from 'react';
import BlogPost from "./BlogPost";
import Aside from "./Aside"

export default function BlogPage() {
    return (
        <div className="container blogPage">
        <Aside/>
        <div className="blogs">
        
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
            <BlogPost/>
        </div>
        </div>
    )
}
