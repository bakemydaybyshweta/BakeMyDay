<template>
    <footer class="footer flex-between">
      <div class="footer__logo">
        <img src="../assets/full-logo-dark.png" style="width: 350px; height: 66.74px;"/>
      </div>

      <ul class="footer__social">
        <li class="flex-center">
          <img src="../assets/facebook.svg" alt="facebook" />
        </li>
        <li class="flex-center">
          <img src="../assets/instagram.svg" alt="instagram" />
        </li>
        <li class="flex-center">
          <img src="../assets/whatsapp.svg" alt="whatsapp" />
          <!-- <a href="https://wa.me/919892118599/?text=Hi Sam, Whatsup"></a> -->
        </li>
      </ul>
    </footer>
</template>
<style>
.footer {
  width: 100%;
  padding: 20px 40px;
  background: var(--color-white);
  flex-wrap: wrap;
  gap: 20px;
  overflow: hidden;
}

.footer__logo {
  cursor: pointer;
}


.footer ul {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 64px;
}

.footer ul:last-child {
  gap: 32px;
}

.footer__social li {
  width: 42px;
  height: 42px;
  background-color: var(--secondary-color);
  border-radius: 100%;
  cursor: pointer;
}

.footer__social li img {
  width: 45%;
  height: 45%;
  object-fit: contain;
}
</style>