<script>
import axios from "axios";
import { store } from "../store.js";
import Scroller from "../components/Scroller.vue";
import AppLoader from "../components/AppLoader.vue";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

export default {
  name: "ContactsView",
  components: {
    Scroller,
    AppLoader,
  },
  data() {
    return {
      store,
      name: "",
      email: "",
      message: "",
      failedCall: false,
      apiUrl: "https://admin.manuelloverso.com/api/contacts",
      loading: false,
      success: false,
      errors: [],
      submitted: false,
    };
  },

  methods: {
    sendMessage() {
      this.submitted = true;
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      axios
        .post(this.apiUrl, data)
        .then((response) => {
          if (response.data.success) {
            console.log("email sent");
            this.name = "";
            this.email = "";
            this.message = "";
            this.loading = false;
            this.success = true;
          } else {
            console.log("the email returned an error");
            this.loading = false;
            this.submitted = false;
            this.errors = response.data.errors;
            console.log(this.errors);
          }
        })
        .catch((err) => {
          console.log("cannot send the email");
          this.loading = false;
          this.submitted = false;
          this.failedCall = true;
          console.log(err);
        });
    },

    cursorOnBtn() {
      if (!store.isTouch) {
        const cursorShadow = document.getElementById("cursor-shadow");
        const cursor = document.getElementById("cursor");

        this.$refs.submitbtn.addEventListener("mouseenter", () => {
          cursorShadow.style.opacity = 0;
          cursor.style.width = "25px";
        });

        this.$refs.submitbtn.addEventListener("mouseleave", () => {
          cursorShadow.style.opacity = 1;
          cursor.style.width = "10px";
        });

        this.$refs.submitbtn.addEventListener("click", () => {
          cursorShadow.style.opacity = 1;
          cursor.style.width = "10px";
        });
      }
    },

    animateEmail() {
      const mail = document.querySelector(".mail");

      gsap.from(mail, {
        x: -1000,
        opacity: 0,
        duration: 2,
        ease: "back.out",
        scrollTrigger: {
          trigger: mail,
          start: "top 87%",
          end: "top 15%",
          toggleActions: "play none none reverse",
        },
      });
    },
  },

  watch: {
    loading(newVal) {
      if (!newVal) {
        this.$nextTick(() => {
          this.cursorOnBtn();
        });
      }
    },
  },

  mounted() {
    this.animateEmail();
    this.cursorOnBtn();
  },
};
</script>
<template>
  <main>
    <div class="md-container">
      <div class="page-header">
        <div class="text-container">
          <h1 class="tracking-in-expand-fwd-top">Contattami</h1>
          <h2 class="tracking-in-expand-fwd-bottom">
            Contattami per collaborare ad un progetto o per una chiacchierata!
          </h2>
        </div>
        <Scroller />
      </div>

      <div class="mail">
        <h4>
          <a target="_blank" href="mailto:manuel.loverso.dev@gmail.com">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              class="icon"
            >
              <path
                d="M64 112c-8.8 0-16 7.2-16 16l0 22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1l0-22.1c0-8.8-7.2-16-16-16L64 112zM48 212.2L48 384c0 8.8 7.2 16 16 16l384 0c8.8 0 16-7.2 16-16l0-171.8L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64l384 0c35.3 0 64 28.7 64 64l0 256c0 35.3-28.7 64-64 64L64 448c-35.3 0-64-28.7-64-64L0 128z"
              />
            </svg>
            manuel.loverso.dev@gmail.com
          </a>
        </h4>
        <span>Oppure contattami tramite il form qui sotto</span>
      </div>

      <div class="d-flex justify-content-center">
        <div class="card-form col-12 col-md-8 col-xl-6">
          <template v-if="!loading">
            <h3 v-if="failedCall" class="error">
              Oops, qualcosa è andato storto, riprova più tardi
            </h3>

            <h3 v-if="success" class="success">
              Grazie per avermi contattato! Risponderò al più presto.
            </h3>
            <form @submit.prevent="sendMessage()">
              <div class="group">
                <label for="name" class="form-label">Nome*</label>
                <input
                  required
                  minlength="2"
                  maxlength="50"
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Fabio Rossi"
                  v-model="name"
                />

                <p class="error" v-if="errors.name">{{ errors.name }}</p>
              </div>

              <div class="group">
                <label for="email" class="form-label">Email*</label>
                <input
                  required
                  minlength="2"
                  maxlength="50"
                  type="email"
                  name="email"
                  id="email"
                  placeholder="abc@mail.com"
                  v-model="email"
                />

                <p class="error" v-if="errors.email">{{ errors.email }}</p>
              </div>

              <div class="group">
                <label for="message" class="form-label">Messaggio*</label>
                <textarea
                  required
                  minlength="5"
                  maxlength="500"
                  class="w-100"
                  name="message"
                  id="message"
                  rows="8"
                  v-model="message"
                  placeholder="Dimmi qualcosa.."
                ></textarea>

                <p class="error" v-if="errors.message">{{ errors.message }}</p>
              </div>

              <div class="d-flex justify-content-center">
                <div class="my-btn contacts-color">
                  <button ref="submitbtn" type="submit" :disabled="submitted">
                    Invia
                  </button>
                </div>
              </div>
            </form>
          </template>

          <template v-else>
            <AppLoader />
          </template>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.mail {
  color: rgb(197, 205, 209);
  text-align: center;
  margin-bottom: 150px;

  & h4 {
    font-size: 5vw;
    margin-bottom: 20px;

    & a {
      .icon {
        width: 20px;
        fill: var(--accent);
      }
    }
  }

  & span {
    font-size: 1.15rem;
  }
}

