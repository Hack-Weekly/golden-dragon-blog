import BlogPosts1 from "../components/BlogPosts1";
import BlogPosts2 from "../components/BlogPosts2";
import FeaturedPost from "../components/FeaturedPost";



function BlogList() {
  return (
    <>
      <h1 className="title">Dream Blog</h1>
        <BlogPosts1 />
        <FeaturedPost />
        <BlogPosts2 />
    </>
  );
}

export default BlogList;
