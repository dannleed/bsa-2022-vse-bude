import React from 'react';
import Svg, { SvgProps, Path } from 'react-native-svg';
import { useCustomTheme } from '~/hooks/hooks';

const Logo = (props: SvgProps) => {
  const { colors } = useCustomTheme();

  return (
    <Svg width={180} height={44} viewBox="0 0 1198 298" fill="none" {...props}>
      <Path
        d="M411.456 232.629L363.364 92.9743H384.762L418.871 193.06L421.625 218.029H425.862L432.853 230.936C429.605 231.5 426.074 231.923 422.26 232.206C418.588 232.629 414.987 232.77 411.456 232.629ZM379.889 106.305L350.652 102.919L350.864 92.9743H380.524L379.889 106.305ZM432.853 230.936L420.777 223.53L466.115 92.9743H482.852L432.853 230.936ZM387.728 107.151L383.279 92.9743H407.43L408.702 99.7454C405.594 101.156 402.205 102.496 398.532 103.766C394.86 104.894 391.259 106.023 387.728 107.151ZM471.835 106.305L442.599 102.919L442.811 92.9743H472.471L471.835 106.305ZM473.742 107.151L469.293 92.9743H493.445L494.716 99.7454C491.609 101.156 488.219 102.496 484.547 103.766C480.875 104.894 477.273 106.023 473.742 107.151Z"
        fill={colors.titlePrimary}
      />
      <Path
        d="M516.342 234.745C510.693 234.745 504.761 233.828 498.546 231.994C492.332 230.301 485.764 227.55 478.843 223.742L486.682 205.121C492.049 208.648 498.405 212.033 505.749 215.278C513.094 218.381 520.721 220.497 528.63 221.626C530.466 220.074 531.878 218.311 532.867 216.336C533.856 214.22 534.35 211.892 534.35 209.353C534.35 205.262 533.079 201.877 530.537 199.196C527.994 196.516 524.746 194.189 520.791 192.214C516.837 190.239 512.599 188.334 508.08 186.5C503.56 184.667 499.323 182.551 495.368 180.153C491.413 177.754 488.165 174.792 485.623 171.265C483.08 167.598 481.809 163.013 481.809 157.512C481.809 150.882 483.716 145.309 487.529 140.795C491.343 136.281 496.286 132.896 502.36 130.639C508.574 128.382 515.142 127.253 522.062 127.253C527.006 127.253 531.737 127.817 536.257 128.946C540.918 130.074 545.226 131.626 549.18 133.601L542.613 150.529C537.811 146.438 531.949 143.546 525.028 141.853C518.249 140.161 512.034 139.596 506.385 140.161C503.701 141.853 501.865 143.828 500.877 146.085C500.029 148.201 499.605 150.247 499.605 152.222C499.605 156.03 500.876 159.204 503.419 161.744C505.961 164.142 509.21 166.328 513.164 168.303C517.26 170.137 521.568 172.041 526.088 174.016C530.749 175.85 535.056 178.037 539.011 180.576C543.107 182.974 546.426 186.077 548.968 189.886C551.511 193.695 552.782 198.42 552.782 204.063C552.782 213.091 549.392 220.497 542.613 226.281C535.833 231.923 527.076 234.745 516.342 234.745ZM534.138 160.897L531.808 134.871L549.18 133.601C549.463 138.115 549.321 142.7 548.757 147.355C548.192 152.01 547.132 156.524 545.579 160.897H534.138Z"
        fill={colors.titlePrimary}
      />
      <Path
        d="M618.446 233.687C609.831 233.687 602.274 232.276 595.777 229.455C589.281 226.634 583.843 222.825 579.464 218.029C575.086 213.232 571.837 207.801 569.719 201.736C567.6 195.67 566.541 189.322 566.541 182.692C566.541 175.638 567.671 168.797 569.931 162.167C572.332 155.537 575.651 149.612 579.888 144.393C584.125 139.173 589.21 135.012 595.142 131.908C601.215 128.805 607.853 127.253 615.057 127.253C620.565 127.253 625.65 128.17 630.31 130.004C634.971 131.838 638.997 134.447 642.386 137.833C645.917 141.078 648.601 144.957 650.437 149.471C652.273 153.985 653.12 158.922 652.979 164.283L634.971 171.689C635.677 165.482 634.759 159.91 632.217 154.972C629.675 150.035 625.932 146.226 620.989 143.546C616.187 140.866 610.678 139.737 604.464 140.161C600.085 142.418 596.554 145.662 593.871 149.894C591.328 154.126 589.422 158.711 588.151 163.648C587.021 168.585 586.456 173.452 586.456 178.248C586.456 186.571 588.009 193.695 591.117 199.62C594.224 205.403 598.39 209.847 603.616 212.95C608.842 216.054 614.703 217.605 621.201 217.605C625.438 217.605 629.816 216.971 634.336 215.701C638.855 214.431 643.516 212.739 648.318 210.623L651.496 219.721L618.446 233.687ZM640.903 176.132L584.761 175.074V164.071L650.649 161.109L652.979 164.283L640.903 176.132Z"
        fill={colors.titlePrimary}
      />
      <Path
        d="M670.6 177.825L664.244 167.245L666.151 163.013H719.963L726.319 173.593L724.412 177.825H670.6Z"
        fill={colors.titlePrimary}
      />
      <Path
        d="M782.787 234.533C777.138 234.533 771.276 233.757 765.203 232.206C759.271 230.654 753.056 228.397 746.559 225.434L759.695 206.602C760.825 208.577 763.084 210.834 766.474 213.373C770.005 215.913 774.595 217.958 780.245 219.51C785.894 220.92 792.321 221.061 799.524 219.933C805.315 216.406 809.764 211.116 812.871 204.063C815.978 196.869 817.532 189.463 817.532 181.845C817.532 175.497 816.402 169.573 814.142 164.071C812.024 158.429 808.987 153.914 805.032 150.529C801.219 147.002 796.699 145.239 791.473 145.239C786.389 145.239 781.092 146.72 775.584 149.682C770.217 152.645 764.85 156.03 759.483 159.839L757.576 149.471L790.414 128.734C797.476 127.183 803.832 127.465 809.481 129.581C815.272 131.697 820.216 135.153 824.311 139.949C828.549 144.604 831.797 150.176 834.057 156.665C836.317 163.154 837.447 170.137 837.447 177.613C837.447 185.795 836.105 193.342 833.421 200.254C830.738 207.167 826.924 213.232 821.981 218.452C817.179 223.53 811.459 227.48 804.821 230.301C798.182 233.122 790.838 234.533 782.787 234.533ZM746.559 225.434V82.8176L757.152 74.9885L765.415 82.606V220.568L746.559 225.434ZM730.882 91.4931L728.34 81.548C732.577 79.5731 737.308 78.0214 742.534 76.8929C747.901 75.7644 752.774 75.1296 757.152 74.9885L759.906 80.2785L750.585 90.012L730.882 91.4931Z"
        fill={colors.titlePrimary}
      />
      <Path
        d="M883.321 233.687C880.637 232.981 878.095 231.923 875.694 230.513C873.293 228.961 871.104 227.268 869.126 225.434C867.29 223.46 865.807 221.626 864.677 219.933C863.83 218.522 863.123 216.829 862.559 214.855C861.994 212.88 861.57 210.34 861.287 207.237C861.146 204.134 861.076 200.184 861.076 195.388V135.929L871.457 128.1L879.931 135.505V196.657C879.931 203.993 881.061 209.283 883.321 212.527C885.581 215.771 889.111 217.394 893.914 217.394C898.998 217.394 904.506 216.054 910.439 213.373C916.512 210.552 922.232 207.378 927.599 203.851L931.413 212.95C926.187 217.041 920.466 220.638 914.252 223.742C908.037 226.845 902.105 229.243 896.456 230.936C890.948 232.77 886.569 233.687 883.321 233.687ZM845.186 144.604L842.644 134.659C846.881 132.684 851.613 131.132 856.838 130.004C862.205 128.875 867.078 128.241 871.457 128.1L874.211 133.389L864.889 143.123L845.186 144.604ZM939.463 233.687C937.909 233.546 936.003 232.558 933.743 230.724C931.483 229.032 929.365 226.845 927.387 224.165C925.551 221.485 924.28 218.804 923.574 216.124V213.162V135.929L933.955 128.1L942.429 135.505V212.315C942.429 213.867 942.924 214.996 943.912 215.701C945.042 216.265 946.384 216.547 947.938 216.547C949.491 216.547 951.115 216.336 952.81 215.913C954.646 215.489 956.271 215.066 957.683 214.643L960.861 223.953L939.463 233.687ZM907.684 144.604L905.142 134.659C909.379 132.684 914.111 131.132 919.337 130.004C924.704 128.875 929.576 128.241 933.955 128.1L936.709 133.389L927.387 143.123L907.684 144.604Z"
        fill={colors.titlePrimary}
      />
      <Path
        d="M1015.81 233.687C1006.35 233.828 997.942 231.571 990.597 226.916C983.253 222.119 977.533 215.701 973.437 207.66C969.341 199.62 967.293 190.803 967.293 181.211C967.293 173.029 968.705 165.623 971.53 158.993C974.496 152.222 978.451 146.438 983.394 141.642C988.479 136.846 994.199 133.178 1000.55 130.639C1007.05 128.1 1013.76 126.83 1020.68 126.83C1028.87 126.83 1035.93 128.382 1041.87 131.485C1047.94 134.589 1052.11 138.186 1054.37 142.277L1045.26 157.723C1043 154.056 1039.61 150.811 1035.09 147.99C1030.71 145.027 1025.62 142.911 1019.83 141.642C1014.18 140.231 1008.32 140.231 1002.25 141.642C997.447 146.015 993.704 151.516 991.021 158.146C988.479 164.776 987.207 171.689 987.207 178.883C987.207 185.936 988.337 192.284 990.597 197.927C992.998 203.569 996.388 208.083 1000.77 211.469C1005.14 214.714 1010.23 216.336 1016.02 216.336C1020.54 216.336 1025.55 215.137 1031.06 212.739C1036.71 210.34 1042.78 206.532 1049.28 201.312L1048.65 211.681L1015.81 233.687ZM1054.15 233.687C1052.6 233.546 1050.69 232.558 1048.43 230.724C1046.17 229.032 1044.06 226.845 1042.08 224.165C1040.24 221.485 1038.97 218.804 1038.27 216.124V213.162V82.8176L1048.65 74.9885L1057.12 82.606V212.315C1057.12 213.867 1057.61 214.996 1058.6 215.701C1059.73 216.265 1061.08 216.547 1062.63 216.547C1064.18 216.547 1065.81 216.336 1067.5 215.913C1069.34 215.489 1070.96 215.066 1072.37 214.643L1075.55 223.953L1054.15 233.687ZM1022.38 91.4931L1019.83 81.548C1024.07 79.5731 1028.8 78.0214 1034.03 76.8929C1039.4 75.7644 1044.27 75.1296 1048.65 74.9885L1051.4 80.2785L1042.08 90.012L1022.38 91.4931Z"
        fill={colors.titlePrimary}
      />
      <Path
        d="M1130.71 233.687C1122.1 233.687 1114.54 232.276 1108.04 229.455C1101.55 226.634 1096.11 222.825 1091.73 218.029C1087.35 213.232 1084.1 207.801 1081.99 201.736C1079.87 195.67 1078.81 189.322 1078.81 182.692C1078.81 175.638 1079.94 168.797 1082.2 162.167C1084.6 155.537 1087.92 149.612 1092.16 144.393C1096.39 139.173 1101.48 135.012 1107.41 131.908C1113.48 128.805 1120.12 127.253 1127.32 127.253C1132.83 127.253 1137.92 128.17 1142.58 130.004C1147.24 131.838 1151.26 134.447 1154.65 137.833C1158.18 141.078 1160.87 144.957 1162.7 149.471C1164.54 153.985 1165.39 158.922 1165.25 164.283L1147.24 171.689C1147.94 165.482 1147.03 159.91 1144.48 154.972C1141.94 150.035 1138.2 146.226 1133.26 143.546C1128.45 140.866 1122.95 139.737 1116.73 140.161C1112.35 142.418 1108.82 145.662 1106.14 149.894C1103.6 154.126 1101.69 158.711 1100.42 163.648C1099.29 168.585 1098.72 173.452 1098.72 178.248C1098.72 186.571 1100.28 193.695 1103.38 199.62C1106.49 205.403 1110.66 209.847 1115.88 212.95C1121.11 216.054 1126.97 217.605 1133.47 217.605C1137.7 217.605 1142.08 216.971 1146.6 215.701C1151.12 214.431 1155.78 212.739 1160.59 210.623L1163.76 219.721L1130.71 233.687ZM1153.17 176.132L1097.03 175.074V164.071L1162.92 161.109L1165.25 164.283L1153.17 176.132Z"
        fill={colors.titlePrimary}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M243.766 113.729C218.972 115.261 187.52 128.268 160.059 148.526C103.162 190.499 57.165 195.23 42.4758 194.283C35.0109 193.802 24.8647 191.18 16.3508 184.449C7.64053 177.563 1.00017 166.642 0.524273 150.478C0.0425088 134.115 6.78962 122.762 15.6383 115.38C24.2862 108.167 34.7563 104.868 42.072 103.825C42.3179 103.79 42.5659 103.773 42.8143 103.773H110.426C113.33 103.773 115.683 106.124 115.683 109.025C115.683 111.925 113.33 114.276 110.426 114.276H43.2C37.2934 115.178 29.0172 117.904 22.3775 123.443C15.8039 128.926 10.6546 137.279 11.0341 150.17C11.4195 163.26 16.6214 171.268 22.8757 176.212C29.3263 181.312 37.2671 183.422 43.1527 183.801C55.1647 184.576 98.7421 180.702 153.813 140.076C182.336 119.035 215.695 104.939 243.117 103.245C256.849 102.396 269.62 104.633 279.479 111.271C289.528 118.037 295.853 128.907 297.388 143.762C298.871 158.122 296.553 168.972 291.458 176.978C286.351 185.002 278.871 189.516 271.303 191.99C259.085 195.984 245.163 194.895 239.386 194.443C238.283 194.357 237.476 194.294 237.036 194.294C228.896 194.294 199.993 192.556 186.742 191.702C183.845 191.515 181.648 189.017 181.835 186.123C182.021 183.228 184.522 181.033 187.419 181.22C200.869 182.087 229.327 183.79 237.036 183.79C238.14 183.79 239.619 183.894 241.383 184.018C247.884 184.475 258.257 185.203 268.033 182.007C273.954 180.072 279.119 176.789 282.585 171.342C286.063 165.877 288.245 157.583 286.929 144.84C285.664 132.593 280.685 124.749 273.602 119.98C266.329 115.083 256.141 112.964 243.766 113.729Z"
        fill={colors.logoYellow}
      />
      <Path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M184.481 243.496C182.948 218.728 169.927 187.307 149.648 159.874C107.632 103.036 102.896 57.0862 103.844 42.4121C104.325 34.9548 106.95 24.819 113.688 16.3138C120.581 7.61251 131.513 0.978968 147.694 0.50356C164.212 0.0182165 176.013 7.4995 183.541 16.5365C190.868 25.3312 194.447 35.9509 194.447 42.7502L194.447 110.293C194.447 113.193 192.093 115.545 189.19 115.545C186.287 115.545 183.933 113.193 183.933 110.293L183.933 42.7502C183.933 38.7947 181.483 30.4856 175.46 23.2554C169.638 16.2675 160.768 10.6276 148.003 11.0026C134.899 11.3876 126.883 16.5842 121.933 22.832C116.828 29.2761 114.716 37.2086 114.336 43.0883C113.561 55.0879 117.439 98.6206 158.106 153.635C179.169 182.128 193.279 215.453 194.975 242.847C195.825 256.566 193.586 269.323 186.942 279.172C180.169 289.21 169.287 295.53 154.417 297.062C140.085 298.539 129.25 296.366 121.241 291.463C113.189 286.534 108.641 279.245 106.148 271.774C103.681 264.378 103.158 256.627 103.201 250.302C103.222 247.115 103.388 244.222 103.543 241.864C103.577 241.347 103.61 240.868 103.64 240.426C103.754 238.736 103.833 237.572 103.833 236.772C103.833 228.641 105.573 199.767 106.428 186.531C106.615 183.636 109.115 181.441 112.013 181.628C114.91 181.815 117.107 184.312 116.92 187.207C116.053 200.643 114.347 229.072 114.347 236.772C114.347 237.964 114.234 239.618 114.116 241.354C114.089 241.751 114.061 242.152 114.035 242.553C113.884 244.844 113.734 247.496 113.715 250.372C113.676 256.173 114.177 262.619 116.123 268.452C118.044 274.21 121.302 279.181 126.735 282.507C132.21 285.859 140.539 287.933 153.338 286.614C165.598 285.35 173.449 280.377 178.223 273.301C183.125 266.036 185.247 255.858 184.481 243.496Z"
        fill={colors.logoBlue}
      />
    </Svg>
  );
};

export { Logo };
