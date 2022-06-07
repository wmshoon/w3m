var agent = navigator.userAgent.toLowerCase();
if (!agent.indexOf("w3m/0.5.3+git20200502") != -1) {
    window.location.href = `${kickToRandomSite()}`;
}

function kickToRandomSite() {
    const list = [
        "http://www.google.com",
        "http://www.yahoo.com",
        "https://www.bing.com",
        "https://www.yahoo.com",
        "https://www.daum.net",
        "https://www.naver.com",
        "https://duckduckgo.com/",
    ];
    let a = Math.random();
    a = parseInt(a * list.lenth);
    return list[a];
}
