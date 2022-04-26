import Bloglist from "./Bloglist";
import useFetch from "./useFetch";

const Home = () => {
  const {data: blogs, isPending, error} = useFetch("http://localhost:8000/blogs");
  

  return (
    <div className="Home">
      {error && <div>{error}</div>}
      {isPending && <div>loading</div>}
      {blogs && <Bloglist blogs={blogs} />}
      {/* <Bloglist blogs={blogs.filter((blog) => blog.author === 'mario')} /> */}
    </div>
  );
};

export default Home;
