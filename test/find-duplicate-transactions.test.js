const chai = require("chai");
const findDuplicateTransactions = require("../src/find-duplicate-transactions");
const { assert } = chai;

describe("findDuplicateTransactions()", function () {
  it("returns empty array if there are no transactions", function () {
    assert.deepEqual(findDuplicateTransactions([]), []);
  });
  // add your tests here
  it("should find all duplicated transactions", function () {
    assert.deepEqual(
      findDuplicateTransactions([
        {
          id: 3,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:34:30.000Z",
        },
        {
          id: 1,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:33:00.000Z",
        },
        {
          id: 6,
          sourceAccount: "A",
          targetAccount: "C",
          amount: 250,
          category: "other",
          time: "2018-03-02T10:33:05.000Z",
        },
        {
          id: 4,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:36:00.000Z",
        },
        {
          id: 2,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:33:50.000Z",
        },
        {
          id: 5,
          sourceAccount: "A",
          targetAccount: "C",
          amount: 250,
          category: "other",
          time: "2018-03-02T10:33:00.000Z",
        },
      ]),
      [
        [
          {
            id: 1,
            sourceAccount: "A",
            targetAccount: "B",
            amount: 100,
            category: "eating_out",
            time: "2018-03-02T10:33:00.000Z",
          },
          {
            id: 2,
            sourceAccount: "A",
            targetAccount: "B",
            amount: 100,
            category: "eating_out",
            time: "2018-03-02T10:33:50.000Z",
          },
          {
            id: 3,
            sourceAccount: "A",
            targetAccount: "B",
            amount: 100,
            category: "eating_out",
            time: "2018-03-02T10:34:30.000Z",
          },
        ],
        [
          {
            id: 5,
            sourceAccount: "A",
            targetAccount: "C",
            amount: 250,
            category: "other",
            time: "2018-03-02T10:33:00.000Z",
          },
          {
            id: 6,
            sourceAccount: "A",
            targetAccount: "C",
            amount: 250,
            category: "other",
            time: "2018-03-02T10:33:05.000Z",
          },
        ],
      ]
    );
  });
  it("should handle non duplicated transactions", function () {
    assert.deepEqual(
      findDuplicateTransactions([
        {
          id: 1,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:33:00.000Z",
        },
        {
          id: 6,
          sourceAccount: "A",
          targetAccount: "C",
          amount: 250,
          category: "other",
          time: "2018-03-02T10:33:05.000Z",
        },
        {
          id: 4,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:36:00.000Z",
        },
      ]),
      []
    );
    assert.deepEqual(
      findDuplicateTransactions([
        {
          id: 1,
          sourceAccount: "A",
          targetAccount: "B",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:33:00.000Z",
        },
        {
          id: 6,
          sourceAccount: "A",
          targetAccount: "C",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:33:05.000Z",
        },
        {
          id: 4,
          sourceAccount: "B",
          targetAccount: "C",
          amount: 100,
          category: "eating_out",
          time: "2018-03-02T10:33:00.000Z",
        },
      ]),
      []
    );
  });
  it("should return list of the duplicated transactions sorted by date", () => {
    assert.deepEqual(
      findDuplicateTransactions([
        {
          id: 6,
          sourceAccount: "my_account",
          targetAccount: "internet_shop",
          amount: -250,
          category: "other",
          time: "2018-03-01T22:16:40.000Z",
        },
        {
          id: 102,
          sourceAccount: "my_account",
          targetAccount: "internet_shop",
          amount: -250,
          category: "other",
          time: "2018-03-01T22:16:50.000Z",
        },
        {
          id: 13,
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -50,
          category: "eating_out",
          time: "2018-04-01T10:24:00.000Z",
        },
        {
          id: 14,
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -50,
          category: "eating_out",
          time: "2018-04-01T10:24:40.000Z",
        },
        {
          id: 15,
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -50,
          category: "eating_out",
          time: "2018-04-01T10:25:10.000Z",
        },
        {
          id: 30,
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -90,
          category: "eating_out",
          time: "2018-05-07T09:54:21.000Z",
        },
        {
          id: 31,
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -90,
          category: "eating_out",
          time: "2018-05-07T09:55:10.000Z",
        },
        {
          id: 32,
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -90,
          category: "eating_out",
          time: "2018-05-07T09:56:09.000Z",
        },
        {
          id: 33,
          sourceAccount: "my_account",
          targetAccount: "coffee_shop",
          amount: -90,
          category: "eating_out",
          time: "2018-05-07T09:57:05.000Z",
        },
      ]),
      [
        [
          {
            id: 6,
            sourceAccount: "my_account",
            targetAccount: "internet_shop",
            amount: -250,
            category: "other",
            time: "2018-03-01T22:16:40.000Z",
          },
          {
            id: 102,
            sourceAccount: "my_account",
            targetAccount: "internet_shop",
            amount: -250,
            category: "other",
            time: "2018-03-01T22:16:50.000Z",
          },
        ],
        [
          {
            id: 13,
            sourceAccount: "my_account",
            targetAccount: "coffee_shop",
            amount: -50,
            category: "eating_out",
            time: "2018-04-01T10:24:00.000Z",
          },
          {
            id: 14,
            sourceAccount: "my_account",
            targetAccount: "coffee_shop",
            amount: -50,
            category: "eating_out",
            time: "2018-04-01T10:24:40.000Z",
          },
          {
            id: 15,
            sourceAccount: "my_account",
            targetAccount: "coffee_shop",
            amount: -50,
            category: "eating_out",
            time: "2018-04-01T10:25:10.000Z",
          },
        ],
        [
          {
            id: 30,
            sourceAccount: "my_account",
            targetAccount: "coffee_shop",
            amount: -90,
            category: "eating_out",
            time: "2018-05-07T09:54:21.000Z",
          },
          {
            id: 31,
            sourceAccount: "my_account",
            targetAccount: "coffee_shop",
            amount: -90,
            category: "eating_out",
            time: "2018-05-07T09:55:10.000Z",
          },
          {
            id: 32,
            sourceAccount: "my_account",
            targetAccount: "coffee_shop",
            amount: -90,
            category: "eating_out",
            time: "2018-05-07T09:56:09.000Z",
          },
          {
            id: 33,
            sourceAccount: "my_account",
            targetAccount: "coffee_shop",
            amount: -90,
            category: "eating_out",
            time: "2018-05-07T09:57:05.000Z",
          },
        ],
      ]
    );
  });
});
