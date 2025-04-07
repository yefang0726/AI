// 'use strict';
// exports.main = async (event, context) => {
// 	//event为客户端上传的参数
// 	console.log('event : ', event)
	
// 	//返回数据给客户端
// 	return event
// };
// spark-proxy/index.js
const crypto = require('crypto-js'); // 需手动安装

exports.main = async (event, context) => {
  const { prompt } = event; // 从前端接收的提问内容
  
  // 从云函数环境变量读取密钥（安全！）
  // const APP_ID = '__UNI__YOUR_APP_ID'; // 替换为实际值
  // const API_KEY = '__UNI__YOUR_API_KEY';
  // const API_SECRET = '__UNI__YOUR_API_SECRET';
	const APP_ID = 'a1ae023a';
	const API_SECRET = 'NDQ3YTAwMzlkMjc5NDYxNjdjNjlkY2Q3';
	const API_KEY = 'e6373428d522b0a136996938126421fa';

  const host = 'spark-api.xf-yun.com';
  const path = '/v3.5/chat';
  const date = new Date().toUTCString();
	
	// 临时调试：在代码开头打印密钥（调试后删除）
	console.log('APP_ID:', APP_ID); 
	console.log('API_KEY:', API_KEY);
	console.log('API_SECRET:', API_SECRET.length > 0 ? '***' : '空值');

  // 生成签名
  const signatureOrigin = `host: ${host}\ndate: ${date}\nGET ${path} HTTP/1.1`;
  const signature = crypto.HmacSHA256(signatureOrigin, API_SECRET).toString(crypto.enc.Base64);
  const authorization = `api_key="${API_KEY}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;


  // 构造 WebSocket URL
  const wsUrl = `wss://${host}${path}?${new URLSearchParams({
    authorization: encodeURIComponent(authorization),
    date: encodeURIComponent(date),
    host
  }).toString()}`;

  // 发送请求并接收流式响应
  return new Promise((resolve, reject) => {
    const WebSocket = require('ws');
    const ws = new WebSocket(wsUrl);

    let fullResponse = '';
    ws.on('open', () => {
      ws.send(JSON.stringify({
        header: { app_id: APP_ID },
        parameter: { chat: { domain: 'general' } },
        payload: { message: { text: [{ role: 'user', content: prompt }] } }
      }));
    });

    ws.on('message', (data) => {
      const res = JSON.parse(data);
      if (res.header.code !== 0) return reject(res.header.message);
      fullResponse += res.payload.choices.text.content;
    });

    ws.on('close', () => resolve(fullResponse));
    ws.on('error', reject);
  });
};
