var pageMod = require("sdk/page-mod");

pageMod.PageMod({
  include: ["https://www.youtube.com/watch*", "https://plus.googleapis.com/u/0/_/widget/render/comments?usegapi=1&first_party_property=YOUTUBE*"],
  contentStyleFile: "./block-yt.css"
});