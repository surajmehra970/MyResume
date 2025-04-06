"use client";

export default function TailwindTest() {
  return (
    <div className="p-8 m-4 bg-blue-500 text-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Tailwind CSS Test</h2>
      <p className="text-sm">This component tests if Tailwind CSS is working properly.</p>
      <div className="mt-4 flex space-x-2">
        <button className="px-4 py-2 bg-green-500 hover:bg-green-600 rounded">Button 1</button>
        <button className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded">Button 2</button>
      </div>
    </div>
  );
} 