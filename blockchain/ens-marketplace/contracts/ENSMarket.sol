// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "./dependencies/ReentrancyGuard.sol";
import "./interfaces/IERC721.sol";

contract ENSMarket is ReentrancyGuard {
	struct ListedAssetStorage {
		uint256 tokenId;
		uint256 price;
		uint256 listTimeStamp;
		address seller;
		bool listed;
	}

	IERC721 private _ens;

	mapping(uint256 => ListedAssetStorage) private _listedAssetsMap;

	address private _admin;
	uint256 private _royalty;

	event AssetListed(
		address indexed seller,
		uint256 indexed tokenId,
		uint256 price,
		uint256 listTimeStamp
	);
	event AssetUnlisted(
		address indexed seller,
		uint256 indexed tokenId,
		uint256 unlistTimeStamp
	);
	event AssetBought(
		address indexed buyer,
		uint256 indexed tokenId,
		uint256 sellTimeStamp
	);

	constructor(address ens, uint256 royalty) {
		_ens = IERC721(ens);
		_royalty = royalty;
	}

	function listAsset(uint256 tokenId, uint256 price) external nonReentrant {
		ListedAssetStorage storage las = _listedAssetsMap[tokenId];
		require(!las.listed, "Asset already listed");

		_ens.safeTransferFrom(msg.sender, address(this), tokenId);

		las.seller = msg.sender;
		las.tokenId = tokenId;
		las.price = price;
		las.listTimeStamp = block.timestamp;
		las.listed = true;

		emit AssetListed(msg.sender, tokenId, price, block.timestamp);
	}

	function unlistAsset(uint256 tokenId) external nonReentrant {
		ListedAssetStorage storage las = _listedAssetsMap[tokenId];
		require(las.listed, "Asset not listed");
		require(las.seller == msg.sender, "Only seller can unlist");

		delete _listedAssetsMap[tokenId];

		_ens.safeTransferFrom(address(this), msg.sender, tokenId);

		emit AssetUnlisted(msg.sender, tokenId, block.timestamp);
	}

	function buyAsset(uint256 tokenId) external payable nonReentrant {
		ListedAssetStorage storage las = _listedAssetsMap[tokenId];
		require(las.listed, "Asset not listed");
		require(msg.value == las.price, "Incorrect price");

		address seller = las.seller;

		delete _listedAssetsMap[tokenId];

		_ens.safeTransferFrom(address(this), msg.sender, tokenId);

		uint256 royaltyShare = (msg.value * _royalty * 1e18) / 1e20;

		(bool success, ) = _admin.call{ value: royaltyShare }("");
		require(success, "royalty transfer failed.");

		(success, ) = seller.call{ value: msg.value - royaltyShare }("");
		require(success, "transfer failed.");

		emit AssetBought(msg.sender, tokenId, block.timestamp);
	}

	function setRoyalty(uint256 royalty) external {
		_onlyAdmin();
		_royalty = royalty;
	}

	function setAdmin(address admin) external {
		_onlyAdmin();
		_admin = admin;
	}

	function getListing(
		uint256 tokenId
	) external view returns (ListedAssetStorage memory) {
		return _listedAssetsMap[tokenId];
	}

	function onERC721Received(
		address,
		address,
		uint256,
		bytes calldata
	) external pure returns (bytes4) {
		return this.onERC721Received.selector;
	}

	function _onlyAdmin() private view {
		require(msg.sender == _admin, "!admin");
	}
}
