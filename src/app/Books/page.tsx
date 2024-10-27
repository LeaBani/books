'use client'

import { useState } from 'react';

interface Book {
  title: string;
  author: string;
}

export default function AddBook() {
  const [title, setTitle] = useState<string>('');
  const [author, setAuthor] = useState<string>('');
  const [books, setBooks] = useState<Book[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Ajouter un nouveau livre dans la liste
    const newBook: Book = { title, author };
    setBooks([...books, newBook]);

    // Réinitialiser les champs du formulaire
    setTitle('');
    setAuthor('');
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-blue-600">Ajouter un Livre</h1>

      <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-md w-80">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">Titre</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Titre du livre"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 font-bold mb-2">Auteur</label>
          <input
            type="text"
            id="author"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Auteur du livre"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors"
        >
          Ajouter
        </button>
      </form>

      {/* Affichage de la liste des livres */}
      <div className="mt-8 w-80">
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Liste des Livres</h2>
        <ul className="list-disc pl-5">
          {books.map((book, index) => (
            <li key={index} className="mb-2">
              <span className="font-semibold">{book.title}</span> - {book.author}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
