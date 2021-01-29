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
    "revision": "b23def3572748af0bd94ff3ee8b94b0d"
  },
  {
    "url": "assets/css/0.styles.8dfb3660.css",
    "revision": "43a5d00b71a577ea1853cf1bdb3f0ef6"
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
    "url": "assets/js/10.15cd627b.js",
    "revision": "00e6a0d5164098b51f8beefa269662ec"
  },
  {
    "url": "assets/js/11.6eb2cf93.js",
    "revision": "cc244e26b59f4c2921290b2f33dfc08c"
  },
  {
    "url": "assets/js/12.e83533c2.js",
    "revision": "74a1e6e07d08cceec05c908c3d0879c9"
  },
  {
    "url": "assets/js/13.359e320e.js",
    "revision": "fe75c7e3b254908d18eddd2ca3bbb6e5"
  },
  {
    "url": "assets/js/14.9083c549.js",
    "revision": "88814f2805aa1f59645709b17e16f75e"
  },
  {
    "url": "assets/js/15.b5404683.js",
    "revision": "de510147df3b0cde39c0aa28494aa234"
  },
  {
    "url": "assets/js/16.0fe34a4b.js",
    "revision": "4f5348da52b2ffc8ba5cfcd7ceefa638"
  },
  {
    "url": "assets/js/17.f4c98ae9.js",
    "revision": "5928b5f0de6d462482017368de60b8e3"
  },
  {
    "url": "assets/js/18.aff5e72e.js",
    "revision": "5bc2e17c4b9ebf65222a9776997025a9"
  },
  {
    "url": "assets/js/19.5a5e1ac6.js",
    "revision": "a3bec66499a96e0173616aa504bab66d"
  },
  {
    "url": "assets/js/2.d9b1931d.js",
    "revision": "805a04f0aff658387b98f5228324164c"
  },
  {
    "url": "assets/js/20.5e5e69de.js",
    "revision": "41794dd357cdc860a9f2ccb1107f1c32"
  },
  {
    "url": "assets/js/21.5b8b7f52.js",
    "revision": "065b000123e0d8848bd77e76c6af2e8a"
  },
  {
    "url": "assets/js/22.ae669b39.js",
    "revision": "93a5b35361d7729a3b354e237290a90b"
  },
  {
    "url": "assets/js/23.00f716c1.js",
    "revision": "bf537c75f2bc544c475a3a5ea07db7cc"
  },
  {
    "url": "assets/js/24.0681395e.js",
    "revision": "d408c6d509f360b94c6eb7813c4698e0"
  },
  {
    "url": "assets/js/25.cb833a1b.js",
    "revision": "c63b28d22ac7923012651015f92b88ad"
  },
  {
    "url": "assets/js/26.7ce3b598.js",
    "revision": "05b6b4c6f6b02613fc66911dbe40eb4d"
  },
  {
    "url": "assets/js/27.987dfca2.js",
    "revision": "a7bd693a6b06f0542911c0d98400c1e6"
  },
  {
    "url": "assets/js/28.94c58397.js",
    "revision": "8d65471d9160fc11d6d6ebf2355548be"
  },
  {
    "url": "assets/js/29.ed01e7da.js",
    "revision": "8805406ee793e7636216577c59a63156"
  },
  {
    "url": "assets/js/3.d898f946.js",
    "revision": "11d200ca6e72e95d71d48a37ce7586d0"
  },
  {
    "url": "assets/js/30.5f87e0bc.js",
    "revision": "51f7d96090abd2d7c9109e4f4b1ca4d2"
  },
  {
    "url": "assets/js/31.366d9f04.js",
    "revision": "63d3c95e61181b86e874d570ac82e7fa"
  },
  {
    "url": "assets/js/32.3ce20292.js",
    "revision": "eef054b0df0f3384528299197e4d4e5f"
  },
  {
    "url": "assets/js/33.21629cdd.js",
    "revision": "b5752d57622ac2b768daa11d38d3d624"
  },
  {
    "url": "assets/js/34.4c01b3c3.js",
    "revision": "8f57638fccbb13bb8ead6661be5595aa"
  },
  {
    "url": "assets/js/35.892064a8.js",
    "revision": "75ecda56af859de2570e8f55f955788d"
  },
  {
    "url": "assets/js/36.66a961cb.js",
    "revision": "5754700bea8f4bb0b6fd6a41faf7c3ea"
  },
  {
    "url": "assets/js/37.cb68707e.js",
    "revision": "023f9e88994f159e9a86a0e1e56b2e1a"
  },
  {
    "url": "assets/js/38.6d07cc17.js",
    "revision": "6a03d138893dbdfff218383ae436ceb2"
  },
  {
    "url": "assets/js/39.e299e090.js",
    "revision": "c6a2b77d762484cc91103e5004bd3343"
  },
  {
    "url": "assets/js/4.6d975497.js",
    "revision": "dbd29ac61a1740893bfa0e8d230568b1"
  },
  {
    "url": "assets/js/40.7b5227dd.js",
    "revision": "aa5ddd206b06102412a81184565593d7"
  },
  {
    "url": "assets/js/41.9ad67f75.js",
    "revision": "8693263f75e50b60c9cee5e239d3d269"
  },
  {
    "url": "assets/js/42.61fa1e85.js",
    "revision": "90b86551108c3f7ad649ee8c25891a7a"
  },
  {
    "url": "assets/js/43.cf2e3c10.js",
    "revision": "94a24cf08474d2f746240a62c4ed153a"
  },
  {
    "url": "assets/js/44.75b1383f.js",
    "revision": "3016e54c79164b180ca2375c90e66a0a"
  },
  {
    "url": "assets/js/45.9f15b9de.js",
    "revision": "b8e8839b95cd3796c8ce5d4aea1cba75"
  },
  {
    "url": "assets/js/46.124bcb43.js",
    "revision": "2bb1a34da1123ff767df284c5c5c1430"
  },
  {
    "url": "assets/js/47.e3c4aeed.js",
    "revision": "d03588a14ea01d4171f5ac651708ab14"
  },
  {
    "url": "assets/js/48.9e1572d9.js",
    "revision": "49a71c3c5014e6fc039a419d34508589"
  },
  {
    "url": "assets/js/49.87719e89.js",
    "revision": "40b258c6948236bc26ff6dbaa1d6e9de"
  },
  {
    "url": "assets/js/5.f23771fb.js",
    "revision": "7e5f44826fcaaed8d07554fa5630e3b7"
  },
  {
    "url": "assets/js/50.6b0d57d4.js",
    "revision": "0f12a1bc7d64ff65d9a006635a2d99d7"
  },
  {
    "url": "assets/js/51.9dfb4dbb.js",
    "revision": "e9356daca022d8fe5f6eb2e8eab754b0"
  },
  {
    "url": "assets/js/52.a9ce6514.js",
    "revision": "299b77b894c97c7e8b58e4991f9070b8"
  },
  {
    "url": "assets/js/53.cc26ce44.js",
    "revision": "493615cd4257958a94fde3350aee8c8b"
  },
  {
    "url": "assets/js/54.432c01ff.js",
    "revision": "8dc5e375e43880c61133e30b2ae26cbf"
  },
  {
    "url": "assets/js/55.e88f4b23.js",
    "revision": "a7711591d2fa6f8ad14bd9b527a7a263"
  },
  {
    "url": "assets/js/56.2004d029.js",
    "revision": "5463d95ec763065b29b130bb1763e611"
  },
  {
    "url": "assets/js/57.133b1767.js",
    "revision": "ba52448aa45ab808b3a6f1b03c1ddf8d"
  },
  {
    "url": "assets/js/58.45028fb6.js",
    "revision": "e0645cd277c90d7000bc2ede5e86332d"
  },
  {
    "url": "assets/js/59.b204d638.js",
    "revision": "bac0de589f7f1a1dcdcaed92b64c4f74"
  },
  {
    "url": "assets/js/6.9cb62eac.js",
    "revision": "cabf30f02d189f040d4f7865be70fa59"
  },
  {
    "url": "assets/js/60.be186d3a.js",
    "revision": "49514e952657ade3467e2d325180b6fa"
  },
  {
    "url": "assets/js/61.7f9d1f37.js",
    "revision": "d11fc7852e2ed83da541b2be6dd297a4"
  },
  {
    "url": "assets/js/62.e1109a6a.js",
    "revision": "414c30a4044dfc0c8432ffe1fe5086ce"
  },
  {
    "url": "assets/js/63.007d552d.js",
    "revision": "aa3b70b7ee500c3d1e401e5e7d1b540c"
  },
  {
    "url": "assets/js/64.52d7c668.js",
    "revision": "998fca9b089099a506daed08339ddae4"
  },
  {
    "url": "assets/js/65.9b4e0926.js",
    "revision": "a69e994f5cbd61b33213d932ecde267e"
  },
  {
    "url": "assets/js/66.7ed82af3.js",
    "revision": "325273dfbf3926f483c745617979a5b1"
  },
  {
    "url": "assets/js/67.ec4c71ba.js",
    "revision": "042ac6e808091cfef3afec3d26a399a3"
  },
  {
    "url": "assets/js/68.3ecb00f9.js",
    "revision": "d13e0f9d2f5cb80dfcc506c9fee26cf7"
  },
  {
    "url": "assets/js/69.94b00f7c.js",
    "revision": "945c72daa90fb7608fbf3f8539fc7967"
  },
  {
    "url": "assets/js/7.f0600b9e.js",
    "revision": "c3e60e3acd2c2b249ca22c984746d408"
  },
  {
    "url": "assets/js/70.b3300526.js",
    "revision": "bd0ca6d9e937d071b7a9e0d29ea7ffe1"
  },
  {
    "url": "assets/js/71.e30a01cf.js",
    "revision": "bb9269d5dc988d4dcf38272da69d216e"
  },
  {
    "url": "assets/js/72.b8e6da7a.js",
    "revision": "57ca684e4deb2c4f263171c82582edd5"
  },
  {
    "url": "assets/js/73.e23f1e50.js",
    "revision": "d88847b1094cd06f1e1c5f5bfad53d0a"
  },
  {
    "url": "assets/js/74.804e57ff.js",
    "revision": "4e3f43499533ed08028de5470545d9ea"
  },
  {
    "url": "assets/js/75.e5b07ba2.js",
    "revision": "d3c1bbb696655e2f41c0c59dc6a35c0b"
  },
  {
    "url": "assets/js/76.bfc636c9.js",
    "revision": "e8d9f325a5c484eb0c067ba307899959"
  },
  {
    "url": "assets/js/77.9624ca53.js",
    "revision": "af3d65209d22d20b9d761e3b89307d6a"
  },
  {
    "url": "assets/js/78.003d47fd.js",
    "revision": "4bb9815e0fcb4c71d0eea20131a16918"
  },
  {
    "url": "assets/js/79.16fc247c.js",
    "revision": "0d045aa77300d71ee4434ac219d8b29a"
  },
  {
    "url": "assets/js/8.e56a8ad2.js",
    "revision": "4232e08bfba05c7739dfd18b6545ca42"
  },
  {
    "url": "assets/js/80.22e16aca.js",
    "revision": "f4fabccbe49ac94d5e8e63d29975c6a1"
  },
  {
    "url": "assets/js/9.afffd90b.js",
    "revision": "8559c59004c45dcce48d275885cbf06e"
  },
  {
    "url": "assets/js/app.1c7f760e.js",
    "revision": "a8105efc3fb96d0c9b70d7732a68ab9c"
  },
  {
    "url": "dsalg-java-hsp/01/index.html",
    "revision": "aefdc96408ce07c7afc7a1f14596b008"
  },
  {
    "url": "dsalg-java-hsp/02/index.html",
    "revision": "76a75e677c8065d80f44526673e00b07"
  },
  {
    "url": "dsalg-java-hsp/03/01.html",
    "revision": "14b8a3c64f42e58c108dff229a5a4003"
  },
  {
    "url": "dsalg-java-hsp/03/02.html",
    "revision": "f1100044f5d3cc7fa061f38cc64e8a24"
  },
  {
    "url": "dsalg-java-hsp/03/index.html",
    "revision": "7e4199e68835db2c35939b1029cd8ee8"
  },
  {
    "url": "dsalg-java-hsp/04/01.html",
    "revision": "a0ebc94a0d188fc0d01121a0f242001f"
  },
  {
    "url": "dsalg-java-hsp/04/02.html",
    "revision": "ffc81687e8b3db5474954524e83fa3ee"
  },
  {
    "url": "dsalg-java-hsp/04/03.html",
    "revision": "6191082dd8482d0afe03e04bd67e5ea9"
  },
  {
    "url": "dsalg-java-hsp/04/04.html",
    "revision": "da4f47026236b2ba1a4e0b22241586fd"
  },
  {
    "url": "dsalg-java-hsp/04/index.html",
    "revision": "f1e7df11be537dcd0813e8f59d5d7bb8"
  },
  {
    "url": "dsalg-java-hsp/05/01.html",
    "revision": "839d69d5d323eae58c50a573c5a0d0a6"
  },
  {
    "url": "dsalg-java-hsp/05/02.html",
    "revision": "0c169921d613a767ed4b1d17aac5a75e"
  },
  {
    "url": "dsalg-java-hsp/05/03.html",
    "revision": "cb40d8d5cae93aaa667a3d5368e77007"
  },
  {
    "url": "dsalg-java-hsp/05/04.html",
    "revision": "79a20473ec6f634b438678d755dbf3a0"
  },
  {
    "url": "dsalg-java-hsp/05/05.html",
    "revision": "df5f62a2891da6b1d053f2dae8b943c6"
  },
  {
    "url": "dsalg-java-hsp/05/index.html",
    "revision": "c5d8f85d1e6faa58d4bc3c3cfea7838d"
  },
  {
    "url": "dsalg-java-hsp/06/01.html",
    "revision": "e6ed1421462fbc19ba3b4bebc94cff14"
  },
  {
    "url": "dsalg-java-hsp/06/02.html",
    "revision": "183d6d2158aadc06f3d824c3e0b387f2"
  },
  {
    "url": "dsalg-java-hsp/06/03.html",
    "revision": "e9d2120812af81134332ac99f6f994cf"
  },
  {
    "url": "dsalg-java-hsp/06/index.html",
    "revision": "7debfb90eb78631ae548d7a0b25778a3"
  },
  {
    "url": "dsalg-java-hsp/07/01.html",
    "revision": "7783990b6567185b9ce83f7948bb9ab4"
  },
  {
    "url": "dsalg-java-hsp/07/02.html",
    "revision": "a46263485da556536ada83cc32fc447d"
  },
  {
    "url": "dsalg-java-hsp/07/03.html",
    "revision": "42bf7b375b5f34efba0f22cdda62720e"
  },
  {
    "url": "dsalg-java-hsp/07/04.html",
    "revision": "1d7a1c8e9efb382bbf17264d174c9bbd"
  },
  {
    "url": "dsalg-java-hsp/07/05.html",
    "revision": "982d66053c10bc1ac977a4ff6d2d1730"
  },
  {
    "url": "dsalg-java-hsp/07/06.html",
    "revision": "8fc4edd9434199e813facf06daf6709a"
  },
  {
    "url": "dsalg-java-hsp/07/07.html",
    "revision": "77c75c23a8ab18a065c1d63a1abf2c36"
  },
  {
    "url": "dsalg-java-hsp/07/08.html",
    "revision": "bfc6eb8ca3987b716d5a8ed3170b07a8"
  },
  {
    "url": "dsalg-java-hsp/07/09.html",
    "revision": "792100c165fb349809076406b80221d9"
  },
  {
    "url": "dsalg-java-hsp/07/10.html",
    "revision": "eb1fc14c9329967537daad83d82998af"
  },
  {
    "url": "dsalg-java-hsp/07/index.html",
    "revision": "f87d8b138dc89bd6a51b5336d4d50b50"
  },
  {
    "url": "dsalg-java-hsp/08/01.html",
    "revision": "fd11489d7c37b78bdeb37183869f9085"
  },
  {
    "url": "dsalg-java-hsp/08/02.html",
    "revision": "503fbba1391b84fb423cca3336536b4c"
  },
  {
    "url": "dsalg-java-hsp/08/03.html",
    "revision": "c19b370a6309ec9d220c6fd73844362e"
  },
  {
    "url": "dsalg-java-hsp/08/04.html",
    "revision": "7c3e77847f92b3f18d3d6a91e4e00c77"
  },
  {
    "url": "dsalg-java-hsp/08/index.html",
    "revision": "1a7616358210f330f21e1bda2d175821"
  },
  {
    "url": "dsalg-java-hsp/09/index.html",
    "revision": "c7a06e08dc8ab45473152adc89e713a7"
  },
  {
    "url": "dsalg-java-hsp/10/01.html",
    "revision": "3c9ac92bd61e0619c65ea85f31eebe9a"
  },
  {
    "url": "dsalg-java-hsp/10/02.html",
    "revision": "0568da59504f630e6aa86700d0afb45a"
  },
  {
    "url": "dsalg-java-hsp/10/03.html",
    "revision": "d5338ad5460482f3b002bfc39602e34b"
  },
  {
    "url": "dsalg-java-hsp/10/index.html",
    "revision": "9df785453a9057a38356f9f3a55f5f2f"
  },
  {
    "url": "dsalg-java-hsp/11/01.html",
    "revision": "bff8641e08fdc2868b04b69e286236ce"
  },
  {
    "url": "dsalg-java-hsp/11/02.html",
    "revision": "d1b2144c34949555bc1e969075c9c0bf"
  },
  {
    "url": "dsalg-java-hsp/11/03.html",
    "revision": "7f0bdc6c7b0f8745333bb76fdc742ab4"
  },
  {
    "url": "dsalg-java-hsp/11/04.html",
    "revision": "c8a799ab3e89f24c3d8fb3d8c8809023"
  },
  {
    "url": "dsalg-java-hsp/11/05.html",
    "revision": "8d4b39f4caf2ddf7fe6aaa21f8a8c950"
  },
  {
    "url": "dsalg-java-hsp/11/index.html",
    "revision": "b200bd6fdf707d573d8cfb622433ffce"
  },
  {
    "url": "dsalg-java-hsp/12/01.html",
    "revision": "6b9222903bd2c28ec02490f991591de5"
  },
  {
    "url": "dsalg-java-hsp/12/02.html",
    "revision": "b6294a7b0182e457453f497290a63b5e"
  },
  {
    "url": "dsalg-java-hsp/12/03.html",
    "revision": "db83a67ecb9e12595568a5b0e4242fe1"
  },
  {
    "url": "dsalg-java-hsp/12/index.html",
    "revision": "ba79a92bddc57030ef0bf3752b2d79f8"
  },
  {
    "url": "dsalg-java-hsp/13/01.html",
    "revision": "9561dabb15fabc765edfb8e22e5c1f19"
  },
  {
    "url": "dsalg-java-hsp/13/02.html",
    "revision": "61f83bc9cc9056ce6850f658049f31c1"
  },
  {
    "url": "dsalg-java-hsp/13/03.html",
    "revision": "68aca712b1969713b214cdf0af6954d1"
  },
  {
    "url": "dsalg-java-hsp/13/04.html",
    "revision": "27efc36c94fb2403f224549a6a95f279"
  },
  {
    "url": "dsalg-java-hsp/13/05.html",
    "revision": "44f155f74020252dc1cba32fe85c7aa8"
  },
  {
    "url": "dsalg-java-hsp/13/06.html",
    "revision": "fbb9bcfe9940a7a0f1ef0cc85eaf2ca1"
  },
  {
    "url": "dsalg-java-hsp/13/07.html",
    "revision": "46246d570a8ec410d4863fe1f89199ce"
  },
  {
    "url": "dsalg-java-hsp/13/index.html",
    "revision": "c1ce13bb6058951118ee610ac336727a"
  },
  {
    "url": "dsalg-java-hsp/14/01.html",
    "revision": "ed75aa22bb5ff59f046f8cb8dcbf83b7"
  },
  {
    "url": "dsalg-java-hsp/14/02.html",
    "revision": "d6e0641692010030a83abc0bdc8c8f4d"
  },
  {
    "url": "dsalg-java-hsp/14/03.html",
    "revision": "1f03b7060b50188aa019e07e186531a4"
  },
  {
    "url": "dsalg-java-hsp/14/04.html",
    "revision": "5b7a7fb49cb95eacae70bc16427e0ed8"
  },
  {
    "url": "dsalg-java-hsp/14/05.html",
    "revision": "22898edb50242eacfcd55e5cbeae60dd"
  },
  {
    "url": "dsalg-java-hsp/14/06.html",
    "revision": "56449c0529786dc3e26dcc16221449a8"
  },
  {
    "url": "dsalg-java-hsp/14/07.html",
    "revision": "d2123e9cc8471c9afef581ba94f0baf8"
  },
  {
    "url": "dsalg-java-hsp/14/08.html",
    "revision": "b1fe57cc8f6f018f5371a1f38bfd265a"
  },
  {
    "url": "dsalg-java-hsp/14/09.html",
    "revision": "7ea792305a31119b32a62c4568317769"
  },
  {
    "url": "dsalg-java-hsp/14/10.html",
    "revision": "197509367e3d91d8263c2cefc9284af9"
  },
  {
    "url": "dsalg-java-hsp/14/index.html",
    "revision": "fbd13b51d083cd78a8f8c5bb81a8822b"
  },
  {
    "url": "dsalg-java-hsp/index.html",
    "revision": "343e72e47dec6070f7cf1e7ae55ad8b4"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
  },
  {
    "url": "index.html",
    "revision": "055376f211e65f864a86d61741088173"
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
