
        const contractAddress = "0xd08482b5894D5A5A4eca9C941080A88b11937572";
        const contractABI = [{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"likeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"likeType","type":"string"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"string","name":"likeType","type":"string"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetLiked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"string","name":"number","type":"string"},{"indexed":false,"internalType":"uint256","name":"betAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"blockNumber","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"txHash","type":"bytes32"}],"name":"BetPlaced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"drawId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"winningNumber","type":"uint256"}],"name":"BetResultSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"likeCount","type":"uint256"}],"name":"BetUnliked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"liker","type":"address"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newLikeCount","type":"uint256"}],"name":"BetUnliked","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"winningNumber","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"}],"name":"BetWon","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"commenter","type":"address"},{"indexed":false,"internalType":"string","name":"comment","type":"string"},{"indexed":false,"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"CommentAdded","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"commentIndex","type":"uint256"}],"name":"CommentDeleted","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"commentIndex","type":"uint256"},{"indexed":false,"internalType":"string","name":"newComment","type":"string"}],"name":"CommentUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"ETHClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"}],"name":"LastWinnerUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"player","type":"address"},{"indexed":false,"internalType":"uint256","name":"totalPlayers","type":"uint256"}],"name":"PlayerJoined","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardDistributed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":false,"internalType":"uint256","name":"totalComments","type":"uint256"}],"name":"TotalCommentsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalPayout","type":"uint256"}],"name":"TotalPayoutUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"totalPlayers","type":"uint256"}],"name":"TotalPlayersUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newTotalPrizes","type":"uint256"}],"name":"TotalPrizesUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"prize","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"totalWinners","type":"uint256"}],"name":"WinnerAnnounced","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"WinnerSet","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"bytes32","name":"betId","type":"bytes32"},{"indexed":true,"internalType":"address","name":"winner","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"number","type":"uint256"}],"name":"WinnerSet","type":"event"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"_comment","type":"string"}],"name":"addComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betComments","outputs":[{"internalType":"address","name":"commenter","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"commentText","type":"string"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"betHistory","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betLikeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikeDetails","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikeList","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikers","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"betLikes","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"betLikesArray","outputs":[{"internalType":"address","name":"liker","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"string","name":"likeType","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"betPrice","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"betResults","outputs":[{"internalType":"uint256","name":"drawId","type":"uint256"},{"internalType":"uint256","name":"winningNumber","type":"uint256"},{"internalType":"bool","name":"isProcessed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betToDrawId","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"betWinners","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"bets","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"claimETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"commentCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"contractBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"uint256","name":"commentIndex","type":"uint256"}],"name":"deleteComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributeReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"uint256","name":"commentIndex","type":"uint256"},{"internalType":"string","name":"newComment","type":"string"}],"name":"editComment","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"getAllBets","outputs":[{"components":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"internalType":"struct HKBettingPool.Bet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"getAllWinners","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getBetLikers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getComments","outputs":[{"components":[{"internalType":"address","name":"commenter","type":"address"},{"internalType":"string","name":"text","type":"string"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"bool","name":"isDeleted","type":"bool"}],"internalType":"struct HKBettingPool.CommentData[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"getLikeCount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_player","type":"address"}],"name":"getPlayerStats","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"topN","type":"uint256"}],"name":"getTopPlayers","outputs":[{"internalType":"address[]","name":"","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getUserBets","outputs":[{"components":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"internalType":"struct HKBettingPool.Bet[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_betId","type":"uint256"}],"name":"getWinnerByBetId","outputs":[{"components":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"prizesETH","type":"uint256"}],"internalType":"struct HKBettingPool.WinnerData","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"},{"internalType":"address","name":"","type":"address"}],"name":"hasLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"address","name":"user","type":"address"}],"name":"hasUserLiked","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastLeaderboardReset","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastWinner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"likeType","type":"string"}],"name":"likeBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"maxBet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minBet","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"_number","type":"string"},{"internalType":"uint256","name":"_times","type":"uint256"},{"internalType":"bool","name":"_isETH","type":"bool"},{"internalType":"uint256","name":"_payoutAmount","type":"uint256"}],"name":"placeBet","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerBets","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerStats","outputs":[{"internalType":"uint256","name":"totalBets","type":"uint256"},{"internalType":"uint256","name":"totalAmountBet","type":"uint256"},{"internalType":"uint256","name":"totalWins","type":"uint256"},{"internalType":"uint256","name":"totalPayout","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"playerWins","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"players","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_drawId","type":"uint256"},{"internalType":"uint256","name":"_winningNumber","type":"uint256"}],"name":"setBetResult","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_winner","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_betId","type":"uint256"},{"internalType":"uint256","name":"_number","type":"uint256"}],"name":"setWinner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"topBettor","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"uint256","name":"totalBets","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"totalBetsByPlayer","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"totalComments","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"name":"totalLikes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPayout","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalPayoutPerDraw","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalPlayers","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalWinners","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes32","name":"betId","type":"bytes32"}],"name":"unlikeBet","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"userBets","outputs":[{"internalType":"address","name":"player","type":"address"},{"internalType":"bytes32","name":"betId","type":"bytes32"},{"internalType":"string","name":"number","type":"string"},{"internalType":"uint256","name":"betAmount","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bytes32","name":"txHash","type":"bytes32"},{"internalType":"bool","name":"isETH","type":"bool"},{"internalType":"uint256","name":"likeCount","type":"uint256"},{"internalType":"uint256","name":"commentCount","type":"uint256"},{"internalType":"uint256","name":"payoutAmount","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"winnerHistory","outputs":[{"internalType":"address","name":"winner","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"number","type":"uint256"},{"internalType":"uint256","name":"timestamp","type":"uint256"},{"internalType":"uint256","name":"prizesETH","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"winnings","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdrawETH","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}];
        const betPrice = 0.000256;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                              
        
let web3;
let contract;
let userAccount = null;
let fullBetHistory = []; // simpan semua bets untuk pencarian
let isSearching = false;
let searchStatusTimeout;
let userHasLiked = false;
let likeContract;
let userBetsPage = 0;
let betHistoryPage = 0;
const pageSize = 15;
const SEPOLIA_BASE_CHAIN_ID = "0x14a34"; // Chain ID Sepolia Base Testnet
const SEPOLIA_RPC_URL = "https://sepolia.base.org"; // RPC Sepolia Base
const SEPOLIA_EXPLORER_URL = "https://sepolia.basescan.org"; // Block Explorer
const SEPOLIA_CURRENCY = { name: "Ethereum", symbol: "ETH", decimals: 18 };

