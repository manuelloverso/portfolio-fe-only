<script>
export default {
  name: "AppHeader",
  data() {
    return {};
  },
};
</script>
<template>
  <header id="app-header">
    <!-- Navigation bar -->
    <nav class="md-container">
      <!-- Site Logo -->
      <div class="logo">
        <h1>ML</h1>
      </div>

      <div class="nav-right-side d-flex">
        <ul class="nav-links">
          <li>
            <a href="#">
              About Me
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              Projects
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              Skills
              <span></span>
            </a>
          </li>
          <li>
            <a href="#">
              Contacts
              <span></span>
            </a>
          </li>
        </ul>

        <ul class="socials d-flex">
          <li>
            <a target="_blank" href="https://github.com/manuelloverso/">
              <i class="fa-brands fa-github"></i>
            </a>
          </li>

          <li>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
