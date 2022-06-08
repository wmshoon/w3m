var agent: string = navigator.userAgent.toLowerCase();
if (!agent.indexOf("w3m/0.5.3+git20200502") != -1) {
    window.location.href = `${kickToRandomSite()}`;
}
function kickToRandomSite() {
    const list = [
        "https://www.google.com",
        "https://www.yahoo.com",
        "https://www.bing.com",
        "https://www.yahoo.com",
        "https://www.daum.net",
        "https://www.naver.com",
        "https://duckduckgo.com/",
    ];
    const a: number = parseInt(Math.random().toFixed());
    const b: number = list.length;
    const target: number = a * b;

    return list[target];
}