// **Check Connection on Page Load**
window.addEventListener("load", async () => {
    if (window.ethereum) {
        const savedAccount = localStorage.getItem("walletAddress");
        if (savedAccount) {
            try {
                web3 = new Web3(window.ethereum);
                await switchToSepoliaBase();
                const accounts = await web3.eth.getAccounts();
                if (accounts.length > 0) {
                    userAccount = accounts[0];
                    contract = new web3.eth.Contract(contractABI, contractAddress);

                    document.getElementById("walletAddress").innerText = `Connected: ${userAccount}`;
                    document.getElementById("walletAddress").style.display = "block";
                    document.getElementById("walletBalance").style.display = "block";
                    document.getElementById("connectWallet").style.display = "none";
                    document.getElementById("disconnectWallet").style.display = "block";

                    // Tampilkan ikon notifikasi setelah wallet terhubung
                    document.getElementById("notificationIcon").style.display = "block";

                    const chainId = await ethereum.request({ method: 'eth_chainId' });
const networkStatusEl = document.getElementById('networkStatus');

if (chainId === '0x14a34') {
    networkStatusEl.innerHTML = `<img src="img/base.svg" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 6px;">
  <span id="networkText">Network: Base</span>`;
    networkStatusEl.style.color = '#1a88ff'; // hijau
} else {
    networkStatusEl.innerText = `Unsupported Network`;
    networkStatusEl.style.color = '#ff3333'; // merah
}
networkStatusEl.style.display = 'block';

                    updateBalance();
                    loadUserBets();
                    loadBetHistory();
                    checkForWinnings(); // Cek apakah user menang

                    // **Perbaikan: Ganti getAllBetIds() dengan getAllBets()**
                    const allBets = await contract.methods.getAllBets().call();
                    const betIds = allBets.map(bet => bet.betId); // Ambil betId dari data taruhan

                    for (const betId of betIds) {
                        await updateCommentCount(betId); // Perbarui jumlah komentar
                        await loadComments(betId); // Muat komentar
                    }
                }
            } catch (error) {
                console.error("Auto-connect failed:", error);
                localStorage.removeItem("walletAddress");
            }
        }
    } else {
        alert("MetaMask is not installed!");
    }
});

// **Check Winnings**
async function checkForWinnings() {
    try {
        const winnings = await contract.methods.winnings(userAccount).call();
        if (parseInt(winnings) > 0) {
            const ethAmount = web3.utils.fromWei(winnings, "ether");
            showNotification(`Congratulations, You won ${ethAmount} ETH!`);
            addNotification(`Congratulations, You won ${ethAmount} ETH Claim Now!`, "claim");
        }
    } catch (error) {
        console.error("%cError checking winnings:", "color: #1a88ff;", error);
    }
}

// **Add Notification**
function addNotification(message, link) {
    const notifications = document.getElementById("notifications");
    const li = document.createElement("li");
    li.innerHTML = `<a href="${link}" target="_blank" style="color: #00FF66; text-decoration: none;">${message}</a>`;
    notifications.appendChild(li);

    document.getElementById("notificationBadge").classList.add("active");
}

// **Toggle Notification List**
function toggleNotificationList() {
    const list = document.getElementById("notificationList");
    list.classList.toggle("hidden");

    if (!list.classList.contains("hidden")) {
        document.getElementById("notificationBadge").classList.remove("active");
    }
}

// Menampilkan popup notifikasi dengan animasi
function showNotification(message) {
    const popup = document.getElementById("notificationPopup");
    const messageContainer = document.getElementById("notificationMessage");

    if (!popup || !messageContainer) {
        console.error("Element not found!");
        return;
    }

    messageContainer.innerHTML = `<span style="color: #00FF66;">${message}</span> 
        <a href="claim" target="_blank" style="color: #00b7ff; text-decoration: none;">Claim now!</a>`;

    // Pastikan popup ditampilkan
    popup.classList.remove("hidden");
    popup.style.display = "block"; // Menampilkan elemen
    popup.classList.add("show");

    console.log("Popup shown!"); // Debugging

    let audio = new Audio("win.mp3"); // Ganti dengan path audio kamu
    audio.play().catch(error => console.log('error:', error));
    
    setTimeout(() => {
        popup.classList.remove("show");
        setTimeout(() => {
            popup.classList.add("hidden");
            popup.style.display = "none"; // Sembunyikan elemen
        }, 300);
    }, 15000); // Tampilkan selama 5 detik
}

// Panggil fungsi ini setiap kali notifikasi diperbarui
updateNotificationStatus();

// Menutup popup
function closePopup() {
    const popup = document.getElementById("notificationPopup");
    if (!popup) return;

    popup.classList.remove("show");
    setTimeout(() => {
        popup.classList.add("hidden");
        popup.style.display = "none";
    }, 300);
}

function updateNotificationStatus() {
    const notificationsList = document.getElementById("notifications");
    const noNotificationsMessage = document.getElementById("noNotificationsMessage");

    setTimeout(() => {
        if (notificationsList.children.length === 0) {
            noNotificationsMessage.classList.remove("hidden"); // Tampilkan pesan
        } else {
            noNotificationsMessage.classList.add("hidden"); // Sembunyikan pesan
        }
    }, 100); // Delay kecil untuk memastikan elemen terupdate
}

// **Close Popup**
function closePopup() {
    document.getElementById("notificationPopup").style.display = "none";
}

// **Close Notification List**
function closeNotificationList() {
    document.getElementById("notificationList").classList.add("hidden");
}

