const CUSTOMER_SITES = {
    qiqi: {
        api: 'https://www.qiqidys.com/api.php/provide/vod',
        name: '七七资源',
    },
    360: {
        api: 'https://360zy.com/api.php/provide/vod/',
        name: '360资源',
    },
    feifan: {
        api: 'https://cj.ffzyapi.com/api.php/provide/vod/',
        name: '非凡资源',
    },
    liangzi: {
        api: 'https://cj.lziapi.com/api.php/provide/vod/',
        name: '量子资源',
    },
    suoni: {
        api: 'https://suoniapi.com/api.php/provide/vod/',
        name: '索尼资源',
    }
};

// 调用全局方法合并
if (window.extendAPISites) {
    window.extendAPISites(CUSTOMER_SITES);
} else {
    console.error("错误：请先加载 config.js！");
}
