function BlogItem({ blogPost }) {
  return (
    <>
      <h1>
        {blogPost.title} by {blogPost.author}
      </h1>
      <p>{blogPost.content}</p>
    </>
  );
}

export default BlogItem;
