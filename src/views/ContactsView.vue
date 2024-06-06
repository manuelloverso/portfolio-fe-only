<script>
import axios from "axios";

export default {
  name: "ContactsView",
  data() {
    return {
      name: "",
      email: "",
      message: "",
      apiUrl: '"http://127.0.0.1:8000/api/contacts"',
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
  <div class="md-container">
    <h1>Contact Me</h1>

    <form @submit.prevent="sendMessage()">
      <div class="mb-3">
        <label for="name" class="form-label">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          class="form-control"
          placeholder=""
          aria-describedby="helpId"
          v-model="name"
        />
      </div>

      <div class="mb-3">
        <label for="email" class="form-label">Email</label>
        <input
          type="email"
          class="form-control"
          name="email"
          id="email"
          aria-describedby="emailHelpId"
          placeholder="abc@mail.com"
          v-model="email"
        />
      </div>

      <div class="mb-3">
        <label for="message" class="form-label"></label>
        <textarea
          class="form-control"
          name="message"
          id="message"
          rows="3"
          v-model="message"
        ></textarea>
      </div>

      <button type="submit">Send</button>
    </form>
  </div>
</template>
<style scoped></style>
