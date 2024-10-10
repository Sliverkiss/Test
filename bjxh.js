/*************************************
[rewrite_local]
^https:\/\/api-xh\.hsyuntai\.com\/hs-xh-single-web\/r\/173\/20002\/104 url script-response-body https://raw.githubusercontent.com/Sliverkiss/Test/refs/heads/main/bjxh.js

[mitm]
hostname = api-xh.hsyuntai.com
*************************************/
$done({ body: JSON.stringify($response.body.replace(/"resNo":\s*\d+/g, '"resNo": 1')) });
