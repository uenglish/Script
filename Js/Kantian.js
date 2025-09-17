var body = $response.body;
var url = $request.url;
var obj = JSON.parse(body);

obj.msg.isVip = 1;
obj.msg.isLifeVip = null;
obj.msg.vipStart = "2025-09-17";
obj.msg.vipEnd = "2099-12-31";

body = JSON。stringify(obj);
$done({ body });
