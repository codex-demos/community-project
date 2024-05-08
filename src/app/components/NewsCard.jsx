'use client';

export default function NewsCard({ article }) {
  return (
    <>
      <div className="bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-sm rounded-lg overflow-hidden mx-auto font-[sans-serif] ">
        <img src={article.image} className="w-full" />
        <div className="px-4 py-6">
          <h3 className="text-[#333] text-xl font-bold">Heading</h3>
          <p className="mt-4 text-sm text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor
            auctor arcu, at fermentum dui. Maecenas Lorem ipsum dolor sit amet,
            consectetur adipiscing elit. Sed auctor auctor arcu, at fermentum
            dui. Maecenas.
          </p>
          <button
            type="button"
            className="px-6 py-2.5 mt-6 rounded text-white text-sm tracking-wider font-semibold border-none outline-none bg-blue-600 hover:bg-blue-700 active:bg-blue-600"
          >
            View
          </button>
        </div>
      </div>
    </>
  );
}
