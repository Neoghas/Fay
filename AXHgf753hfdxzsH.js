document.getElementById("AXHgf753hfdxzsH").innerHTML = `
       <!-- Notifikasi Popup -->
<div id="notificationPopup" class="popup hidden" role="alert">
    <button id="closePopup" onclick="closePopup()">×</button>
    <p id="notificationMessage"></p>
</div>

<!-- Ikon Notifikasi -->
<div id="notificationIcon" onclick="toggleNotificationList()">
    <img src="img/bell.svg" alt="Notifications">
    <span id="notificationBadge" class="hidden"></span>
</div>

<!-- Daftar Notifikasi -->
<div id="notificationList" class="hidden">
    <div class="notification-header">
        <p>Notifications</p>
        <ul id="notifications" aria-live="polite"></ul>
        <p id="noNotificationsMessage" class="hidden">No notifications</p>
    </div>
    <button onclick="closeNotificationList()">Close</button>
</div>
       
<div id="qrCanvasContainer">
  <div id="closeBtn">&times;</div>
  <div id="qrCanvas"></div>
  <button id="downloadBtn">Download QR Link</button>
</div>
       
        <!-- Wallet Connection -->
        <center><button id="connectWallet" onclick="connectWallet()"><img src="img/connect.svg" alt="Wallet Icon" width="20" height="20" style="vertical-align: middle; margin-right: 5px;">Connect Wallet</button>  
        <button id="disconnectWallet" onclick="disconnectWallet()" style="display:none;"><img src="img/close.svg" alt="Disconnect Icon" width="20" height="20" style="vertical-align: middle; margin-right: 5px;">Disconnect</button>
        </center>
        <p id="networkStatus" style="display:none; font-weight:bold; color: #1a88ff;">
  <img src="img/base.svg" style="width: 16px; height: 16px; vertical-align: middle; margin-right: 6px;">
  <span id="networkText">Network: Base</span>
        </p>
        <p id="walletAddress" style="display:none; color: #ad5cff"></p>
        <p id="walletBalance" style="display:none; color: #00ca09;">Balance: 0 ETH</p><br>
        <hr style="background-color: #333333; height: 1px; border: none;">
        <h2>Place Bet</h2><br>
        <div class="button-container">
    <!-- Dropdown Pools -->
    <div class="dropdown">
      <button class="dropbtn">
        Pools <span class="arrow">▼</span>
      </button>
      <div class="dropdown-content">
        <a href="index"><img src="img/hk.svg"> Hongkong (HK)</a>
        <a href="cs"><img src="img/sgp.svg"> Singapore (SGP)</a>
        <a href="cs"><img src="img/syd.svg"> Sydney (SYD)</a>
        <a href="cs"><img src="img/chi.svg"> China (CHI)</a>
        <a href="cs"><img src="img/mc.svg"> Cambodia (MC)</a>
        <a href="cs"><img src="img/be.svg"> Bull Eye (BE)</a>
        <a href="cs"><img src="img/twn.svg"> Taiwan (TWN)</a>
        <a href="cs"><img src="img/mag.svg"> Malaysia (MAG)</a>
        <a href="cs"><img src="img/mac.svg"> Macau (MAC)</a>
        <a href="cs"><img src="img/jpn.svg"> Japan (JPN)</a>
        <a href="cs"><img src="img/vn.svg"> Vietnam (VN)</a>
        <a href="cs"><img src="img/lao.svg"> Laos (LAO)</a>
      </div>
    </div>

    <div class="dropdown">
      <button class="dropbtn">
        Select Chain <span class="arrow">▼</span>
      </button>
      <div class="dropdown-content">
        <a href="index"><img src="img/base.svg"> Base</a>
        <a href="cs"><img src="img/opbnb.svg"> Smart Chain</a>
        <a href="cs"><img src="img/arb.svg"> Arbitrum</a>
        <a href="cs"><img src="img/op.svg"> Optimism</a>
        <a href="cs"><img src="img/polygon.svg"> Polygon</a>
        <a href="cs"><img src="img/avax.svg"> Avalance</a>
        <a href="cs"><img src="img/opbnb.svg"> OpBNB</a>
        <a href="cd"><img src="img/eth.svg"> Ethereum</a>
        <a href="cs"><img src="img/core.svg"> Core</a>
      </div>
    </div>
        </div><br>
        <input type="number" id="betNumber" placeholder="4D 3D or 2D" oninput="validateBetNumber()"><br>
        <input type="number" id="betTimes" placeholder="x1 / x99" min="1" max="99" oninput="validateBetTimes(); updateBetPrice()">
        <p id="betWarning" style="color: red;"></p>
        <p id="betPrice" style="color: #00FF66; font-weight: bold;">Cost: 0.000000 ETH</p>
        <button onclick="placeBet()">Submit Ticket</button>
        <p id="betStatus"></p>
       <br>
       <h2>Public Bet History</h2>
       <br><div style="display: flex; justify-content: center; margin-bottom: 10px;">
  <div style="display: flex; align-items: center; width: 80%; background: #000000; border-radius: 10px; padding: 10px 14px; box-sizing: border-box; border: 1px solid #007bff;">
    <img src="img/search.svg" style="width: 20px; height: 20px; margin-right: 10px; filter: brightness(0.8);">
    <input type="text" id="searchInput" placeholder="Search anything..." 
           oninput="searchBetHistory()" 
           style="border: none; outline: none; width: 100%; font-size: 14px; background: transparent; color: white;">
  </div>
</div>
<div id="searchStatus" style="min-height: 24px;"></div><br>
       <hr style="background-color: #333333; height: 1px; border: none;">
       <div id="betHistoryContainer" style="position: relative;">
       <div id="betHistoryContainer" style="position: relative;">
  <button id="refreshButton" style="position: absolute; top: 0; right: 0; background: #000000; border: none; cursor: pointer;">
    <img src="img/refresh.svg" class="refresh-icon" style="width: 15px; height: 15px;" />
  </button>
  <div id="betHistory" style="padding-top: 30px;"></div>
       </div>
<div class="button-container">
    <button class="nav-button" onclick="prevBetHistory()">Prev</button>
    <button class="nav-button" onclick="nextBetHistory()">Next</button>
    <img id="scrollUpIcon" 
     src="img/up.svg" 
     onclick="scrollToTop()" 
     style="
        width: 25px;
        height: 25px;
        position: fixed;
        right: 30px;
        cursor: pointer;
        z-index: 9999;
        box-shadow: 0 0 10px 2px limegreen;
        border-radius: 50%;
        transition: transform 0.1s ease;
     "
     onmouseover="this.style.transform='scale(1.1)'"
     onmouseout="this.style.transform='scale(1)'"
>
</div>
       <br>
       <!-- Prize Table -->
        <div id="prizes" class="section-box">
        <center><h2>4D ETH Prize Payouts</h2></center>
            <table>
                <tr>
                    <th>Bet Type</th>
                    <th>Prize Multiplier</th>
                    <th>Example (0.000256 ETH)</th>
                </tr>
                <tr>
                    <td style="color: orange; font-weight: bold;">4D</td>
                    <td style="color: #00ca09; font-weight: bold;">50,000%</td>
                    <td style="color: #1a88ff; font-weight: bold;">0.128 ETH</td>
                </tr>
                <tr>
                    <td style="color: orange; font-weight: bold;">3D</td>
                    <td style="color: #00ca09; font-weight: bold;">5,000%</td>
                    <td style="color: #1a88ff; font-weight: bold;">0.0128 ETH</td>
                </tr>
                <tr>
                    <td style="color: orange; font-weight: bold;">2D</td>
                    <td style="color: #00ca09; font-weight: bold;">500%</td>
                    <td style="color: #1a88ff; font-weight: bold;">0.00128 ETH</td>
                </tr>
            </table>
        </div>

<div id="menu">
    <button onclick="openModal('statistics')"><img src="img/pools.svg" alt="Lotto">Statistics</button>
    <button onclick="window.open('4d', '_blank')"><img src="img/tools.svg" alt="Lotto">Tools</button>
    <button onclick="openModal('myModal')"><img src="img/mybet.svg" alt="Lotto">Ticket</button>
    <button onclick="openModal('result')"><img src="img/results.svg" alt="Lotto"> Results</button>
    <button onclick="window.open('claim', '_blank')"><img src="img/claim.svg" alt="Lotto" style="width: 28px; height: 28px;">Claim</button>
</div> <!-- Penutupan <div> harus ada di sini -->
       
        <!-- Modal MyBets -->
<div id="myModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal('myModal')">&times;</span>
        <h2>Your Bets</h2>
        <div id="userBets"></div>
        <div class="button-container">
            <button class="nav-button" onclick="prevUserBets()">Prev</button>
            <button class="nav-button" onclick="nextUserBets()">Next</button>
        </div>
    </div>
</div>

       <!-- Menu Modal -->
<div id="menuModal" class="modal">
    <div class="modal-content">
        <span class="close" onclick="closeModal('menuModal')">&times;</span>
        <h2>Menu</h2>
        <table class="menu-table">
            <tr>
                <td><img src="img/hk.svg" alt="HK"></td>
                <td><a href="hk" target="_blank">Hong Kong (HK)</a></td>
            </tr>
            <tr>
                <td><img src="img/sgp.svg" alt="SGP"></td>
                <td><a href="sgp" target="_blank">Singapore (SGP)</a></td>
            </tr>
            <tr>
                <td><img src="img/syd.svg" alt="SYD"></td>
                <td><a href="syd" target="_blank">Sydney (SYD)</a></td>
           </tr>
            <tr>
                <td><img src="img/chi.svg" alt="CHI"></td>
                <td><a href="chi" target="_blank">China (CHI)</a></td>
            </tr>
            <tr>
                <td><img src="img/mc.svg" alt="MC"></td>
                <td><a href="mc" target="_blank">Cambodia (MC)</a></td>
            </tr>
            <tr>
                <td><img src="img/be.svg" alt="BE"></td>
                <td><a href="be" target="_blank">Bull Eye (BE)</a></td>
            </tr>
        </table>
    </div>
</div>

        <!-- Footer -->
<footer>
    <div id="footer" class="social-icons">
        <a href="https://x.com/FaylottoXyz" target="_blank"><i class="fa-brands fa-twitter"></i></a>
        <a href="https://t.me/FaylottoXyz" target="_blank"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://t.me/Faylotto" target="_blank"><i class="fa-brands fa-telegram"></i></a>
        <a href="https://discord.gg/6uMYTdCZwJ" target="_blank"><i class="fa-brands fa-discord"></i></a>
        <a href="https://facebook.com/Faylotto" target="_blank"><i class="fa-brands fa-facebook"></i></a>
    </div>
    <p>
  © Powered By Faylotto.
  <span>
    <a href="https://docs.faylotto.xyz/policy/AllRightsReserved" style="color: #007bff; text-decoration: none;" target="_blank">
      2025 All rights reserved.
    </a>
  </span>
  Play responsibly.
    <span>
    <a href="privacypolicy" style="color: #007bff; text-decoration: none;" target="_blank">
      Privacy Policy.
    </a>
    </span>
    </p>
</footer>
`;
