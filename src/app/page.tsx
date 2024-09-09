import type { NextPage } from 'next';
import dynamic from 'next/dynamic';
import Head from 'next/head';

const ModelLoad = dynamic(() => import('./components/ModelLoad/ModelLoad'), {
  ssr: false,
  loading: () => <div>loading...</div>,
});

const Home = () => {
  return (
    <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr] bg-blue-600">

      <div className="flex flex-col bg-gray-500">
      <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-4 lg:py-4 lg:px-6 ">
        <div className="w-full h-full flex flex-col gap-4 bg-sky-100">
        </div>
        <div className="w-full h-full flex flex-col gap-4 bg-red-100">
        </div>
      </main>
      </div>

      <ModelLoad />
    </div>



  );
};

export default Home;