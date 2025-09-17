var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.result.isVip = 1;
obj.result.isLifeVip = null;
obj.result.vipStart = "2025-09-17";
obj.result.vipEnd = "2099-12-31";

body = JSON。stringify(obj);
$done({ body });
