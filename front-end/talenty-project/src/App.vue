<template>
  <h1 class="bg-gray-100">Hello App!</h1>
  <p class="text-red-500 text-xl font-bold">Hello Tailwind 4 </p>

  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/about">Go to About</RouterLink>
    <RouterLink to="/login">Go to Login</RouterLink>

  </nav>
  <main>
    <RouterView />
  </main>
</template>