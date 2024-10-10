/*
#!name=北京协和医院解锁挂号
#!desc=将[已挂满]修改为[预约挂号]
#!icon=https://raw.githubusercontent.com/sliverkiss/QuantumultX/main/icon/bjxh.png
#!date = 2024-10-10 08:41:41

[Script]
http-response ^https:\/\/api-xh\.hsyuntai\.com\/hs-xh-single-web\/r\/173\/20002\/104 script-path=https://raw.githubusercontent.com/Sliverkiss/Test/refs/heads/main/bjxh.js, requires-body=true, timeout=60, tag=bjxh

[MITM]
hostname = api-xh.hsyuntai.com
*/
var bjxh = JSON.parse($response.body);

bjxh.data.forEach(e => e.resNo = 1);

$done({ body: JSON.stringify(bjxh)});
