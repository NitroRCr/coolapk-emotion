function initCoolapkEmotion() {
    var emotionNameList = [
        'c-1010',
        'c-1011',
        'c-1012',
        'c-1013',
        'c-1014',
        'c-1015',
        'c-1016',
        'c-1017',
        'c-1018',
        'c-1019',
        'c-1020',
        'c-1021',
        'c-104',
        'c-105',
        'c-106',
        'c-107',
        'c-108',
        'c-109',
        'c-68',
        'c-69',
        'c-70',
        'c-71',
        'c-72',
        'c-73',
        'c-74',
        'c-75',
        'c-76',
        'c-77',
        'c-78',
        'c-79',
        'c-80',
        'c-85',
        'c-86',
        'c-87',
        'c-88',
        'c-89',
        'c-90',
        'c-91',
        'c-92',
        'c-93',
        'c-94',
        'c-aixin',
        'c-aoman',
        'c-baiyan',
        'c-baoquan',
        'c-bishi',
        'c-caidao',
        'c-chigua',
        'c-ciya',
        'c-coolb',
        'c-coshuaji',
        'c-diaoxie',
        'c-doge',
        'c-dogehechi',
        'c-dogexiaoku',
        'c-dogeyuanliangta',
        'c-doujiyanhuaji',
        'c-erha',
        'c-erhading',
        'c-fadai',
        'c-fanu',
        'c-fived',
        'c-fivef',
        'c-fivem',
        'c-fiveo',
        'c-fivey',
        'c-fy',
        'c-hahaha',
        'c-haixiu',
        'c-han',
        'c-hehe',
        'c-heiha',
        'c-heixian',
        'c-hejiu',
        'c-hongyaowan',
        'c-huaixiao',
        'c-huaji',
        'c-huanhu',
        'c-huoba',
        'c-jingya',
        'c-jizhi',
        'c-keai',
        'c-kelian',
        'c-koubi',
        'c-ku',
        'c-kuan',
        'c-kuanlvmao',
        'c-liuhanhuaji',
        'c-liulei',
        'c-lvmao',
        'c-lvyaowan',
        'c-meigui',
        'c-miaomiao',
        'c-mojinghuaji',
        'c-naikezui',
        'c-nanguo',
        'c-nb',
        'c-ok',
        'c-oned',
        'c-onef',
        'c-onem',
        'c-oneo',
        'c-oney',
        'c-oy',
        'c-pen',
        'c-penxue',
        'c-piezui',
        'c-pu',
        'c-pyjiaoyi',
        'c-qiang',
        'c-qinqin',
        'c-qqdoge',
        'c-ruo',
        'c-se',
        'c-shounuehuaji',
        'c-shui',
        'c-teny',
        'c-tuosai',
        'c-tushe',
        'c-twod',
        'c-twof',
        'c-twom',
        'c-twoo',
        'c-twoy',
        'c-ty',
        'c-weiqu',
        'c-weiweiyixiao',
        'c-weixiao',
        'c-wozuimei',
        'c-wulian',
        'c-wunai',
        'c-wuyu',
        'c-wuzuixiao',
        'c-xiaoku',
        'c-xiaoyan',
        'c-xinsui',
        'c-ye',
        'c-yinxian',
        'c-yiwen',
        'c-zaijian',
        'c-zhoumei',
    ];
    var inner = '';
    for (let i in emotionNameList){
        let x = emotionNameList[i];
        inner += 'i.'+x+'{background: url(https://coolemotion.netlify.com/source/png/'+x+'.png); height:1em; width:1em; display:inline-block; background-size:contain; transform:translateY(0.15em);}';
    }
    inner += 'i.no-transform{transform:translateY(0);}';
    var style = document.createElement('style');
    style.innerHTML=inner;
    document.head.appendChild(style);
}
initCoolapkEmotion();
