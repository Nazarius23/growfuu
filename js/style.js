// *Скріпт який додає клас =================================================================
document.addEventListener('click', documentClick)

function documentClick(e) {
	const targetItem = e.target

	if (targetItem.closest('.menu-action')) {
		document.documentElement.classList.toggle('menu-open')
	}
}
// *Скріпт який додає клас =================================================================
// *---------------------- =================================================================

// **Активація свайпера https://swiperjs.com/get-started

// const partnersSwiper = new Swiper(".partners__slider", {
//   slidesPerView: "auto",
//   spaceBetween: 24,
// });

// **Активація свайпера =================================================================
// **---------------------- =============================================================

// ?Скріпт для ангімацї =================================================================
// ?---------------------- ==============================================================

const animItems = document.querySelectorAll('._anim-items')

if (animItems.length > 0) {
	window.addEventListener('scroll', animOmScroll)
	function animOmScroll() {
		for (let index = 0; index < animItems.length; index++) {
			const animItem = animItems[index]
			const animItemHeight = animItem.offsetHeight
			const animItemOffset = offset(animItem).top
			const animStart = 4

			let animItemPoint = window.innerHeight - animItemHeight / animStart

			if (animItemHeight > window.innerHeight) {
				animItemPoint = window.innerHeight - window.innerHeight / animStart
			}
			if (pageYOffset > animItemOffset - animItemPoint && pageYOffset < animItemOffset + animItemHeight) {
				animItem.classList.add('_active')
			} else {
				if (!animItem.classList.contains('_anim-no-hide')) {
					animItem.classList.remove('_active')
				}
			}
		}
	}
	function offset(el) {
		const rect = el.getBoundingClientRect(),
			scrollleft = window.pageXOffset || document.documentElement.scrollLeft,
			scrollTop = window.pageYOffset || document.documentElement.scrollTop
		return { top: rect.top + scrollTop, left: rect.left + scrollleft }
	}
	setTimeout(() => {
		animOmScroll()
	}, 300)
}
