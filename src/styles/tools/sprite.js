// TODO rewrite it into components
const sprite = {
  heartFull: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23ff5a5f%22%3E%3Cpath%20d%3D%22M16%2029.7q-0.5%200-0.8-0.3l-11.1-10.7q-0.2-0.1-0.5-0.5t-1-1.2-1.2-1.7-1-2.2-0.4-2.5q0-3.9%202.3-6.1t6.3-2.2q1.1%200%202.3%200.4t2.1%201%201.7%201.2%201.4%201.2q0.6-0.6%201.4-1.2t1.7-1.2%202.1-1%202.3-0.4q4%200%206.3%202.2t2.3%206.1q0%203.9-4.1%208l-11.1%2010.7q-0.3%200.3-0.8%200.3z%22%2F%3E%3C%2Fsvg%3E%0A',
  heart: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%2232%22%20height%3D%2232%22%20viewBox%3D%220%200%2032%2032%22%20fill%3D%22%23ff5a5f%22%3E%3Cpath%20d%3D%22M29.7%2010.6q0-1.4-0.4-2.6t-1-1.8-1.5-1.1-1.7-0.6-1.7-0.1-2%200.5-2%201.1-1.5%201.3-1.1%201.1q-0.3%200.4-0.9%200.4t-0.9-0.4q-0.4-0.5-1.1-1.1t-1.5-1.3-2-1.1-2-0.5-1.7%200.1-1.7%200.6-1.5%201.1-1%201.8-0.4%202.6q0%203%203.3%206.3l10.4%2010%2010.4-10q3.4-3.4%203.4-6.4zM32%2010.6q0%203.9-4.1%208l-11.1%2010.7q-0.3%200.3-0.8%200.3t-0.8-0.3l-11.1-10.7q-0.2-0.1-0.5-0.5t-1-1.2-1.2-1.7-1-2.2-0.4-2.5q0-3.9%202.3-6.1t6.3-2.2q1.1%200%202.3%200.4t2.1%201%201.7%201.2%201.4%201.2q0.6-0.6%201.4-1.2t1.7-1.2%202.1-1%202.3-0.4q4%200%206.3%202.2t2.3%206.1z%22%2F%3E%3C%2Fsvg%3E%0A',
  instagram: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22%23b3b3b3%22%3E%0A%20%20%3Cpath%20d%3D%22M256%2049.47c67.266%200%2075.233.258%20101.8%201.47%2024.562%201.12%2037.9%205.224%2046.778%208.674a78.052%2078.052%200%200%201%2028.966%2018.845%2078.052%2078.052%200%200%201%2018.845%2028.964c3.45%208.877%207.552%2022.216%208.672%2046.778%201.212%2026.565%201.47%2034.532%201.47%20101.8s-.258%2075.233-1.47%20101.8c-1.12%2024.562-5.225%2037.9-8.674%2046.778a83.427%2083.427%200%200%201-47.812%2047.812c-8.877%203.45-22.216%207.554-46.778%208.674-26.56%201.212-34.527%201.47-101.8%201.47s-75.237-.258-101.8-1.47c-24.562-1.12-37.9-5.225-46.778-8.674a78.05%2078.05%200%200%201-28.966-18.845A78.053%2078.053%200%200%201%2059.61%20404.58c-3.45-8.876-7.553-22.215-8.673-46.777-1.212-26.564-1.47-34.532-1.47-101.8s.258-75.233%201.47-101.8c1.12-24.562%205.224-37.9%208.674-46.778a78.052%2078.052%200%200%201%2018.85-28.967%2078.053%2078.053%200%200%201%2028.966-18.845c8.877-3.45%2022.216-7.554%2046.778-8.674%2026.565-1.214%2034.532-1.47%20101.8-1.47m0-45.39c-68.418%200-77%20.29-103.866%201.514-26.815%201.224-45.127%205.482-61.15%2011.71a123.488%20123.488%200%200%200-44.62%2029.057A123.488%20123.488%200%200%200%2017.3%2090.983c-6.223%2016.025-10.48%2034.337-11.7%2061.152C4.37%20179%204.08%20187.582%204.08%20256s.29%2077%201.52%20103.866c1.224%2026.815%205.482%2045.127%2011.71%2061.15a123.49%20123.49%200%200%200%2029.057%2044.62%20123.486%20123.486%200%200%200%2044.62%2029.058c16.025%206.228%2034.337%2010.486%2061.15%2011.71%2026.87%201.226%2035.45%201.516%20103.867%201.516s77-.29%20103.866-1.516c26.815-1.224%2045.127-5.482%2061.15-11.71a128.817%20128.817%200%200%200%2073.678-73.677c6.228-16.025%2010.486-34.337%2011.71-61.15%201.226-26.87%201.516-35.45%201.516-103.867s-.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.15a123.486%20123.486%200%200%200-29.057-44.62A123.487%20123.487%200%200%200%20421.02%2017.3c-16.025-6.223-34.337-10.48-61.152-11.7C333%204.37%20324.418%204.08%20256%204.08z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M256%20126.635A129.365%20129.365%200%201%200%20385.365%20256%20129.365%20129.365%200%200%200%20256%20126.635zm0%20213.338A83.973%2083.973%200%201%201%20339.974%20256%2083.974%2083.974%200%200%201%20256%20339.973z%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22390.476%22%20cy%3D%22121.524%22%20r%3D%2230.23%22%2F%3E%0A%3C%2Fsvg%3E%0A',
  instagramWhite: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22%23ffffff%22%3E%0A%20%20%3Cpath%20d%3D%22M256%2049.47c67.266%200%2075.233.258%20101.8%201.47%2024.562%201.12%2037.9%205.224%2046.778%208.674a78.052%2078.052%200%200%201%2028.966%2018.845%2078.052%2078.052%200%200%201%2018.845%2028.964c3.45%208.877%207.552%2022.216%208.672%2046.778%201.212%2026.565%201.47%2034.532%201.47%20101.8s-.258%2075.233-1.47%20101.8c-1.12%2024.562-5.225%2037.9-8.674%2046.778a83.427%2083.427%200%200%201-47.812%2047.812c-8.877%203.45-22.216%207.554-46.778%208.674-26.56%201.212-34.527%201.47-101.8%201.47s-75.237-.258-101.8-1.47c-24.562-1.12-37.9-5.225-46.778-8.674a78.05%2078.05%200%200%201-28.966-18.845A78.053%2078.053%200%200%201%2059.61%20404.58c-3.45-8.876-7.553-22.215-8.673-46.777-1.212-26.564-1.47-34.532-1.47-101.8s.258-75.233%201.47-101.8c1.12-24.562%205.224-37.9%208.674-46.778a78.052%2078.052%200%200%201%2018.85-28.967%2078.053%2078.053%200%200%201%2028.966-18.845c8.877-3.45%2022.216-7.554%2046.778-8.674%2026.565-1.214%2034.532-1.47%20101.8-1.47m0-45.39c-68.418%200-77%20.29-103.866%201.514-26.815%201.224-45.127%205.482-61.15%2011.71a123.488%20123.488%200%200%200-44.62%2029.057A123.488%20123.488%200%200%200%2017.3%2090.983c-6.223%2016.025-10.48%2034.337-11.7%2061.152C4.37%20179%204.08%20187.582%204.08%20256s.29%2077%201.52%20103.866c1.224%2026.815%205.482%2045.127%2011.71%2061.15a123.49%20123.49%200%200%200%2029.057%2044.62%20123.486%20123.486%200%200%200%2044.62%2029.058c16.025%206.228%2034.337%2010.486%2061.15%2011.71%2026.87%201.226%2035.45%201.516%20103.867%201.516s77-.29%20103.866-1.516c26.815-1.224%2045.127-5.482%2061.15-11.71a128.817%20128.817%200%200%200%2073.678-73.677c6.228-16.025%2010.486-34.337%2011.71-61.15%201.226-26.87%201.516-35.45%201.516-103.867s-.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.15a123.486%20123.486%200%200%200-29.057-44.62A123.487%20123.487%200%200%200%20421.02%2017.3c-16.025-6.223-34.337-10.48-61.152-11.7C333%204.37%20324.418%204.08%20256%204.08z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M256%20126.635A129.365%20129.365%200%201%200%20385.365%20256%20129.365%20129.365%200%200%200%20256%20126.635zm0%20213.338A83.973%2083.973%200%201%201%20339.974%20256%2083.974%2083.974%200%200%201%20256%20339.973z%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22390.476%22%20cy%3D%22121.524%22%20r%3D%2230.23%22%2F%3E%0A%3C%2Fsvg%3E%0A',
  instagramRed: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20512%20512%22%20fill%3D%22%23ff5a5f%22%3E%0A%20%20%3Cpath%20d%3D%22M256%2049.47c67.266%200%2075.233.258%20101.8%201.47%2024.562%201.12%2037.9%205.224%2046.778%208.674a78.052%2078.052%200%200%201%2028.966%2018.845%2078.052%2078.052%200%200%201%2018.845%2028.964c3.45%208.877%207.552%2022.216%208.672%2046.778%201.212%2026.565%201.47%2034.532%201.47%20101.8s-.258%2075.233-1.47%20101.8c-1.12%2024.562-5.225%2037.9-8.674%2046.778a83.427%2083.427%200%200%201-47.812%2047.812c-8.877%203.45-22.216%207.554-46.778%208.674-26.56%201.212-34.527%201.47-101.8%201.47s-75.237-.258-101.8-1.47c-24.562-1.12-37.9-5.225-46.778-8.674a78.05%2078.05%200%200%201-28.966-18.845A78.053%2078.053%200%200%201%2059.61%20404.58c-3.45-8.876-7.553-22.215-8.673-46.777-1.212-26.564-1.47-34.532-1.47-101.8s.258-75.233%201.47-101.8c1.12-24.562%205.224-37.9%208.674-46.778a78.052%2078.052%200%200%201%2018.85-28.967%2078.053%2078.053%200%200%201%2028.966-18.845c8.877-3.45%2022.216-7.554%2046.778-8.674%2026.565-1.214%2034.532-1.47%20101.8-1.47m0-45.39c-68.418%200-77%20.29-103.866%201.514-26.815%201.224-45.127%205.482-61.15%2011.71a123.488%20123.488%200%200%200-44.62%2029.057A123.488%20123.488%200%200%200%2017.3%2090.983c-6.223%2016.025-10.48%2034.337-11.7%2061.152C4.37%20179%204.08%20187.582%204.08%20256s.29%2077%201.52%20103.866c1.224%2026.815%205.482%2045.127%2011.71%2061.15a123.49%20123.49%200%200%200%2029.057%2044.62%20123.486%20123.486%200%200%200%2044.62%2029.058c16.025%206.228%2034.337%2010.486%2061.15%2011.71%2026.87%201.226%2035.45%201.516%20103.867%201.516s77-.29%20103.866-1.516c26.815-1.224%2045.127-5.482%2061.15-11.71a128.817%20128.817%200%200%200%2073.678-73.677c6.228-16.025%2010.486-34.337%2011.71-61.15%201.226-26.87%201.516-35.45%201.516-103.867s-.29-77-1.516-103.866c-1.224-26.815-5.482-45.127-11.71-61.15a123.486%20123.486%200%200%200-29.057-44.62A123.487%20123.487%200%200%200%20421.02%2017.3c-16.025-6.223-34.337-10.48-61.152-11.7C333%204.37%20324.418%204.08%20256%204.08z%22%2F%3E%0A%20%20%3Cpath%20d%3D%22M256%20126.635A129.365%20129.365%200%201%200%20385.365%20256%20129.365%20129.365%200%200%200%20256%20126.635zm0%20213.338A83.973%2083.973%200%201%201%20339.974%20256%2083.974%2083.974%200%200%201%20256%20339.973z%22%2F%3E%0A%20%20%3Ccircle%20cx%3D%22390.476%22%20cy%3D%22121.524%22%20r%3D%2230.23%22%2F%3E%0A%3C%2Fsvg%3E%0A',
  github: 'data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20fill%3D%22%23b3b3b3%22%20width%3D%221024%22%20height%3D%221024%22%3E%0A%20%20%3Cpath%20d%3D%22M512%200C229.25%200%200%20229.25%200%20512c0%20226.25%20146.688%20418.125%20350.156%20485.812%2025.594%204.688%2034.938-11.125%2034.938-24.625%200-12.188-.47-52.562-.72-95.312C242%20908.812%20211.907%20817.5%20211.907%20817.5c-23.312-59.125-56.844-74.875-56.844-74.875-46.53-31.75%203.53-31.125%203.53-31.125%2051.406%203.562%2078.47%2052.75%2078.47%2052.75%2045.688%2078.25%20119.875%2055.625%20149%2042.5%204.654-33%2017.904-55.625%2032.5-68.375-113.656-12.937-233.218-56.875-233.218-253.063%200-55.938%2019.97-101.562%2052.656-137.406-5.22-13-22.843-65.094%205.063-135.562%200%200%2042.938-13.75%20140.812%2052.5%2040.812-11.406%2084.594-17.03%20128.125-17.22%2043.5.19%2087.31%205.876%20128.187%2017.282%2097.688-66.312%20140.688-52.5%20140.688-52.5%2028%2070.53%2010.375%20122.562%205.125%20135.5%2032.812%2035.844%2052.625%2081.47%2052.625%20137.406%200%20196.688-119.75%20240-233.812%20252.688%2018.438%2015.875%2034.75%2047%2034.75%2094.75%200%2068.438-.688%20123.625-.688%20140.5%200%2013.625%209.312%2029.562%2035.25%2024.562C877.438%20930%201024%20738.125%201024%20512%201024%20229.25%20794.75%200%20512%200z%22%2F%3E%0A%3C%2Fsvg%3E%0A',

};

export default function getIcon(iconName) {
  return sprite[iconName];
}
