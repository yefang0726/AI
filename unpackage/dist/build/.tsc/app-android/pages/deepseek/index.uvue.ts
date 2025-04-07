
import CryptoJS from 'crypto-js'; // 需要安装crypto-js库

const __sfc__ = defineComponent({
  data() {
    return {
      inputText: '',
      messages: [],
      socketTask: null
    };
  },
  methods: {
    // 生成请求签名
    getWebsocketUrl() {
      // const apiKey = 'your_api_key';      // 替换为你的API Key
      // const apiSecret = 'your_api_secret'; // 替换为你的API Secret
      // const appid = 'your_appid';          // 替换为你的AppID
			const appid = 'a1ae023a';
			const apiSecret = 'NDQ3YTAwMzlkMjc5NDYxNjdjNjlkY2Q3';
			const apiKey = 'e6373428d522b0a136996938126421fa';
      
      const date = new Date().toGMTString();
      const host = 'spark-api.xf-yun.com';
      const path = '/v4.1/chat';
      
      // 生成签名
      const tmp = `host: ${host}\ndate: ${date}\nGET ${path} HTTP/1.1`;
      const signature = CryptoJS.enc.Base64.stringify(
        CryptoJS.HmacSHA256(tmp, apiSecret)
      );
      
      // 构造授权参数
      const authorization = 
        `api_key="${apiKey}", algorithm="hmac-sha256", headers="host date request-line", signature="${signature}"`;
      
      // 生成WebSocket URL
      return `wss://${host}${path}?` + 
        `authorization=${btoa(authorization).replace(/=+$/, '')}` +
        `&date=${encodeURIComponent(date)}` +
        `&host=${encodeURIComponent(host)}`;
    },

    // 建立WebSocket连接
    connectWebSocket() {
      const url = this.getWebsocketUrl();
      
      this.socketTask = uni.connectSocket({
        url: url,
        success: () => {
          console.log('WebSocket连接建立中...');
        },
        fail: (err) => {
          console.error('连接失败:', err);
        }
      });

      // 监听事件
      this.socketTask.onOpen(() => {
        console.log('WebSocket连接已打开');
      });

      this.socketTask.onMessage((res) => {
        const data = JSON.parse(res.data);
        this.handleResponse(data);
      });

      this.socketTask.onError((err) => {
        console.error('WebSocket错误:', err);
      });

      this.socketTask.onClose(() => {
        console.log('WebSocket连接已关闭');
      });
    },

    // 发送消息
    sendMessage() {
      if (!this.inputText.trim()) return;

      // 添加用户消息
      this.messages.push({
        role: 'user',
        content: this.inputText
      });

      // 构造请求数据
      const requestData = {
        header: {
          app_id: this.appid,
          uid: 'user123'
        },
        parameter: {
          chat: {
            domain: 'generalv4',
            temperature: 0.5,
            max_tokens: 4096
          }
        },
        payload: {
          message: {
            text: [
              ...this.messages,
              { role: 'user', content: this.inputText }
            ]
          }
        }
      };

      // 发送请求
      this.socketTask.send({
        data: JSON.stringify(requestData),
        success: () => {
          this.inputText = '';
        },
        fail: (err) => {
          console.error('发送失败:', err);
        }
      });
    },

    // 处理响应
    handleResponse(data) {
      if (data.header.code !== 0) {
        console.error('请求错误:', data.header);
        return;
      }

      // 拼接结果
      const content = data.payload.choices.text.content;
      const index = this.messages.findIndex(msg => msg.role === 'assistant');

      if (index !== -1) {
        this.messages[index].content += content;
      } else {
        this.messages.push({
          role: 'assistant',
          content: content
        });
      }

      // 滚动到底部
      this.$nextTick(() => {
        const query = uni.createSelectorQuery().in(this);
        query.select('.message-list').boundingClientRect();
        query.exec(res => {
          if (res) {
            uni.pageScrollTo({
              scrollTop: res.height,
              duration: 300
            });
          }
        });
      });

      // 关闭连接
      if (data.header.status === 2) {
        this.socketTask.close();
      }
    }
  },
  mounted() {
    this.connectWebSocket();
  },
  beforeDestroy() {
    if (this.socketTask) {
      this.socketTask.close();
    }
  }
});

export default __sfc__
function GenPagesDeepseekIndexRender(this: InstanceType<typeof __sfc__>): any | null {
const _ctx = this
const _cache = this.$.renderCache
  return createElementVNode("view", utsMapOf({ class: "container" }), [
    createElementVNode("scroll-view", utsMapOf({
      class: "message-list",
      "scroll-y": ""
    }), [
      createElementVNode(Fragment, null, RenderHelpers.renderList(_ctx.messages, (msg, index, __index, _cached): any => {
        return createElementVNode("view", utsMapOf({
          key: index,
          class: "message"
        }), toDisplayString(msg.role === 'user' ? '我：' : 'AI：') + " " + toDisplayString(msg.content), 1 /* TEXT */)
      }), 128 /* KEYED_FRAGMENT */)
    ]),
    createElementVNode("view", utsMapOf({ class: "input-area" }), [
      createElementVNode("input", utsMapOf({
        modelValue: _ctx.inputText,
        onInput: ($event: InputEvent) => {(_ctx.inputText) = $event.detail.value},
        placeholder: "请输入问题",
        onConfirm: _ctx.sendMessage
      }), null, 40 /* PROPS, NEED_HYDRATION */, ["modelValue", "onInput", "onConfirm"]),
      createElementVNode("button", utsMapOf({ onClick: _ctx.sendMessage }), "发送", 8 /* PROPS */, ["onClick"])
    ])
  ])
}
const GenPagesDeepseekIndexStyles = [utsMapOf([["container", padStyleMapOf(utsMapOf([["paddingTop", 20], ["paddingRight", 20], ["paddingBottom", 20], ["paddingLeft", 20]]))], ["message-list", padStyleMapOf(utsMapOf([["marginBottom", 20], ["borderTopWidth", 1], ["borderRightWidth", 1], ["borderBottomWidth", 1], ["borderLeftWidth", 1], ["borderTopStyle", "solid"], ["borderRightStyle", "solid"], ["borderBottomStyle", "solid"], ["borderLeftStyle", "solid"], ["borderTopColor", "#eeeeee"], ["borderRightColor", "#eeeeee"], ["borderBottomColor", "#eeeeee"], ["borderLeftColor", "#eeeeee"], ["paddingTop", 10], ["paddingRight", 10], ["paddingBottom", 10], ["paddingLeft", 10]]))], ["message", padStyleMapOf(utsMapOf([["marginTop", 10], ["marginRight", 0], ["marginBottom", 10], ["marginLeft", 0], ["paddingTop", 8], ["paddingRight", 8], ["paddingBottom", 8], ["paddingLeft", 8], ["backgroundImage", "none"], ["backgroundColor", "#f5f5f5"], ["borderTopLeftRadius", 4], ["borderTopRightRadius", 4], ["borderBottomRightRadius", 4], ["borderBottomLeftRadius", 4]]))], ["input-area", padStyleMapOf(utsMapOf([["display", "flex"], ["gap", "10px"]]))]])]