// **Connect Wallet**
async function connectWallet() {
    if (window.ethereum) {
        try {
            web3 = new Web3(window.ethereum);
            await switchToSepoliaBase();

            const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });

            if (accounts.length === 0) {
                throw new Error("No accounts found. Please connect your wallet.");
            }

            userAccount = accounts[0];
            localStorage.setItem("walletAddress", userAccount);

            const timestamp = new Date().toISOString();
            const message = `Permission Verifying user Connect To Faylotto HK. Play & Win!\nWallet: ${userAccount}\nTime: ${timestamp}`;
            const signature = await web3.eth.personal.sign(message, userAccount, "");
            console.log("Signature:", signature);
            showWelcomePopup();

            contract = new web3.eth.Contract(contractABI, contractAddress);

            document.getElementById("walletAddress").innerText = `Connected: ${userAccount}`;
            document.getElementById("walletAddress").style.display = "block";
            document.getElementById("walletBalance").style.display = "block";
            document.getElementById("connectWallet").style.display = "none";
            document.getElementById("disconnectWallet").style.display = "block";

            // Tampilkan ikon notifikasi setelah wallet terhubung
            document.getElementById("notificationIcon").style.display = "block";

            const chainId = await ethereum.request({ method: 'eth_chainId' });
const networkStatusEl = document.getElementById('networkStatus');

if (chainId === '0x14a34') {
    networkStatusEl.innerHTML = `<img src="img/base.svg" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 6px;">
  <span id="networkText">Network: Base</span>`;
    networkStatusEl.style.color = '#1a88ff'; // hijau
} else {
    networkStatusEl.innerText = `Unsupported Network`;
    networkStatusEl.style.color = '#ff3333'; // merah
}
networkStatusEl.style.display = 'block';

            updateBalance();
            loadUserBets();
            loadBetHistory();
            checkForWinnings();

            // **Perbaikan: Ganti getAllBetIds() dengan getAllBets()**
            const allBets = await contract.methods.getAllBets().call();
            const betIds = allBets.map(bet => bet.betId); // Ambil betId dari setiap taruhan

            for (const betId of betIds) {
                await updateCommentCount(betId); // Perbarui jumlah komentar
                await loadComments(betId); // Muat komentar
            }

        } catch (error) {
            console.error("Connection failed:", error);
            alert(`Connection failed: ${error.message}`);
        }
    } else {
        alert("Please install MetaMask!");
    }
}

// **Switch to Sepolia Base Testnet**
async function switchToSepoliaBase() {
    try {
        const currentChainId = await window.ethereum.request({ method: "eth_chainId" });

        if (currentChainId !== SEPOLIA_BASE_CHAIN_ID) {
            try {
                await window.ethereum.request({
                    method: "wallet_switchEthereumChain",
                    params: [{ chainId: SEPOLIA_BASE_CHAIN_ID }]
                });
            } catch (switchError) {
                if (switchError.code === 4902) {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{
                            chainId: SEPOLIA_BASE_CHAIN_ID,
                            chainName: "Base Sepolia Testnet",
                            nativeCurrency: SEPOLIA_CURRENCY,
                            rpcUrls: [SEPOLIA_RPC_URL],
                            blockExplorerUrls: [SEPOLIA_EXPLORER_URL]
                        }]
                    });
                } else {
                    throw switchError;
                }
            }
        }
    } catch (error) {
        console.error("Failed to switch network:", error);
        alert("Failed to switch network to Sepolia Base Testnet!");
    }
}

// **Disconnect Wallet**
function disconnectWallet() {
    userAccount = null;
    localStorage.removeItem("walletAddress");

    document.getElementById("walletAddress").innerText = "";
    document.getElementById("walletAddress").style.display = "none";
    document.getElementById("walletBalance").innerText = "Balance: 0 ETH";
    document.getElementById("walletBalance").style.display = "none";
    document.getElementById("connectWallet").style.display = "block";
    document.getElementById("disconnectWallet").style.display = "none";
    const networkStatusEl = document.getElementById("networkStatus");
    networkStatusEl.style.display = "none";
    networkStatusEl.innerHTML = "";
}

// **Update Balance**
async function updateBalance() {
    if (userAccount) {
        let balanceWei = await web3.eth.getBalance(userAccount);
        let balanceEth = web3.utils.fromWei(balanceWei, "ether");
        document.getElementById("walletBalance").innerText = `Balance: ${parseFloat(balanceEth).toFixed(4)} ETH`;
    }
        }
       
function updateBetPrice() {
    let betTimes = document.getElementById("betTimes").value;
    let ethPrice = (betTimes * 0.000256).toFixed(6); // Hitung harga ETH
    document.getElementById("betPrice").innerText = `Cost: ${ethPrice} ETH`;
}

// **Place Bet**
async function placeBet() {
    if (!userAccount) {
        alert("Please connect your wallet first!");
        return;
    }

    const number = document.getElementById("betNumber").value;
    const times = parseInt(document.getElementById("betTimes").value);
    const betPrice = web3.utils.toWei("0.000256", "ether");
    const totalCost = betPrice * times;

    if (!number || number.length < 1 || number.length > 4 || isNaN(times) || times < 1) {
        alert("Invalid bet input!");
        return;
    }
    
    try {
        document.getElementById("betStatus").innerHTML = `
            <img src="img/load.svg" width="20" height="20" style="vertical-align: middle;">
            <span style="color: #aaffaa; font-size: 12px;">Your ticket transaction is in progress...</span>
        `;

        // Estimasi gas sebelum transaksi
        const estimatedGas = await contract.methods.placeBet(number, times, true, 0).estimateGas({ from: userAccount, value: totalCost });

        await contract.methods.placeBet(number, times, true, 0).send({
            from: userAccount,
            value: totalCost,
            gas: estimatedGas + 50000, // Tambahkan buffer 50.000 untuk keamanan
            maxFeePerGas: web3.utils.toWei("0.0015", "gwei"),  // Gas Fee maksimum
            maxPriorityFeePerGas: web3.utils.toWei("0.0014", "gwei") // Fee Prioritas
        });

        document.getElementById("betStatus").innerHTML = `
            <img src="img/success.svg" width="20" height="20" style="vertical-align: middle;">
            <span style="color: #00cc00; font-size: 12px;">Your ticket has been submitted successfully! Please check it under your "Tickets".</span>
        `;

        setTimeout(() => {
            document.getElementById("betStatus").innerHTML = "";
        }, 7000);

        loadUserBets();
    } catch (error) {
        console.error(error);

        document.getElementById("betStatus").innerHTML = `
            <img src="img/failed.svg" width="20" height="20" style="vertical-align: middle;">
            <span style="color: #ff3333; font-size: 12px;">Failed to submit Your ticket. Please try again</span>
        `;

        setTimeout(() => {
            document.getElementById("betStatus").innerHTML = "";
        }, 5000);
    }
}

