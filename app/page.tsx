import Image from "next/image";

export default function Home() {
  return (
   
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <header className="w-full py-5 bg-indigo-600 text-white text-center text-3xl font-bold">
            Welcome to WordWave
          </header>
    
          <main className="flex flex-col items-center justify-center flex-1 w-full px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Unleash Your Creativity with WordWave
            </h1>
            <p className="text-xl text-gray-700 mb-4">
              Experience the most intuitive and cool editor for reading and writing blogs.
            </p>
            <p className="text-xl text-gray-700 mb-12">
              Powered by AI to assist you in penning amazing blogs effortlessly.
            </p>
            <div className="flex gap-6  items-center">
              <button className="px-8 py-3 mb-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                Get Started
              </button>
              <button className="px-8 py-3 mb-4 bg-indigo-600 text-white rounded-md hover:bg-indigo-500">
                Learn More
              </button>
            </div>
          </main>
    
          <footer className="w-full py-4 bg-indigo-600 text-white text-center">
            © 2024 WordWave. All rights reserved.
          </footer>
        </div>
  
  );
}
