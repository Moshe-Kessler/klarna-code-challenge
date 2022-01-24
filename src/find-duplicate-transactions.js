/**
 * Finds duplicated transactions
 * @param {Transaction[]} transactions
 * @returns {Transaction[][]} arrays of duplicated transactions
 */
function findDuplicateTransactions(transactions = []) {
  const sortedByDate = transactions.sort(
    (a, b) => timeToNum(a.time) - timeToNum(b.time)
  );

  const groups = sortedByDate.reduce((acc, curr) => {
    const idx = `${curr.sourceAccount}${curr.targetAccount}${curr.category}${curr.amount}`;
    acc[idx] = isMoreThanOneMinute(acc[idx] || [], curr)
      ? acc[idx]
      : [...(acc[idx] || []), curr];
    return acc;
  }, {});
  const result = [];
  for (const group of Object.values(groups)) {
    if (group.length > 1) {
      result.push(group);
    }
  }
  return result;
}

/**
 * Parses a string containing a date
 * @param {String} time
 * @returns {Number} number of milliseconds between that date and midnight, January 1, 1970
 */
function timeToNum(time) {
  return Date.parse(time);
}

/**
 * Checks if time difference between consecutive transaction is more than 1 minute
 * @param {Transactions[] | []} arr Array of transactions
 * @param {Transaction} transaction A transaction object
 */
function isMoreThanOneMinute(arr, transaction) {
  return arr.length
    ? Math.abs(
        timeToNum(arr[arr.length - 1].time) - timeToNum(transaction.time)
      ) /
        1000 >
        60
    : false;
}

module.exports = findDuplicateTransactions;