// Number Funcion
function validateBetNumber() {
    let betNumberInput = document.getElementById("betNumber");
    let betWarning = document.getElementById("betWarning");

    // Hanya angka yang diperbolehkan
    betNumberInput.value = betNumberInput.value.replace(/\D/g, "");

    if (betNumberInput.value.length < 2) {
        betWarning.innerText = "Bet number must minimum be 2 digits!";
    } else if (betNumberInput.value.length > 4) {
        betWarning.innerText = "Bet number must minimum 4 digits!";
        betNumberInput.value = betNumberInput.value.slice(0, 4); // Membatasi maksimal 4 digit
    } else {
        betWarning.innerText = "";
    }
}

function validateBetTimes() {
    let betTimesInput = document.getElementById("betTimes");
    let warning = document.getElementById("betWarning");

    let value = parseInt(betTimesInput.value, 10); // Konversi ke angka

    if (value < 1) {
        betTimesInput.value = 1;
        warning.innerText = "Bet times must be between 1 and 99!";
    } else if (value > 99) {
        betTimesInput.value = 99;
        warning.innerText = "Bet times must be between 1 and 99!";
    } else {
        warning.innerText = "";
    }
}
    
// **Load User Bets (with Pagination & Last 7 Days Filter)**
async function loadUserBets() {
    if (!userAccount) return;
    const bets = await contract.methods.getUserBets(userAccount).call();
    const reversedBets = bets.slice().reverse();

    const now = Math.floor(Date.now() / 1000);
    const oneMonthAgo = now - 30 * 24 * 60 * 60;
    const filteredBets = reversedBets.filter(bet => bet.timestamp >= oneMonthAgo);

    const start = userBetsPage * pageSize;
    const end = Math.min(start + pageSize, filteredBets.length);

    let html = "";
    for (let i = start; i < end; i++) {
        let bet = filteredBets[i];
        const winnerData = await contract.methods.getWinnerByBetId(bet.betId).call();
        const isWinner = winnerData.winner !== '0x0000000000000000000000000000000000000000' && Number(winnerData.amount) > 0;

        let shortPlayer = bet.player.slice(0, 10) + "..." + bet.player.slice(-10);
        let shortTxHash = bet.txHash.slice(0, 10) + "..." + bet.txHash.slice(-10);
        html += `<p>
            Wallet: <span style="color: #ad5cff;">${shortPlayer}</span><br>
            BetID: <span style="color: #b37500; font-size: 6px;">${bet.betId}</span><br>
            BetNumber: <span style="color: #00FF66;">${bet.number}</span><br>
            BetAmount: <span style="color: #00FF66;">${bet.betAmount}</span><br>
            Status: <span style="color:${isWinner ? '#00FF66' : '#fff899'};">${isWinner ? 'Won' : 'Waiting...'}</span><br>
            Tx: <span style="color: #fe6666;">${shortTxHash}</span><br>
            Block: <a href="https://basescan.io/block/${bet.blockNumber}" target="_blank" style="color: #1a88ff;">${bet.blockNumber}</a><br>
            Time: <span style="color: orange;">${new Date(bet.timestamp * 1000).toISOString()} UTC</span><br>
            
            <br><button onclick="window.open('userticket?betId=${bet.betId}', '_blank')"
            style="display: inline-block; margin-top: 8px; background-color: #000000; color: white; padding: 4px 6px; font-size: 6px; border-radius: 0.9em; text-decoration: none;">
            Ticket Details
            </button><br>
        </p><hr style="background-color: #333333; height: 1px; border: none;">`;
    }

    document.getElementById("userBets").innerHTML = html;

    // Update semua status like, komentar, dan load isi komentar
    for (let i = start; i < end; i++) {
        let bet = filteredBets[i];
        await updateLikeStatus(bet.betId);
        await updateCommentCount(bet.betId);
        await loadComments(bet.betId);
    }
}
                    
// **User Bets Pagination**
function prevUserBets() {
    if (userBetsPage > 0) {
        userBetsPage--;
        loadUserBets();
    }
}

function nextUserBets() {
    userBetsPage++;
    loadUserBets();
}

function setSearchStatus(message, color, icon, autoClear = false) {
    const statusEl = document.getElementById("searchStatus");
    statusEl.innerHTML = `<img src="img/${icon}" style="width: 16px; vertical-align: middle; margin-right: 8px;">
                          <span>${message}</span>`;
    statusEl.style.color = color;
    statusEl.style.fontWeight = "bold";
    statusEl.style.marginBottom = "10px";

    if (autoClear) {
        clearTimeout(searchStatusTimeout);
        searchStatusTimeout = setTimeout(() => {
            statusEl.innerHTML = "";
        }, 5000);
    }
}

function searchBetHistory() {
    const query = document.getElementById("searchInput").value.trim().toLowerCase();
    const statusEl = document.getElementById("searchStatus");

    if (!query) {
        statusEl.innerHTML = ""; // clear status
        renderBetHistoryPage();
        return;
    }

    setSearchStatus("Searching...", "#f7e702", "searchI.svg");

    setTimeout(() => {
        const results = fullBetHistory.filter(bet => {
            return Object.values(bet).some(value =>
                String(value).toLowerCase().includes(query)
            );
        });

        if (results.length > 0) {
            setSearchStatus("Found results", "#00ff66", "success.svg", true);
        } else {
            setSearchStatus("No results found", "#ff4747", "failed.svg", true);
        }

        betHistoryPage = 0;
        renderBets(results);
    }, 3000); // delay 3 detik
}
        
// **Load Bet History (with Pagination)**
async function loadBetHistory() {
    const refreshIcon = document.querySelector("button img[alt='Refresh']");
    const bets = await contract.methods.getAllBets().call();
    const reversedBets = bets.slice().reverse(); // Urutkan dari terbaru

    const now = Math.floor(Date.now() / 1000);
    const oneMonthAgo = now - 30 * 24 * 60 * 60;
    const filteredBets = reversedBets.filter(bet => bet.timestamp >= oneMonthAgo);

    fullBetHistory = filteredBets;

    if (!isSearching) renderBetHistoryPage();
}

