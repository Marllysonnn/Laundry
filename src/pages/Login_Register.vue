<template>
  <div id="app">
    <div v-if="showLoginForm" id="formLogin">
      <div id="content">
        <h2>Get Started</h2>
        <h3>Don't have an account? 
          <span><a href="#" @click.prevent="toggleForm">Sign Up</a></span>
        </h3>
        <form @submit.prevent="handleSubmit">
          <div class="contentInput">
            <img src="/icon/Useric_user.png" alt="User Icon" />
            <InputBox
              label="Username"
              inputType="text"
              v-model="username"
              placeholder="Username"
            />
          </div>
          <div class="contentInput">
            <img src="/icon/Lockic_lock.png" alt="Lock Icon" />
            <InputBox
              label="Password"
              :inputType="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="Insert Password"
            />
            <a id="show" @click="passwordShow" href="#">
              <img src="/icon/Hideic_visible.png" alt="Toggle Visibility" />
            </a>
          </div>
          <div id="button">
          <router-link to="/homepage">
            <ButtonSubmit 
              nameButton="Login"
            />
          </router-link>
        </div>
        </form>
      </div>
    </div>
    <div v-else id="formRegister">
      <div id="content">
        <h2>Get Started</h2>
        <h3>Already have an account? 
          <span><a href="#" @click.prevent="toggleForm">Log In</a></span>
        </h3>
        <form @submit.prevent="handleSubmit">
          <div class="contentInput">
            <img src="/icon/Useric_user.png" alt="User Icon" />
            <InputBox
              label="Username"
              inputType="text"
              v-model="username"
              placeholder="Username"
            />
          </div>
          <div class="contentInput">
            <img src="/icon/Name Tag Woman Horizontalic_name.png" alt="Name Icon" />
            <InputBox
              label="Name"
              inputType="text"
              v-model="name"
              placeholder="Name"
            />
          </div>
          <div class="contentInput">
            <img src="/icon/Addressic_address.png" alt="Address Icon" />
            <InputBox
              label="Address"
              inputType="text"
              v-model="address"
              placeholder="Address"
            />
          </div>
          <div id="DatePhone" style="display: flex; gap: 2em">
            <div class="contentInput">
              <img src="/icon/Calendaric_date.png" alt="Date of Birth Icon" />
              <InputBox
                label="Date of Birth"
                inputType="text"
                v-model="dateOfBirth"
                placeholder="xx-xx-xxxx"
              />
            </div>
            <div class="contentInput">
              <img src="/icon/Shake Phoneic_phone.png" alt="Phone Number Icon" />
              <InputBox
                label="Phone Number"
                inputType="text"
                v-model="phoneNumber"
                placeholder="Phone Number"
              />
            </div>
          </div>
          <div class="contentInput">
            <img src="/icon/Lockic_lock.png" alt="Lock Icon" />
            <InputBox
              label="Password"
              :inputType="showPassword ? 'text' : 'password'"
              v-model="password"
              placeholder="*Password length (10-32)"
            />
            <a id="show" @click="passwordShow" href="#">
              <img src="/icon/Hideic_visible.png" alt="Toggle Visibility" />
            </a>
          </div>
          <ButtonSubmit 
           @click.prevent="toggleForm"
            nameButton="Register"
            style="margin-top: 1.5em"
          />
        </form>
      </div>
    </div>
  <ItemBox />
  </div>
</template>

<script>
import InputBox from '../components/InputBox.vue';
import ItemBox from '../components/Item.vue';
import ButtonSubmit from '../components/Button.vue';

export default {
  name: 'Login_Register',
  components: {
    InputBox,
    ItemBox,
    ButtonSubmit,
  },
  data() {
    return {
      showLoginForm: true,
      username: '',
      password: '',
      name: '',
      address: '',
      dateOfBirth: '',
      phoneNumber: '',
      showPassword: false,
    };
  },
  methods: {
    toggleForm() {
      this.showLoginForm = !this.showLoginForm;
    },
    passwordShow() {
      this.showPassword = !this.showPassword;
    },
    handleSubmit() {
      // Lógica para enviar o formulário
      console.log('Form submitted');
    }
  }
};
</script>

<style scoped>
#app {
  display: flex;
  align-items: center;
  justify-content: center;
}

#formLogin, #formRegister {
  display: flex;
  flex-direction: column;
  gap: 1em;
  width: 65vw;
}

#content {
  width: 55%;
  align-self: center;
}

span a {
  font-weight: 500;
  color: #1678F3;
}

form {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.2em;
  margin-top: 1.2em;
}

.contentInput {
  align-items: end;
  position: relative;
}

img {
  width: 1.2em;
  position: absolute;
  margin-top: 2.3em;
  margin-left: 0.3em;
}

a img {
  display: none;
  margin-top: -1.7em;
  margin-left: 94%;
}

#button{
  align-self: center;
  width: fit-content;
  height: fit-content;
  margin-top: 1.5em;
}
</style>
