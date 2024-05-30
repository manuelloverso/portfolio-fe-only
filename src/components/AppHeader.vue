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
    <nav class="nav-container">
      <!-- Site Logo -->
      <div class="logo">
        <h1>ML</h1>
      </div>

      <div class="nav-right-side d-flex">
        <ul class="nav-links">
          <li><a href="#">About Me</a></li>
          <li><a href="#">Projects</a></li>
          <li><a href="#">Skills</a></li>
          <li><a href="#">Contacts</a></li>
        </ul>

        <ul class="socials d-flex">
          <li>
            <a href="#"><i class="fa-brands fa-github"></i></a>
          </li>

          <li>
            <a href="#"><i class="fa-brands fa-linkedin"></i></a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>
