(function() {
    if (window.ksRunnerInit) return;

    // This line gets patched up by the cloud
    var pxtConfig = {
    "relprefix": "/pxt-microbit/",
    "verprefix": "",
    "workerjs": "/pxt-microbit/worker.js",
    "monacoworkerjs": "/pxt-microbit/monacoworker.js",
    "gifworkerjs": "/pxt-microbit/gifjs/gif.worker.js",
    "pxtVersion": "5.19.8",
    "pxtRelId": "",
    "pxtCdnUrl": "/pxt-microbit/",
    "commitCdnUrl": "/pxt-microbit/",
    "blobCdnUrl": "/pxt-microbit/",
    "cdnUrl": "/pxt-microbit/",
    "targetVersion": "0.0.0",
    "targetRelId": "",
    "targetUrl": "",
    "targetId": "microbit",
    "simUrl": "/pxt-microbit/simulator.html",
    "partsUrl": "/pxt-microbit/siminstructions.html",
    "runUrl": "/pxt-microbit/run.html",
    "docsUrl": "/pxt-microbit/docs.html",
    "isStatic": true
};

    var scripts = [
        "/pxt-microbit/highlight.js/highlight.pack.js",
        "/pxt-microbit/bluebird.min.js",
        "/pxt-microbit/marked/marked.min.js",
    ]

    if (typeof jQuery == "undefined")
        scripts.unshift("/pxt-microbit/jquery.js")
    if (typeof jQuery == "undefined" || !jQuery.prototype.sidebar)
        scripts.push("/pxt-microbit/semantic.js")
    if (!window.pxtTargetBundle)
        scripts.push("/pxt-microbit/target.js");
    scripts.push("/pxt-microbit/pxtembed.js");

    var pxtCallbacks = []

    window.ksRunnerReady = function(f) {
        if (pxtCallbacks == null) f()
        else pxtCallbacks.push(f)
    }

    window.ksRunnerWhenLoaded = function() {
        pxt.docs.requireHighlightJs = function() { return hljs; }
        pxt.setupWebConfig(pxtConfig || window.pxtWebConfig)
        pxt.runner.initCallbacks = pxtCallbacks
        pxtCallbacks.push(function() {
            pxtCallbacks = null
        })
        pxt.runner.init();
    }

    scripts.forEach(function(src) {
        var script = document.createElement('script');
        script.src = src;
        script.async = false;
        document.head.appendChild(script);
    })

} ())
