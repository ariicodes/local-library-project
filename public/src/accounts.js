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
	const booksPossessed = []

	books.map(book => {
		const authId = book.authorId
		const borrows = book.borrows
    
		borrows.forEach(borrow => {
			if (borrow.id === accId && borrow.returned === false) {
				const author = authors.find(author => author.id === authId)
				booksPossessed.push({
					...book,
					author,
					borrows,
				})
			}
		})
	})
	return booksPossessed
}

module.exports = {
	findAccountById,
	sortAccountsByLastName,
	getTotalNumberOfBorrows,
	getBooksPossessedByAccount,
}
