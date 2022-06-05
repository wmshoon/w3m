var agent = navigator.userAgent.toLowerCase();

if (!agent.indexOf("w3m/0.5.3+git20200502") != -1) {
    window.location.href = `${randomWebsite()}`;
}

function randomWebsite() {
    const list = ["http://www.google.com", "http://www.yahoo.com", "https://www.bing.com", "https://www.yahoo.com/  "];
    let a = Math.random();
    a = parseInt(a * 4);
    return list[a];
}
