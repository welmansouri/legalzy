<template>
  <v-sheet class="mx-auto" max-width="300">
    <v-form validate-on="submit lazy" @submit.prevent="submit">
      <v-text-field
        v-model="userName"
        :rules="rules"
        label="User name"
      ></v-text-field>

      <v-btn
        :loading="loading"
        class="mt-2"
        text="Submit"
        type="submit"
        block
      ></v-btn>
    </v-form>
  </v-sheet>
</template>