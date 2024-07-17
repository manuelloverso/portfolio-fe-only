<script>
export default {
  name: "AppFooter",
  data() {
    return {};
  },
};
</script>
<template>
  <footer id="app-footer">
    <div class="md-container row gy-5 gy-md-0">
      <div class="col-6 col-md-4">
        <nav class="d-flex flex-column gap-3 align-items-start">
          <RouterLink class="logo" :to="{ name: 'home' }"> Home </RouterLink>

          <RouterLink :to="{ name: 'projects' }"> Progetti </RouterLink>

          <RouterLink :to="{ name: 'contacts' }"> Contattami </RouterLink>
        </nav>
      </div>

      <div class="col-6 col-md-4">
        <div class="socials d-flex flex-column gap-3 align-items-start">
          <a target="_blank" href="https://github.com/manuelloverso/">
            <i class="fa-brands fa-github"></i>
            Github
          </a>
          <a
            target="_blank"
            href="https://linkedin.com/in/manuel-loverso-30582b282"
          >
            <i class="fa-brands fa-linkedin"></i>
            Linkedin
          </a>

          <a target="_blank" href="mailto:manuel.loverso.dev@gmail.com">
            <i class="fa-solid fa-at"></i>
            Email
          </a>
        </div>
      </div>

      <div class="col-12 col-md-4">
        <div class="portfolio-links d-flex flex-column gap-3 align-items-start">
          <h4>GH Website Repos</h4>
          <a
            target="_blank"
            href="https://github.com/manuelloverso/frontend-portfolio"
          >
            <i class="fa-brands fa-github"></i>
            Front-end
          </a>
          <a
            target="_blank"
            href="https://github.com/manuelloverso/backend-portfolio"
          >
            <i class="fa-brands fa-github"></i>
            Back-end
          </a>
        </div>
      </div>
    </div>
  </footer>
</template>
<style scoped>
#app-footer {
  padding: 3rem 0;
  background-color: rgba(0, 0, 0, 0.458);
  color: var(--accent);

  & h4 {
    margin: 0;
    font-size: 1.3rem;
  }
}

a {
  color: inherit;
  position: relative;
  text-decoration: none;
  cursor: none;
  font-size: 1.15rem;
}

a::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 4px;
  border-radius: 4px;
  background-color: var(--accent);
  bottom: -2px;
  left: 0;
  transform-origin: right;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}

a:hover::before {
  transform-origin: left;
  transform: scaleX(1);
}
</style>
