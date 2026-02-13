import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-4xl font-bold">Hello, Next.js!</h1>
      <p className="mt-4 text-lg">Welcome to your Next.js app.</p>
      <p className="mt-4 text-lg">This is my first Next.js app.</p>
      <button className="mt-6 px-6 py-4 bg-gray-500 text-white rounded cursor-pointer ">Get Started</button>
    </div>
  );
}
