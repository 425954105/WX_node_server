const CONF = {
    port: '5757',
    rootPathname: '',

    // 微信小程序 App ID
    appId: 'wxef63e5ba117a194c',

    // 微信小程序 App Secret
    appSecret: '',

    // 是否使用腾讯云代理登录小程序
    useQcloudLogin: true,

    /**
     * MySQL 配置，用来存储 session 和用户信息
     * 若使用了腾讯云微信小程序解决方案
     * 开发环境下，MySQL 的初始密码为您的微信小程序 appid
     */
    mysql: {
        host: '49.234.232.208',
        port: 3306,
        user: 'root',
        db: 'websites',
        pass: 'aa0aaa0cb921205a',
        // pass: 'wxef63e5ba117a194c',
        char: 'utf8mb4'
    },

    cos: {
        /**
         * 地区简称
         * @查看 https://cloud.tencent.com/document/product/436/6224
         */
        region: 'ap-guangzhou',
        // Bucket 名称
        fileBucket: 'qcloudtest',
        // 文件夹
        uploadFolder: ''
    },

    // 微信登录态有效期
    wxLoginExpires: 7200,
    wxMessageToken: 'abcdefgh',

    serverHost: '',
    tunnelServerUrl: '',
    tunnelSignatureKey: '',

    qcloudAppId: '1257913872',
    qcloudSecretId: 'AKIDMo0LXYDn0f3DRSfB2h7GLBoDNHXut62i',
    qcloudSecretKey: 'pPkmnbARmqBGBsNbpmR9etrYyIDrKWR5',
}

module.exports = CONF
