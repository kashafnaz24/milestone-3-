import Link from "next/link";
import CommentsSection from "./CommentSection/page";


interface posts{
  userId: number;
  id: number;
  title: string;
  body : string;
}

 const DynamicBlog = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=20");
  const posts:posts[] = await response.json();
  console.log("posts==>", posts)
  return (
    <div className="mb-10">
    <h1 className="text-[35px] font-serif text-center" >A dynamic blog with multiple posts using Next.js routing.</h1>
    <h1 className="text-[25px] font-sans text-center">Implement a comments section using React state.</h1>
    <div className="grid grid-cols-4 gap-5 w-[80%] mx-auto p-11 ">
        {
          posts.map((post) => {
            return (
              <Link key={post.id} href={`/posts/${post.id}?title=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.body)}`}>
               <div className="p-2 border-[#2c2c2c]">{post.id}- {post.title}</div>
              </Link>

            )
          })
        }
      </div>
      <CommentsSection />
    </div>
  )
}

export default DynamicBlog