function renderBetHistoryPage() {
    const start = betHistoryPage * pageSize;
    const end = Math.min(start + pageSize, fullBetHistory.length);
    const pageBets = fullBetHistory.slice(start, end);

    renderBets(pageBets);
}

async function renderBets(betsToRender) {
    let html = "";
    for (let bet of betsToRender) {
        const winnerData = await contract.methods.getWinnerByBetId(bet.betId).call();
        const isWinner = winnerData.winner !== '0x0000000000000000000000000000000000000000' && Number(winnerData.amount) > 0;

        let shortPlayer = bet.player.slice(0, 10) + "..." + bet.player.slice(-10);
        let shortTxHash = bet.txHash.slice(0, 10) + "..." + bet.txHash.slice(-10);
        
        html += `
        <p>
            Player: <span style="color: #ad5cff;">${shortPlayer}</span><br>
            
            BetID: <span style="color: #b37500; font-size: 6px;">${bet.betId}</span><br>
            
            BetNumber: <span style="color: #00FF66;">${bet.number}</span><br>
            
            BetAmount: <span style="color: #00FF66;">${bet.betAmount}</span><br>

            Status: <span style="color:${isWinner ? '#00FF66' : '#fff899'};">${isWinner ? 'Won' : 'Waiting...'}</span><br>
            
            Is ETH: <span style="color: ${bet.isETH ? '#00FF66' : '#fe6666'};">${bet.isETH ? 'Yes' : 'No'}</span><br>
            
            Tx: <span style="color: #fe6666;">${shortTxHash}</span><br>
            
            Block: <a href="https://basescan.org/block/${bet.blockNumber}" target="_blank" style="color: #1a88ff;">${bet.blockNumber}</a><br>
            
            Time: <span style="color: orange;">${new Date(bet.timestamp * 1000).toISOString()} UTC</span><br>
            
            <button id="likeButton-${bet.betId}" onclick="toggleLike('${bet.betId}')" 
            style="background-color: #000000; color: white; border: none; padding: 5px 10px; 
               cursor: pointer; margin-top: 5px;">
             <img src="img/like.svg" alt="Like" 
             style="width: 11px; height: 11px; vertical-align: middle;">
             </button> 

             <span id="likeCount-${bet.betId}" 
             style="margin-left: 10px; color: #00cc51; font-size: 15px; font-weight: bold;">
             0
             </span> Likes 

             <p id="likeStatus-${bet.betId}" style="font-size: 12px; color: gray; margin-top: 3px;"></p> 

             <details class="comment-dropdown">
    <summary style="display: flex; align-items: center; cursor: pointer; justify-content: space-between; width: 100%; padding: 0 15px;">
    <span style="display: flex; align-items: center; gap: 10px;">
        <img src="img/comment.svg" alt="Komentar" style="width: 18px; height: 18px;" margin-right: 20px;">
        <span id="commentCount-${bet.betId}" style="color: #00cc51; font-size: 15px; font-weight: bold;">0</span> Comments
    </span>
    <img src="img/clos.svg" style="width: 18px; height: 18px; margin-right: 20px;">
</summary>
    <div id="commentSection-${bet.betId}" class="comment-section">
        <div id="commentList-${bet.betId}" class="comment-list"></div>
        <textarea id="commentInput-${bet.betId}" placeholder="Write a comment..."></textarea>
        <button id="sendBtn-${bet.betId}" onclick="addOrUpdateComment('${bet.betId}')" style="background: rgba(0, 255, 0, 0.5); color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Send</button>
        <br><h6 style="
    color: #ff1a1d; 
    text-align: left; 
    padding: 10px; 
    background: url('img/warning.svg') no-repeat left center; 
    background-size: 20px; 
    padding-left: 40px;">
    WARNING: Comments stored on the blockchain are permanent and cannot be deleted. 
    Please be wise in your comments before posting!
</h6>
    </div>
</details>

    <br><button onclick="window.open('publicticket?betId=${bet.betId}', '_blank')"
   style="display: inline-block; margin-top: 8px; background-color: #000000; color: white; padding: 4px 6px; font-size: 6px; border-radius: 0.9em; text-decoration: none;">
   Ticket Details
   </button><br>
        </p>
        <hr style="background-color: #333333; height: 1px; border: none;">`;
    }

    document.getElementById("betHistory").innerHTML = html;

    // Update jumlah like dan comment count setelah render selesai
    for (let bet of betsToRender) {
        await updateLikeStatus(bet.betId);
        await updateCommentCount(bet.betId);
        await loadComments(bet.betId); 
    }
}
        
// **Bet History Pagination**
function prevBetHistory() {
    if (betHistoryPage > 0) {
        betHistoryPage--;
        loadBetHistory();
    }
}

function nextBetHistory() {
    betHistoryPage++;
    loadBetHistory();
}

