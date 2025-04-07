import App from './App.uvue'

import { createSSRApp } from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
export function main(app: IApp) {
    definePageRoutes();
    defineAppConfig();
    (createApp()['app'] as VueApp).mount(app, GenUniApp());
}

export class UniAppConfig extends io.dcloud.uniapp.appframe.AppConfig {
    override name: string = "tem-yefang"
    override appid: string = "__UNI__6985640"
    override versionName: string = "1.0.0"
    override versionCode: string = "100"
    override uniCompilerVersion: string = "4.57"
    
    constructor() { super() }
}

import GenPagesIndexIndexClass from './pages/index/index.uvue?type=page'
import GenPagesEchartsIndexClass from './pages/echarts/index.uvue?type=page'
import GenPagesDeepseekIndexClass from './pages/deepseek/index.uvue?type=page'
import GenPagesUserIndexClass from './pages/user/index.uvue?type=page'
function definePageRoutes() {
__uniRoutes.push({ path: "pages/index/index", component: GenPagesIndexIndexClass, meta: { isQuit: true } as UniPageMeta, style: utsMapOf([["navigationBarTitleText","uni-app x"]]) } as UniPageRoute)
__uniRoutes.push({ path: "pages/echarts/index", component: GenPagesEchartsIndexClass, meta: { isQuit: false } as UniPageMeta, style: utsMapOf([["navigationBarTitleText","echarts图表"]]) } as UniPageRoute)
__uniRoutes.push({ path: "pages/deepseek/index", component: GenPagesDeepseekIndexClass, meta: { isQuit: false } as UniPageMeta, style: utsMapOf([["navigationBarTitleText","deepseek"]]) } as UniPageRoute)
__uniRoutes.push({ path: "pages/user/index", component: GenPagesUserIndexClass, meta: { isQuit: false } as UniPageMeta, style: utsMapOf([["navigationBarTitleText",""]]) } as UniPageRoute)
}
const __uniTabBar: Map<string, any | null> | null = utsMapOf([["color","#7A7E83"],["selectedColor","#4e99ff"],["borderStyle","black"],["backgroundColor","#ffffff"],["fontSize","14px"],["list",[utsMapOf([["pagePath","pages/index/index"],["iconPath",""],["selectedIconPath",""],["text","首页"]]),utsMapOf([["pagePath","pages/echarts/index"],["iconPath",""],["selectedIconPath",""],["text","图表"]]),utsMapOf([["pagePath","pages/deepseek/index"],["iconPath",""],["selectedIconPath",""],["text","AI"]]),utsMapOf([["pagePath","pages/user/index"],["iconPath",""],["selectedIconPath",""],["text","我的"]])]]])
const __uniLaunchPage: Map<string, any | null> = utsMapOf([["url","pages/index/index"],["style",utsMapOf([["navigationBarTitleText","uni-app x"]])]])
function defineAppConfig(){
  __uniConfig.entryPagePath = '/pages/index/index'
  __uniConfig.globalStyle = utsMapOf([["navigationBarTextStyle","black"],["navigationBarTitleText","uni-app x"],["navigationBarBackgroundColor","#F8F8F8"],["backgroundColor","#F8F8F8"]])
  __uniConfig.getTabBarConfig = ():Map<string, any> | null =>  utsMapOf([["color","#7A7E83"],["selectedColor","#4e99ff"],["borderStyle","black"],["backgroundColor","#ffffff"],["fontSize","14px"],["list",[utsMapOf([["pagePath","pages/index/index"],["iconPath",""],["selectedIconPath",""],["text","首页"]]),utsMapOf([["pagePath","pages/echarts/index"],["iconPath",""],["selectedIconPath",""],["text","图表"]]),utsMapOf([["pagePath","pages/deepseek/index"],["iconPath",""],["selectedIconPath",""],["text","AI"]]),utsMapOf([["pagePath","pages/user/index"],["iconPath",""],["selectedIconPath",""],["text","我的"]])]]])
  __uniConfig.tabBar = __uniConfig.getTabBarConfig()
  __uniConfig.conditionUrl = ''
  __uniConfig.uniIdRouter = utsMapOf()
  
  __uniConfig.ready = true
}

export class UniCloudConfig extends io.dcloud.unicloud.InternalUniCloudConfig {
    override isDev : boolean = false
    override spaceList : string = "[{\"provider\":\"aliyun\",\"spaceName\":\"ai\",\"spaceId\":\"mp-b7314f1e-c5a6-48ec-898b-649f8987c7ab\",\"clientSecret\":\"rhiRtfTOlf0xbyOJABpQow==\",\"endpoint\":\"https://api.next.bspapp.com\"}]"
    override debuggerInfo ?: string = null
    override secureNetworkEnable : boolean = false
    override secureNetworkConfig ?: string = ""
    constructor() { super() }
}
