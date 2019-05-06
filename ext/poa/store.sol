pragma solidity ^0.5.3;

contract store {

  bytes32 storedData;

  function set(bytes32 data) public {
    storedData = data;
  }

  function get() public view returns (bytes32) {
    return storedData;
  }

}
