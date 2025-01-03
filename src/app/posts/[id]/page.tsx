
import React from 'react';
import Link from 'next/link';

type PageProps = {
  params: Promise<{ id: string }>;
  searchParams: { title?: string; body?: string };
};

const Page: React.FC<PageProps> = async ({ params, searchParams }) => {
  const resolvedParams = await params; // Await the params
  const { id } = resolvedParams;
  const { title = "Default Title", body = "Default Body" } = searchParams;

  return (
    <div className="w-[80%] mx-auto p-11">
      <h1 className="my-5 text-[35px] font-mono">Post ID: {id}</h1>
      <h2>
        <b className="text-[20px] font-serif">Title:</b> {title}
      </h2>
      <p>
        <b className="text-[20px] font-serif">Body:</b> {body}
      </p>
      <Link href="/">
        <button className="p-[10px] my-5 text-white bg-black rounded-md">View all Posts</button>
      </Link>
    </div>
  );
};

export default Page;
