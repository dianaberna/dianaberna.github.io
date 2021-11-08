<template>
  <div class="wrapper-small text-gray-700">
      <div class="mt-2 border-b-2 pb-3">
        <h2 class="text-xl md:text-2xl lg:text-3xl font-semibold">Interviste Live</h2>
      </div>
      <p class="text-base md:text-lg font-regular mt-2">Ogni giovedì nel mio canale Twitch dianacodes sono live con una nuova intervista e in questa pagina puoi trovare tutti/e gli/le ospiti con cui ho chiacchierato fino ad ora.<br>
        Le interviste sono poi state registrate e caricate su YouTube, trovate il link alle puntate per ogni ospite!
      </p>
      <br>
      <div class="flex flex-col">
        <div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div class="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div class="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-200">
                <thead class="bg-gray-50">
                  <tr>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Nome
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Job Role
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Stagione
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Data
                    </th>
                    <th scope="col" class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Video
                    </th>
                  </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                  <tr v-for="guest in guests" :key="guest.name">
                    <td class="px-6 py-3 whitespace-nowrap">
                      <div class="flex items-center">
                          <div class="text-sm font-medium text-gray-900">
                            {{ guest.name }}
                          </div>
                      </div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ guest.job }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap">
                      <div class="text-sm text-gray-900">{{ guest.season }}</div>
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {{ guest.date }}
                    </td>
                    <td class="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                      <a :href="guest.youtube" class="text-indigo-600 hover:text-indigo-900">YouTube</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>


  </div>
</template>

<script>
import * as GuestService from '../services/GuestService'

export default {
  data() {
    return {
        guests: ''
    }
  },
  components: { },
  mounted() {
    this.guests = GuestService.fetchAll();
  }
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
  ol{
    padding-left: 20px;
  }
</style>