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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "fce0f977c5f46e3fa59f0ef4d624d76e"
  },
  {
    "url": "assets/css/0.styles.c775139a.css",
    "revision": "415dd0113e9fd066c0b8147a5bce2285"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold-Italic.a0475780.woff2",
    "revision": "a04757804840e4e870b5310e37fcbc37"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Bold.c318a45b.woff2",
    "revision": "c318a45b45be019ffdeb8c9ac6a41283"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold-Italic.045b7ab8.woff2",
    "revision": "045b7ab8d749812c052e9eca1ec5db07"
  },
  {
    "url": "assets/fonts/JetBrainsMono-ExtraBold.c3c08fc9.woff2",
    "revision": "c3c08fc9f418f827eb3eed1b0ebe48c8"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Italic.06bf2228.woff2",
    "revision": "06bf22283c831651e111b08000e502fc"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium-Italic.dd0da6de.woff2",
    "revision": "dd0da6de6c2340f4bf0aa4108f98a63f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Medium.54b68275.woff2",
    "revision": "54b6827550ef145b4c1968518a96070f"
  },
  {
    "url": "assets/fonts/JetBrainsMono-Regular.3eacd637.woff2",
    "revision": "3eacd63796de4b39bc102dae7b143ca5"
  },
  {
    "url": "assets/img/203947383.22907ea0.gif",
    "revision": "22907ea00e5b3d6ec8c1f62e9f99d281"
  },
  {
    "url": "assets/img/image-20200627190342488.36d57cc2.png",
    "revision": "36d57cc2db5f458ade6aac3300f547ed"
  },
  {
    "url": "assets/img/image-20200627191411507.b77985bf.png",
    "revision": "b77985bf2ab21c13b481250c3cc16d15"
  },
  {
    "url": "assets/img/image-20200627193219662.945b8544.png",
    "revision": "945b8544ee237688ff09623d33f70274"
  },
  {
    "url": "assets/img/image-20200627194020031.0fb81db6.png",
    "revision": "0fb81db69693ab6804034f28c8f80777"
  },
  {
    "url": "assets/img/image-20200702230738787.888c90b5.png",
    "revision": "888c90b5dc955324df3e29bdf89db01c"
  },
  {
    "url": "assets/img/image-20200702231655495.86f87b0b.png",
    "revision": "86f87b0b18545782f536067e82ac0320"
  },
  {
    "url": "assets/img/image-20200702235120016.2db774e9.png",
    "revision": "2db774e997003d4f95126bddad4c6c08"
  },
  {
    "url": "assets/img/image-20200702235213223.1b70f55b.png",
    "revision": "1b70f55be074f79d721aaf85c3f03ea9"
  },
  {
    "url": "assets/img/image-20200703215903031.8ffc1996.png",
    "revision": "8ffc1996dc054cb04759c47e311bccbc"
  },
  {
    "url": "assets/img/image-20200703221437344.19a0a264.png",
    "revision": "19a0a2646640e7819619f385dedec589"
  },
  {
    "url": "assets/img/image-20200703223528941.02cbe7fb.png",
    "revision": "02cbe7fbb963bd5e845c211ecfc4a042"
  },
  {
    "url": "assets/img/image-20200705160412938.9df997f2.png",
    "revision": "9df997f259658d4f3b7cc63070b5f4a1"
  },
  {
    "url": "assets/img/image-20200705160945310.965a3851.png",
    "revision": "965a385193b38ae0f0d27215ee2aba72"
  },
  {
    "url": "assets/img/image-20200705231038781.c4f9a217.png",
    "revision": "c4f9a217e93fac71f076247f5d5c33dc"
  },
  {
    "url": "assets/img/image-20200709222310216.64b405b0.png",
    "revision": "64b405b0867d56c1fcc22cd3a61ca1c7"
  },
  {
    "url": "assets/img/image-20200709225824174.90c1b47b.png",
    "revision": "90c1b47bce359af3df84e29b3ea85eb9"
  },
  {
    "url": "assets/img/image-20200709232553514.94f7f759.png",
    "revision": "94f7f759d7ace9ab784bb164bd78232d"
  },
  {
    "url": "assets/img/image-20200711162831664.29e97a9f.png",
    "revision": "29e97a9f89cb1aff6dfa1a0bda276e50"
  },
  {
    "url": "assets/img/image-20200711171643328.ec31e13b.png",
    "revision": "ec31e13b226987786d616b4fcf0bd225"
  },
  {
    "url": "assets/img/image-20200711205035714.30a7bed8.png",
    "revision": "30a7bed824cc088c8361ade038539d82"
  },
  {
    "url": "assets/img/image-20200711205412367.9dc6fe6b.png",
    "revision": "9dc6fe6b9980ecedb11aacf3dee212ca"
  },
  {
    "url": "assets/img/image-20200711213451604.9bd4f6cb.png",
    "revision": "9bd4f6cb8e8811614f84fb5d1f79206f"
  },
  {
    "url": "assets/img/image-20200711220623424.af16c2c1.png",
    "revision": "af16c2c1cfa456cd8d3ce267a818c7ca"
  },
  {
    "url": "assets/img/image-20200711221339098.c4fd26e1.png",
    "revision": "c4fd26e1bda8213fdfd94d4fed3f4fcb"
  },
  {
    "url": "assets/img/image-20200713162018274.19487c48.png",
    "revision": "19487c480463aedc6be60e706ef71ccf"
  },
  {
    "url": "assets/img/image-20200713163829412.1863fa65.png",
    "revision": "1863fa65204d2e1e3e7c4aa68d123b10"
  },
  {
    "url": "assets/img/image-20200713165341858.925519f0.png",
    "revision": "925519f0a6cd4642694fc236933131d3"
  },
  {
    "url": "assets/img/image-20200713165636281.04c71557.png",
    "revision": "04c715570f34c5216c9420208010e257"
  },
  {
    "url": "assets/img/image-20200713165758669.9f4a1358.png",
    "revision": "9f4a1358d26262427a8fe64cc4fb7879"
  },
  {
    "url": "assets/img/image-20200713201716641.1aa4f180.png",
    "revision": "1aa4f180216385df6ebdbc31e57571ee"
  },
  {
    "url": "assets/img/image-20200713201822143.26bbdc49.png",
    "revision": "26bbdc4990294556bfc979f9bff7c029"
  },
  {
    "url": "assets/img/image-20200713202539691.5dae3a30.png",
    "revision": "5dae3a309a154695e525f7b9845613f8"
  },
  {
    "url": "assets/img/image-20200715221248050.8e68b5b1.png",
    "revision": "8e68b5b1ece6289d267cbd8b4f094859"
  },
  {
    "url": "assets/img/image-20200715223005566.610aef49.png",
    "revision": "610aef49d4bc6441443095f35c7fdbf8"
  },
  {
    "url": "assets/img/image-20200715223033152.d7e82b07.png",
    "revision": "d7e82b07a472b6776bbc7257732c0c2a"
  },
  {
    "url": "assets/img/image-20200717225215349.a45f9eda.png",
    "revision": "a45f9edac1a2c3a5ae55581895b35699"
  },
  {
    "url": "assets/img/image-20200805220942252.eb73deea.png",
    "revision": "eb73deeaaedc237e6b8c2a0e2aa58516"
  },
  {
    "url": "assets/img/image-20200805222417998.8457996b.png",
    "revision": "8457996b98cc34a8e5cfa4ae477fcb9e"
  },
  {
    "url": "assets/img/image-20200805223200472.6446d1a3.png",
    "revision": "6446d1a3cca2743c1aa7ba1a6983627f"
  },
  {
    "url": "assets/img/image-20200816230100524.4d3f188f.png",
    "revision": "4d3f188fe8985f8807f5e70610b01bce"
  },
  {
    "url": "assets/img/image-20200816230724232.8f14688b.png",
    "revision": "8f14688b664372f2e0e33850736bc47f"
  },
  {
    "url": "assets/img/image-20200816231058264.f58606f8.png",
    "revision": "f58606f88b8e493586df5a441187d2b1"
  },
  {
    "url": "assets/img/image-20200830144951559.1a5309dd.png",
    "revision": "1a5309dd38f1dd1ba052463c6615a2db"
  },
  {
    "url": "assets/img/image-20200830150132228.fd1365c5.png",
    "revision": "fd1365c58d2c5ef6cbb4270a17877d50"
  },
  {
    "url": "assets/img/image-20200831223506200.7f06f826.png",
    "revision": "7f06f826ebfd01b0fb0f195261920745"
  },
  {
    "url": "assets/img/image-20200904215151961.fb7ae2c7.png",
    "revision": "fb7ae2c79e1fbb9595051445f4ba0240"
  },
  {
    "url": "assets/img/image-20200906214408546.595119b0.png",
    "revision": "595119b0d9d65f901069cb7fc1d977c9"
  },
  {
    "url": "assets/img/image-20200906214834101.e71e058f.png",
    "revision": "e71e058f8c478426b1ca674febb0a452"
  },
  {
    "url": "assets/img/image-20200907212010601.01bae15c.png",
    "revision": "01bae15cd49c8081345dda6436c1f6c3"
  },
  {
    "url": "assets/img/image-20200908221124876.9441d088.png",
    "revision": "9441d088f24fd77884ca847688b17b26"
  },
  {
    "url": "assets/img/image-20200908221355406.11dea125.png",
    "revision": "11dea12546a540c838dea6c3250bbb5d"
  },
  {
    "url": "assets/img/image-20200908222439882.133c23e8.png",
    "revision": "133c23e8df61efb8ca50207ef2083379"
  },
  {
    "url": "assets/img/image-20200908223049160.e60a4e06.png",
    "revision": "e60a4e06f22684d379140fe8b821828a"
  },
  {
    "url": "assets/img/image-20200916220031140.8be7da73.png",
    "revision": "8be7da73a1284ac3030a802daf4ca342"
  },
  {
    "url": "assets/img/image-20200916235619927.b4590f48.png",
    "revision": "b4590f4836913fc5a93d7ba65fda005e"
  },
  {
    "url": "assets/img/image-20200922221107753.dbfc01a7.png",
    "revision": "dbfc01a7dbc11a55ed98fd2882662bae"
  },
  {
    "url": "assets/img/image-20201002133112701.daddf5cf.png",
    "revision": "daddf5cf6e6d5ae32c827d10f5888b40"
  },
  {
    "url": "assets/img/image-20201002133509574.638efa5e.png",
    "revision": "638efa5ed457b3623f7505cf6fa20e31"
  },
  {
    "url": "assets/img/image-20201002134006867.108effbe.png",
    "revision": "108effbe947bb3765cf454b850305c0c"
  },
  {
    "url": "assets/img/image-20201018220112517.76308f3b.png",
    "revision": "76308f3bce4588b9e6727e8bc033f400"
  },
  {
    "url": "assets/img/image-20201018220112518.184d0a16.png",
    "revision": "184d0a16cfdf2de13450c4270de9ee73"
  },
  {
    "url": "assets/img/image-20201018220112519.cb204ad1.png",
    "revision": "cb204ad1e18cba964fa369c77e9249de"
  },
  {
    "url": "assets/img/image-20201018220112519.dcaacab3.png",
    "revision": "dcaacab3923da324b2c2113e63155c3b"
  },
  {
    "url": "assets/img/image-20201111223533738.7221c92f.png",
    "revision": "7221c92f059d5f611942755fac762a87"
  },
  {
    "url": "assets/img/image-20201111225349487.b6ae695f.png",
    "revision": "b6ae695f9baf4ed4572d923f688017be"
  },
  {
    "url": "assets/img/image-20201116143825510.f9c5f617.png",
    "revision": "f9c5f617953b3ebe89fea5591a9d74d5"
  },
  {
    "url": "assets/img/image-20201116144728699.b13209fe.png",
    "revision": "b13209fe2babc03a91aa21a70f4d90fc"
  },
  {
    "url": "assets/img/image-20201116145853845.a27667aa.png",
    "revision": "a27667aa0a1de438e178deab056dc12c"
  },
  {
    "url": "assets/img/image-20201116150501717.c8b6ae4c.png",
    "revision": "c8b6ae4c8d07273982e9ef74da8ccf5c"
  },
  {
    "url": "assets/img/image-20201116151129752.2d1490b6.png",
    "revision": "2d1490b6c3961d994460aae5dbde3681"
  },
  {
    "url": "assets/img/image-20201116151616119.b0856543.png",
    "revision": "b0856543184c881c8f9c319bc2a4ab94"
  },
  {
    "url": "assets/img/image-20201116151828693.5f9c3d69.png",
    "revision": "5f9c3d69489533ff6c16b92e284379e1"
  },
  {
    "url": "assets/img/image-20201116152811909.2516f1d3.png",
    "revision": "2516f1d39638bb619382a68100ad8edf"
  },
  {
    "url": "assets/img/image-20201116163114510.8a97540e.png",
    "revision": "8a97540e974da58a9fc191291d4d5f07"
  },
  {
    "url": "assets/img/image-20201129163427823.6a261a22.png",
    "revision": "6a261a22b4f9311a0cdb4f1686d0f3fb"
  },
  {
    "url": "assets/img/image-20201201224945859.80f58250.png",
    "revision": "80f582500627b36015f4913d5c056855"
  },
  {
    "url": "assets/img/image-20201202223735706.e82092fa.png",
    "revision": "e82092fa8dcc6fc816a2867b719e024f"
  },
  {
    "url": "assets/img/image-20201202225302702.8c95a6d4.png",
    "revision": "8c95a6d4df5596af292c42be93f2c66b"
  },
  {
    "url": "assets/img/image-20201202230643686.f3691332.png",
    "revision": "f3691332bc9c9d6c80699d1d3c62cc4f"
  },
  {
    "url": "assets/img/image-20201206220455853.ea7b0cd6.png",
    "revision": "ea7b0cd6c6499e9d3ba8117c607ef2b0"
  },
  {
    "url": "assets/img/image-20201206220557693.583d6ae8.png",
    "revision": "583d6ae8f1e128446d6a43c1c9479ee8"
  },
  {
    "url": "assets/img/image-20201206220902251.e01d9c82.png",
    "revision": "e01d9c82f9e323f83d56c654c18d72ea"
  },
  {
    "url": "assets/img/image-20201206222442413.5b760741.png",
    "revision": "5b7607416d70993ed3abe2eea78eab88"
  },
  {
    "url": "assets/img/image-20201206222914140.202f9def.png",
    "revision": "202f9def9780fe90e7315a593a4fd2bf"
  },
  {
    "url": "assets/img/image-20201206223207361.ba4f6e75.png",
    "revision": "ba4f6e75c5d4d4dd8f9bba0175a2c450"
  },
  {
    "url": "assets/img/image-20201206223333533.608f1d62.png",
    "revision": "608f1d6235c1ea17819ef87c781b69ec"
  },
  {
    "url": "assets/img/image-20201206223617296.e756160b.png",
    "revision": "e756160b00759220902cfebbc3697e29"
  },
  {
    "url": "assets/img/image-20201206223650661.cddf4a8a.png",
    "revision": "cddf4a8a88fc451c14486cc441a6e9fb"
  },
  {
    "url": "assets/img/image-20201206223852022.eeea349c.png",
    "revision": "eeea349ca29911a7ff09020adcfdd141"
  },
  {
    "url": "assets/img/image-20201206223932290.03af2c98.png",
    "revision": "03af2c987be2e980d4caeea0272cdb8a"
  },
  {
    "url": "assets/img/image-20201212161501335.f1a13430.png",
    "revision": "f1a13430902e1dd9b97c59def7a6c209"
  },
  {
    "url": "assets/img/image-20201212163112945.7f485921.png",
    "revision": "7f4859212260aa3ae919d09b842ba22f"
  },
  {
    "url": "assets/img/image-20201212163237572.b51a6016.png",
    "revision": "b51a60164690b0e40a77b8934d4e1f15"
  },
  {
    "url": "assets/img/image-20201212163552818.d82103bf.png",
    "revision": "d82103bf3f6f2e88b08a3e2f1a9cd4f3"
  },
  {
    "url": "assets/img/image-20201213093040271.e007f859.png",
    "revision": "e007f8596495dfbc9d42b7c4e032b1c5"
  },
  {
    "url": "assets/img/image-20201213095733801.0e923fd5.png",
    "revision": "0e923fd55fe4988634e38685520a1e24"
  },
  {
    "url": "assets/img/image-20201214221333991.3c1471de.png",
    "revision": "3c1471de29320f7dfbefb2ec26c36397"
  },
  {
    "url": "assets/img/image-20201216231821371.0cae25c0.png",
    "revision": "0cae25c0bf08715d7c327bcb927da15a"
  },
  {
    "url": "assets/img/image-20201216231850849.c6a35866.png",
    "revision": "c6a358666a85afd6e3848a80a6083bad"
  },
  {
    "url": "assets/img/image-20201216231906429.eb08c53a.png",
    "revision": "eb08c53a34b63699cc13d0a9bef66d87"
  },
  {
    "url": "assets/img/image-20201220170837577.f34edfc5.png",
    "revision": "f34edfc5144b1ae770ad8ad8347474db"
  },
  {
    "url": "assets/img/image-20201220171853831.2a28f89d.png",
    "revision": "2a28f89d9b99f8e650288657483537bb"
  },
  {
    "url": "assets/img/image-20201220190245453.52d20e0f.png",
    "revision": "52d20e0f7857aaeac518341aef3122e9"
  },
  {
    "url": "assets/img/image-20201220190309542.624d0bf6.png",
    "revision": "624d0bf6b3323248cd0a3974f9c1bfe6"
  },
  {
    "url": "assets/img/image-20201220190339273.a872bf3e.png",
    "revision": "a872bf3eb6fe24dbf38001bcd3b4aea4"
  },
  {
    "url": "assets/img/image-20201220203654437.ed835ffd.png",
    "revision": "ed835ffd6a2144f6d56979aef529bbb0"
  },
  {
    "url": "assets/img/image-20201220203955282.e86e5c40.png",
    "revision": "e86e5c40938f5a3b3e8988d99ef7e6ea"
  },
  {
    "url": "assets/img/image-20201220205945279.0506657c.png",
    "revision": "0506657c423aa657dd1c4abe090ffdff"
  },
  {
    "url": "assets/img/image-20201221215732016.9dd5394e.png",
    "revision": "9dd5394ea8842b4f3bc00aa32fc3d991"
  },
  {
    "url": "assets/img/image-20201221222129296.134b58be.png",
    "revision": "134b58be741d988c0ec2f707e164d3bc"
  },
  {
    "url": "assets/img/image-20201222211717542.b4ba77d6.png",
    "revision": "b4ba77d66157a67cd76a2f9516bee495"
  },
  {
    "url": "assets/img/image-20201222212402348.0a394a57.png",
    "revision": "0a394a57768a911e35f21ec303f71c8b"
  },
  {
    "url": "assets/img/image-20201222213006536.6ba634ed.png",
    "revision": "6ba634edbfa313a13b94dcaffe354874"
  },
  {
    "url": "assets/img/image-20201222220054922.4bb0c572.png",
    "revision": "4bb0c572199349c1d4ee97a649b56c44"
  },
  {
    "url": "assets/img/image-20201222220658607.7e19b48d.png",
    "revision": "7e19b48d9ba6e5384fd4d57d1b8f30a0"
  },
  {
    "url": "assets/img/image-20201222220819603.47306946.png",
    "revision": "4730694677862b67108af83c0f1cd4d0"
  },
  {
    "url": "assets/img/image-20201222221007671.4cd4fac3.png",
    "revision": "4cd4fac3dd7a711fac21c476cb2083df"
  },
  {
    "url": "assets/img/image-20201222221737672.96aa55f1.png",
    "revision": "96aa55f1dcf028ae6cbfc77cd7a6e6f5"
  },
  {
    "url": "assets/img/image-20201222222211562.e35fc788.png",
    "revision": "e35fc788e704ea7e4d811f8e8c39f33d"
  },
  {
    "url": "assets/img/image-20201222223140613.44b569bb.png",
    "revision": "44b569bb35cdd339fdd3882bc06e666e"
  },
  {
    "url": "assets/img/image-20201222223425500.4f29c845.png",
    "revision": "4f29c845611e6411f8d45b6ac992ee04"
  },
  {
    "url": "assets/img/image-20201222223829797.1834a017.png",
    "revision": "1834a0174bff35e72597957f0831cbbe"
  },
  {
    "url": "assets/img/image-20201222223916961.448151e2.png",
    "revision": "448151e2e4cde73696581939039a2856"
  },
  {
    "url": "assets/img/image-20201223212903438.4e8c218e.png",
    "revision": "4e8c218e81633fdda32b5fa71f6925e5"
  },
  {
    "url": "assets/img/image-20201223214612995.cbe59331.png",
    "revision": "cbe59331938f2d90b49c8283c9f3e04f"
  },
  {
    "url": "assets/img/image-20201223215140821.2410bce6.png",
    "revision": "2410bce6cbdf23d006030a4893679d2f"
  },
  {
    "url": "assets/img/image-20201223220236107.a72d6e7a.png",
    "revision": "a72d6e7a16acd8f040f00922bfcb6c92"
  },
  {
    "url": "assets/img/image-20210101151015156.a926927f.png",
    "revision": "a926927f53db4691348737eb14c7f8aa"
  },
  {
    "url": "assets/img/image-20210101151050990.52bd2bd3.png",
    "revision": "52bd2bd3ed27bc2aa943fdb3306d636c"
  },
  {
    "url": "assets/img/image-20210101151445645.b111931f.png",
    "revision": "b111931fe99b676df3f2dfe2c5a1c59b"
  },
  {
    "url": "assets/img/image-20210101152209177.0ae3fbdc.png",
    "revision": "0ae3fbdc34de0dfc2619aeeeb751444f"
  },
  {
    "url": "assets/img/image-20210101154657256.e47f87b1.png",
    "revision": "e47f87b1a827709ff7c116ec563a370d"
  },
  {
    "url": "assets/img/image-20210101173349039.6492184a.png",
    "revision": "6492184a6edc82d15a541696f4cffe0b"
  },
  {
    "url": "assets/img/image-20210102141247460.c140af98.png",
    "revision": "c140af98d6811936036bf1a052d6926b"
  },
  {
    "url": "assets/img/image-20210102151953031.de99b9d6.png",
    "revision": "de99b9d6e9e652672e1dfc29c77285d0"
  },
  {
    "url": "assets/img/image-20210102224320581.a7812e0c.png",
    "revision": "a7812e0c7b00f1958a014c8d43ab66ce"
  },
  {
    "url": "assets/img/image-20210103123733067.ca318d67.png",
    "revision": "ca318d6739b185e94b46cf9c0dcb05e7"
  },
  {
    "url": "assets/img/image-20210103124813651.827c4b5f.png",
    "revision": "827c4b5fa6306bc527e4047342029b34"
  },
  {
    "url": "assets/img/image-20210103214314948.57bca6e9.png",
    "revision": "57bca6e965980347d297af53637a8c11"
  },
  {
    "url": "assets/img/image-20210103214344856.616b9ff4.png",
    "revision": "616b9ff4f26193baf661b02e4cf3f1e0"
  },
  {
    "url": "assets/img/image-20210103214429270.71cb0b69.png",
    "revision": "71cb0b699e8dd110ad344d84e0d48d09"
  },
  {
    "url": "assets/img/image-20210103214507570.c7aa65fa.png",
    "revision": "c7aa65fa942df6d598f8cfd4eac5ac99"
  },
  {
    "url": "assets/img/image-20210103214551781.c92cf601.png",
    "revision": "c92cf601a965e2c6dd20a9e141f72330"
  },
  {
    "url": "assets/img/image-20210103214636453.98b47f20.png",
    "revision": "98b47f2067e5191d37013fa3f227d6aa"
  },
  {
    "url": "assets/img/image-20210103214808419.e8e4378c.png",
    "revision": "e8e4378c187b9cf05bcaef2c1129c10e"
  },
  {
    "url": "assets/img/image-20210103215655806.02bd6ae8.png",
    "revision": "02bd6ae80e5192bf5b0f7892c0e7ee19"
  },
  {
    "url": "assets/img/image-20210103220912929.4da32422.png",
    "revision": "4da3242204af87506a8363bc726bf00a"
  },
  {
    "url": "assets/img/image-20210103221319413.7a26aa89.png",
    "revision": "7a26aa89af5163282c38f67fa04d3a1d"
  },
  {
    "url": "assets/img/image-20210103221650411.83f71473.png",
    "revision": "83f71473335271c89c6272796f8faff8"
  },
  {
    "url": "assets/img/image-20210103222000752.7c53f913.png",
    "revision": "7c53f9137d347905958e5dff6c1b19d1"
  },
  {
    "url": "assets/img/image-20210104140833558.70890b15.png",
    "revision": "70890b154ba6b3de04ff7a6af0f80844"
  },
  {
    "url": "assets/img/image-20210104141937284.0c6d4a0c.png",
    "revision": "0c6d4a0c6f80c068b4f19114c0ad95f6"
  },
  {
    "url": "assets/img/image-20210104144759316.855b8c32.png",
    "revision": "855b8c32ae66581947c60cd5f31d1d0b"
  },
  {
    "url": "assets/img/image-20210105095414229.8bc8203f.png",
    "revision": "8bc8203fb3fe3ffef360dcdd93a96812"
  },
  {
    "url": "assets/img/image-20210105100343828.0de8f27a.png",
    "revision": "0de8f27a8c913fb3cd6daa883b29c3b7"
  },
  {
    "url": "assets/img/image-20210105100437798.2eca0c17.png",
    "revision": "2eca0c177e776e4784dd4fd2e7c2336d"
  },
  {
    "url": "assets/img/image-20210105100618462.6d9ac0e3.png",
    "revision": "6d9ac0e37a23ad5c349d8d14722006f4"
  },
  {
    "url": "assets/img/image-20210105103652693.48fe357e.png",
    "revision": "48fe357eba53cf9e1381a4b86c501162"
  },
  {
    "url": "assets/img/image-20210105135521375.681fb39d.png",
    "revision": "681fb39d07bab3009cd21e9539647850"
  },
  {
    "url": "assets/img/image-20210105135627931.3ba7de7a.png",
    "revision": "3ba7de7a11c526839bcd8ad5c32a0e91"
  },
  {
    "url": "assets/img/image-20210105140059987.bb6542de.png",
    "revision": "bb6542de28db6cab09d2fff9390fe90d"
  },
  {
    "url": "assets/img/image-20210105140826290.dbc6fdd7.png",
    "revision": "dbc6fdd752217ffa57a75ff4684e2c32"
  },
  {
    "url": "assets/img/image-20210105181333340.2593f8ad.png",
    "revision": "2593f8ad958bfd0f5a78f431211c993c"
  },
  {
    "url": "assets/img/image-20210105181340256.2593f8ad.png",
    "revision": "2593f8ad958bfd0f5a78f431211c993c"
  },
  {
    "url": "assets/img/image-20210105202655674.9f5e5c95.png",
    "revision": "9f5e5c954889d8b28da101f3cd13f1fd"
  },
  {
    "url": "assets/img/image-20210110171534255.e479a789.png",
    "revision": "e479a7890f53cc6ddce72f12223320a1"
  },
  {
    "url": "assets/img/image-20210110171628121.d4b42ca9.png",
    "revision": "d4b42ca9636d6edfd493f252a1435034"
  },
  {
    "url": "assets/img/image-20210110172409026.7c57dece.png",
    "revision": "7c57dece4f3325e5fbc987cf03d2a1dd"
  },
  {
    "url": "assets/img/image-20210110202919199.5b222549.png",
    "revision": "5b222549612e29a78b9e1a23c6ec15eb"
  },
  {
    "url": "assets/img/image-20210110215938801.99322b3f.png",
    "revision": "99322b3f4b917391e5e6b0782a9ae552"
  },
  {
    "url": "assets/img/image-20210111001913357.9cd7ae7b.png",
    "revision": "9cd7ae7b1f2eb1814c3b947cde162a1e"
  },
  {
    "url": "assets/img/image-20210111002248408.457cbe72.png",
    "revision": "457cbe721bdc91b7b8cbb04a172ed5f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/img/t1.aa020c76.png",
    "revision": "aa020c769da6187b328e60a27ef3975f"
  },
  {
    "url": "assets/img/t2.e1a2dace.png",
    "revision": "e1a2dace6414dbd197561880e19f6222"
  },
  {
    "url": "assets/js/10.0b50ac1d.js",
    "revision": "842158a0c6a343b8ff0d328e674dc6a8"
  },
  {
    "url": "assets/js/11.482fe785.js",
    "revision": "c55f8502c12de6449f4db32bf86c843c"
  },
  {
    "url": "assets/js/12.dc83689e.js",
    "revision": "e2e867045baa434168af1af1c4b5ebf4"
  },
  {
    "url": "assets/js/13.3308d859.js",
    "revision": "cce2c263cec0c1bb9a834e05af15b71e"
  },
  {
    "url": "assets/js/14.3847e348.js",
    "revision": "e0e69123c93ec30ec8159eee1e0f7e6d"
  },
  {
    "url": "assets/js/15.d63e7f0b.js",
    "revision": "cf43e411cb2eaa284ffc585d4176b3a2"
  },
  {
    "url": "assets/js/16.8dc365e0.js",
    "revision": "25257f0b3198b30c4daa3d7e3418382e"
  },
  {
    "url": "assets/js/17.b0216def.js",
    "revision": "43bfac219bf1d67e6147fe08a18b63dc"
  },
  {
    "url": "assets/js/18.7637d78a.js",
    "revision": "5e8ebc36445f4785121de59fe4c2382a"
  },
  {
    "url": "assets/js/19.bf3085e2.js",
    "revision": "0582b3427617a79200a1481c17ecd52a"
  },
  {
    "url": "assets/js/2.40576320.js",
    "revision": "29429d31184827d4a964582835679604"
  },
  {
    "url": "assets/js/20.f4977116.js",
    "revision": "12e5560e479f2891a6545a1fd52edcdf"
  },
  {
    "url": "assets/js/21.3194ce24.js",
    "revision": "86dde996555814aa878f5167bbd616a4"
  },
  {
    "url": "assets/js/22.ef7a11ec.js",
    "revision": "56f91fca178b4a550a4a3ca7b3ba4eaa"
  },
  {
    "url": "assets/js/23.374c358e.js",
    "revision": "084d26b07bfe3d5dc2283b385f94b64e"
  },
  {
    "url": "assets/js/24.a4d4fe37.js",
    "revision": "e7e13dc1229f48e98c3adb0a09778007"
  },
  {
    "url": "assets/js/25.201f6b7a.js",
    "revision": "bc9ff44084393a81fd334181890d85f6"
  },
  {
    "url": "assets/js/26.5d983f28.js",
    "revision": "36ca5362fedb2bee25865bd236c15ea4"
  },
  {
    "url": "assets/js/27.27c0241e.js",
    "revision": "682f5adc987cbbf67ef0519d4eb15a41"
  },
  {
    "url": "assets/js/28.7fe5e43a.js",
    "revision": "fbbe93273380239b441b163dff8ce20f"
  },
  {
    "url": "assets/js/29.9b7d8172.js",
    "revision": "6d1de0167ae51e0a275dd78499b30286"
  },
  {
    "url": "assets/js/3.6d7b4dc3.js",
    "revision": "3319d85dc3eb33c6be84907518ebe966"
  },
  {
    "url": "assets/js/30.bc602106.js",
    "revision": "df376776595cb888f23faff05f7a9f52"
  },
  {
    "url": "assets/js/31.83a18537.js",
    "revision": "e5567c620d4b1adefabf0fa26f02251c"
  },
  {
    "url": "assets/js/32.2af18468.js",
    "revision": "19dcb042a03566b751fd52dd3ac7809c"
  },
  {
    "url": "assets/js/33.fdbc57da.js",
    "revision": "ade88f1605c1bdbc91b0ba2dbe53d7b5"
  },
  {
    "url": "assets/js/34.64b4dee5.js",
    "revision": "5287b4d5487d3fa168041b79ab2d0425"
  },
  {
    "url": "assets/js/35.b27aee9b.js",
    "revision": "0a34c4518ce4b92787ef79c84d510225"
  },
  {
    "url": "assets/js/36.b4d20a6e.js",
    "revision": "8efdfa7ded1b5082f426a4053a334336"
  },
  {
    "url": "assets/js/37.d40f0bf0.js",
    "revision": "e038757dad54e0c7a3ac00b0252bacc9"
  },
  {
    "url": "assets/js/38.ed9f2aa1.js",
    "revision": "55edeece41675a6905dd69c27ff9fef5"
  },
  {
    "url": "assets/js/39.dbb782bd.js",
    "revision": "07d8bc0bd6401479f6f1061a56fa811f"
  },
  {
    "url": "assets/js/4.bd7b0d31.js",
    "revision": "ed7e7447051e2db189ed42a269e33322"
  },
  {
    "url": "assets/js/40.b1d86eee.js",
    "revision": "6ed4e297716821bcab74b01b43d2ad1f"
  },
  {
    "url": "assets/js/41.c065def3.js",
    "revision": "f8bc34216bf5110eac403fb0d71e8c45"
  },
  {
    "url": "assets/js/42.2707773b.js",
    "revision": "c98ec0f25aa665badb93ee1fcd82512b"
  },
  {
    "url": "assets/js/43.7a4b1a45.js",
    "revision": "5cfe3cee5fd56b92eb084adb1aee80af"
  },
  {
    "url": "assets/js/44.c06555dd.js",
    "revision": "4e1cc859551e17e0754c6ab324f6c217"
  },
  {
    "url": "assets/js/45.9149f76b.js",
    "revision": "fc801679805053dfb44f9bbe426b9c26"
  },
  {
    "url": "assets/js/46.4d77a7cf.js",
    "revision": "ce7e12b7949cd06396d8ead00bf20321"
  },
  {
    "url": "assets/js/47.3d7b8bce.js",
    "revision": "37d8f56687aa5ff8b2fcdcbe254fb1d4"
  },
  {
    "url": "assets/js/48.4799a721.js",
    "revision": "86fec3be5459d46574f37678b009c65a"
  },
  {
    "url": "assets/js/49.ff778c1c.js",
    "revision": "ccabbfda3e376768830ad63f1bf58baa"
  },
  {
    "url": "assets/js/5.2b2c86dc.js",
    "revision": "1ee13d7a7f756fd84fc34c3f5761b915"
  },
  {
    "url": "assets/js/50.822b1b0a.js",
    "revision": "011dcadfc548655b893b435f4d239e0c"
  },
  {
    "url": "assets/js/51.ddf22679.js",
    "revision": "20c30125dcb51ef8e760cff3d2a7a10f"
  },
  {
    "url": "assets/js/52.0b6d0543.js",
    "revision": "7aa8132310a0051cc1f1277eb29a272c"
  },
  {
    "url": "assets/js/53.1a7d2e3f.js",
    "revision": "02cc3cea3243b8b6059b41c157bdee50"
  },
  {
    "url": "assets/js/54.2826097e.js",
    "revision": "e3acc5be4441eabaf3f0f0c1c366f81a"
  },
  {
    "url": "assets/js/55.9363eebd.js",
    "revision": "bbab293da01712760df714df4748c9b5"
  },
  {
    "url": "assets/js/56.0e270589.js",
    "revision": "35a0baa372b37a9217ba46b2c0995f74"
  },
  {
    "url": "assets/js/57.689cbcb0.js",
    "revision": "c4a6dff0b4a89dab58ab79c659f32a29"
  },
  {
    "url": "assets/js/58.a3fbec83.js",
    "revision": "7e1b8a5a6d8f719ebd880f694b805215"
  },
  {
    "url": "assets/js/59.f828df35.js",
    "revision": "b265a3f465cd32e6cc4a305f1a521c34"
  },
  {
    "url": "assets/js/6.d6bbcea6.js",
    "revision": "38a6df1685a9eecec6c623e09ff1f93f"
  },
  {
    "url": "assets/js/60.0d544656.js",
    "revision": "a7593ee8d7c773a748a6aca96014841b"
  },
  {
    "url": "assets/js/61.50113774.js",
    "revision": "40b6639c5714be037d617a36a12aace0"
  },
  {
    "url": "assets/js/62.447d7b7a.js",
    "revision": "38dd4e7b692fc3a3a66efd8e8ce324a5"
  },
  {
    "url": "assets/js/63.1f1d3f94.js",
    "revision": "0d2e2b5d342de00c0a439e9fe8210a95"
  },
  {
    "url": "assets/js/64.cb34772a.js",
    "revision": "87e2bd3d04d07e1c1380b811ff5ac526"
  },
  {
    "url": "assets/js/65.a8094161.js",
    "revision": "4c9baf577b57fab711280ef2c7046cb4"
  },
  {
    "url": "assets/js/66.25d14d54.js",
    "revision": "8264f97b0a37598fbcdfb0bf9aeab0e0"
  },
  {
    "url": "assets/js/67.dc9f1452.js",
    "revision": "7854200fb80b71d9ca62dc75a3d98ec7"
  },
  {
    "url": "assets/js/68.60c9995f.js",
    "revision": "c05eed24dc35ae2bf0be9b71d0466e2d"
  },
  {
    "url": "assets/js/69.84f73c28.js",
    "revision": "ba5096258cbfe4e25ec373702e6ee747"
  },
  {
    "url": "assets/js/7.4a04c401.js",
    "revision": "494b6d725a596df2c3920d0e347cd306"
  },
  {
    "url": "assets/js/70.a2c061c1.js",
    "revision": "4c8a262e85d2dfadbec9b6f4567ff3ee"
  },
  {
    "url": "assets/js/71.cebbaa40.js",
    "revision": "894aa9c6d9f373ad87cbb703aa30db83"
  },
  {
    "url": "assets/js/72.5d3f099e.js",
    "revision": "1558856850f8e57c018d2cf0f0e2e2bb"
  },
  {
    "url": "assets/js/73.97d57955.js",
    "revision": "81dace4ffb8b839a7995cbf8486b76f4"
  },
  {
    "url": "assets/js/74.32f5fc28.js",
    "revision": "084705009d0b77bea0700b74152ba72c"
  },
  {
    "url": "assets/js/75.ab80eea4.js",
    "revision": "0b600a97f6c81ef7684498bd88c50f7a"
  },
  {
    "url": "assets/js/76.d3f8f285.js",
    "revision": "aae07ee64f56bf7417f21cf2fba83eca"
  },
  {
    "url": "assets/js/77.e2bb9c03.js",
    "revision": "cb41b3df074c469dbd0ded40896a83c9"
  },
  {
    "url": "assets/js/78.4e1e8df4.js",
    "revision": "b064ea490bc6817e1a05b06a3f71e67b"
  },
  {
    "url": "assets/js/79.8757bc09.js",
    "revision": "5cbe5712d9e2a11585553e01fd8afbd5"
  },
  {
    "url": "assets/js/8.c7424520.js",
    "revision": "0b3fe283e04c0e6b140f9c12a171462c"
  },
  {
    "url": "assets/js/80.966b967b.js",
    "revision": "eadb1bd5c93cf6a588d230fde65058ef"
  },
  {
    "url": "assets/js/9.3c3bf554.js",
    "revision": "358cd872d7a4a78eb38f9a01dc43a5e5"
  },
  {
    "url": "assets/js/app.44350dbc.js",
    "revision": "d159618fbcce8f6c4994a36d35feb4bb"
  },
  {
    "url": "dsalg-java-hsp/01/index.html",
    "revision": "e362f9a86882b1f3d1a671cd06a22935"
  },
  {
    "url": "dsalg-java-hsp/02/index.html",
    "revision": "939afd1cf159434b70ff6e4b24ba9bd5"
  },
  {
    "url": "dsalg-java-hsp/03/01.html",
    "revision": "8ab421099675090f57d08eead526a731"
  },
  {
    "url": "dsalg-java-hsp/03/02.html",
    "revision": "8703013d78bb846313074b383277141c"
  },
  {
    "url": "dsalg-java-hsp/03/index.html",
    "revision": "614f7a6741e9f37c16a4c670e68caf23"
  },
  {
    "url": "dsalg-java-hsp/04/01.html",
    "revision": "364807424063718998e242639adf844c"
  },
  {
    "url": "dsalg-java-hsp/04/02.html",
    "revision": "7424879c5a3700b54b553b2e17c8ee32"
  },
  {
    "url": "dsalg-java-hsp/04/03.html",
    "revision": "3a8955914d4273ee9dc40383ca360b86"
  },
  {
    "url": "dsalg-java-hsp/04/04.html",
    "revision": "1f62ddef0d92e9c92140c7383ff46e57"
  },
  {
    "url": "dsalg-java-hsp/04/index.html",
    "revision": "00fb65137851b102a5bf2f8df7d274fb"
  },
  {
    "url": "dsalg-java-hsp/05/01.html",
    "revision": "02f8d388b4b02fc23af2a5b688c5e197"
  },
  {
    "url": "dsalg-java-hsp/05/02.html",
    "revision": "5a9c6cdf520edc2d0b7a8b23c861918a"
  },
  {
    "url": "dsalg-java-hsp/05/03.html",
    "revision": "6a78e2b187eeb309a97e4a2b8c2c51e7"
  },
  {
    "url": "dsalg-java-hsp/05/04.html",
    "revision": "389a43b75e07261427fda463495057a1"
  },
  {
    "url": "dsalg-java-hsp/05/05.html",
    "revision": "7f29f633f7dbaea7244b2d4f96588016"
  },
  {
    "url": "dsalg-java-hsp/05/index.html",
    "revision": "aa8105916f6306053ce7040a289f56b8"
  },
  {
    "url": "dsalg-java-hsp/06/01.html",
    "revision": "75de3e99359231f5a645e9ec7a08950f"
  },
  {
    "url": "dsalg-java-hsp/06/02.html",
    "revision": "7daf835781d7f43ba012e001433b9001"
  },
  {
    "url": "dsalg-java-hsp/06/03.html",
    "revision": "4c5bc8258120172423830cad95857194"
  },
  {
    "url": "dsalg-java-hsp/06/index.html",
    "revision": "ad873bf4124d92c8c854f0eb6d79e228"
  },
  {
    "url": "dsalg-java-hsp/07/01.html",
    "revision": "7846000575fa29b4a687965b5a70f9b3"
  },
  {
    "url": "dsalg-java-hsp/07/02.html",
    "revision": "4b2b451e0a61584f5df5509e89351d00"
  },
  {
    "url": "dsalg-java-hsp/07/03.html",
    "revision": "f86c8ef0baf2b448bcbadb14777ac462"
  },
  {
    "url": "dsalg-java-hsp/07/04.html",
    "revision": "5f75bc527be0996e61363e731133bdb0"
  },
  {
    "url": "dsalg-java-hsp/07/05.html",
    "revision": "1afeac0e941694242476a74d54dd01a2"
  },
  {
    "url": "dsalg-java-hsp/07/06.html",
    "revision": "be71579a205225e5ef83e52e6f519fa0"
  },
  {
    "url": "dsalg-java-hsp/07/07.html",
    "revision": "1e57557595b09a04e88e1ff652fe01ec"
  },
  {
    "url": "dsalg-java-hsp/07/08.html",
    "revision": "75a0cd701daef413861dc80266b9bbd2"
  },
  {
    "url": "dsalg-java-hsp/07/09.html",
    "revision": "3177854ac699c96a00ec8454097fb1bd"
  },
  {
    "url": "dsalg-java-hsp/07/10.html",
    "revision": "5e3e6fc9cdf372434cd3f7cc49b91a27"
  },
  {
    "url": "dsalg-java-hsp/07/index.html",
    "revision": "25f88fae534823deb05fea2dd2c6f24a"
  },
  {
    "url": "dsalg-java-hsp/08/01.html",
    "revision": "f98e550d90c91bb973b8d181e47d6526"
  },
  {
    "url": "dsalg-java-hsp/08/02.html",
    "revision": "8dce24c264c0baa2c3473719f404292e"
  },
  {
    "url": "dsalg-java-hsp/08/03.html",
    "revision": "32caa280e55f42c35ee16ef45829fc89"
  },
  {
    "url": "dsalg-java-hsp/08/04.html",
    "revision": "ae28eb8a5e915e1f2335d8f3d0b580bc"
  },
  {
    "url": "dsalg-java-hsp/08/index.html",
    "revision": "464af1fa76defb3448041b9151ff22a1"
  },
  {
    "url": "dsalg-java-hsp/09/index.html",
    "revision": "260259601381f1e29d687741abfa5dec"
  },
  {
    "url": "dsalg-java-hsp/10/01.html",
    "revision": "7e9983ef25a2ee42b091a3cf77a343bb"
  },
  {
    "url": "dsalg-java-hsp/10/02.html",
    "revision": "ccf3b4fad3cdc62d524a56077b3ffcd0"
  },
  {
    "url": "dsalg-java-hsp/10/03.html",
    "revision": "9747fdb233d15c8a1e2f04dc409073ce"
  },
  {
    "url": "dsalg-java-hsp/10/index.html",
    "revision": "1b1ad8ec1bd61e2b50d22cf6fc0333f9"
  },
  {
    "url": "dsalg-java-hsp/11/01.html",
    "revision": "f782ff037665fb0bab4f8155f8cf0924"
  },
  {
    "url": "dsalg-java-hsp/11/02.html",
    "revision": "2d660ad3fe10a0241a1404a1d28a392e"
  },
  {
    "url": "dsalg-java-hsp/11/03.html",
    "revision": "b49b770a5fbc7570a2998f1230a38545"
  },
  {
    "url": "dsalg-java-hsp/11/04.html",
    "revision": "1951d317717de2dcbd83a916f2d2fe75"
  },
  {
    "url": "dsalg-java-hsp/11/05.html",
    "revision": "3231620c236d842a7ba8220b23636f4d"
  },
  {
    "url": "dsalg-java-hsp/11/index.html",
    "revision": "64bad41e0298d7d7cd17b54f6cfd1a0b"
  },
  {
    "url": "dsalg-java-hsp/12/01.html",
    "revision": "21a0c5956510134edb5fa932f1bdd25b"
  },
  {
    "url": "dsalg-java-hsp/12/02.html",
    "revision": "827eeca2c81ac63c92f7ec22cc332f79"
  },
  {
    "url": "dsalg-java-hsp/12/03.html",
    "revision": "70f35f99025d6e7003679641afdb611c"
  },
  {
    "url": "dsalg-java-hsp/12/index.html",
    "revision": "3f84a9866fa6dab97425a3fecef8302e"
  },
  {
    "url": "dsalg-java-hsp/13/01.html",
    "revision": "c6d00fde1eb9408f0acfb8285f652111"
  },
  {
    "url": "dsalg-java-hsp/13/02.html",
    "revision": "4d32491969e3cf15f69684b75f000aac"
  },
  {
    "url": "dsalg-java-hsp/13/03.html",
    "revision": "2af173f7ed9a5afb35db708627b21071"
  },
  {
    "url": "dsalg-java-hsp/13/04.html",
    "revision": "f47b1a2fdc90d67536d9fa0ab428a1b4"
  },
  {
    "url": "dsalg-java-hsp/13/05.html",
    "revision": "c07b10262bcd0a8c33dba532db1b1fc6"
  },
  {
    "url": "dsalg-java-hsp/13/06.html",
    "revision": "0df3b2455ac0d197a9cff6ecf001f975"
  },
  {
    "url": "dsalg-java-hsp/13/07.html",
    "revision": "117fdfed40330f9f16e3b94dc96af407"
  },
  {
    "url": "dsalg-java-hsp/13/index.html",
    "revision": "d24229a02c31903e2ff237ef35d3d629"
  },
  {
    "url": "dsalg-java-hsp/14/01.html",
    "revision": "25de659f034a35b1b171fbf7893e59d4"
  },
  {
    "url": "dsalg-java-hsp/14/02.html",
    "revision": "3ea2fbffedfca18862a596d02e3e2ff4"
  },
  {
    "url": "dsalg-java-hsp/14/03.html",
    "revision": "c23f86f4fac4c551817f36e1382b0f46"
  },
  {
    "url": "dsalg-java-hsp/14/04.html",
    "revision": "8f55cf853be166d158637ceee438ec2a"
  },
  {
    "url": "dsalg-java-hsp/14/05.html",
    "revision": "deb3696bb35e75557c9072c3c7208cb3"
  },
  {
    "url": "dsalg-java-hsp/14/06.html",
    "revision": "2d1c8e9272330dfa66826f6fb941fd50"
  },
  {
    "url": "dsalg-java-hsp/14/07.html",
    "revision": "d97940001564f89d9a14a004a3310b06"
  },
  {
    "url": "dsalg-java-hsp/14/08.html",
    "revision": "29b8ba498638cc7a04af6001eae012b4"
  },
  {
    "url": "dsalg-java-hsp/14/09.html",
    "revision": "46dd60613b24488ac14baafa52df9294"
  },
  {
    "url": "dsalg-java-hsp/14/10.html",
    "revision": "dc080a5711fd7c656f40a498516ad41d"
  },
  {
    "url": "dsalg-java-hsp/14/index.html",
    "revision": "cea3b3257cae64b0722026c5524317cf"
  },
  {
    "url": "dsalg-java-hsp/index.html",
    "revision": "be3e520341c29f425367cc7ccbab7566"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "088cf551cd969ed1630f336ed4043aaf"
  },
  {
    "url": "MLOGO100x100.png",
    "revision": "883c132dcc91e5bbec348b5f079b0a73"
  },
  {
    "url": "MLOGO200x200.png",
    "revision": "34f10abae491dc74f3df354df438253f"
  },
  {
    "url": "MLOGO40x40.png",
    "revision": "a1f84e51a43c597be40640823ae81136"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
