function cmdAbout() {
  const htmlContent = `
    <style>
      #dash-wrapper {
        font-family: 'JetBrains Mono', monospace;
        color: #00ff41;
        background: #000;
        width: 100%;
        max-width: 1200px;
        margin: 0 auto;
        padding: 10px;
        display: flex;
        flex-direction: column;
        gap: 15px;
        box-sizing: border-box;
      }
      
      .dash-grid {
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        gap: 20px;
      }

      .dash-panel {
        border: 1px solid #006b1b;
        background: #000;
        padding: 10px;
        position: relative;
      }
      
      .panel-title {
        font-size: 10px;
        color: #006b1b;
        text-transform: uppercase;
        margin-bottom: 8px;
        letter-spacing: 1px;
      }

      /* ── Top Left: Meters ── */
      .meter-container {
        display: flex;
        gap: 15px;
        align-items: center;
      }
      .vertical-meter {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 5px;
        position: relative;
      }
      .vertical-meter::before {
        content: '';
        position: absolute;
        top: 0; bottom: 0; left: 50%;
        width: 2px; background: #006b1b;
        transform: translateX(-50%);
        z-index: 0;
      }
      .meter-node {
        width: 20px; height: 20px;
        border-radius: 50%;
        border: 2px solid #00ff41;
        background: #000;
        color: #00ff41;
        font-size: 10px;
        display: flex; justify-content: center; align-items: center;
        z-index: 1;
      }
      .meter-node.filled { background: #00ff41; color: #000; font-weight: bold; }
      .meter-data {
        font-size: 12px;
        line-height: 1.4;
      }

      /* ── Top Mid: Graphs ── */
      .graph-box {
        border: 1px solid #006b1b;
        height: 60px;
        margin-bottom: 10px;
        position: relative;
        overflow: hidden;
      }
      .graph-bar-container {
        display: flex;
        align-items: flex-end;
        height: 100%;
        gap: 2px;
        padding: 5px;
      }
      .graph-bar {
        flex: 1;
        background: #006b1b;
      }
      .graph-bar.high { background: #00ff41; }

      /* ── Top Right: Buttons ── */
      .stat-matrix {
        display: grid;
        grid-template-columns: repeat(5, 1fr);
        gap: 4px;
      }
      .stat-btn {
        background: #006b1b;
        color: #000;
        font-size: 10px;
        font-weight: bold;
        text-align: center;
        padding: 6px 0;
        cursor: pointer;
      }
      .stat-btn.active {
        background: #00ff41;
      }
      .stat-btn:hover { background: #00ff41; box-shadow: 0 0 10px #00ff41; }

      /* ── Mid Left: Globe & Arrays ── */
      .globe-container {
        width: 120px;
        height: 120px;
        margin: 20px auto;
        border-radius: 50%;
        border: 1px solid #00ff41;
        position: relative;
        overflow: hidden;
      }
      .globe-container::before, .globe-container::after {
        content: ''; position: absolute;
        top: -10%; left: 50%; width: 100%; height: 120%;
        border: 1px solid #006b1b; border-radius: 50%;
        transform: translateX(-50%);
      }
      .globe-container::after { width: 50%; }
      .globe-horiz {
        position: absolute; top: 50%; left: -10%; width: 120%; height: 50%;
        border: 1px solid #006b1b; border-radius: 50%;
        transform: translateY(-50%);
      }
      
      .array-list {
        display: flex;
        flex-direction: column;
        gap: 8px;
        margin-top: 20px;
      }
      .array-row {
        display: flex;
        align-items: center;
        gap: 10px;
        font-size: 14px;
      }
      .array-label {
        background: #006b1b;
        color: #000;
        padding: 2px 6px;
      }

      /* ── Center: Profile Schematic ── */
      .center-schematic {
        grid-column: 2;
        border: 2px solid #00ff41;
        padding: 20px;
        position: relative;
        display: flex;
        flex-direction: column;
        gap: 20px;
        background: repeating-linear-gradient(0deg, #001104, #001104 1px, transparent 1px, transparent 20px),
                    repeating-linear-gradient(90deg, #001104, #001104 1px, transparent 1px, transparent 20px);
      }
      .schematic-corners::before, .schematic-corners::after {
        content: ''; position: absolute; width: 20px; height: 20px;
        border: 2px solid #00ff41;
      }
      .schematic-corners::before { top: -2px; left: -2px; border-right: none; border-bottom: none; }
      .schematic-corners::after { bottom: -2px; right: -2px; border-left: none; border-top: none; }
      
      .profile-image-box {
        width: 150px;
        height: 150px;
        border: 1px dashed #00ff41;
        display: flex;
        justify-content: center;
        align-items: center;
        text-align: center;
        font-size: 12px;
        color: #006b1b;
        margin: 0 auto;
      }
      
      .profile-details {
        flex: 1;
        border-top: 1px solid #006b1b;
        padding-top: 15px;
      }
      .profile-details p { margin: 5px 0; font-size: 13px; line-height: 1.5; }
      .detail-label { color: #006b1b; display: inline-block; width: 100px; }

      /* ── Right: Terminal Feed ── */
      .feed-panel {
        font-size: 10px;
        line-height: 1.6;
        height: 100%;
        overflow: hidden;
        position: relative;
      }
      .feed-content {
        position: absolute;
        bottom: 0;
        width: 100%;
        display: flex;
        flex-direction: column;
      }
      .feed-row {
        display: flex;
        justify-content: space-between;
      }

      /* ── Footer: Status Bar ── */
      .status-bar {
        border-top: 1px solid #00ff41;
        border-bottom: 1px solid #00ff41;
        padding: 5px 0;
        display: flex;
        justify-content: space-between;
        font-size: 10px;
        margin-top: 10px;
      }
      .status-node { color: #006b1b; }
      .status-node.active { color: #00ff41; }

      /* Make it responsive for smaller terminal views */
      @media (max-width: 900px) {
        .dash-grid { grid-template-columns: 1fr; }
        .center-schematic { grid-column: 1; }
      }
    </style>

    <div id="dash-wrapper">
      <div class="dash-grid">
        
        <!-- TOP LEFT -->
        <div class="dash-panel">
          <div class="meter-container">
            <div class="vertical-meter">
              <div class="meter-node">0</div>
              <div class="meter-node">1</div>
              <div class="meter-node">2</div>
              <div class="meter-node">3</div>
              <div class="meter-node filled">4</div>
              <div class="meter-node filled">5</div>
            </div>
            <div class="meter-data">
              <div>46162481</div>
              <div>68638219</div>
              <div>73294405</div>
              <div>91446469</div>
              <div>85556048</div>
              <div>58034190</div>
              <div>16733731</div>
              <div>67191207</div>
            </div>
          </div>
        </div>

        <!-- TOP MID -->
        <div class="dash-panel">
          <div class="panel-title">SKILL ACQUISITION RATE</div>
          <div class="graph-box">
             <svg width="100%" height="100%" preserveAspectRatio="none" viewBox="0 0 100 40">
               <polyline fill="none" stroke="#00ff41" stroke-width="1" points="0,30 10,10 20,20 30,5 40,25 50,15 60,35 70,10 80,20 90,5 100,25" />
               <polyline fill="none" stroke="#006b1b" stroke-width="1" points="0,35 15,15 25,25 35,10 45,30 55,20 65,40 75,15 85,25 95,10 100,30" />
             </svg>
          </div>
          <div class="panel-title">THREAT MITIGATION VOLUME</div>
          <div class="graph-box">
             <div class="graph-bar-container">
                <div class="graph-bar" style="height: 40%"></div>
                <div class="graph-bar" style="height: 60%"></div>
                <div class="graph-bar high" style="height: 30%"></div>
                <div class="graph-bar" style="height: 80%"></div>
                <div class="graph-bar high" style="height: 50%"></div>
                <div class="graph-bar" style="height: 90%"></div>
                <div class="graph-bar" style="height: 40%"></div>
                <div class="graph-bar high" style="height: 100%"></div>
                <div class="graph-bar" style="height: 60%"></div>
                <div class="graph-bar" style="height: 20%"></div>
             </div>
          </div>
        </div>

        <!-- TOP RIGHT -->
        <div class="dash-panel">
          <div class="stat-matrix">
            <div class="stat-btn active">YNA</div>
            <div class="stat-btn">NWK</div>
            <div class="stat-btn">OHB</div>
            <div class="stat-btn">QFV</div>
            <div class="stat-btn active">RLV</div>
            <div class="stat-btn">FHL</div>
            <div class="stat-btn active">KTV</div>
            <div class="stat-btn">ODT</div>
            <div class="stat-btn active">UIC</div>
            <div class="stat-btn">IYO</div>
            <div class="stat-btn">SUR</div>
            <div class="stat-btn active">CGB</div>
            <div class="stat-btn active">QYL</div>
            <div class="stat-btn">HTP</div>
            <div class="stat-btn">TVE</div>
            <div class="stat-btn">PJM</div>
            <div class="stat-btn">UHZ</div>
            <div class="stat-btn">YVA</div>
            <div class="stat-btn active">HMU</div>
            <div class="stat-btn">POP</div>
          </div>
        </div>

        <!-- MID LEFT -->
        <div class="dash-panel" style="grid-row: span 2;">
          <div class="globe-container">
            <div class="globe-horiz"></div>
          </div>
          <div style="font-size: 10px; color: #00ff41;">ZEOVKLON<br>4734 938</div>
          
          <div class="array-list">
            <div class="array-row">
              <span class="array-label">C_ARRAY</span>
              <span>559FE83/11</span>
            </div>
            <div class="array-row">
              <span class="array-label">B_ARRAY</span>
              <span>B76/4CCE76</span>
            </div>
            <div class="array-row">
              <span class="array-label">A_ARRAY</span>
              <span>4F8/FCD9AB</span>
            </div>
          </div>
        </div>

        <!-- CENTER (PROFILE PLACEHOLDER) -->
        <div class="center-schematic" style="grid-row: span 2;">
          <div class="schematic-corners"></div>
          <div class="panel-title" style="margin-bottom: 0;">SYSTEM MONITOR // OPERATOR PROFILE</div>
          
          <!-- IMAGE PLACEHOLDER -->
          <!-- Replace this div with an actual <img> tag for your picture -->
          <div class="profile-image-box">
            [ INSERT IMAGE HERE ]<br><br>Recommended: Square format<br>Max width: ~200px
          </div>

          <!-- DETAILS PLACEHOLDER -->
          <div class="profile-details">
            <p><span class="detail-label">OPERATOR:</span> <span style="color:#fff;">Arya Koner (Mr. Malman)</span></p>
            <p><span class="detail-label">ROLE:</span> Cybersecurity Researcher</p>
            <p><span class="detail-label">LOC:</span> Kolkata / Noida (Remote)</p>
            <p><span class="detail-label">CLASS:</span> Digital Forensics & VAPT</p>
            <br>
            <p><span class="detail-label">SKILLS:</span> Malware Analysis, Red Teaming,</p>
            <p><span class="detail-label"></span> Reverse Engineering, AI Security</p>
            <p><span class="detail-label">LANGUAGES:</span> English, Bengali, Hindi</p>
          </div>
        </div>

        <!-- RIGHT FEED -->
        <div class="dash-panel feed-panel" style="grid-row: span 2;">
          <div class="feed-content">
            <div class="feed-row"><span>> EDIT_QYI</span><span>CB-7616</span></div>
            <div class="feed-row"><span>  TCI</span><span>RK-312F</span></div>
            <div class="feed-row"><span>  DISABLE_PCG</span><span>LX-6C6C/F</span></div>
            <div class="feed-row"><span>  OBTAIN_SWN</span><span>WW-05E/</span></div>
            <div class="feed-row"><span>  BUS</span><span>MS-42A6/A</span></div>
            <div class="feed-row"><span>  LFA</span><span>QU-/8/4//</span></div>
            <div class="feed-row"><span>  TNY</span><span>FL-664C</span></div>
            <div class="feed-row"><span>  TOKEN_ITK</span><span>BP-1C43</span></div>
            <div class="feed-row"><span>  BURST_ODH</span><span>EN-0C06.5/S</span></div>
            <div class="feed-row"><span>  JEZ_MKY</span><span>TO-432F</span></div>
            <div class="feed-row"><span>  TARG_FXD</span><span>CC-5442</span></div>
            <div class="feed-row"><span>  ATTR_KMP</span><span>UB-S/EC.C</span></div>
            <div class="feed-row"><span>  ODM_NBW</span><span>KH-16B0</span></div>
            <div class="feed-row"><span>  SCAN</span><span>RT-3/46</span></div>
            <div class="feed-row"><span>  TREE</span><span>UA-290D</span></div>
            <div class="feed-row"><span>  BBIAB_PVP</span><span>GD-8994</span></div>
            <div class="feed-row"><span>> V10_OK</span><span>ZF-9881/B</span></div>
            <div class="feed-row"><span>> ROLLBACK</span><span>OC-1C3/</span></div>
            <div class="feed-row"><span>> BRANCHPT</span><span>FA-2B13/8</span></div>
            <div class="feed-row"><span>> CVI</span><span>XE-8AB/</span></div>
            <div class="feed-row"><span>> SET_INFO</span><span>SN-2B82</span></div>
            <div class="feed-row"><span>> CHRW_ZDK</span><span>RZ-3250/B</span></div>
            <div class="feed-row"><span style="background:#006b1b;color:#000;">> XOR</span><span style="background:#006b1b;color:#000;">ZB-5176.2</span></div>
          </div>
        </div>
      </div>

      <!-- FOOTER -->
      <div class="status-bar">
        <span class="status-node">V00</span>
        <span class="status-node">V01</span>
        <span class="status-node">V02</span>
        <span class="status-node">V03</span>
        <span class="status-node">V04</span>
        <span class="status-node active" style="border:1px solid #00ff41; padding:0 2px;">V05</span>
        <span class="status-node">V06</span>
        <span class="status-node">V07</span>
        <span class="status-node">V08</span>
        <span class="status-node active" style="border:1px solid #00ff41; padding:0 2px;">V09</span>
        <span class="status-node">V10</span>
        <span class="status-node">V11</span>
        <span class="status-node">V12</span>
        <span class="status-node">V13</span>
        <span class="status-node">V14</span>
        <span class="status-node">V15</span>
        <span class="status-node">V16</span>
        <span class="status-node">V17</span>
        <span class="status-node">V18</span>
        <span class="status-node">V19</span>
        <span class="status-node">V20</span>
        <span class="status-node">V21</span>
        <span class="status-node">V22</span>
        <span class="status-node">V23</span>
        <span class="status-node">V24</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-size:10px; color:#00ff41; padding:0 20px;">
        <span>REQ</span>
        <span>OFF-LINE</span>
        <span>OFF-LINE</span>
        <span>XMIT</span>
        <span>DEV D65</span>
        <span>REQ A48</span>
        <span>DEV 1A8</span>
      </div>

    </div>
  `;

  // Inject the entire block
  printRaw(htmlContent);
  printBlank();
}