// Like Function
async function toggleLike(betId) {
    try {
        if (typeof window.ethereum === "undefined") {
            alert("MetaMask not found! Please install MetaMask.");
            return;
        }

        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        if (!accounts || accounts.length === 0) {
            alert("Please connect your MetaMask wallet.");
            return;
        }

        const userAccount = accounts[0];
        const liked = await contract.methods.hasUserLiked(betId, userAccount).call();
        const button = document.getElementById(`likeButton-${betId}`);
        const statusElement = document.getElementById(`likeStatus-${betId}`);

        statusElement.innerText = "Transaction in progress...";

        let estimatedGas;
        if (liked) {
            estimatedGas = await contract.methods.unlikeBet(betId).estimateGas({ from: userAccount });
        } else {
            estimatedGas = await contract.methods.likeBet(betId, "👍").estimateGas({ from: userAccount });
        }

        // Menambahkan buffer agar transaksi tidak gagal
        const gasOptions = {
            from: userAccount,
            gas: estimatedGas + 50000, // Tambahkan buffer
            maxFeePerGas: web3.utils.toWei("0.0002", "gwei"),  
            maxPriorityFeePerGas: web3.utils.toWei("0.00018", "gwei") 
        };

        if (liked) {
            await contract.methods.unlikeBet(betId).send(gasOptions)
                .on("transactionHash", function (hash) {
                    console.log("Transaction sent! Hash:", hash);
                })
                .on("receipt", function (receipt) {
                    console.log("Transaction confirmed:", receipt);
                    button.style.backgroundColor = "#000000";
                    statusElement.innerText = "Disliked successfully";
                    button.innerHTML = `<img src="img/like.svg" alt="Dislike" style="width: 11px; height: 11px; vertical-align: middle;">`;
                    setTimeout(() => {
                    statusElement.innerText = "";
                }, 3000);
                    updateLikeStatus(betId);
                })
                .on("error", function (error) {
                    console.error("Error processing unlike:", error);
                    statusElement.innerText = "Dislike failed";
                    setTimeout(() => {
                    statusElement.innerText = "";
                }, 3000);
                });
        } else {
            await contract.methods.likeBet(betId, "👍").send(gasOptions)
                .on("transactionHash", function (hash) {
                    console.log("Transaction sent! Hash:", hash);
                })
                .on("receipt", function (receipt) {
                    console.log("Transaction confirmed:", receipt);
                    button.style.backgroundColor = "#ff1a1e";
                    statusElement.innerText = "Liked successfully";
                    button.innerHTML = `<img src="img/dis.svg" alt="Dislike" style="width: 12px; height: 12px; vertical-align: middle;">`;
                    setTimeout(() => {
                    statusElement.innerText = "";
                }, 3000);
                    updateLikeStatus(betId);
                })
                .on("error", function (error) {
                    console.error("Error processing like:", error);
                    statusElement.innerText = "Like failed";
                    setTimeout(() => {
                    statusElement.innerText = "";
                }, 3000);
                });
        }
    } catch (error) {
        console.error("Failed to toggle like:", error);
    }
}
        
// Fungsi untuk memperbarui jumlah like
function updateLikeCount(betId, change) {
    const likeCountElement = document.getElementById(`likeCount-${betId}`);
    let currentCount = parseInt(likeCountElement.innerText, 10);
    likeCountElement.innerText = currentCount + change;
}
        
        async function updateLikeStatus(betId) {
    try {
        const likeCount = await contract.methods.getLikeCount(betId).call();
        document.getElementById(`likeCount-${betId}`).innerText = likeCount;

        const accounts = await window.ethereum.request({ method: "eth_accounts" });
        if (accounts.length === 0) return;

        const userAccount = accounts[0];
        const liked = await contract.methods.hasUserLiked(betId, userAccount).call();
        const button = document.getElementById(`likeButton-${betId}`);

        if (liked) {
        button.innerHTML = `<img src="img/disl.svg" alt="Dislike" style="width: 16px; height: 16px; vertical-align: middle;">`;
        button.style.backgroundColor = "#ff1a1e";
    } else {
        button.innerHTML = `<img src="img/like.svg" alt="Like" style="width: 16px; height: 16px; vertical-align: middle;">`;
         button.style.backgroundColor = "#000000";
        }
        
    } catch (error) {
        console.error("Failed to update like status:", error);
    }
        }

 // Comment Function
// Fungsi Lazy Load Komentar
function loadComments(betId, limit = 10) {
    contract.methods.getComments(betId).call().then((comments) => {
        const currentUser = ethereum.selectedAddress ? ethereum.selectedAddress.toLowerCase() : null;
        let commentHtml = "";

        comments.slice(0, limit).forEach((comment, index) => {
            if (!comment.isDeleted) {
                let date = new Date(comment.timestamp * 1000).toLocaleString();
                let shortCommenter = comment.commenter.slice(0, 6) + "..." + comment.commenter.slice(-4);
                let deleteButton = "";
                let editButton = "";

                if (currentUser && currentUser === comment.commenter.toLowerCase()) {
                    deleteButton = `<button onclick="deleteComment('${betId}', ${index})" style="background: rgba(255, 0, 0, 0.5); color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Delete</button>`;
                    editButton = `<button id="editBtn-${betId}-${index}" onclick="enableEdit('${betId}', ${index})" style="background: rgba(0, 162, 255, 0.5); color: white; border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;">Edit</button>`;
                }

                commentHtml += `
<div style="background: #222; padding: 10px; border-radius: 8px; margin-bottom: 10px; 
    border: 1px solid #444; box-shadow: 0 4px 8px rgba(0, 162, 255, 0.2);">
    
    <div style="display: flex; justify-content: space-between; align-items: center;">
        <strong style="color: #ad5cff; font-size: 12px;">${shortCommenter}</strong> 
        <span style="color: gray; font-size: 9px; white-space: nowrap;">(${date})</span>
    </div>

    <p id="commentText-${betId}-${index}" style="margin: 5px 0;">${comment.text}</p>
    <br><br>
                   ${deleteButton} ${editButton} 
     
</div>`;
            }
        });

        // Jika ada lebih dari `limit` komentar, tambahkan tombol "Lihat lebih banyak"
        if (comments.length > limit) {
            commentHtml += `<button onclick="loadComments('${betId}', ${limit + 10})" 
    style="background-color: rgba(0, 123, 255, 0.5);">
    See more
</button>`;
        }

        document.getElementById(`commentList-${betId}`).innerHTML = commentHtml;
        updateCommentCount(betId);
    }).catch((error) => {
        console.error("Failed to load comments:", error);
    });
}

// Panggil fungsi saat halaman dimuat
window.addEventListener("load", () => {
    loadComments("BET_ID", 10); // Mulai dengan 5 komentar
});

