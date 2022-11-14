// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

contract transaction {
    uint256 transactionCount;
    event Transfer(
        address sender,
        address receiver,
        uint amount,
        string message,
        string keyword,
        uint256 timestamp
    );

    struct Transactions {
        address sender;
        address receiver;
        uint amount;
        string message;
        string keyword;
        uint256 timestamp;
    }
    Transactions[] transactionArr;

    function transferTransaction(
        address payable receiver,
        uint amount,
        string memory message,
        string memory keyword
    ) public {
        transactionCount += 1;
        transactionArr.push(
            Transactions(
                msg.sender,
                receiver,
                amount,
                message,
                keyword,
                block.timestamp
            )
        );
        emit Transfer(
            msg.sender,
            receiver,
            amount,
            message,
            keyword,
            block.timestamp
        );
    }

    function getTransaction() public view returns (Transactions[] memory) {
        return transactionArr;
    }

    function getTransactionCount() public view returns (uint) {
        return transactionCount;
    }
}
