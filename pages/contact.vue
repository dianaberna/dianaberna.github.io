<template>
  <div class="wrapper-small md:px-10">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Rimaniamo in contatto</h2>
        <h3 class="text-gray-700 font-regular">Puoi compilare il seguente form oppure prenotare una consulenza gratuita di 30 minuti.</h3>
      </div>

      <div class="my-10 mx-auto text-gray-800">
          <form class="max-w-xl mx-auto" action="" method="post">
                <div>
                  <label for="name" class="uppercase text-sm font-bold">Nome</label>
                  <input class="w-full border-2 border-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" name="name" placeholder="">
                </div>
                <div class="mt-8">
                  <label for="email" class="uppercase text-sm  font-bold">Email</label>
                  <input class="w-full border-2 border-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"
                    type="text" name="email">
                </div>
                <div class="mt-8">
                  <label for="messaggio" class="uppercase text-sm font-bold">Messaggio</label>
                  <textarea
                    id="messaggio" class="w-full h-32 border-2 border-gray-400 text-gray-900 mt-2 p-3 rounded-lg focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div class="mt-8">
                  <div class='has-tooltip'>
                    
                    <input disabled class="uppercase text-sm font-bold tracking-wide bg-primary text-gray-100 p-3 rounded-full w-full focus:outline-none focus:shadow-outline" type="submit" value="Invia">
                    <span class="tooltip bg-gray-200 p-3 -mt-1 lg:-mt-1 ml-2 rounded">Coming soon!</span>
                  </div>
                </div>
          </form>
      </div>
      
      <div class="max-w-xl mx-auto">
          <p class="text-center text-gray-800 -mt-8 py-5">Oppure</p>
          <button class="text-sm font-regular tracking-wide text-gray-100 bg-pink-800 p-3 rounded-full w-full focus:outline-none focus:shadow-outline " onclick="https://calendly.com/diana-bernabei/consulenza-gratuita">
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
<style lang="postcss">
.tooltip {
  @apply invisible absolute;
}

.has-tooltip:hover .tooltip {
  @apply visible z-50
}
</style>