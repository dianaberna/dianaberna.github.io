<template>
    <div class="wrapper-small my-5">
        <h3 class="text-xl md:text-2xl lg:text-3xl text-gray-800 font-semibold text-center">I miei servizi</h3>
        <br><br>
        <div class="grid lg:grid-cols-3 gap-4 justify-items-stretch">
            <div>
                <h4 class="text-l md:text-xl lg:text-2xl text-gray-800 font-semibold text-center">Progettazione</h4><br>
                <img src="~/assets/idea.png" class="skills object-center mx-auto"><br>
                <p>La progettazione di un sito è la parte più importante, è il biglietto da visita di un professionista o di un'azienda.</p>
                <p>Si parte da un bisogno o un idea e si realizza un design in tutte le sue parti, dal web design, alle immagini e le sezioni di contenuti. </p>
            </div>
            <div>
                <h4 class="text-l md:text-xl lg:text-2xl text-gray-800 font-semibold text-center">Accessibilità</h4><br>
                <img src="~/assets/accessibility.png" class="skills object-center mx-auto"><br>
                <p>Parte fondamentale del design è l'accortezza di renderlo inclusivo e accessibile. </p>
                <p>Il web è di libero accesso e per questo deve esserepossibile navigarlo per tutti, anche per chi ha una disabilità. Questo porta anche il brand ad essere al passo con i tempi e nel rispettoso di qualsiasi utente.
                </p>
            </div>
            <div>
                <h4 class="text-l md:text-xl lg:text-2xl text-gray-800 font-semibold text-center">Sviluppo</h4><br>
                <img src="~/assets/dev.png" class="skills object-center mx-auto"><br>
                <p>Infine si passa allo sviluppo, in base alle esigenze si riflette su quale tecnologia utilizzare tenendo in considerazione sia le prestazioni che la manutenibilità del codice e del progetto.
                </p>
            </div>
        </div>
        <br><br>
        <div class="">
            <p class="text-gray-800 font-semibold">Sono disponibile per consulenze, progetti, idee e collaborazioni. </p><br>
            <a href="https://www.instagram.com/_dianacodes/" aria-label="Visita il feed instagram" role="button" target="_blank" class="bg-primary px-3 py-2 text-sm text-gray-100 font-semibold rounded-full" rel="noreferrer">Contattami!</a>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>
.skills{
    width: 100px;
    height: 100px;
}
</style>