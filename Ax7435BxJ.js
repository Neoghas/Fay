const sepoliaBaseChainId = "0x14a34"; // Sepolia Base Testnet
const contractAddress = "0xd08482b5894D5A5A4eca9C941080A88b11937572";
const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"likeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"likeType","type":"string"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"likeType","type":"string"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"string","name":"number","type":"string"},{"indexed":false,"internalType":"uint256","name":"betAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"}],"name":"BetPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"drawId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"winningNumber","type":"uint256"}],"name":"BetResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"likeCount","type":"uint256"}],"name":"BetUnliked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetUnliked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"winningNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"}],"name":"BetWon","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"commenter","type":"address"},{"indexed":false,"internalType":"string","name":"comment","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"CommentAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"commentIndex","type":"uint256"}],"name":"CommentDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"commentIndex","type":"uint256"},{"indexed":false,"internalType":"string","name":"newComment","type":"string"}],"name":"CommentUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ETHClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"}],"name":"LastWinnerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalPlayers","type":"uint256"}],"name":"PlayerJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"totalComments","type":"uint256"}],"name":"TotalCommentsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalPayout","type":"uint256"}],"name":"TotalPayoutUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalPlayers","type":"uint256"}],"name":"TotalPlayersUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newTotalPrizes","type":"uint256"}],"name":"TotalPrizesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWinners","type":"uint256"}],"name":"WinnerAnnounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WinnerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"}],"name":"WinnerSet","type":"event"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"_comment","type":"string"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betComments","outputs":[{"internalType":"address","name":"commenter","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"commentText","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"betHistory","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betLikeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikeDetails","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikeList","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"betLikes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikesArray","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"betPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"betResults","outputs":[{"internalType":"uint256","name":"drawId","type":"uint256"},{"internalType":"uint256","name":"winningNumber","type":"uint256"},{"internalType":"bool","name":"isProcessed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betToDrawId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betWinners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"bets","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"commentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"uint256","name":"commentIndex","type":"uint256"}],"name":"deleteComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"uint256","name":"commentIndex","type":"uint256"},{"internalType":"string","name":"newComment","type":"string"}],"name":"editComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllBets","outputs":[{"components":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"internalType":"struct HKBettingPool.Bet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllWinners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getBetLikers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getComments","outputs":[{"components":[{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"internalType":"struct HKBettingPool.CommentData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getLikeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_player","type":"address"}],"name":"getPlayerStats","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"topN","type":"uint256"}],"name":"getTopPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserBets","outputs":[{"components":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"internalType":"struct HKBettingPool.Bet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_betId","type":"uint256"}],"name":"getWinnerByBetId","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"prizesETH","type":"uint256"}],"internalType":"struct HKBettingPool.WinnerData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"address","name":"user","type":"address"}],"name":"hasUserLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastLeaderboardReset","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"likeType","type":"string"}],"name":"likeBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxBet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_number","type":"string"},{"internalType":"uint256","name":"_times","type":"uint256"},{"internalType":"bool","name":"_isETH","type":"bool"},{"internalType":"uint256","name":"_payoutAmount","type":"uint256"}],"name":"placeBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerStats","outputs":[{"internalType":"uint256","name":"totalBets","type":"uint256"},{"internalType":"uint256","name":"totalAmountBet","type":"uint256"},{"internalType":"uint256","name":"totalWins","type":"uint256"},{"internalType":"uint256","name":"totalPayout","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerWins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_drawId","type":"uint256"},{"internalType":"uint256","name":"_winningNumber","type":"uint256"}],"name":"setBetResult","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_winner","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_betId","type":"uint256"},{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"setWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"topBettor","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint256","name":"totalBets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalBetsByPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"totalComments","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"totalLikes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalPayoutPerDraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWinners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"unlikeBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userBets","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnerHistory","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"prizesETH","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"winnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
        
let provider, signer, contract;

document.getElementById("connectWallet").addEventListener("click", async () => {
    if (!window.ethereum) {
        alert("Metamask not detected!");
        return;
    }

    try {
        provider = new ethers.providers.Web3Provider(window.ethereum);
        await provider.send("eth_requestAccounts", []);
        signer = provider.getSigner();
        const userAddress = await signer.getAddress();
        const localTime = new Date().toLocaleString();
        const message = `Permission. Login verification in Faylotto DApps\n\nAddress: ${userAddress}\nLocal Time: ${localTime}`;
        const signature = await signer.signMessage(message);

        console.log("Signature:", signature);

        contract = new ethers.Contract(contractAddress, contractABI, signer);
        const balance = await provider.getBalance(userAddress);

        document.getElementById("networkStatus").innerHTML = `<img src="img/base.svg" width="16" height="16"> Connected to Sepolia Base Testnet`;
        document.getElementById("walletAddress").innerHTML = `Address: ${userAddress}`;
        document.getElementById("walletBalance").innerHTML = `Balance: ${ethers.utils.formatEther(balance)} ETH`;
        document.getElementById("signatureInfo").innerHTML = `Signed at: ${localTime}`;

        document.getElementById("walletAddress").classList.remove("hidden");
        document.getElementById("walletBalance").classList.remove("hidden");
        document.getElementById("signatureInfo").classList.remove("hidden");
        document.getElementById("connectWallet").classList.add("hidden");
        document.getElementById("disconnectWallet").classList.remove("hidden");
        document.getElementById("checkEligibility").classList.remove("hidden");

        await switchToSepoliaBase();

    } catch (error) {
        console.error("Error connecting wallet:", error.message, error.code, error);

        if (error.code === 4001) {
            console.warn("User rejected the connection request.");
        } else if (error.code === -32002) {
            console.warn("Connection request is already pending.");
        } else {
            alert("Failed to connect wallet. Please try again.");
        }
    }
});

document.getElementById("disconnectWallet").addEventListener("click", () => {
    provider = null;
    signer = null;
    contract = null;

    document.getElementById("networkStatus").innerHTML = `<img src="img/dis.svg" width="16" height="16"> <span style="color: #ff3333;">Disconnected</span>`;
    document.getElementById("walletAddress").classList.add("hidden");
    document.getElementById("walletBalance").classList.add("hidden");
    document.getElementById("connectWallet").classList.remove("hidden");
    document.getElementById("disconnectWallet").classList.add("hidden");
    document.getElementById("checkEligibility").classList.add("hidden");
    document.getElementById("claimETH").classList.add("hidden");
    document.getElementById("eligibilityStatus").innerHTML = "";
    document.getElementById("claimAmount").innerHTML = "";
    document.getElementById("claimStatus").innerHTML = "";
});

async function switchToSepoliaBase() {
    try {
        const chainId = await window.ethereum.request({ method: 'eth_chainId' });

        if (chainId.toLowerCase() === sepoliaBaseChainId) {
            return;
        }

        await window.ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{ chainId: sepoliaBaseChainId }]
        });
    } catch (error) {
        if (error.code === 4902) {
            try {
                await window.ethereum.request({
                    method: "wallet_addEthereumChain",
                    params: [{
                        chainId: sepoliaBaseChainId,
                        chainName: "Base Sepolia Testnet",
                        rpcUrls: ["https://sepolia.base.org"],
                        nativeCurrency: { name: "ETH", symbol: "ETH", decimals: 18 },
                        blockExplorerUrls: ["https://sepolia.basescan.org"]
                    }]
                });

                document.getElementById("networkStatus").innerHTML = `<img src="img/success.svg" width="16" height="16"> <span style="color: #00ca09;">Sepolia Base Testnet added & switched!</span>`;
            } catch (addError) {
                document.getElementById("networkStatus").innerHTML = `<img src="img/failed.svg" width="16" height="16"> <span style="color: #ffa700;">Please add Sepolia Base Testnet manually!</span>`;
            }
        } else {
            document.getElementById("networkStatus").innerHTML = `<img src="img/close.svg" width="16" height="16"> <span style="color: #ff3333;">Switch to Sepolia Base Testnet required!</span>`;
        }
    }
}

