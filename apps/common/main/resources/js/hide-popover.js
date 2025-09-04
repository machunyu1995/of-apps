// 在页面加载完成后动态添加 CSS 文件
(function() {
    // 创建一个 style 元素
    var style = document.createElement('style');
    style.type = 'text/css';
    
    // CSS 规则
    var css = `
    /* 隐藏弹出层的 CSS */
    /* 使用更通用的选择器，针对评论弹出层的特征 */
    .box .comments-popover {
        display: none !important;
    }
    
    /* 隐藏弹出层的箭头 */
    .comments-arrow {
        display: none !important;
    }
    
    /* 隐藏插入提示 */
    #id_main > div[style*="background-color: rgb(124, 123, 241)"] {
        display: none !important;
    }
    
    /* 隐藏整个弹出窗口容器 */
    #id-popover {
        display: none !important;
    }
    
    /* 隐藏整个弹出层窗口 */
    .asc-window .box {
        display: none !important;
    }
    
    /* 隐藏整个弹出层窗口 */
    div[id^="window-view"].asc-window.notransform {
        display: none !important;
    }`;
    
    // 将 CSS 添加到 style 元素
    if (style.styleSheet) {
        style.styleSheet.cssText = css; // IE
    } else {
        style.appendChild(document.createTextNode(css));
    }
    
    // 将 style 元素添加到 head
    document.head.appendChild(style);
})(); 