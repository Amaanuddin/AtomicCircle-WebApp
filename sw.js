/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "2780f16aae316b62d21be253726cacb5"
  },
  {
    "url": "404/index.html",
    "revision": "e25d8581e62d92535fa6afcc6e034322"
  },
  {
    "url": "about/index.html",
    "revision": "c56bda9ee8f2ee833a79d420209c5f16"
  },
  {
    "url": "app-374ca1609967fe2b6bf1.js"
  },
  {
    "url": "app-374ca1609967fe2b6bf1.js.map",
    "revision": "8ba046e98f932f864e9c475d4b2862a0"
  },
  {
    "url": "app-f935e313bc639cabd2a4.js"
  },
  {
    "url": "app-f935e313bc639cabd2a4.js.map",
    "revision": "605e31a1a4f62d206605e480b10fe80c"
  },
  {
    "url": "blog/another-post/index.html",
    "revision": "bc80334e3461140e53542df1a4bf2172"
  },
  {
    "url": "blog/hello-world-1/index.html",
    "revision": "980904f830dc1824b08f23fa2173fbd4"
  },
  {
    "url": "blog/hello-world/index.html",
    "revision": "25c6e09f6e4e60179a8e55bbc1b93a03"
  },
  {
    "url": "chunk-map.json",
    "revision": "63d2d8f704a7b374bb86bcac57b67153"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js"
  },
  {
    "url": "component---cache-caches-gatsby-plugin-offline-app-shell-js-7c31e2436cade51cbcda.js.map",
    "revision": "73fab470230271ac23de3b660b41bd46"
  },
  {
    "url": "component---src-pages-404-jsx-04ebc30b991b453ca07e.js"
  },
  {
    "url": "component---src-pages-404-jsx-04ebc30b991b453ca07e.js.map",
    "revision": "9ac22aef6890ae2023b5324fff6cd245"
  },
  {
    "url": "component---src-pages-404-jsx-bb739bb7886a9fc501f7.js"
  },
  {
    "url": "component---src-pages-404-jsx-bb739bb7886a9fc501f7.js.map",
    "revision": "aed8c0fc55754dc413c8e6c17c7eac1a"
  },
  {
    "url": "component---src-pages-about-jsx-5f8cda600ac735e64a0f.js"
  },
  {
    "url": "component---src-pages-about-jsx-5f8cda600ac735e64a0f.js.map",
    "revision": "c92f920f75378858a5539e0185df70f8"
  },
  {
    "url": "component---src-pages-contact-mdx-d6a4f302d34dbd11939a.js"
  },
  {
    "url": "component---src-pages-contact-mdx-d6a4f302d34dbd11939a.js.map",
    "revision": "98a49de1afab958eb5d6cd1e1de59687"
  },
  {
    "url": "component---src-pages-index-jsx-5100a9824c4f5abb9932.js"
  },
  {
    "url": "component---src-pages-index-jsx-5100a9824c4f5abb9932.js.map",
    "revision": "102118dc92ad8e452298bac7b337e465"
  },
  {
    "url": "component---src-pages-index-jsx-968d04c735172cd154f8.js"
  },
  {
    "url": "component---src-pages-index-jsx-968d04c735172cd154f8.js.map",
    "revision": "550ee9cb9db194ef4ffc165232376dd2"
  },
  {
    "url": "component---src-templates-post-jsx-c8466605f8d660dda394.js"
  },
  {
    "url": "component---src-templates-post-jsx-c8466605f8d660dda394.js.map",
    "revision": "29be5be1257324ac040eae3613b52484"
  },
  {
    "url": "contact/index.html",
    "revision": "2cef7304c455330fed923b1836f3613b"
  },
  {
    "url": "d60dda46508263992df82d65629de7b6b4737ae1-3fb97d1871d5a2a89a15.js"
  },
  {
    "url": "d60dda46508263992df82d65629de7b6b4737ae1-3fb97d1871d5a2a89a15.js.map",
    "revision": "916f8f5ad660563706c5d7e51c8a31a4"
  },
  {
    "url": "d60dda46508263992df82d65629de7b6b4737ae1-87c769812ced1637058d.js"
  },
  {
    "url": "d60dda46508263992df82d65629de7b6b4737ae1-87c769812ced1637058d.js.map",
    "revision": "f0aba8908464a2da3c64088ea38618eb"
  },
  {
    "url": "favicon-32x32.png",
    "revision": "ddc166e398234699c61bc34befe85f47"
  },
  {
    "url": "favicon.ico",
    "revision": "4d886ce25c44c140821479cb80e0c151"
  },
  {
    "url": "framework-93d3a746c3cf42acdafc.js"
  },
  {
    "url": "framework-93d3a746c3cf42acdafc.js.map",
    "revision": "2966a44ea3d59a1d215c75be8c39dcc6"
  },
  {
    "url": "icons/facebook.svg",
    "revision": "c8b77670afed27973de4303f534ca0b9"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "4c606b692e45df0c641fef2dc5aa5a95"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "cd6b8539836be1a2b154885bb8106002"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "04b4db8d33e664b5cc50ac95914b8919"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "23f3c94cc94a3354c9c9850f49faaad2"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "96c6947fd91ea72ebb741a939b255935"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "c48b3b753dbc9826bfec11fc94263091"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "25096b17a889b2efe7807f4993f2802e"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "8b1b9f775a51bb92070ce0dda9c13344"
  },
  {
    "url": "icons/instagram.svg",
    "revision": "7811e1e00909cf5b7beb25dc7436b602"
  },
  {
    "url": "icons/twitter.svg",
    "revision": "704ad93dcdbceb000be05546c7527735"
  },
  {
    "url": "idb-keyval-3.2.0-iife.min.js"
  },
  {
    "url": "index.html",
    "revision": "17a1b55da69a0b5225f330c83a60d121"
  },
  {
    "url": "logo.svg",
    "revision": "2f9896de1f8e463e9a94609a065ee8d2"
  },
  {
    "url": "manifest.webmanifest",
    "revision": "bbc1550b6c30184f004b998d49b3890a"
  },
  {
    "url": "mobileIcon.png",
    "revision": "c247dbcbe31ea3373b3f1c9dbdd5a221"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "a9639d683d7937328e599728cc3d28d7"
  },
  {
    "url": "page-data/404.html/page-data.json",
    "revision": "2956e8129a28d1ca1b63ec8374ee3b4f"
  },
  {
    "url": "page-data/404/page-data.json",
    "revision": "b3e7121ad8ab5b516db5e90df2370fe2"
  },
  {
    "url": "page-data/about/page-data.json",
    "revision": "2a4e7bac0a7963d57c837623a3aaf64c"
  },
  {
    "url": "page-data/app-data.json",
    "revision": "d31a9fd241c9a55292298d227c9837d7"
  },
  {
    "url": "page-data/blog/another-post/page-data.json",
    "revision": "1ef483e19b5ebef660d1f1a6fec59a90"
  },
  {
    "url": "page-data/blog/hello-world-1/page-data.json",
    "revision": "ace961e99477ed857a243f013fa6168e"
  },
  {
    "url": "page-data/blog/hello-world/page-data.json",
    "revision": "c52228adc3ffdfaed5432fad10aa1863"
  },
  {
    "url": "page-data/contact/page-data.json",
    "revision": "5ac541d107615faf9d060b61b2664f16"
  },
  {
    "url": "page-data/dev-404-page/page-data.json",
    "revision": "02045bf45d312f93ce4f890d61938371"
  },
  {
    "url": "page-data/index/page-data.json",
    "revision": "9f2dffc24f153b4a9e58915c1b2a5777"
  },
  {
    "url": "page-data/offline-plugin-app-shell-fallback/page-data.json",
    "revision": "43232b01cc861c0701a3ece4bd67720b"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/19163/Image.webp"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/2c0b3/Image.png"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/4f815/Image.png"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/50eb4/Image.webp"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/7e00a/Image.webp"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/c465a/Image.png"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/e56f2/Image.png"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/e7a9f/Image.webp"
  },
  {
    "url": "static/243853846d33b1d81c28beabc3bb2a10/fe5d5/Image.webp"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/1c591/75234606_431721267495719_1357594609458705417_n.webp"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/25e3f/75234606_431721267495719_1357594609458705417_n.jpg"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/27933/75234606_431721267495719_1357594609458705417_n.webp"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/29667/75234606_431721267495719_1357594609458705417_n.jpg"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/4e4ae/75234606_431721267495719_1357594609458705417_n.webp"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/50ead/75234606_431721267495719_1357594609458705417_n.webp"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/78754/75234606_431721267495719_1357594609458705417_n.webp"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/7b2a1/75234606_431721267495719_1357594609458705417_n.jpg"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/ab687/75234606_431721267495719_1357594609458705417_n.webp"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/aba1d/75234606_431721267495719_1357594609458705417_n.jpg"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/dcd9a/75234606_431721267495719_1357594609458705417_n.jpg"
  },
  {
    "url": "static/32882c9deffe44569aa4e0dfe675a74a/f11e0/75234606_431721267495719_1357594609458705417_n.jpg"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/0940d/104180036_126876232402509_3470407159304670070_n.jpg"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/1c591/104180036_126876232402509_3470407159304670070_n.webp"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/25e3f/104180036_126876232402509_3470407159304670070_n.jpg"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/27933/104180036_126876232402509_3470407159304670070_n.webp"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/4e4ae/104180036_126876232402509_3470407159304670070_n.webp"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/50ead/104180036_126876232402509_3470407159304670070_n.webp"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/7a8e1/104180036_126876232402509_3470407159304670070_n.webp"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/7b2a1/104180036_126876232402509_3470407159304670070_n.jpg"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/ab687/104180036_126876232402509_3470407159304670070_n.webp"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/aba1d/104180036_126876232402509_3470407159304670070_n.jpg"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/dcd9a/104180036_126876232402509_3470407159304670070_n.jpg"
  },
  {
    "url": "static/451fe1bfc8b9c810de065b75779ee0fa/f11e0/104180036_126876232402509_3470407159304670070_n.jpg"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/1c591/101160551_247343189859152_2496711528409846706_n.webp"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/25e3f/101160551_247343189859152_2496711528409846706_n.jpg"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/27933/101160551_247343189859152_2496711528409846706_n.webp"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/29667/101160551_247343189859152_2496711528409846706_n.jpg"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/4e4ae/101160551_247343189859152_2496711528409846706_n.webp"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/50ead/101160551_247343189859152_2496711528409846706_n.webp"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/78754/101160551_247343189859152_2496711528409846706_n.webp"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/7b2a1/101160551_247343189859152_2496711528409846706_n.jpg"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/ab687/101160551_247343189859152_2496711528409846706_n.webp"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/aba1d/101160551_247343189859152_2496711528409846706_n.jpg"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/dcd9a/101160551_247343189859152_2496711528409846706_n.jpg"
  },
  {
    "url": "static/928db0f515904048972744e9e8807af4/f11e0/101160551_247343189859152_2496711528409846706_n.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/0e329/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/10dfe/author_image.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/10dfe/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/14b42/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/19972/author_image.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/19972/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/1c591/author_image.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/1c591/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/1f5c5/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/2244e/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/47498/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/48562/author_image.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/48562/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/58556/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/61e93/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/70616/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/7c22d/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/8295c/author_image.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/8295c/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/8d998/author_image.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/8d998/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/9261a/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/99238/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/99438/author_image.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/99438/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/a4d7d/author_image.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/a4d7d/charles-pup.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/b315d/author_image.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/b315d/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/d0f88/author_image.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/d0f88/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/dcd9a/author_image.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/dcd9a/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/f836f/charles-pup.jpg"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/ff02b/author_image.webp"
  },
  {
    "url": "static/92d5ea624292bbe248127cf58f1f779e/ff02b/charles-pup.webp"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/1c591/106459975_3052139144854393_8328798534650299210_n.webp"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/25e3f/106459975_3052139144854393_8328798534650299210_n.jpg"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/27933/106459975_3052139144854393_8328798534650299210_n.webp"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/29667/106459975_3052139144854393_8328798534650299210_n.jpg"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/4e4ae/106459975_3052139144854393_8328798534650299210_n.webp"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/50ead/106459975_3052139144854393_8328798534650299210_n.webp"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/78754/106459975_3052139144854393_8328798534650299210_n.webp"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/7b2a1/106459975_3052139144854393_8328798534650299210_n.jpg"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/ab687/106459975_3052139144854393_8328798534650299210_n.webp"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/aba1d/106459975_3052139144854393_8328798534650299210_n.jpg"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/dcd9a/106459975_3052139144854393_8328798534650299210_n.jpg"
  },
  {
    "url": "static/9f1e73567fff70da9cbe7400e81f215d/f11e0/106459975_3052139144854393_8328798534650299210_n.jpg"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/1c591/74661315_273130847266519_3388371026554984954_n.webp"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/25e3f/74661315_273130847266519_3388371026554984954_n.jpg"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/27933/74661315_273130847266519_3388371026554984954_n.webp"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/29667/74661315_273130847266519_3388371026554984954_n.jpg"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/4e4ae/74661315_273130847266519_3388371026554984954_n.webp"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/50ead/74661315_273130847266519_3388371026554984954_n.webp"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/78754/74661315_273130847266519_3388371026554984954_n.webp"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/7b2a1/74661315_273130847266519_3388371026554984954_n.jpg"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/ab687/74661315_273130847266519_3388371026554984954_n.webp"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/aba1d/74661315_273130847266519_3388371026554984954_n.jpg"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/dcd9a/74661315_273130847266519_3388371026554984954_n.jpg"
  },
  {
    "url": "static/ab5bb07079bac0a81f65220f410ca62a/f11e0/74661315_273130847266519_3388371026554984954_n.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/01ab0/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/0e329/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/14b42/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/1c591/author_image.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/1c591/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/1f5c5/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/2244e/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/47498/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/48562/author_image.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/48562/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/58556/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/61e93/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/69755/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/6aca1/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/7c09c/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/7c22d/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/8295c/author_image.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/8295c/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/8d998/author_image.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/8d998/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/96ec1/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/99238/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/99438/author_image.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/99438/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/a4d7d/author_image.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/a4d7d/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/b315d/author_image.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/b315d/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/c989d/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/d0f88/author_image.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/d0f88/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/d2f63/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/dcd9a/author_image.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/dcd9a/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/e1596/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/e4e07/author_image.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/e4e07/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/ec858/author_image.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/ec858/sara-riano-hello.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/f836f/sara-riano-hello.jpg"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/ff02b/author_image.webp"
  },
  {
    "url": "static/acbccb8c0dd2bf64d114659c205dd742/ff02b/sara-riano-hello.webp"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/1c591/104433407_819612231902011_2833189103577930411_n.webp"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/25e3f/104433407_819612231902011_2833189103577930411_n.jpg"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/27933/104433407_819612231902011_2833189103577930411_n.webp"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/29667/104433407_819612231902011_2833189103577930411_n.jpg"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/4e4ae/104433407_819612231902011_2833189103577930411_n.webp"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/50ead/104433407_819612231902011_2833189103577930411_n.webp"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/78754/104433407_819612231902011_2833189103577930411_n.webp"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/7b2a1/104433407_819612231902011_2833189103577930411_n.jpg"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/ab687/104433407_819612231902011_2833189103577930411_n.webp"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/aba1d/104433407_819612231902011_2833189103577930411_n.jpg"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/dcd9a/104433407_819612231902011_2833189103577930411_n.jpg"
  },
  {
    "url": "static/b30cf5154d495b413ca17486fd02d877/f11e0/104433407_819612231902011_2833189103577930411_n.jpg"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/1c591/104420360_584265935861873_7862521384696597241_n.webp"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/25e3f/104420360_584265935861873_7862521384696597241_n.jpg"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/27933/104420360_584265935861873_7862521384696597241_n.webp"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/29667/104420360_584265935861873_7862521384696597241_n.jpg"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/4e4ae/104420360_584265935861873_7862521384696597241_n.webp"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/50ead/104420360_584265935861873_7862521384696597241_n.webp"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/78754/104420360_584265935861873_7862521384696597241_n.webp"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/7b2a1/104420360_584265935861873_7862521384696597241_n.jpg"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/ab687/104420360_584265935861873_7862521384696597241_n.webp"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/aba1d/104420360_584265935861873_7862521384696597241_n.jpg"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/dcd9a/104420360_584265935861873_7862521384696597241_n.jpg"
  },
  {
    "url": "static/c7b7a33462948a5e21221ce48e8b09ac/f11e0/104420360_584265935861873_7862521384696597241_n.jpg"
  },
  {
    "url": "static/d/1151473292.json"
  },
  {
    "url": "static/d/1608163862.json"
  },
  {
    "url": "static/d/2421676614.json"
  },
  {
    "url": "static/d/2688706813.json"
  },
  {
    "url": "static/d/3590639020.json"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/1c591/104459029_751034702389480_6476464602178745456_n.webp"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/25e3f/104459029_751034702389480_6476464602178745456_n.jpg"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/27933/104459029_751034702389480_6476464602178745456_n.webp"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/29667/104459029_751034702389480_6476464602178745456_n.jpg"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/4e4ae/104459029_751034702389480_6476464602178745456_n.webp"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/50ead/104459029_751034702389480_6476464602178745456_n.webp"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/78754/104459029_751034702389480_6476464602178745456_n.webp"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/7b2a1/104459029_751034702389480_6476464602178745456_n.jpg"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/ab687/104459029_751034702389480_6476464602178745456_n.webp"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/aba1d/104459029_751034702389480_6476464602178745456_n.jpg"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/dcd9a/104459029_751034702389480_6476464602178745456_n.jpg"
  },
  {
    "url": "static/d0140ce4db5d2259dff2b5122576c0a8/f11e0/104459029_751034702389480_6476464602178745456_n.jpg"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/1c591/100922320_731111060991678_4664509133389209962_n.webp"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/25e3f/100922320_731111060991678_4664509133389209962_n.jpg"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/27933/100922320_731111060991678_4664509133389209962_n.webp"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/29667/100922320_731111060991678_4664509133389209962_n.jpg"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/4e4ae/100922320_731111060991678_4664509133389209962_n.webp"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/50ead/100922320_731111060991678_4664509133389209962_n.webp"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/78754/100922320_731111060991678_4664509133389209962_n.webp"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/7b2a1/100922320_731111060991678_4664509133389209962_n.jpg"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/ab687/100922320_731111060991678_4664509133389209962_n.webp"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/aba1d/100922320_731111060991678_4664509133389209962_n.jpg"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/dcd9a/100922320_731111060991678_4664509133389209962_n.jpg"
  },
  {
    "url": "static/d201fd471655a3924f0cfa01ba9f53cf/f11e0/100922320_731111060991678_4664509133389209962_n.jpg"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/1c591/80789446_138146564289998_320567354258648573_n.webp"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/25e3f/80789446_138146564289998_320567354258648573_n.jpg"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/27933/80789446_138146564289998_320567354258648573_n.webp"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/29667/80789446_138146564289998_320567354258648573_n.jpg"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/4e4ae/80789446_138146564289998_320567354258648573_n.webp"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/50ead/80789446_138146564289998_320567354258648573_n.webp"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/78754/80789446_138146564289998_320567354258648573_n.webp"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/7b2a1/80789446_138146564289998_320567354258648573_n.jpg"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/ab687/80789446_138146564289998_320567354258648573_n.webp"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/aba1d/80789446_138146564289998_320567354258648573_n.jpg"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/dcd9a/80789446_138146564289998_320567354258648573_n.jpg"
  },
  {
    "url": "static/e567710a5946f497a914085c71ddf3d4/f11e0/80789446_138146564289998_320567354258648573_n.jpg"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/1c591/76895529_884273225303793_9001919706263127280_n.webp"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/25e3f/76895529_884273225303793_9001919706263127280_n.jpg"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/27933/76895529_884273225303793_9001919706263127280_n.webp"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/29667/76895529_884273225303793_9001919706263127280_n.jpg"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/4e4ae/76895529_884273225303793_9001919706263127280_n.webp"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/50ead/76895529_884273225303793_9001919706263127280_n.webp"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/78754/76895529_884273225303793_9001919706263127280_n.webp"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/7b2a1/76895529_884273225303793_9001919706263127280_n.jpg"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/ab687/76895529_884273225303793_9001919706263127280_n.webp"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/aba1d/76895529_884273225303793_9001919706263127280_n.jpg"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/dcd9a/76895529_884273225303793_9001919706263127280_n.jpg"
  },
  {
    "url": "static/e6ac950aeee95f63dc060d0cb8f7c2ac/f11e0/76895529_884273225303793_9001919706263127280_n.jpg"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/1c591/75458051_2460727144248087_3627798753943844429_n.webp"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/25e3f/75458051_2460727144248087_3627798753943844429_n.jpg"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/27933/75458051_2460727144248087_3627798753943844429_n.webp"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/29667/75458051_2460727144248087_3627798753943844429_n.jpg"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/4e4ae/75458051_2460727144248087_3627798753943844429_n.webp"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/50ead/75458051_2460727144248087_3627798753943844429_n.webp"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/78754/75458051_2460727144248087_3627798753943844429_n.webp"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/7b2a1/75458051_2460727144248087_3627798753943844429_n.jpg"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/ab687/75458051_2460727144248087_3627798753943844429_n.webp"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/aba1d/75458051_2460727144248087_3627798753943844429_n.jpg"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/dcd9a/75458051_2460727144248087_3627798753943844429_n.jpg"
  },
  {
    "url": "static/fdcb4c8fc586155363a721dcc984a2b2/f11e0/75458051_2460727144248087_3627798753943844429_n.jpg"
  },
  {
    "url": "styles-89fd2ae28bdf06750a71.js"
  },
  {
    "url": "styles-89fd2ae28bdf06750a71.js.map",
    "revision": "50a943b8a40210b91a33534f76345165"
  },
  {
    "url": "styles.e39c3e903312b8c02afd.css"
  },
  {
    "url": "webpack-runtime-57beb2618414aa7aa046.js"
  },
  {
    "url": "webpack-runtime-57beb2618414aa7aa046.js.map",
    "revision": "68a66e87bf38f0255dd0b46d94153b1c"
  },
  {
    "url": "webpack-runtime-bf01562319c4040d2e7d.js"
  },
  {
    "url": "webpack-runtime-bf01562319c4040d2e7d.js.map",
    "revision": "1b603a31f1efd27c39ab44d3f066a274"
  },
  {
    "url": "webpack.stats.json",
    "revision": "1c1ce33135afa00dc4e53f4fd7473407"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/(\.js$|\.css$|static\/)/, new workbox.strategies.CacheFirst(), 'GET');
