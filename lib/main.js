var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: "https://www.youtube.com/watch*",
  contentScriptFile: "./block-yt.js",
  contentScriptWhen: "end"
});