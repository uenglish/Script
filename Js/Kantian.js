var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.data.isVip = 1;
obj.data.isLifeVip = null;
obj.data.vipStart = "2025-09-17";
obj.data.vipEnd = "2099-12-31";

body = JSON。stringify(obj);
$done({ body });
