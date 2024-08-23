/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  for(let i = 0; i < transactions.length; i++) {
    let category = transactions[i].category;
    let totalSpent = 0;
    for(let j = 0; j < transactions.length; j++) {
      if(transactions[j].category === category) {
        totalSpent += transactions[j].price;
      }
    }
    transactions[i].totalSpent = totalSpent;
  }
  return [];
}

module.exports = calculateTotalSpentByCategory;
