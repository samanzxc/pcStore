<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__logo">
        <span>PC STORE</span>
      </div>
      <div class="footer__socials">
        <a href="#" class="footer__icon" aria-label="Telegram">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"></path><path d="M22 2L15 22L11 13L2 9L22 2Z"></path></svg>
        </a>
        <a href="#" class="footer__icon" aria-label="Instagram">
          <svg width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="5"></circle><circle cx="17" cy="7" r="1"></circle></svg>
        </a>
      </div>
    </div>
    <div class="footer__bottom">
      <span>&copy; 2025 PC STORE Все права защищены.</span>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background: #111;
  color: #fff;
  padding: 40px 0 0 0;
  font-family: 'Segoe UI', Arial, sans-serif;
  box-shadow: 0 -2px 16px 0 rgba(0,0,0,0.08);
}

.footer__container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 32px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
}

.footer__logo span {
  font-size: 2rem;
  font-weight: bold;
  letter-spacing: 2px;
  color: #ffffff75;
  cursor: pointer;
}
.footer__logo span:hover {
  color: #fff;
}

.footer__socials {
  display: flex;
  gap: 18px;
}
.footer__icon {
  color: #fff;
  background: #222;
  border-radius: 50%;
  padding: 8px;
  display: flex;
  align-items: center;
  transition: background 0.2s, color 0.2s;
}
.footer__icon:hover {
  background: #fff;
  color: #111;
}

.footer__bottom {
  margin-top: 32px;
  padding: 18px 0;
  background: #181818;
  text-align: center;
  font-size: 1rem;
  color: #bbb;
  letter-spacing: 1px;
}

@media (max-width: 600px) {
  .footer__container {
    padding: 0 16px;
    flex-direction: column;
    align-items: center;
    gap: 20px;
  }
  .footer__logo span {
    font-size: 1.5rem;
  }
  .footer__bottom {
    font-size: 0.8rem;
    padding: 14px 0;
  }
}
</style>