workbox.routing.registerRoute(/^https?:.*\page-data\/.*\/page-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\/page-data\/app-data\.json/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:.*\.(png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');

/* global importScripts, workbox, idbKeyval */
importScripts(`idb-keyval-3.2.0-iife.min.js`)

const { NavigationRoute } = workbox.routing

let lastNavigationRequest = null
let offlineShellEnabled = true

// prefer standard object syntax to support more browsers
const MessageAPI = {
  setPathResources: (event, { path, resources }) => {
    event.waitUntil(idbKeyval.set(`resources:${path}`, resources))
  },

  clearPathResources: event => {
    event.waitUntil(idbKeyval.clear())
  },

  enableOfflineShell: () => {
    offlineShellEnabled = true
  },

  disableOfflineShell: () => {
    offlineShellEnabled = false
  },
}

self.addEventListener(`message`, event => {
  const { gatsbyApi: api } = event.data
  if (api) MessageAPI[api](event, event.data)
})

function handleAPIRequest({ event }) {
  const { pathname } = new URL(event.request.url)

  const params = pathname.match(/:(.+)/)[1]
  const data = {}

  if (params.includes(`=`)) {
    params.split(`&`).forEach(param => {
      const [key, val] = param.split(`=`)
      data[key] = val
    })
  } else {
    data.api = params
  }

  if (MessageAPI[data.api] !== undefined) {
    MessageAPI[data.api]()
  }

  if (!data.redirect) {
    return new Response()
  }

  return new Response(null, {
    status: 302,
    headers: {
      Location: lastNavigationRequest,
    },
  })
}

const navigationRoute = new NavigationRoute(async ({ event }) => {
  // handle API requests separately to normal navigation requests, so do this
  // check first
  if (event.request.url.match(/\/.gatsby-plugin-offline:.+/)) {
    return handleAPIRequest({ event })
  }

  if (!offlineShellEnabled) {
    return await fetch(event.request)
  }

  lastNavigationRequest = event.request.url

  let { pathname } = new URL(event.request.url)
  pathname = pathname.replace(new RegExp(`^/AtomicCircle-WebApp`), ``)

  // Check for resources + the app bundle
  // The latter may not exist if the SW is updating to a new version
  const resources = await idbKeyval.get(`resources:${pathname}`)
  if (!resources || !(await caches.match(`/AtomicCircle-WebApp/app-374ca1609967fe2b6bf1.js`))) {
    return await fetch(event.request)
  }

  for (const resource of resources) {
    // As soon as we detect a failed resource, fetch the entire page from
    // network - that way we won't risk being in an inconsistent state with
    // some parts of the page failing.
    if (!(await caches.match(resource))) {
      return await fetch(event.request)
    }
  }

  const offlineShell = `/AtomicCircle-WebApp/offline-plugin-app-shell-fallback/index.html`
  const offlineShellWithKey = workbox.precaching.getCacheKeyForURL(offlineShell)
  return await caches.match(offlineShellWithKey)
})

workbox.routing.registerRoute(navigationRoute)

// this route is used when performing a non-navigation request (e.g. fetch)
workbox.routing.registerRoute(/\/.gatsby-plugin-offline:.+/, handleAPIRequest)
