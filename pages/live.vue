<template>
  <div class="wrapper-small">
      <div class="text-center mt-2 border-b-2 pb-3">
        <h2 class="text-xl md:text-2xl lg:text-3xl text-gray-700 font-semibold">Live</h2>
      </div>
      <h3 class="text-sm md:text-base text-gray-700 font-regular my-3">Questa pagina è dedicata a tutti e tutte gli/le ospiti che ho avuto modo di intervistare nelle live del giovedì!</h3>
      <div class="text-base md:text-lg font-regular text-gray-700 mt-2">
        <p>01/04/2021 <a href="">Alessandro Berti (Ph.D Student in Quantum Computing @ University of Pisa)</a></p>
        <p>08/04/2021 <a href="">Giuseppe Checchia (Lead Developer)</a></p>
        <p>15/04/2021 <a href="">Fiorella De Luca (Project Manager)</a></p>
        <p>22/04/2021 <a href="">Giovanni Bartolomeo (MSc Student @ University of Pisa)</a></p>
        <p>29/04/2021 <a href="">Simone Torrisi (Software Architecture Consultant | JavaScript and React specialist | Founder & Mentor @TomorrowDevs) </a></p>
        <p>06/05/2021 <a href="">Aldo D'Aquino (Infrastructure Engineer @ Bending Spoons)</a></p>
        <p>13/05/2021 <a href="">Azzurra Ragone (Innovation & Transformation lead @ EY)</a></p>
        <p>20/05/2021 <a href="">Eugenio Paluello (CTO @ Tocket)</a></p>
        <p>27/05/2021 <a href="">Juna Salviati (Full Stack Developer | Co-leader GDG Roma)</a></p>
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