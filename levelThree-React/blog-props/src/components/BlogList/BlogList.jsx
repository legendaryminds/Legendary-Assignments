// BlogList.jsx
import React from "react";
import BlogPost from "./BlogPost"; 

function BlogList({data}) {
  return (
    <div>
      {data.map(item => (
        <BlogPost
          key={item.date}
          title={item.title}
          subTitle={item.subTitle}
          author={item.author}
          date={item.date}
        />
      ))}
    </div>
  );
}

export default BlogList;