document.addEventListener("DOMContentLoaded", function () {
    
    document.getElementById("checkEligibility").addEventListener("click", async () => {
        try {
            let signer = provider.getSigner();
            let userAddress = await signer.getAddress();
            let amount = await contract.winnings(userAddress);

            let eligibilityStatus = document.getElementById("eligibilityStatus");
            let claimAmount = document.getElementById("claimAmount");
            let claimETHButton = document.getElementById("claimETH");

            if (amount.gt(0)) {
                eligibilityStatus.innerHTML = `<img src="img/success.svg" width="16" height="16"> <span style="color: #00ca09;">Congratulations! You eligible won! Claim Your prizes</span>`;
                claimAmount.innerHTML = `Total Prize: <span style="color: #00ca09;">${ethers.utils.formatEther(amount)} ETH</span>`;
                claimETHButton.classList.remove("hidden");
            } else {
                eligibilityStatus.innerHTML = `<img src="img/failed.svg" width="16" height="16"> <span style="color: #ff3333;">Sorry Your are not eligible. Try playing again!</span>`;
                claimAmount.innerHTML = `Total Prize: <span style="color: red;">0 ETH</span>`;
                claimETHButton.classList.add("hidden");
            }
        } catch (error) {
            console.error("Failed to check claim status:", error);
        }
    });

    document.getElementById("claimETH").addEventListener("click", async () => {
        try {
            let claimStatus = document.getElementById("claimStatus");
            
            claimStatus.innerHTML = `<img src="img/load.svg" width="16" height="16"> <span style="color: #ccc;">Processing your claim...</span>`;

            let tx = await contract.claimETH();
            await tx.wait();

            claimStatus.innerHTML = `<img src="img/success.svg" width="16" height="16"> <span style="color: #00ca09;">Prizes claim successful!</span>`;
            alert("Prizes ETH successfully claimed!");

            document.getElementById("checkEligibility").click();
        } catch (error) {
            claimStatus.innerHTML = `<img src="img/failed.svg" width="16" height="16"> <span style="color: #ff3333;">Claim failed!</span>`;
            alert("Failed to claim prizes!");
            console.error(error);
        }
    });

    document.getElementById("connectWallet").addEventListener("click", async () => {
        try {
            await provider.send("eth_requestAccounts", []);
            document.getElementById("checkEligibility").classList.remove("hidden");
        } catch (error) {
            console.error("Wallet connection failed:", error);
        }
    });
});