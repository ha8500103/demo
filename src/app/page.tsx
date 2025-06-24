import GsapTest from '../components/GsapTest';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-2xl font-bold mb-6">My Tailwind Boxes</h1>

      {/* Tailwind Boxes */}
      <div className="grid grid-cols-3 gap-4 mb-12">
        <div className="bg-red-500 text-white p-5 rounded shadow">Box 1</div>
        <div className="bg-blue-500 text-white p-5 rounded shadow">Box 2</div>
        <div className="bg-green-500 text-white p-5 rounded shadow">Box 3</div>
        <div className="bg-yellow-500 text-black p-5 rounded shadow">Box 4</div>
        <div className="bg-purple-500 text-red-500 p-5 rounded shadow">Box 5</div>
        <div className="bg-pink-500 text-white p-5 rounded shadow">Box 6</div>
      </div>

      {/* GSAP Box Animation */}
      <h2 className="text-xl font-semibold mb-4">GSAP Box Animation</h2>
      <GsapTest />
    </div>
  );
}
