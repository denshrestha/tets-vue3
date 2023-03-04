<script setup>
  import { reactive } from 'vue'
  import { useVuelidate } from '@vuelidate/core'
  import { useRouter } from 'vue-router';
  import { email, required, minLength } from '@vuelidate/validators'

  const state = reactive({
    email: '',
    password: ''
  })

  const rules = {
    email: { required, email },
    password: {required, minLengthValue: minLength(6)}
  }

  const v$ = useVuelidate(rules, state)
  const router = useRouter()

  const login = async () => {
    console.log();
    if(await v$.value.$validate()) {
      localStorage.setItem('TestAuthToken', 'token')
      router.push('/products')
    }
    // if(v$.$validate)
  }
</script>

<template>
  <form>
    <v-text-field
      v-model="state.email"
      :error-messages="v$.email.$errors.map(e => e.$message)"
      label="E-mail"
      variant="outlined"
      required
      color="secondary"

    ></v-text-field>

    <v-text-field
      v-model="state.password"
      :error-messages="v$.password.$errors.map(e => e.$message)"
      label="Password"
      variant="outlined"
      required
      color="secondary"

    ></v-text-field>

    <v-btn
      color="primary"
      block
      class="me-4"
      @click="login"
    >
      Login
    </v-btn>
  </form>
</template>