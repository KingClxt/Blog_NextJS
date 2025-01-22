"use client"
import React, { useState } from "react";
import { BLOGS } from "@/data/blog";
import Blog from "@/components/Blog";

const page = () => {

  const [blogs, setBlogs] = useState(BLOGS)

  const deleteItem = (id: number)=>{
    setBlogs(blogs.filter(blog=>blog.id !== id))
  }

  return (
    <main>
      <h1 className="font-poppins font-bold text-[2.5rem]">Blogs</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-5">
        {blogs.map((blog) => (
          <Blog
            onDelete={deleteItem}
            description={blog.description}
            id={blog.id}
            image={blog.image}
            key={blog.id}
            titre={blog.titre}
          />
        ))}
      </div>
    </main>
  );
};

export default page;
