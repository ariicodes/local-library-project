const getTotalBooksCount = books => books.length

const getTotalAccountsCount = accounts => accounts.length

function getBooksBorrowedCount(books) {
  let count = 0

  books.forEach(book => {
		book.borrows.forEach(borrow => {
			if (borrow.returned === false) count += 1
		})
	})

  return count
}

function getMostCommonGenres(books) {
}

function getMostPopularBooks(books) {}

function getMostPopularAuthors(books, authors) {}

module.exports = {
	getTotalBooksCount,
	getTotalAccountsCount,
	getBooksBorrowedCount,
	getMostCommonGenres,
	getMostPopularBooks,
	getMostPopularAuthors,
}
