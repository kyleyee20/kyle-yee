import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

function Post() {
  const [postData, setPostData] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
                title,
                slug,
                mainImage{
                    asset->{
                        _id,
                        url
                    },
                    alt
                }
            }`
      )
      .then((data) => {
        setPostData(data);
      })
      .catch(console.error);
    // the empty bracket means it only runs once
  }, []);

  return (
    <main className="post">
      <section className="section">
        <h1 className="h1">Posts Page</h1>
        <h2 className="h2">Welcome to my posts!</h2>
        <div className="grids">
          {postData &&
            postData.map((post, index) => (
              <article>
                <Link to={"/post/" + post.slug.current} key={post.slug.current}>
                  <span
                    className="backgroundCard"
                    key={index}
                  >
                    <img
                      className="picture"
                      src={post.mainImage.asset.url}
                      alt={post.mainImage.alt}
                    />
                    <span className="titleBox">
                      <h3 className="postTitle">
                        {post.title}
                      </h3>
                    </span>
                  </span>
                </Link>
              </article>
            ))}
        </div>
      </section>
    </main>
  );
}

export default Post;
