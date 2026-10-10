const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.main-nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? '메뉴 닫기' : '메뉴 열기');
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
  }));
}
document.getElementById('year').textContent = new Date().getFullYear();

document.querySelectorAll('.service-card[data-category]').forEach(card => {
  card.addEventListener('click', () => {
    const select = document.getElementById('category');
    if (select) select.value = card.dataset.category;
  });
});

const form = document.getElementById('inquiry-form');
const notice = document.getElementById('form-notice');
form.addEventListener('submit', event => {
  event.preventDefault();
  if (!form.reportValidity()) return;
  const fields = new FormData(form);
  const subject = `[무진넥스 상담 문의] ${fields.get('category')} - ${fields.get('name')}`;
  const body = [
    `상담 분야: ${fields.get('category')}`,
    `성함 / 업체명: ${fields.get('name')}`,
    `연락처: ${fields.get('phone')}`,
    `문의 내용: ${fields.get('message') || '(내용 없음)'}`
  ].join('\n');
  window.location.href = `mailto:mujinnex@naver.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  notice.textContent = '작성하신 상담 내용이 이메일 초안으로 준비되었습니다. 메일 앱에서 내용을 확인한 뒤 전송해 주세요.';
  notice.classList.add('is-visible');
  notice.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
});
