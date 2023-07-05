const noPreferencesProvided = (
  favoriteAuthor,
  preferredGenre,
  favoriteBook,
  bookLength
) => {
  return (
    favoriteAuthor === '' &&
    preferredGenre === '' &&
    favoriteBook === '' &&
    bookLength === null
  );
};

export const generatePrompt = (values) => {
  const { favoriteAuthor, preferredGenre, favoriteBook, bookLength } = values;

  if (
    noPreferencesProvided(
      favoriteAuthor,
      preferredGenre,
      favoriteBook,
      bookLength
    )
  ) {
    return null;
  }

  const promptParts = [
    "Hi! I'm looking for a new book to read. Please recommend a book for me based on the following preferences: (Give me title and author. max_tokens: 200).",
  ];

  if (favoriteAuthor) {
    promptParts.push(
      `I am interested in books by the author ${favoriteAuthor}.`
    );
  }

  if (preferredGenre) {
    promptParts.push(
      `I am interested in books in the ${preferredGenre} genre.`
    );
  }

  if (favoriteBook) {
    promptParts.push(`My favorite book so far is ${favoriteBook}.`);
  }

  if (bookLength) {
    promptParts.push(
      `I would like the book to be around ${bookLength} pages long.`
    );
  }

  return promptParts.join(' ');
};
