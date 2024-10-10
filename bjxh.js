/*************************************

[rewrite_local]
^https:\/\/api-xh\.hsyuntai\.com\/hs-xh-single-web\/r\/173\/20002\/104 url script-response-body https://raw.githubusercontent.com/Sliverkiss/Test/refs/heads/main/bjxh.js

[mitm]
hostname = api-xh.hsyuntai.com

*************************************/

var chxm1023 = JSON.parse($response.body);

chxm1023.data.forEach(e => e.resNo = 0);

$done({ body: JSON.stringify(chxm1023) });