// Fungsi untuk menambahkan atau menyimpan komentar (mode normal dan edit)
async function addOrUpdateComment(betId) {
    let commentInput = document.getElementById(`commentInput-${betId}`);
    let saveMode = commentInput.dataset.editing === "true";
    let commentIndex = commentInput.dataset.index;

    if (!commentInput.value.trim()) {
        alert("Comments cannot be empty!");
        return;
    }

    try {
        // Cek apakah MetaMask terinjeksi dan sudah ada akun aktif
        if (typeof window.ethereum === "undefined") {
            alert("MetaMask not detected! Please install MetaMask.");
            return;
        }

        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (!accounts || accounts.length === 0) {
            alert("MetaMask is not connected. Please open MetaMask and select an account.");
            return;
        }

        const walletAddress = accounts[0];

        let gasEstimate;
        if (saveMode) {
            gasEstimate = await contract.methods
                .editComment(betId, commentIndex, commentInput.value)
                .estimateGas({ from: walletAddress });
        } else {
            gasEstimate = await contract.methods
                .addComment(betId, commentInput.value)
                .estimateGas({ from: walletAddress });
        }

        const gasOptions = {
            from: walletAddress,
            gas: gasEstimate + 56000,
            maxFeePerGas: web3.utils.toWei("0.00025", "gwei"),
            maxPriorityFeePerGas: web3.utils.toWei("0.00023", "gwei"),
        };

        if (saveMode) {
    await contract.methods
        .editComment(betId, commentIndex, commentInput.value)
        .send(gasOptions);

    disableEdit(betId);
} else {
    await contract.methods
        .addComment(betId, commentInput.value)
        .send(gasOptions);
        }

        commentInput.value = "";
        document.getElementById(`sendBtn-${betId}`).innerText = "Send";
        await loadComments(betId);
    } catch (error) {
        console.error("Failed to save comment:", error);
        alert("Failed to save comment. Please try again later!");
    }
}

// Fungsi untuk mengaktifkan mode edit
function enableEdit(betId, index) {
    let commentTextElement = document.getElementById(`commentText-${betId}-${index}`);
    let commentInput = document.getElementById(`commentInput-${betId}`);
    let sendButton = document.getElementById(`sendBtn-${betId}`);
    let cancelButton = document.getElementById(`cancelBtn-${betId}`);

    // Isi textarea dengan komentar lama dan aktifkan mode edit
    commentInput.value = commentTextElement.innerText;
    commentInput.dataset.editing = "true";
    commentInput.dataset.index = index;

    // Ubah tombol "Kirim" menjadi "Simpan"
    sendButton.innerText = "Save";

    // Jika tombol batal belum ada, tambahkan ke dalam DOM
    if (!cancelButton) {
        cancelButton = document.createElement("button");
        cancelButton.id = `cancelBtn-${betId}`;
        cancelButton.innerText = "Cancel";
        cancelButton.style.marginLeft = "5px";
        cancelButton.onclick = function () {
            disableEdit(betId);
        };

        sendButton.parentNode.insertBefore(cancelButton, sendButton.nextSibling);
    }
}

// Fungsi untuk membatalkan mode edit
function disableEdit(betId) {
    let commentInput = document.getElementById(`commentInput-${betId}`);
    let sendButton = document.getElementById(`sendBtn-${betId}`);
    let cancelButton = document.getElementById(`cancelBtn-${betId}`);

    // Kosongkan input dan kembalikan ke mode normal
    commentInput.value = "";
    delete commentInput.dataset.editing;
    delete commentInput.dataset.index;

    // Ubah tombol "Simpan" kembali menjadi "Kirim"
    sendButton.innerText = "Send";

    // Hapus tombol batal jika ada
    if (cancelButton) {
        cancelButton.remove();
    }
}

async function deleteComment(betId, index) {
    if (!confirm("Are you sure you want to delete this comment?")) return;

    try {
        // Estimasi gas untuk transaksi penghapusan komentar
        const gasEstimate = await contract.methods.deleteComment(betId, index).estimateGas({ from: ethereum.selectedAddress });
        console.log(`Gas Estimate: ${gasEstimate}`);

        // Gas options
        const gasOptions = {
            from: ethereum.selectedAddress,
            gas: gasEstimate + 100000,  // Menambahkan buffer untuk gas
            maxFeePerGas: web3.utils.toWei("0.0025", "gwei"),  // Gas fee maksimal
            maxPriorityFeePerGas: web3.utils.toWei("0.0023", "gwei")  // Prioritas fee
        };
        console.log(`Gas Options: ${JSON.stringify(gasOptions)}`);

        // Menyampaikan transaksi ke blockchain
        const transaction = await contract.methods.deleteComment(betId, index).send(gasOptions);
        console.log(`Transaction Hash: ${transaction.transactionHash}`);

        // Refresh daftar komentar setelah transaksi sukses
        await loadComments(betId); 
    } catch (error) {
        console.error("Failed to delete comment:", error);
        alert("Failed to delete comment. Try again!");
    }
}
        
// Fungsi untuk memperbarui jumlah komentar
async function updateCommentCount(betId) {
    try {
        const count = await contract.methods.commentCount(betId).call();
        document.getElementById(`commentCount-${betId}`).innerText = count;
    } catch (error) {
        console.error(`Failed to fetch comment count for ${betId}:`, error);
    }
}

async function connectMetaMask() {
    if (typeof window.ethereum !== "undefined") {
        // Cek apakah ada akun yang sudah terhubung sebelumnya
        const accounts = await ethereum.request({ method: "eth_accounts" });
        if (accounts.length > 0) {
            console.log("Account detected:", accounts[0]);
            // Bisa disimpan sebagai info login jika perlu
        } else {
            console.warn("There are no MetaMask accounts connected.");
        }
    } else {
        alert("MetaMask not detected! Please install MetaMask.");
    }
}        
       
// Modal Result
function updateHistory(newBall1) {
    let historyTable = document.getElementById("historyBody");
    let rows = historyTable.getElementsByTagName("tr");

    // Ambil nilai dari baris pertama untuk di-shift ke bawah
    let previousBall1 = rows[0].children[1].innerText;
    let previousBall2 = rows[0].children[2].innerText;
    let previousBall3 = rows[0].children[3].innerText;
    let previousBall4 = rows[0].children[4].innerText;

    // Geser data ke bawah
    for (let i = rows.length - 1; i > 0; i--) {
        rows[i].children[1].innerText = rows[i - 1].children[1].innerText;
        rows[i].children[2].innerText = rows[i - 1].children[2].innerText;
        rows[i].children[3].innerText = rows[i - 1].children[3].innerText;
        rows[i].children[4].innerText = rows[i - 1].children[4].innerText;
    }

    // Perbarui data di baris pertama dengan data terbaru
    rows[0].children[1].innerText = newBall1;
    rows[0].children[2].innerText = previousBall1;
    rows[0].children[3].innerText = previousBall2;
    rows[0].children[4].innerText = previousBall3;
}

