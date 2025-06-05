'use client';

export default function Error({ error, reset }: { error: Error; reset: () => void }) {
  return (
    <div className="text-blue-500 p-4">
      <h2 className="text-xl font-bold">Something went wrong!</h2>
      <p>{error.message}</p>
      <button
        onClick={reset}
        className="mt-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        <img
  className="mask mask-star"
  src="https://img.daisyui.com/images/stock/photo-1567653418876-5bb0e566e1c2.webp" />
        Try again
      </button>
    </div>
  );
}
