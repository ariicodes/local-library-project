function findAccountById(accounts, id) {
	return accounts.find(account => account.id === id)
}

const sortAccountsByLastName = accounts => {
	return accounts.sort((account1, account2) =>
		account1.name.last.toLowerCase() > account2.name.last.toLowerCase() ? 1 : -1
	)
}

const getTotalNumberOfBorrows = (account, books) => {
	let number = 0
	const accId = account.id

	books.forEach(book => {
		book.borrows.forEach(borrow => {
			if (borrow.id === accId) number += 1
		})
	})

	return number
}

function getBooksPossessedByAccount(account, books, authors) {
	const accId = account.id

	const booksPossessed = books
		.filter(book =>
			book.borrows.some(borrow => borrow.id === accId && !borrow.returned)
		)
		.map(book => ({
			...book,
			author: authors.find(author => author.id === book.authorId),
			borrows: book.borrows.filter(
				borrow => borrow.id === accId && !borrow.returned
			),
		}))

	return booksPossessed
}

module.exports = {
	findAccountById,
	sortAccountsByLastName,
	getTotalNumberOfBorrows,
	getBooksPossessedByAccount,
}
