;(function () {
  'use strict'
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) }
      })
    },
    { threshold: 0.12, rootMargin: '0px 0px -8% 0px' }
  )
  document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
  const toggle = document.querySelector('.nav-toggle')
  const links = document.querySelector('.nav-links')
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = !links.classList.contains('open')
      links.classList.toggle('open', open)
      toggle.classList.toggle('open', open)
      toggle.setAttribute('aria-expanded', open)
    })
    document.addEventListener('click', (e) => {
      if (!toggle.contains(e.target) && !links.contains(e.target)) {
        links.classList.remove('open'); toggle.classList.remove('open'); toggle.setAttribute('aria-expanded', 'false')
      }
    })
  }
  const page = location.pathname.split('/').pop() || 'index.html'
  document.querySelectorAll('.nav-link').forEach((a) => {
    a.classList.toggle('active', a.getAttribute('href') === page)
  })
  const yearEl = document.querySelector('[data-year]')
  if (yearEl) yearEl.textContent = new Date().getFullYear()
  const btt = document.querySelector('.back-to-top')
  if (btt) {
    window.addEventListener('scroll', () => btt.classList.toggle('show', window.scrollY > 400), { passive: true })
    btt.addEventListener('click', () => window.scrollTo({ top: 0, behavior: 'smooth' }))
  }
  document.querySelectorAll('a[href^="#"]').forEach((a) => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href')
      if (id === '#') return
      const t = document.querySelector(id)
      if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }) }
    })
  })
  const heroImgs = document.querySelectorAll('.hero-bg img')
  if (heroImgs.length > 1) {
    let i = 0
    setInterval(() => {
      heroImgs[i].classList.remove('active')
      i = (i + 1) % heroImgs.length
      heroImgs[i].classList.add('active')
    }, 6000)
  }
  const form = document.querySelector('[data-form]')
  if (form) {
    const ok = form.querySelector('.form-ok')
    const err = form.querySelector('.form-err')
    form.addEventListener('submit', (e) => {
      e.preventDefault()
      let valid = true
      form.querySelectorAll('[required]').forEach((el) => { if (!el.value.trim()) valid = false })
      if (ok) ok.classList.remove('show')
      if (err) err.classList.remove('show')
      if (valid) {
        if (ok) ok.classList.add('show')
        form.reset()
      } else {
        if (err) err.classList.add('show')
      }
    })
  }
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    document.querySelectorAll('.reveal').forEach((el) => el.classList.add('visible'))
  }
})()
