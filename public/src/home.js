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

const topFiveSort = result => {
	return result.sort((a, b) => b.count - a.count).slice(0, 5)
}

function getMostCommonGenres(books) {
	const result = []

	const genreCount = books.reduce((acc, book) => {
		acc[book.genre] = (acc[book.genre] || 0) + 1
		return acc
	}, {})

	for (const genre in genreCount) {
		result.push({ name: genre, count: genreCount[genre] })
	}

	return topFiveSort(result)
}

function getMostPopularBooks(books) {
	const bookCount = {}
	const result = []

	books.forEach(book => {
		const borrows = book.borrows.length
		bookCount[book.title] = borrows
	})

	for (const title in bookCount) {
		result.push({ name: title, count: bookCount[title] })
	}

	return topFiveSort(result)
}

function getMostPopularAuthors(books, authors) {

  const authorBorrowCounts = books.reduce((acc, book) => {
		const authorId = book.authorId
		acc[authorId] = (acc[authorId] || 0) + book.borrows.length
		return acc
	}, {})

	const result = Object.entries(authorBorrowCounts)
		.map(([authorId, count]) => {
			const { first, last } = authors.find(
				author => author.id === parseInt(authorId)
			).name
			return { name: `${first} ${last}`, count }
		})

	return topFiveSort(result)
}

module.exports = {
	getTotalBooksCount,
	getTotalAccountsCount,
	getBooksBorrowedCount,
	getMostCommonGenres,
	getMostPopularBooks,
	getMostPopularAuthors,
}
