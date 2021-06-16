<template>
  <div class="wrapper mx-auto px-10">
      <hr class="h-px mt-6 border-gray-300 max-w-screen-xl mx-auto">
      <div class="md:py-10">
            <div class="flex flex-col items-center justify-between mt-6 md:mt-0 md:flex-row">
                <div>
                    <nuxt-link to="/">
                        <p class="text-gray-700 font-semibold"> Diana Bernabei P.IVA 02430130449</p>
                    </nuxt-link>
                    <p class="text-gray-700"> 
                        <nuxt-link to="/credits" class="text-gray-700 text-base">Credits</nuxt-link> |
                        <a href="https://www.iubenda.com/privacy-policy/83839726" class="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe " title="Privacy Policy ">Privacy Policy</a><script type="text/javascript">(function (w,d) {var loader = function () {var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0]; s.src="https://cdn.iubenda.com/iubenda.js"; tag.parentNode.insertBefore(s,tag);}; if(w.addEventListener){w.addEventListener("load", loader, false);}else if(w.attachEvent){w.attachEvent("onload", loader);}else{w.onload = loader;}})(window, document);</script>
                    </p>
                </div>
                <div>
                    <Social />
                </div>
            </div>
        </div>
        <script type="text/javascript">
var _iub = _iub || [];
_iub.csConfiguration = {"consentOnContinuedBrowsing":false,"whitelabel":false,"lang":"it","siteId":2266998,"cookiePolicyId":83839726, "banner":{ "acceptButtonDisplay":true,"customizeButtonDisplay":true,"position":"float-bottom-left" }};
</script>
<script type="text/javascript" src="//cdn.iubenda.com/cs/iubenda_cs.js" charset="UTF-8" async></script>
  </div>
</template>

<script>
import Social from '../components/Social.vue'

export default {
    components: {
        Social
    }
}
</script>