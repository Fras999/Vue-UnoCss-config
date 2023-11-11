<script setup lang="ts">
import { ref } from "vue";
import Card from "primevue/card";
import Checkbox from "primevue/checkbox";

const username = ref(null);
const password = ref(null);
const rememberMe = ref(null);
</script>

<template>
  <div class="grid grid-cols-3 grid-rows-3 gap-2 bg-fixed" style="background-image: url(../public/jason-leung-mZNRsYE9Qi4-unsplash.jpg);">
    <div class="col-start-2 row-start-2 bg-gray-700 z-0">
      <Card class="bg-transparent z-10">
        <template #title> Sign-In </template>
        <template #content>
          <div class="grid grid-cols-3 grid-rows-3 gap-7 place-content-center">
            <div class="card row-start-1 col-span-3">
              <span class="p-float-label">
                <InputText id="username" v-model="username" class="w-[100%]" />
                <label for="username">Username</label>
              </span>
            </div>
            <div class="card row-start-2 col-span-3">
              <span class="p-float-label">
                <InputText id="password" v-model="password" class="w-[100%]" />
                <label for="password">Password</label>
              </span>
            </div>
            <div class="col-span-3 grid grid-cols-4">
              <div class="col-span-2 place-self-start pt-5">
                <Checkbox
                  v-model="rememberMe"
                  inputId="rememberMe"
                  name="rememberMe"
                  value="Cheese"
                />
                <label for="rememberMe" class="ml-2"> remebmer Me </label>
              </div>
              <Button label="ForgotPassword !" class="col-span-2 p-0 place-self-end" link />
            </div>
          </div>
        </template>
        <template #footer>
          <div class="grid grid-cols-4 place-content-center">
            <Button label="Save" class="col-span-4" />
          </div>
        </template>
      </Card>
    </div>
  </div>
</template>