@media screen and (min-width: 576px) {
  .mail {
    & h4 {
      font-size: 1.3rem;
    }
  }
}
.error {
  color: red;
  margin: 1rem 0;
}

.success {
  color: green;
  margin: 1rem 0;
}

.page-header {
  height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 300px;

  .text-container {
    color: rgb(197, 205, 209);
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 70px;
  }

  & h1 {
    font-size: 13vw;
    font-weight: 300;
    margin-bottom: 30px;
  }

  & h2 {
    text-align: center;
    font-weight: 300;
    font-size: 6vw;
  }
}

@media screen and (min-width: 576px) {
  .page-header {
    & h1 {
      font-size: 4.6rem;
    }

    & h2 {
      font-size: 1.6rem;
    }
  }
}

@media screen and (min-width: 992px) {
  .page-header {
    & h1 {
      font-size: 5rem;
    }

    & h2 {
      font-size: 2rem;
    }
  }
}

.card-form {
  padding: 2rem;
  /* border: 1px solid grey; */
  border-top: 8px solid rgb(197, 205, 209);
  border-bottom: 8px solid rgb(197, 205, 209);

  background-color: #18181860;
  border-radius: 15px;
  margin-bottom: 300px;
  color: rgb(197, 205, 209);

  .group {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-bottom: 2rem;
    align-items: center;

    & label {
      font-size: 1.3rem;
    }

    & input,
    & textarea {
      width: 100%;
      font-size: 1.2rem;
      padding: 5px;
      font-family: inherit;
      border: 1px solid rgba(197, 205, 209, 0.721);
      color: rgb(197, 205, 209);
      border-radius: 5px;
      background-color: rgba(0, 0, 0, 0.197);

      /* &:focus-visible {
        outline: rgb(7, 27, 139);
      } */
    }
  }
}

/* Animations */
.tracking-in-expand-fwd-top {
  -webkit-animation: tracking-in-expand-fwd-top 2s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd-top 2s cubic-bezier(0.215, 0.61, 0.355, 1)
    both;
}

@-webkit-keyframes tracking-in-expand-fwd-top {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
    white-space: nowrap;
  }
  40% {
    opacity: 0.6;
    white-space: nowrap;
  }

  90% {
    white-space: nowrap;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    white-space: normal;
  }
}
@keyframes tracking-in-expand-fwd-top {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
    white-space: nowrap;
  }
  40% {
    opacity: 0.6;
    white-space: nowrap;
  }

  90% {
    white-space: nowrap;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    white-space: normal;
  }
}

.tracking-in-expand-fwd-bottom {
  -webkit-animation: tracking-in-expand-fwd-bottom 2s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
  animation: tracking-in-expand-fwd-bottom 2s
    cubic-bezier(0.215, 0.61, 0.355, 1) both;
}

@-webkit-keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
    white-space: nowrap;
  }
  40% {
    opacity: 0.6;
    white-space: nowrap;
  }

  90% {
    white-space: nowrap;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    white-space: normal;
  }
}
@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
    white-space: nowrap;
  }
  40% {
    opacity: 0.6;
    white-space: nowrap;
  }

  90% {
    white-space: nowrap;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
    white-space: normal;
  }
}
</style>
