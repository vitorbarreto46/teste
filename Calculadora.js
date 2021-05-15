var axios = require('axios');
var data = JSON.stringify({
  "from": {
    "postal_code": "13321371"
  },
  "to": {
    "postal_code": "08430115"
  },
  "products": [
    {
      "id": "x",
      "width": 10,
      "height": 4,
      "length": 10,
      "weight": 0.3,
      "insurance_value": 10.1,
      "quantity": 1
    },
    {
      "id": "y",
      "width": 12,
      "height": 5,
      "length": 11,
      "weight": 0.3,
      "insurance_value": 55.05,
      "quantity": 2
    },
    {
      "id": "z",
      "width": 12,
      "height": 5,
      "length": 12,
      "weight": 1,
      "insurance_value": 30,
      "quantity": 1
    }
  ]
});

var config = {
  method: 'post',
  url: 'https://sandbox.melhorenvio.com.br/api/v2/me/shipment/calculate',
  headers: { 
    'Accept': 'application/json', 
    'Content-Type': 'application/json', 
    'Authorization': 'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsImp0aSI6IjhlNTU3MDk3YjY0ZTEwYjZlZjViYjQzYTYwODMzZDVkNjg1ZTg4NTZlYmVmZTAzNzVhZGIxMTQ0MTIxODY4OWEzOGVhODVmZWE0ZGMxOTU4In0.eyJhdWQiOiIxNjYwIiwianRpIjoiOGU1NTcwOTdiNjRlMTBiNmVmNWJiNDNhNjA4MzNkNWQ2ODVlODg1NmViZWZlMDM3NWFkYjExNDQxMjE4Njg5YTM4ZWE4NWZlYTRkYzE5NTgiLCJpYXQiOjE2MjExMTA5MDIsIm5iZiI6MTYyMTExMDkwMiwiZXhwIjoxNjIzNzAyOTAyLCJzdWIiOiIyYzViNGY1My03ODFlLTQ1OGUtYTQwNy01YzYzODAyNWQ5NjQiLCJzY29wZXMiOlsic2hpcHBpbmctY2FsY3VsYXRlIl19.r7pcZZ18d3Wk0CSo5fSsQ46o4CP12ChzNRuzcNtEJ0HHAiEqx8-fZMYFWNp7t76bc5V_pCT-gBDfgyCtJbtqkjMVMeo7ytD0vg5bXoCPPyy5UKqHYNLXsbhB3oUH-MWbrcFV_xF3ocVwsWLarCU0zCuToozji0oWTIPw1od4OjtjSeEe08Ap-TwV4zGqf2U0agfP1vbt5hoGCn49PTERk3K6reEFSzmw-SaVTVgzsOHFGnpu4D69wlg4jzoczT07RSlYuS8F7Gpf7gJ6t7uzndmIU7uDy47lpDnkBWH4Lo_V3hQBi16KJP0vPCrpF-prCljBsXqik9GBoxidi0WQUQsWT_p5ZlE1WbzA3fGaiduIqRBt6mL4Vv_MGJRy_g8SUEdga758U21uPIwgxesHtkx4ry23-SuoZT9lU88TcwizJJBIGKP4DKkFyfW0s6BmPX0Jj9u-Zzysf2XST0iUZHRfGobe9IJt15-jbKf8nY42lV7ChRwweioCXEE55HSmzz7ZBAhfUmzFCacsdalFPxpmdDOKAgllBc6EbhdqNuIhz5HdBP6bDuwU097SATsIew1tetQ_s2LAt6jrTKMo4An-V6guPxBDDSDPTcVFroO3U_1LQ9en6Oi0albvS8nRp7iR9GSs4DdBqg06HEgwGtxkzktkrd-HsjWBLsI0w5g', 
    'User-Agent': 'Aplicação (email para contato técnico)'
  },
  data : data
};

axios(config)
.then(function (response) {
  console.log(JSON.stringify(response.data));
})
.catch(function (error) {
  console.log(error);
});