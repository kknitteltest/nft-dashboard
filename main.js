serverUrl = "https://b3bkmetrkygi.usemoralis.com:2053/server";
appId = "aNfPsHTy66hRXlHa9qhwjsqCyGXZnC7EeeFAI4IY";
Moralis.start({ serverUrl, appId });

function fetchNFTMetadata(NFTs) {
  for (let i = 0; i < NFTs.length; i++) {
    let nft = NFTs[i];
    let id = nft.token_id;
    // Call Moralis Cloud function -> Static JSON file
    fetch(
      "https://b3bkmetrkygi.usemoralis.com:2053/server/functions/getNFT?_ApplicationId=aNfPsHTy66hRXlHa9qhwjsqCyGXZnC7EeeFAI4IY&nftId=" +
        id
    ).then((res) => {
      console.log(res);
    });
  }
}

async function initializeApp() {
  let currentUser = Moralis.User.current();
  if (!currentUser) {
    currentUser = await Moralis.Web3.authenticate();
  }

  const options = {
    address: "0x6f4e45734795ca528ad33e4e20847813d70ca171",
    chain: "rinkeby",
  };
  let NFTs = await Moralis.Web3API.token.getAllTokenIds(options);
  console.log(NFTs);
  // fetchNFTMetadata(NFTs.result)
}
initializeApp();
