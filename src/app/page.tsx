import Link from 'next/link'; 

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-blue-600">Hello World</h1>
      <Link href="/books">
        <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition-colors">
          Ajouter un Livre
        </button>
      </Link>
    </div>
  );
}
