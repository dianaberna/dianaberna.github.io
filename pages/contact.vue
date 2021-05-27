<template>
  <div class="wrapper-small md:px-10">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Rimaniamo in contatto</h2>
        <h3 class="text-gray-600 font-semibold">Puoi compilare il seguente form oppure prenotare una consulenza gratuita di 30 minuti.</h3>
      </div>

      <div class="my-10 mx-auto text-gray-900">
          <form class="max-w-xl mx-auto">
                <div>
                  <span class="uppercase text-sm text-gray-600 font-bold">Nome</span>
                  <input class="w-full border-2 border-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" placeholder="">
                </div>
                <div class="mt-8">
                  <span class="uppercase text-sm text-gray-600 font-bold">Email</span>
                  <input class="w-full border-2 border-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text">
                </div>
                <div class="mt-8">
                  <span class="uppercase text-sm text-gray-600 font-bold">Messaggio</span>
                  <textarea
                    class="w-full h-32 border-2 border-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="mt-8">
                  <button
                    class="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline">
                    Invia
                  </button>
                </div>
          </form>
      </div>
      
      <div class="max-w-xl mx-auto">
          <p class="text-center -mt-8 py-5">Oppure</p>
          <button class="text-sm font-bold tracking-wide text-gray-100 bg-pink-800 p-3 rounded-full w-full focus:outline-none focus:shadow-outline " onclick="https://calendly.com/diana-bernabei/consulenza-gratuita">
          <p>Prenota una consulenza gratuita di 30 minuti</p>
        </button>
      </div>
  </div>
</template>

<script>
export default {
    components: {
      
    }
}
</script>

<style>

</style>