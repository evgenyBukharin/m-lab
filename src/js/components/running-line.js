import { gsap } from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

if (document.querySelector(".line")) {
	gsap.to(".line", {
		scrollTrigger: {
			trigger: ".line",
			start: "top 98%",
			end: "bottom top",
			scrub: true,
		},
		x: "-100%",
	});
}
