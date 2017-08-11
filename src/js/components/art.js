function artInit(p) {
  var $canvas
  var $title

  var klakson = [
    '<svg xmlns="http://www.w3.org/2000/svg" width="861" height="861" viewBox="0 0 861 861"><path fill="#161616" fill-rule="evenodd" d="M438.735526,48.0352915 C388.663526,43.2492915 432.534526,177.700291 382.997526,186.347291 C317.436526,197.790291 308.487526,8.01029149 249.998526,39.3822915 C197.764526,67.3992915 341.905526,170.404291 297.172526,209.033291 C270.662526,231.925291 226.441526,145.675291 199.811526,168.431291 C173.109526,191.247291 251.686526,244.811291 226.776526,269.521291 C172.540526,323.323291 35.1815256,143.898291 3.24552557,212.917291 C-32.4184744,289.992291 238.097526,275.778291 215.244526,357.446291 C199.548526,413.535291 46.2715256,311.321291 38.6315256,369.016291 C29.9505256,434.578291 224.505526,366.588291 229.170526,432.545291 C234.950526,514.290291 -19.2894744,464.913291 6.39552557,542.843291 C31.5685256,619.216291 194.706526,442.493291 247.441526,503.685291 C288.614526,551.463291 132.159526,649.372291 186.496526,681.930291 C232.547526,709.522291 247.338526,550.885291 298.647526,567.117291 C362.168526,587.214291 261.319526,756.175291 327.731526,762.386291 C380.249526,767.297291 327.164526,610.888291 379.753526,614.986291 C463.780526,621.536291 340.058526,858.474291 424.323526,860.455291 C504.527526,862.340291 398.166526,637.089291 477.981526,629.071291 C526.899526,624.158291 490.947526,770.839291 539.185526,761.434291 C599.297526,749.715291 488.383526,600.646291 546.071526,580.272291 C580.654526,568.058291 585.932526,677.020291 619.170526,661.598291 C660.743526,642.309291 563.811526,557.560291 597.992526,527.284291 C648.307526,482.718291 766.841526,640.091291 793.985526,579.004291 C821.305526,517.521291 604.745526,536.324291 621.473526,471.257291 C634.540526,420.429291 774.970526,512.713291 780.615526,460.574291 C786.616526,405.150291 617.404526,469.987291 617.693526,414.249291 C618.121526,331.461291 865.622526,430.512291 860.385526,347.883291 C854.961526,262.309291 629.775526,391.903291 602.321526,310.550291 C589.779526,273.384291 702.592526,262.968291 686.341526,227.227291 C667.391526,185.552291 575.009526,271.569291 547.611526,234.745291 C498.610526,168.888291 704.499526,49.9012915 635.061526,5.36829149 C567.391526,-38.0327085 539.441526,196.701291 462.426526,172.851291 C421.477526,160.169291 481.456526,52.1182915 438.735526,48.0352915"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="870" height="857" viewBox="0 0 870 857"><path fill="#FF1F1F" fill-rule="evenodd" d="M305.36978,130.760045 C259.01278,150.281045 361.37478,247.871045 321.85578,278.966045 C269.55378,320.120045 171.71178,157.259045 135.08278,212.608045 C102.37178,262.037045 278.11678,284.406045 257.03978,339.625045 C244.54978,372.348045 164.72678,317.366045 152.06578,350.027045 C139.37078,382.775045 233.94878,392.690045 223.72878,426.255045 C201.47678,499.338045 -4.52121963,406.465045 0.0757803743,482.375045 C5.20878037,567.147045 236.66378,426.398045 255.25378,509.141045 C268.02078,565.967045 84.6067804,548.625045 105.22978,603.048045 C128.66378,664.890045 267.74178,512.800045 303.11478,568.665045 C346.95378,637.902045 99.6867804,714.943045 159.24478,771.384045 C217.61178,826.698045 277.48478,593.761045 352.92478,622.643045 C411.82678,645.195045 320.47878,805.569045 383.75678,808.478045 C437.38478,810.945045 375.20878,664.251045 428.08178,654.223045 C493.53878,641.807045 484.83378,838.383045 546.25378,812.370045 C594.82378,791.801045 473.93878,679.244045 522.18678,657.925045 C599.27878,623.861045 602.65678,891.135045 677.79078,852.935045 C749.30578,816.574045 548.87778,668.657045 615.35378,623.764045 C656.09878,596.249045 693.97378,742.446045 731.98878,711.298045 C779.36278,672.484045 611.03978,593.805045 652.17778,548.519045 C676.83778,521.371045 733.13578,614.812045 755.09178,585.477045 C782.55378,548.785045 657.02978,520.112045 672.77578,477.250045 C695.95278,414.158045 874.92278,496.538045 869.86578,429.883045 C864.77678,362.797045 683.00678,482.009045 666.89078,416.787045 C654.30378,365.839045 821.69878,380.528045 801.95378,331.943045 C780.96578,280.297045 662.70778,417.598045 636.53978,368.384045 C597.67278,295.284045 862.55278,265.177045 818.77178,194.904045 C773.43178,122.126045 636.58578,342.981045 573.84878,284.362045 C545.18778,257.582045 639.58278,194.934045 608.33078,171.167045 C571.89078,143.455045 531.32178,262.986045 489.74178,243.550045 C415.37778,208.789045 540.26178,6.42304518 458.01178,0.126045176 C377.85278,-6.01095482 464.51478,213.924045 385.39578,229.431045 C343.32878,237.676045 344.92178,114.105045 305.36978,130.760045"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="554" height="588" viewBox="0 0 554 588"><path fill="#BDF425" fill-rule="evenodd" d="M100.884436,129.453513 C76.3624365,155.235513 170.354436,189.510513 153.542436,220.858513 C131.291436,262.349513 21.7444365,184.481513 13.6744365,230.734513 C6.46743648,272.041513 126.729436,236.772513 128.703436,278.536513 C129.873436,303.286513 62.5584365,290.250513 63.5994365,315.007513 C64.6434365,339.831513 128.762436,319.475513 131.642436,344.128513 C137.914436,397.806513 -21.9245635,395.937513 2.55143648,443.845513 C29.8864365,497.345513 140.068436,340.557513 175.551436,388.931513 C199.921436,422.153513 76.1114365,462.852513 104.892436,492.292513 C137.596436,525.745513 184.682436,387.766513 223.434436,413.964513 C271.460436,446.432513 132.987436,566.397513 187.578436,586.120513 C241.080436,605.448513 213.927436,437.490513 271.010436,434.849513 C315.579436,432.788513 301.780436,562.619513 343.623436,546.586513 C379.086436,532.998513 297.239436,455.511513 328.673436,434.037513 C367.590436,407.451513 417.616436,537.348513 450.065436,503.092513 C475.725436,476.002513 365.487436,437.270513 390.726436,409.787513 C431.054436,365.873513 508.934436,538.178513 546.822436,492.137513 C582.884436,448.313513 411.067436,409.186513 441.448436,361.258513 C460.068436,331.883513 526.022436,415.929513 541.845436,384.972513 C561.563436,346.393513 430.166436,343.058513 444.009436,302.052513 C452.307436,277.471513 515.264436,322.099513 521.190436,296.865513 C528.601436,265.303513 439.110436,282.263513 437.179436,250.018513 C434.336436,202.556513 573.683436,205.275513 551.529436,163.498513 C529.232436,121.451513 445.159436,250.206513 416.242436,212.489513 C393.654436,183.027513 506.328436,145.143513 479.769436,119.240513 C451.537436,91.7055134 413.760436,214.200513 382.859436,189.707513 C336.962436,153.327513 500.144436,58.7985134 451.864436,25.6415134 C401.862436,-8.69548663 375.695436,173.226513 318.425436,152.994513 C292.262436,143.751513 335.712436,76.4065134 308.722436,69.8505134 C277.252436,62.2055134 284.803436,151.180513 252.345436,150.355513 C194.294436,148.882513 217.942436,-17.6684866 162.840436,1.54251337 C109.139436,20.2655134 227.601436,138.295513 180.704436,170.753513 C155.769436,188.012513 121.807436,107.455513 100.884436,129.453513"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="554" height="588" viewBox="0 0 554 588"><path fill="#FF5D0D" fill-rule="evenodd" d="M100.884621,129.453367 C76.3616208,155.236367 170.354621,189.510367 153.542621,220.859367 C131.291621,262.349367 21.7446208,184.481367 13.6746208,230.735367 C6.46762079,272.041367 126.729621,236.772367 128.703621,278.536367 C129.873621,303.286367 62.5586208,290.250367 63.5996208,315.007367 C64.6436208,339.831367 128.761621,319.475367 131.642621,344.128367 C137.914621,397.806367 -21.9253792,395.938367 2.55162079,443.845367 C29.8866208,497.345367 140.067621,340.557367 175.551621,388.931367 C199.920621,422.153367 76.1116208,462.853367 104.891621,492.292367 C137.596621,525.745367 184.683621,387.766367 223.434621,413.964367 C271.460621,446.432367 132.986621,566.398367 187.578621,586.120367 C241.079621,605.449367 213.926621,437.490367 271.009621,434.849367 C315.579621,432.788367 301.780621,562.620367 343.623621,546.586367 C379.086621,532.998367 297.238621,455.511367 328.673621,434.037367 C367.589621,407.452367 417.615621,537.348367 450.065621,503.092367 C475.725621,476.002367 365.487621,437.271367 390.726621,409.787367 C431.054621,365.873367 508.934621,538.178367 546.821621,492.137367 C582.884621,448.314367 411.067621,409.186367 441.447621,361.258367 C460.068621,331.883367 526.022621,415.929367 541.845621,384.972367 C561.563621,346.394367 430.166621,343.058367 444.009621,302.052367 C452.307621,277.471367 515.264621,322.099367 521.190621,296.866367 C528.601621,265.304367 439.110621,282.263367 437.179621,250.019367 C434.336621,202.556367 573.683621,205.276367 551.529621,163.498367 C529.232621,121.451367 445.158621,250.206367 416.241621,212.490367 C393.654621,183.027367 506.327621,145.144367 479.769621,119.241367 C451.537621,91.705367 413.759621,214.201367 382.859621,189.707367 C336.962621,153.328367 500.144621,58.798367 451.863621,25.642367 C401.862621,-8.69563299 375.695621,173.227367 318.424621,152.994367 C292.261621,143.751367 335.711621,76.407367 308.722621,69.850367 C277.251621,62.205367 284.803621,151.180367 252.345621,150.356367 C194.294621,148.882367 217.942621,-17.667633 162.839621,1.54236701 C109.139621,20.265367 227.601621,138.296367 180.704621,170.753367 C155.769621,188.012367 121.806621,107.455367 100.884621,129.453367"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="464" height="544" viewBox="0 0 464 544"><path fill="#7B3BE0" fill-rule="evenodd" d="M258.020108,543.59523 C299.813108,540.35323 242.411108,442.98023 276.985108,419.28723 C297.566108,405.18423 334.669108,455.09823 350.069108,435.46623 C369.828108,410.27523 288.080108,374.72423 307.571108,349.32023 C339.491108,307.71223 441.078108,428.13623 461.890108,379.99823 C483.040108,331.09623 324.937108,339.95723 331.837108,287.15123 C336.983108,247.72123 444.866108,284.82023 443.470108,245.08123 C442.219108,209.53723 352.307108,248.34723 341.222108,214.55323 C328.438108,175.57923 437.981108,150.63823 415.395108,116.39423 C385.998108,71.8302296 302.848108,186.56123 259.945108,154.80923 C226.074108,129.75223 278.894108,61.9192296 253.061108,28.6522296 C237.318108,8.38222957 200.483108,-9.38777043 179.613108,5.54822957 C135.529108,37.0762296 220.677108,137.90323 175.662108,168.09523 C142.793108,190.14023 89.2691081,94.6472296 64.7481081,125.71623 C40.0931081,156.96023 143.369108,186.11023 132.118108,224.28423 C125.378108,247.14623 67.9331081,228.22823 66.2061081,251.99523 C64.6951081,272.76823 119.563108,263.45423 119.708108,284.28423 C120.031108,330.76623 -14.7178919,314.36523 1.32710806,357.99223 C18.0701081,403.53823 112.450108,300.85223 145.315108,336.55323 C178.399108,372.48523 68.6701081,456.38023 111.864108,479.13523 C152.688108,500.66323 160.194108,366.98223 205.252108,376.90823 C262.148108,389.44423 199.908108,548.07823 257.980108,543.55023"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="1227" height="1319" viewBox="0 0 1227 1319"><path fill="#EDEDED" fill-rule="evenodd" d="M362.726481,1313.86647 C461.351481,1356.04947 446.580481,1067.17947 553.075481,1054.42447 C616.467481,1046.83547 641.453481,1204.01147 699.648481,1177.74047 C774.317481,1144.02947 631.056481,966.509469 705.370481,931.997469 C827.079481,875.468469 914.735481,1268.98647 1018.99348,1184.48147 C1124.91848,1098.64247 755.853481,931.347469 834.089481,819.764469 C892.497481,736.440469 1093.19648,948.446469 1137.12948,856.669469 C1176.42148,774.573469 926.506481,756.023469 941.421481,666.243469 C958.623481,562.701469 1236.62048,635.973469 1225.98648,531.539469 C1212.13448,395.630469 887.570481,557.275469 827.906481,434.412469 C780.789481,337.438469 980.979481,246.206469 961.822481,140.138469 C950.144481,75.5104694 887.669481,-8.45053058 822.634481,0.68646942 C685.287481,19.9394694 758.887481,349.527469 621.012481,364.646469 C520.338481,375.684469 512.135481,95.6754694 419.699481,137.072469 C326.750481,178.709469 526.420481,367.227469 455.658481,440.468469 C413.276481,484.329469 305.418481,373.337469 273.331481,425.190469 C245.282481,470.512469 380.757481,514.422469 356.397481,561.833469 C302.036481,667.635469 15.8784805,470.724469 0.554480547,588.684469 C-15.4555195,711.825469 320.299481,590.804469 352.521481,710.725469 C384.964481,831.429469 36.6674805,891.640469 107.659481,994.441469 C174.728481,1091.65547 350.199481,797.371469 440.621481,873.291469 C554.799481,969.157469 225.619481,1255.15447 362.689481,1313.71747"/></path></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="616" height="702" viewBox="0 0 616 702"><path fill="#51F4E0" fill-rule="evenodd" d="M388.849627,700.092692 C442.927627,685.088692 342.473627,571.906692 381.808627,531.887692 C405.225627,508.066692 466.807627,564.109692 481.994627,534.355692 C501.479627,496.177692 384.930627,470.483692 404.008627,432.094692 C435.251627,369.218692 599.686627,501.327692 614.656627,432.727692 C629.872627,363.038692 424.418627,415.328692 419.908627,344.172692 C416.533627,291.041692 567.819627,312.049692 555.768627,260.195692 C544.986627,213.815692 436.827627,287.925692 413.575627,246.372692 C386.758627,198.451692 524.275627,137.517692 485.795627,98.3306915 C435.713627,47.3366915 355.958627,219.458692 291.424627,188.769692 C240.479627,164.554692 292.440627,61.8486915 249.945627,24.7806915 C224.050627,2.19569151 171.084627,-11.6833085 147.503627,13.3066915 C97.6866271,66.0656915 235.483627,176.651692 184.100627,227.894692 C146.581627,265.309692 51.7056271,153.601692 27.4746271,200.726692 C3.11362706,248.118692 146.301627,259.866692 141.333627,312.916692 C138.356627,344.687692 58.0156271,334.599692 61.8556271,366.270692 C65.2106271,393.953692 134.908627,367.610692 140.453627,394.941692 C152.828627,455.931692 -28.4353729,469.023692 3.86162706,522.221692 C37.5706271,577.759692 135.176627,418.575692 187.537627,457.033692 C240.244627,495.738692 117.639627,634.181692 180.242627,652.972692 C239.416627,670.764692 214.909627,493.189692 276.663627,494.648692 C354.643627,496.490692 313.647627,720.923692 388.786627,700.044692"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="632" height="632" viewBox="0 0 632 632"><path fill="#FFB600" fill-rule="evenodd" d="M35.1063341,523.003692 C69.3793341,567.443692 136.374334,431.749692 188.264334,453.109692 C219.152334,465.825692 190.441334,543.984692 223.723334,546.842692 C266.429334,550.507692 246.319334,432.865692 289.067334,436.074692 C359.081334,441.327692 298.659334,643.418692 367.844334,631.440692 C438.131334,619.277692 312.288334,448.664692 376.502334,417.678692 C424.446334,394.534692 461.984334,542.587692 505.476334,511.888692 C544.377334,484.426692 434.978334,412.159692 464.709334,374.964692 C498.996334,332.069692 607.249334,436.496692 629.051334,386.087692 C657.418334,320.483692 467.931334,311.453692 472.046334,240.113692 C475.283334,183.799692 589.997334,193.236692 608.323334,139.906692 C619.488334,107.410692 612.389334,53.1186922 580.356334,40.6906922 C512.715334,14.4216922 462.195334,183.729692 395.369334,155.438692 C346.575334,134.780692 414.306334,4.80969224 361.524334,0.118692242 C308.447334,-4.59330776 351.511334,132.470692 300.499334,147.855692 C269.947334,157.067692 249.023334,78.8456922 221.132334,94.3356922 C196.753334,107.873692 247.415334,162.509692 224.187334,177.942692 C172.353334,212.384692 91.9333341,49.4106922 54.8243341,99.3706922 C16.0783341,151.520692 200.306334,181.959692 184.409334,244.951692 C168.414334,308.357692 -6.01966591,246.945692 0.160334087,312.015692 C5.97333409,373.532692 161.230334,283.928692 183.145334,341.682692 C210.818334,414.609692 -12.5216659,461.191692 35.1273341,522.926692"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="1228" height="1228" viewBox="0 0 1228 1228"><path fill="#FFF800" fill-rule="evenodd" d="M68.2154815,1016.23459 C134.810482,1102.58559 264.984482,838.92159 365.811482,880.42459 C425.830482,905.13359 370.041482,1057.00159 434.712482,1062.55459 C517.693482,1069.67659 478.617482,841.09059 561.680482,847.32559 C697.721482,857.53059 580.317482,1250.20959 714.748482,1226.93359 C851.322482,1203.30259 606.800482,871.78859 731.571482,811.57859 C824.730482,766.60959 897.669482,1054.28659 982.178482,994.63659 C1057.76448,941.27559 845.196482,800.85559 902.963482,728.58459 C969.585482,645.23559 1179.93048,848.14459 1222.29348,750.19559 C1277.41448,622.72359 909.225482,605.17759 917.220482,466.55759 C923.510482,357.13559 1146.40748,375.47259 1182.01748,271.84859 C1203.71148,208.70559 1189.91748,103.21259 1127.67448,79.0635902 C996.245482,28.0225902 898.078482,356.99859 768.232482,302.02859 C673.422482,261.88859 805.029482,9.34359016 702.469482,0.230590155 C599.337482,-8.92440984 683.013482,257.40059 583.892482,287.29359 C524.528482,305.19359 483.870482,153.20259 429.677482,183.30159 C382.306482,209.60659 480.745482,315.76759 435.612482,345.75659 C334.895482,412.67859 178.633482,96.0085902 106.527482,193.08359 C31.2414815,294.41559 389.210482,353.56059 358.321482,475.95859 C327.240482,599.16059 -11.6955185,479.83259 0.311481545,606.26859 C11.6084815,725.80059 313.283482,551.69459 355.865482,663.91359 C409.634482,805.61659 -24.3295185,896.12859 68.2564815,1016.08459"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="674" height="674" viewBox="0 0 674 674"><path fill="#B5B5B5" fill-rule="evenodd" d="M37.4389608,557.738579 C73.9879608,605.130579 145.430961,460.424579 200.767961,483.202579 C233.707961,496.762579 203.088961,580.112579 238.582961,583.160579 C284.124961,587.069579 262.678961,461.614579 308.266961,465.036579 C382.929961,470.637579 318.494961,686.150579 392.274961,673.376579 C467.229961,660.407579 333.028961,478.462579 401.507961,445.418579 C452.635961,420.737579 492.666961,578.622579 539.047961,545.884579 C580.531961,516.598579 463.867961,439.532579 495.571961,399.868579 C532.136961,354.123579 647.579961,465.485579 670.829961,411.728579 C701.081961,341.767579 499.008961,332.138579 503.396961,256.059579 C506.849961,196.006579 629.181961,206.069579 648.725961,149.198579 C660.630961,114.543579 653.060961,56.6455787 618.900961,43.3915787 C546.767961,15.3795787 492.891961,195.930579 421.627961,165.761579 C369.593961,143.731579 441.822961,5.12857874 385.535961,0.126578736 C328.933961,-4.89842126 374.857961,141.267579 320.456961,157.674579 C287.875961,167.499579 265.561961,84.0825787 235.819961,100.600579 C209.820961,115.037579 263.846961,173.301579 239.076961,189.760579 C183.799961,226.489579 98.0399608,52.6915787 58.4649608,105.969579 C17.1459608,161.583579 213.609961,194.044579 196.656961,261.218579 C179.598961,328.836579 -6.4190392,263.345579 0.170960798,332.737579 C6.3709608,398.340579 171.938961,302.785579 195.308961,364.374579 C224.819961,442.145579 -13.3530392,491.821579 37.4609608,557.656579"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="404" height="405" viewBox="0 0 404 405"><path fill="#414042" fill-rule="evenodd" d="M111.642705,269.231854 C128.813705,280.503854 87.9397054,320.555854 106.875705,328.839854 C136.082705,341.616854 144.120705,253.974854 174.714705,263.359854 C222.003705,277.875854 148.846705,403.214854 198.494705,404.113854 C251.057705,405.069854 177.913705,265.511854 229.560705,256.117854 C262.738705,250.084854 252.113705,346.508854 284.554705,337.568854 C319.039705,328.062854 262.127705,260.228854 285.947705,234.534854 C302.704705,216.474854 352.195705,247.621854 361.018705,224.987854 C372.385705,195.826854 292.700705,185.987854 296.361705,155.060854 C301.100705,115.008854 383.796705,122.264854 399.138705,84.7288535 C406.897705,65.7528535 405.684705,33.0328535 386.177705,24.8648535 C338.586705,4.94085352 297.035705,127.601854 252.657705,101.778854 C222.619705,84.2938535 291.333705,11.6118535 259.386705,1.04085352 C216.374705,-13.1961465 230.301705,123.464854 185.739705,115.282854 C161.403705,110.812854 194.553705,47.7148535 170.330705,42.6828535 C149.874705,38.4368535 152.875705,84.8228535 133.984705,93.7458535 C112.478705,103.903854 73.3977054,67.4908535 62.8037054,88.7858535 C49.5007054,115.525854 126.957705,126.919854 121.702705,156.309854 C117.488705,179.850854 57.9927054,166.759854 58.7157054,190.664854 C59.2817054,209.380854 106.413705,196.078854 109.558705,214.533854 C117.865705,263.305854 -24.3622946,277.744854 3.66370539,318.537854 C26.0807054,351.149854 78.7797054,247.667854 111.664705,269.258854"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="220" height="314" viewBox="0 0 220 314"><path fill="#33CC3A" fill-rule="evenodd" d="M106.480929,240.995433 C119.630929,238.268433 119.250929,275.681433 131.834929,270.757433 C151.244929,263.161433 114.441929,218.927433 132.925929,209.121433 C161.498929,193.969433 185.623929,285.738433 208.991929,263.201433 C233.735929,239.342433 135.398929,208.637433 154.933929,180.417433 C167.482929,162.288433 207.149929,211.780433 218.014929,192.648433 C229.562929,172.310433 171.890929,167.261433 171.023929,144.370433 C170.421929,128.273433 207.702929,119.793433 201.317929,105.249433 C193.090929,86.5134325 151.701929,118.804433 139.096929,102.813433 C122.770929,82.1054325 164.356929,47.2284325 154.096929,22.7824325 C148.909929,10.4214325 133.222929,-4.14456745 120.427929,1.09843255 C89.2149285,13.8884325 126.712929,89.8074325 94.2579285,98.3854325 C72.2869285,104.188433 70.4529285,38.8184325 50.7959285,48.7014325 C24.3289285,62.0044325 93.9479285,118.746433 69.5639285,135.566433 C56.2469285,144.750433 42.4009285,100.252433 28.8759285,109.125433 C17.4559285,116.619433 40.2889285,136.677433 35.6799285,149.536433 C30.4329285,164.175433 -4.4690715,165.408433 0.478928503,180.151433 C6.6909285,198.663433 47.7679285,168.121433 58.9259285,184.139433 C67.8609285,196.971433 34.3029285,218.424433 45.6889285,229.141433 C54.6039285,237.533433 70.2439285,209.593433 80.2299285,216.671433 C106.617929,235.379433 47.5399285,307.808433 79.3559285,313.711433 C104.796929,318.424433 81.3179285,246.219433 106.503929,240.997433"/></svg>',
    '<svg xmlns="http://www.w3.org/2000/svg" width="857" height="1226" viewBox="0 0 857 1226"><path fill="#FF52D2" fill-rule="evenodd" d="M439.618858,285.21332 C388.393858,296.20932 388.862858,150.24332 339.901858,169.79632 C264.388858,199.95432 409.159858,371.52132 337.318858,410.27532 C226.260858,470.15932 129.659858,112.80932 39.1068582,201.36532 C-56.7751418,295.11232 327.681858,412.23032 252.240858,522.85132 C203.774858,593.91232 47.6878582,401.91532 5.82085817,476.84432 C-38.6791418,556.49932 186.446858,574.63332 190.445858,663.91032 C193.231858,726.69032 48.0258582,760.78432 73.3278582,817.34732 C105.930858,890.21932 266.517858,763.12332 316.127858,825.16532 C380.376858,905.50632 219.088858,1042.69432 259.778858,1137.78632 C280.346858,1185.86432 341.941858,1242.26432 391.712858,1221.46632 C513.133858,1170.72332 364.788858,875.56832 491.169858,841.22432 C576.722858,817.98932 585.649858,1072.95732 662.065858,1033.87132 C764.958858,981.25632 491.824858,761.78432 586.495858,695.50732 C638.200858,659.31632 693.420858,832.53432 745.944858,797.55232 C790.290858,768.00832 700.673858,690.37932 718.304858,640.09032 C738.375858,582.83932 874.500858,577.08032 854.800858,519.70132 C830.062858,447.65032 670.642858,567.91432 626.680858,505.72832 C591.474858,455.91232 721.808858,371.30932 677.098858,329.80732 C642.095858,297.31432 581.839858,406.73632 542.688858,379.39332 C439.236858,307.12732 667.747858,22.9673199 543.470858,0.801319932 C444.091858,-16.8946801 537.641858,264.15232 439.529858,285.20632"/></svg>'
  ]

  var i = 0

  p.setup = function () {
    $canvas = p.createCanvas(p.windowWidth, p.windowHeight)
    $title = p.createElement('h1', 'Art<br/>projects')
    $title.addClass('title')
    p.select('#art').mouseClicked(setKlakson)
  }

  function getKlakson () {
    i = (i === klakson.length - 1) ? 0 : (i + 1)
    return klakson[i]
  }

  function setKlakson() {
    var $wrap = p.createDiv(getKlakson())
    $wrap.addClass('art-item')
    $wrap.position(p.mouseX - ($wrap.elt.offsetWidth / 2), p.mouseY - ($wrap.elt.offsetHeight / 2))
  }
}