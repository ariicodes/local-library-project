function findAuthorById(authors, id) {
	return authors.find(author => author.id === id)
}

const findBookById = (books, id) => {
	return books.find(book => book.id == id)
}

const partitionBooksByBorrowedStatus = books => {
	const checkedOut = []
	const returned = []

	books.forEach(book => {
		book.borrows[0].returned ? returned.push(book) : checkedOut.push(book)
	})

  return [checkedOut, returned]
}

const getBorrowersForBook = (book, accounts) => {
  
}

module.exports = {
	findAuthorById,
	findBookById,
	partitionBooksByBorrowedStatus,
	getBorrowersForBook,
}