// Fungsi untuk membuka modal berdasarkan ID
function openModal(modalId) {
    let modal = document.getElementById(modalId);
    
    if (modal) {
        if (modalId === "myModal") {
            let userBets = document.getElementById("userBets");
            if (!userBets.innerHTML.trim()) {
                userBets.innerHTML = "<p style='text-align: center; font-weight: bold; color: red;'>No bet history available.</p>";
            }
        }

        modal.style.display = "block";
    }
}

// Fungsi untuk menutup modal berdasarkan ID
function closeModal(modalId) {
    let modal = document.getElementById(modalId);
    if (modal) {
        modal.style.display = "none";
    }
}

// Fungsi khusus untuk menutup modal
function closeMyBets() {
    closeModal('myModal');
}

function closeMenu() {
    closeModal('menuModal');
}

function closeResult() {
    closeModal('resultModal');
}

// Html Modal


// **Fungsi untuk menampilkan modal**
function openLikeModal(betId) {
    if (!document.getElementById(`likeModal-${betId}`)) {
        createLikeModal(betId);
    }
    document.getElementById(`likeModal-${betId}`).style.display = "block";
}

// **Fungsi untuk menutup modal**
function closeLikeModal(betId) {
    const modal = document.getElementById(`likeModal-${betId}`);
    if (modal) modal.style.display = "none";
}

// Popup Messages
 function showWelcomePopup() {
  const popupSound = new Audio("https://www.myinstants.com/media/sounds/pop-up-off.mp3");

  const popupDiv = document.createElement("div");
  popupDiv.id = "popupLotto";
  popupDiv.innerHTML = `
    <div class="popup-text">Welcome to Faylotto! Decentralized Betting, Have fun and enjoy playing!</div>
  `;

    const style = document.createElement("style");
    style.textContent = `
      #popupLotto {
        position: fixed;
        top: 10%;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(90deg, #000000, #02024c, #4b4b4b);
        color: white;
        padding: 20px;
        border-radius: 16px;
        box-shadow: 0 0 40px rgba(0, 255, 255, 0.6), 0 0 80px rgba(0, 128, 255, 0.4);
        z-index: 9999;
        font-family: 'Ubuntu', sans-serif;
        text-align: center;
        animation: fadeIn 1s ease, bounce 0.5s infinite alternate;
        width: 90%;
        max-width: 1000px;
        transition: all 0.3s ease;
        box-sizing: border-box;
      }

      #popupLotto:hover {
        box-shadow: 0 0 60px rgba(0, 255, 255, 0.8), 0 0 100px rgba(0, 128, 255, 0.6), 0 0 20px rgba(0, 255, 200, 0.5);
        transform: translateX(-50%) scale(1.03);
      }

      .popup-text {
        font-size: 1.1rem;
        font-weight: bold;
        animation: typing 4s steps(50, end), blink 1s infinite;
        white-space: nowrap;
        overflow: hidden;
        border-right: 3px solid white;
        text-shadow: 0 0 10px #00f2fe, 0 0 20px #007acc;
      }

      @keyframes fadeIn {
        from { opacity: 0; top: 0%; }
        to { opacity: 1; top: 10%; }
      }

      @keyframes bounce {
        from { transform: translate(-50%, 0); }
        to { transform: translate(-50%, 12px); }
      }

      @keyframes typing {
        from { width: 0; }
        to { width: 100%; }
      }

      @keyframes blink {
        0%, 100% { border-color: transparent; }
        50% { border-color: white; }
      }

      /* Responsive adjustment for small screens */
      @media (max-width: 480px) {
        #popupLotto {
          padding: 16px;
          top: 8%;
          border-radius: 12px;
          width: 95%;
        }

        .popup-text {
          font-size: 0.6rem;
          border-right: 2px solid white;
          animation: typing 4s steps(35, end), blink 1s step-end infinite;
        }
      }
    `;

    document.head.appendChild(style);
  document.body.appendChild(popupDiv);

  popupSound.play().catch(() => {
    console.log("Popup sound not allowed without user interaction.");
  });

  setTimeout(() => {
    popupDiv.remove();
  }, 11000);
 }

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}

window.addEventListener("scroll", () => {
  const icon = document.getElementById("scrollUpIcon");
  if (window.scrollY > 300) {
    icon.classList.add("show");
  } else {
    icon.classList.remove("show");
  }
});
      
// Initialize saat halaman terbuka
window.onload = async () => {
    if (window.ethereum) {
        window.ethereum.on("accountsChanged", (accounts) => {
            if (accounts.length > 0) {
                userAccount = accounts[0];
                document.getElementById("walletAddress").innerText = `Connected: ${userAccount}`;
                document.getElementById("walletAddress").style.display = "block";
                document.getElementById("walletBalance").style.display = "block";
                document.getElementById("connectWallet").style.display = "none";
                document.getElementById("disconnectWallet").style.display = "block";

                updateBalance();
                loadUserBets();
                loadBetHistory();
            } else {
                disconnectWallet();
            }
        });
    }

    try {
        // Ambil semua taruhan dari kontrak
        const allBets = await contract.methods.getAllBets().call();

        // Ambil betId dari setiap taruhan
        const betIds = allBets.map(bet => bet.betId);

        // Perbarui jumlah komentar dan muat komentar untuk setiap betId
        for (const betId of betIds) {
            await updateCommentCount(betId);
            await loadComments(betId); // Memuat komentar langsung saat halaman dibuka
        }
    } catch (error) {
        console.error("Gagal memuat komentar saat halaman dimuat:", error);
    }

    document.getElementById("refreshButton").addEventListener("click", function () {
  const icon = this.querySelector(".refresh-icon");

  // Reset animasi supaya bisa diulang
  icon.classList.remove("spin-once");
  void icon.offsetWidth; // paksa reflow
  icon.classList.add("spin-once");

  // Tunggu animasi selesai, lalu reload konten bet history
  setTimeout(() => {
    loadBetHistory();
  }, 2000);
});
    loadBetHistory().then(() => {
    setInterval(autoRefreshBetHistory, 2000);
});
};
