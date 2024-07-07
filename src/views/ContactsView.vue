<script>
import axios from "axios";
import Scroller from "../components/Scroller.vue";

export default {
  name: "ContactsView",
  components: {
    Scroller,
  },
  data() {
    return {
      name: "",
      email: "",
      message: "",
      apiUrl: "http://127.0.0.1:8000/api/contacts",
      loading: true,
      success: false,
      errors: null,
    };
  },

  methods: {
    sendMessage() {
      const data = {
        name: this.name,
        email: this.email,
        message: this.message,
      };

      axios
        .post(this.apiUrl, data)
        .then((response) => {
          console.log(response);
          if (response.data.success) {
            this.name = "";
            this.email = "";
            this.message = "";
            this.loading = false;
            this.success = true;
          } else {
            this.errors = response.data.errors;
            console.log(errors);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
};
</script>
<template>
  <main>
    <div class="md-container">
      <div class="page-header">
        <div class="text-container">
          <h1 class="tracking-in-expand-fwd-top">Conttattami</h1>
          <h2 class="tracking-in-expand-fwd-bottom">
            Contattami per collaborare ad un progetto o per una chiacchierata!
          </h2>
        </div>
        <Scroller />
      </div>

      <div class="d-flex justify-center">
        <div class="card-form col-12 col-md-6">
          <form @submit.prevent="sendMessage()">
            <div class="group">
              <label for="name" class="form-label">Nome</label>
              <input
                required
                minlength="2"
                maxlength="50"
                type="text"
                name="name"
                id="name"
                class="form-control"
                placeholder="Fabio Rossi"
                aria-describedby="helpId"
                v-model="name"
              />
            </div>

            <div class="group">
              <label for="email" class="form-label">Email</label>
              <input
                required
                minlength="2"
                maxlength="50"
                type="email"
                class="form-control"
                name="email"
                id="email"
                aria-describedby="emailHelpId"
                placeholder="abc@mail.com"
                v-model="email"
              />
            </div>

            <div class="group">
              <label for="message" class="form-label">Messaggio</label>
              <textarea
                required
                minlength="5"
                maxlengthe="500"
                class="w-100"
                name="message"
                id="message"
                rows="8"
                v-model="message"
                placeholder="Dimmi qualcosa.."
              ></textarea>
            </div>

            <div class="btn contacts-color">
              <button type="submit">Invia</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </main>
</template>
<style scoped>
.page-header {
  height: calc(100vh - 150px);
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
    font-size: 6rem;
    font-weight: 300;
    margin-bottom: 30px;
  }

  & h2 {
    font-weight: 300;
    font-size: 2rem;
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
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-top {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(-500px);
    transform: translateZ(-700px) translateY(-500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
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
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
@keyframes tracking-in-expand-fwd-bottom {
  0% {
    letter-spacing: -0.5em;
    -webkit-transform: translateZ(-700px) translateY(500px);
    transform: translateZ(-700px) translateY(500px);
    opacity: 0;
  }
  40% {
    opacity: 0.6;
  }
  100% {
    -webkit-transform: translateZ(0) translateY(0);
    transform: translateZ(0) translateY(0);
    opacity: 1;
  }
}
</style>
