import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

// gsap.timeline({
//   scrollTrigger: {
//     trigger: ".container",
//     pin: true, // アクティブな開始時にトリガー要素を固定します
//     start: "top top", //トリガーのがビューポートの上部に当たる
//     end: "+=500", //開始スクラブを500px超えてスクロールした後に終了
//     scrub: 1, //スムーズなスクラブ、スクロールバーに「追いつく」のに1秒かかります
//     snap: {
//       snapTo: "labels", //タイムライン期間内で最も近いラベルにスナップします
//       duration: { min: 0.2, max: 3 }, //スナップアニメーションは0.2秒以上、3秒以下である必要があります（速度によって決定）
//       delay: 0.2, //最後のスクロールイベントから0.2秒待ってから、スナップを簡単にします
//       ease: "power1.inOut", //スナップアニメーションの簡単さ（デフォルトでは "power3"）
//     },
//   },
// });

/* VIDEO確認用:*/

const bgVideo = document.querySelector("[data-scroll-video]");
gsap
  .timeline({
    defaults: { duration: 1, ease: "none" },
    scrollTrigger: {
      scrub: true,
      markers: true,
      pin: true,
      trigger: "[data-scroll-video]",
      invalidateOnRefresh: true,
    },
  })
  .fromTo(
    bgVideo,
    {
      currentTime: 0,
    },
    {
      currentTime: 16,
    }
  );

/* BOX確認用*/
gsap
  .timeline({
    scrollTrigger: {
      trigger: "#box",
      scrub: true,
      markers: true,
      pin: true,
    },
  })
  .fromTo(
    "#pink-box",
    {
      y: 0,
      rotate: 0,
    },
    {
      y: 300,
      rotate: 10,
    }
  )
  .fromTo(
    "#blue-box",
    {
      y: 0,
      rotate: 0,
    },
    {
      y: 300,
      rotate: 100,
    }
  );
