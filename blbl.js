/***********************************

> 应用名称：Bilibili大会员
> 脚本作者：Dawn
> 解锁说明：解锁VIP番剧和影视
> 更新时间：2023-08-11
> 问题反馈：群里@我
> 特别提醒：此版本由伟人出去玩了，群友@三年义务教育贡献的账号。
> 特别说明：
          本脚本仅内部群专用，请勿外传，谢谢


[rewrite_local]
  
^http[s]?:\/\/((app|api)\.(\w{2,15})?\.(com|cn)).*player\.(v3|v2|v1).Play(URL|View).*$ url script-request-header https://raw.githubusercontent.com/Dawnaaaa/QXJS/main/blbl.js


[mitm] 

hostname = *.biliapi.*, *.bilibili.*

***********************************/

var modifiedHeaders = $request['headers'];
modifiedHeaders['Cookie'] = 'SESSDATA=669342bd%2C1707376381%2C0c1c38817H3R3vNb2fGcV72AAr8OjwOMdoy9uP1RqdDUJE9i6ujO5F4HMuGFzAf2OpaOHzo7hhdDUQAAIgA;';
modifiedHeaders['Authorization'] = 'identify_v1 24acdc0ce391d46f01e00e5ef2852b81pC9_hw7OlWhNTkwrFdFeS6C6YgCmeh92C9zzr56A0IN9PlniwPv5hRR41vTMxpzFSyHZxwAAIgA';
$done({'headers': modifiedHeaders});
