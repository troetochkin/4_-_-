document.querySelectorAll('.accordion-header').forEach(header => {
	header.addEventListener('mouseenter', function () {
		const content = header.nextElementSibling
		content.classList.toggle('open')

		if (content.classList.contains('open')) {
			gsap.fromTo(
				content,
				{ maxHeight: 0 },
				{
					maxHeight: `${content.scrollHeight}px`,
					duration: 0.1,
					ease: 'power1.out',
				}
			)
		} else {
			gsap.to(content, { maxHeight: 0, duration: 0.1, ease: 'power1.in' })
		}
	})
})
