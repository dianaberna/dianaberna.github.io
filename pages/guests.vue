<template>
  <div class="wrapper-small">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Live</h2>
      </div>
      <p class="text-base md:text-lg font-regular text-gray-700 mt-2">Ogni giovedì nel mio<a href="https://www.twitch.tv/dianacodes" target="_blank">canale Twitch</a> sono live con una nuova intervista e in questa pagina puoi trovare tutti/e gli/le ospiti con cui ho chiacchierato fino ad ora!</p>
      <br>
      <div class="grid grid-cols-1 gap-1 md:grid-cols-4 md:gap-4">
        <div class="text-center">
          <a href="https://youtu.be/X7mVOUtYn2M">
            <img src="~/assets/guests/1.png" class="" alt="foto alessandro berti">
            <p class="text-gray-700 font-bold">Alessandro Berti (Ph.D Student in Quantum Computing @ University of Pisa)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/6xre44hH92k">
            <img src="~/assets/guests/2.png" class="" alt="foto giuseppe checchia">
            <p class="text-gray-700 font-bold">Giuseppe Checchia (Lead Developer)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/KyuGBZy_RqE">
            <img src="~/assets/guests/3.png" class="" alt="foto fiorella de luca">
            <p class="text-gray-700 font-bold">Fiorella De Luca (Project Manager)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/2lzy5UwVAPU">
            <img src="~/assets/guests/4.png" class="" alt="foto giovanni bartolomeo">
            <p class="text-gray-700 font-bold">Giovanni Bartolomeo (MSc Student @ University of Pisa)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/DweqvPiFvc8">
            <img src="~/assets/guests/5.png" class="" alt="foto simone torrisi">
            <p class="text-gray-700 font-bold">Simone Torrisi (Software Architecture Consultant | JavaScript and React specialist | Founder and Mentor @TomorrowDevs)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/eiHQ-VEFAA4">
            <img src="~/assets/guests/6.png" class="" alt="foto aldo d'aquino">
            <p class="text-gray-700 font-bold">Aldo D'Aquino (Infrastructure Engineer @ Bending Spoons)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/LyhlVxR1sW8">
            <img src="~/assets/guests/7.png" class="" alt="foto azzurra ragone">
            <p class="text-gray-700 font-bold">Azzurra Ragone (Innovation and Transformation lead @ EY)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/knpPcyuuTCM">
            <img src="~/assets/guests/8.png" class="" alt="foto eugenio paluello">
            <p class="text-gray-700 font-bold">Eugenio Paluello (CTO @ Tocket)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/JcqOksg5QCw">
            <img src="~/assets/guests/9.png" class="" alt="foto juna salviati">
            <p class="text-gray-700 font-bold">Juna Salviati (Full Stack Developer e Co-leader del GDG Roma)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/VfWeKTaraIY">
            <img src="~/assets/guests/10.png" class="" alt="foto simone sanfratello">
            <p class="text-gray-700 font-bold">Simone Sanfratello (Senior Backend Engineer)</p>
          </a>
        </div>
        <div class="text-center">
          <a href="https://youtu.be/5ncwldP1grA">
            <img src="~/assets/guests/11.png" class="" alt="foto serena sensini">
            <p class="text-gray-700 font-bold">Serena Sensini (Enterprise Architect @ Dedalus spa)</p>
          </a>
        </div>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped>
  .credit-item{
      @apply text-lg mb-5 text-gray-800 font-semibold;
  }

  .credit-link{
      @apply text-primary;
  }
  p{
    margin-bottom: 0.5rem;
  }
  a{
    margin-left: 1rem;
  }
</style>