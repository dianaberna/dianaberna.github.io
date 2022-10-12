import { Contatti } from './Contatti'

export const Servizi = () => {
  return (
    <div id="servizi" className="mt-40">
      <svg
        aria-hidden={true}
        width="164"
        height="18"
        viewBox="0 0 164 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M2 9C7.33333 -0.333333 12.6667 -0.333333 18 9C23.3333 18.3333 28.6667 18.3333 34 9C39.3333 -0.333333 44.6667 -0.333333 50 9C55.3333 18.3333 60.6667 18.3333 66 9C71.3333 -0.333333 76.6667 -0.333333 82 9C87.3333 18.3333 92.6667 18.3333 98 9C103.333 -0.333333 108.667 -0.333333 114 9C119.333 18.3333 124.667 18.3333 130 9C135.333 -0.333333 140.667 -0.333333 146 9C151.333 18.3333 156.667 18.3333 162 9"
          stroke="black"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
      <h2>Di cosa mi occupo</h2>
      <div>
        <h3>
          <div></div>
          <span aria-hidden={true}> 💻</span> Sviluppo
        </h3>
        <p>
          Dallo sviluppo di un sito web vetrina o un blog fino allo sviluppo dei
          componenti per la creazione di un design system.{' '}
        </p>
        <p>
          Il mio linguaggio principale è Javascript e la libreria che prediligo
          è React.{' '}
        </p>
        <p>
          Amo scrivere CSS, sia vanilla che con preprocessori, perché per quanto
          una webapp abbia una business logic da favola senza un’interfaccia
          chiara e che funzioni alla perfezione l’utente non riuscirà a
          utilizzarla correttamente.{' '}
        </p>
        <h3>
          <span aria-hidden={true}> 🎨</span> Design
        </h3>
        <p>
          Avere un design o un'interfaccia intutiva, usabile, piacevole e
          completa è essenziale per la riuscita di un progetto. Il mio stile è
          essenziale con pochi fronzoli e attento all’inclusione e
          all’accessibilità.{' '}
        </p>
        <h3>
          <span aria-hidden={true}> ♿</span> Accessibilità
        </h3>
        <p>
          Come sviluppatrice e designer attenta all’accessibilità riesco ad
          aiutare team piccoli e grandi a portare il proprio applicativo ad
          essere accessibile. Posso intervenire in diverse fasi del progetto:
          nella parte precedente allo sviluppo per revisionare il design, nella
          parte intermedia per suggerire l’applicazione di best practice e nella
          parte finale o a posteriori della realizzazione di un prodotto, posso
          andare a testare il livello di accessibilità e notificare i problemi
          riscontrati e consigliare delle possibili soluzioni.
        </p>
        <Stack />
        <div className="flex flex-row items-center mt-10">
          <h3 className="block font-lg">Sono disponibile per</h3>
        </div>
        <div className="mt-4">
          <div>
            <p> 🧐 consulenze</p>
          </div>
          <div>
            <p> 🧑‍🏫 formazione</p>
          </div>
          <div>
            <p> 🎤 talk/workshop</p>
          </div>
          <div>
            <p> 💻 sviluppo autonomo</p>
          </div>
          <div>
            <p> 🤝 collaborazioni con aziende e freelance</p>
          </div>
          <div className="flex flex-row items-center mt-10">
            <svg
              aria-hidden={true}
              className="hidden md:flex mr-4"
              width="21"
              height="59"
              viewBox="0 0 21 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7.73256 29.8356C6.93671 22.9623 4.80505 16.2679 3.14057 9.56938C2.60922 7.43103 1.99773 5.26357 1.75878 3.06522C1.70648 2.584 1.4484 1.21089 1.71691 1.61365C2.32789 2.53012 4.98397 2.36782 5.89018 2.4511C9.49116 2.782 13.1094 2.70233 16.7211 2.70233C17.0521 2.70233 18.6969 2.36185 18.4937 2.86982C17.9998 4.10458 17.0064 5.21368 16.4141 6.41501C14.6089 10.076 13.2379 13.9631 12.0454 17.8601C10.0239 24.4662 8.7375 31.2126 8.7375 38.1263"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
              />
              <path
                d="M6.73746 46.1608C5.57652 47.8265 7.46281 48.4219 8.99856 48.4219C10.32 48.4219 11.3524 48.5355 12.1529 47.2774C14.39 43.7621 7.49731 41.6079 6.98869 44.151"
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            <p className="block">
              Ho avviato da poco <b>Inclusio</b>, un progetto legato al tema
              dell'<b>inclusione</b> e dell'<b>accessibilità</b>. Ancora è in
              fase di lancio, quindi non troverai ancora dei veri contenuti...
              ma puoi iscriverti alla nostra mailling list per ricevere tutti i
              nostri aggiornamenti. Ti assicuro che non riceverai spam!
            </p>
          </div>
          <div className="flex flex-row content-center justify-center mt-10">
            <a
              href="http://inclusio.it/"
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2 bg-black text-white border-solid border-2 border-black flex items-center text-lg hover:bg-white hover:text-black cursor-pointer"
            >
              Visita il sito di Inclusio
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

const Stack = () => {
  return (
    <div className="flex items-center justify-center my-10">
      <div className="flex flex-wrap flex-col gap-4 md:gap-10 md:flex-row mr-10 md:mr-0">
        <svg
          aria-label="html5"
          width="35"
          height="40"
          viewBox="0 0 35 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0L3.11607 35.3393L17.0982 40L31.1696 35.3393L34.2857 0H0ZM27.5179 11.4196H11.1071L11.4732 15.8304H27.1518L25.9375 29.0804L17.1964 31.4911V31.5179H17.0982L8.28571 29.0804L7.75 22.3125H12.0089L12.3214 25.7143L17.0982 27.0089L21.8929 25.7143L22.4286 20.1607H7.52679L6.38393 7.16071H27.9107L27.5179 11.4196V11.4196Z"
            fill="black"
          />
        </svg>
        <svg
          aria-label="css3"
          width="35"
          height="40"
          viewBox="0 0 35 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.285706 0L3.40178 35.3393L17.4286 40L31.4553 35.3393L34.5714 0H0.285706ZM28.2411 7.14286L27.8125 11.3661L17.5178 15.7679L17.4911 15.7768H27.4464L26.3036 28.8661L17.5357 31.4286L8.71428 28.8214L8.14285 22.2232H12.5089L12.7946 25.6429L17.4911 26.8304L22.375 25.4554L22.7053 19.9554L7.85713 19.9107V19.9018L7.83928 19.9107L7.51785 15.7768L17.5268 11.6071L18.1071 11.3661H7.13392L6.61606 7.14286H28.2411Z"
            fill="black"
          />
        </svg>
        <svg
          aria-label="sass"
          width="54"
          height="40"
          viewBox="0 0 54 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M25.7224 30.2405C25.6974 30.2905 25.6724 30.3305 25.7224 30.2405V30.2405ZM46.4815 22.9911C44.8056 22.9906 43.152 23.3755 41.6486 24.116C41.157 23.1244 40.6487 22.2578 40.5654 21.6079C40.4654 20.8496 40.357 20.3997 40.4737 19.4997C40.5904 18.5998 41.1153 17.3249 41.107 17.2332C41.0986 17.1416 40.9903 16.6833 39.9154 16.675C38.8405 16.6666 37.9156 16.8833 37.8081 17.1666C37.6182 17.6843 37.4705 18.2166 37.3664 18.7581C37.1748 19.733 35.2175 23.2161 34.1092 25.0326C33.7426 24.3243 33.4343 23.6994 33.3676 23.1994C33.2676 22.4412 33.1593 21.9912 33.2759 21.0913C33.3926 20.1913 33.9176 18.9164 33.9092 18.8248C33.9009 18.7331 33.7926 18.2748 32.7185 18.2665C31.6444 18.2582 30.7187 18.4748 30.6103 18.7581C30.502 19.0414 30.3854 19.708 30.1687 20.3497C29.9521 20.9913 27.3448 26.7908 26.6623 28.299C26.3124 29.0656 26.0124 29.6822 25.7957 30.0989C25.7624 30.1655 25.7374 30.2072 25.7207 30.2405C25.7457 30.1989 25.7624 30.1572 25.7624 30.1739C25.5791 30.5322 25.4708 30.7321 25.4708 30.7321V30.7405C25.3291 31.0071 25.1708 31.2488 25.0958 31.2488C25.0458 31.2488 24.9375 30.5488 25.1208 29.5906C25.5124 27.5741 26.4373 24.441 26.429 24.3327C26.4207 24.2743 26.604 23.7327 25.8207 23.4411C25.0625 23.1661 24.7875 23.6244 24.7208 23.6244C24.6542 23.6244 24.6042 23.791 24.6042 23.791C24.6042 23.791 25.4458 20.258 22.9885 20.258C21.4552 20.258 19.3221 21.9412 18.2738 23.4661C17.6156 23.8244 16.1907 24.5993 14.6908 25.4242C14.1158 25.7409 13.5242 26.0659 12.9659 26.3742C12.9243 26.3325 12.8909 26.2908 12.8493 26.2492C9.86702 23.0661 4.36081 20.8163 4.59412 16.5416C4.67745 14.9834 5.21907 10.8921 15.1824 5.92583C23.3484 1.8595 29.8771 2.97607 31.0011 5.4592C32.6177 9.00058 27.5106 15.5917 19.0304 16.5416C15.7982 16.8999 14.0992 15.65 13.6742 15.1834C13.2326 14.6918 13.1659 14.6668 12.9993 14.7584C12.7243 14.9084 12.8993 15.3417 12.9993 15.6C13.2492 16.2583 14.2908 17.4249 16.0649 18.0082C17.6231 18.5165 21.4127 18.7998 25.9949 17.0249C31.1428 15.0418 35.15 9.5172 33.9751 4.89258C32.7785 0.192964 24.9858 -1.34858 17.6172 1.26788C13.2268 2.82608 8.4788 5.27588 5.06325 8.46729C1.00608 12.267 0.356965 15.575 0.62361 16.9583C1.5727 21.8662 8.33715 25.0659 11.0444 27.4324C10.9111 27.5074 10.7861 27.5741 10.6695 27.6407C9.31207 28.3157 4.15499 31.0155 2.86426 33.8652C1.40605 37.0983 3.10591 39.4148 4.22165 39.7314C7.70387 40.698 11.2694 38.9565 13.1851 36.0984C15.1008 33.2403 14.8683 29.5072 13.985 27.8074C13.9767 27.7824 13.96 27.7657 13.9517 27.7407C14.3017 27.5324 14.66 27.3241 15.0183 27.1158C15.709 26.7075 16.384 26.3325 16.9756 26.0075C16.6423 26.9075 16.4007 27.9907 16.2757 29.5572C16.1257 31.3904 16.884 33.7652 17.8672 34.6985C18.3005 35.1068 18.8246 35.1151 19.1496 35.1151C20.2995 35.1151 20.8161 34.1652 21.3903 33.032C22.0985 31.6487 22.7235 30.0405 22.7235 30.0405C22.7235 30.0405 21.9402 34.3902 24.0817 34.3902C24.8641 34.3902 25.6474 33.3819 25.9982 32.8653V32.8736C25.9982 32.8736 26.0149 32.8403 26.0565 32.7736C26.1399 32.6487 26.1815 32.5737 26.1815 32.5737V32.5487C26.4982 32.007 27.1898 30.7655 28.2305 28.7156C29.5804 26.0659 30.8711 22.7578 30.8711 22.7578C30.9959 23.485 31.1685 24.2032 31.3878 24.9076C31.6211 25.6992 32.1127 26.5658 32.5043 27.4074C32.1877 27.8407 31.9961 28.0907 31.9961 28.0907C31.9967 28.0971 31.9996 28.103 32.0044 28.1074C31.7544 28.4407 31.4711 28.799 31.1795 29.1489C30.1137 30.4155 28.8463 31.8654 28.6797 32.282C28.4797 32.7736 28.5297 33.1403 28.913 33.4236C29.1963 33.6402 29.6962 33.6736 30.2204 33.6319C31.1786 33.5652 31.8536 33.3319 32.1785 33.1819C32.7776 32.9671 33.3439 32.6698 33.8609 32.2987C34.9025 31.5321 35.5358 30.4322 35.4774 28.9823C35.4441 28.1823 35.1858 27.3824 34.8692 26.6325C34.9608 26.4992 35.0608 26.3575 35.1525 26.2158C36.8015 23.8077 38.0764 21.1646 38.0764 21.1646C38.2011 21.8918 38.3737 22.6099 38.593 23.3144C38.793 23.9894 39.1838 24.731 39.5421 25.4559C37.9931 26.7141 37.0348 28.1724 36.7015 29.1306C36.0849 30.9055 36.5682 31.7054 37.4764 31.8887C37.8847 31.972 38.468 31.7804 38.9013 31.5971C39.5448 31.3827 40.1516 31.0708 40.7003 30.6721C41.7419 29.9055 42.7493 28.8306 42.6827 27.3724C42.6577 26.7141 42.4744 26.0559 42.2327 25.4226C43.5409 24.8726 45.24 24.5726 47.4065 24.8226C52.0461 25.3642 52.9543 28.264 52.7794 29.4722C52.6044 30.6805 51.6295 31.3554 51.3045 31.5554C50.9795 31.7554 50.8795 31.8304 50.9045 31.9804C50.9462 32.197 51.0962 32.1887 51.3711 32.1387C51.7545 32.072 53.8034 31.1554 53.8951 28.914C54.0284 26.0809 51.3045 22.9644 46.479 22.9894L46.4815 22.9911ZM10.7195 35.0485C9.18708 36.7233 7.03725 37.3566 6.11316 36.8233C5.12158 36.2467 5.51321 33.7819 7.40389 31.997C8.5538 30.9138 10.0362 29.9139 11.0194 29.2973C11.2444 29.1639 11.5694 28.964 11.9694 28.7223C12.036 28.6806 12.0693 28.664 12.0693 28.664C12.1443 28.614 12.2277 28.5723 12.311 28.5223C13.0018 31.0554 12.336 33.2886 10.7195 35.0468V35.0485ZM21.9152 27.4324C21.3819 28.7406 20.2578 32.0737 19.5746 31.8987C18.9913 31.7487 18.633 29.2073 19.4579 26.7075C19.8745 25.4492 20.7578 23.9494 21.2828 23.3661C22.1235 22.4245 23.0485 22.1245 23.2651 22.4995C23.5567 22.9911 22.2485 26.6158 21.9152 27.4324ZM31.1645 31.8487C30.9395 31.9654 30.7312 32.0404 30.6312 31.982C30.5562 31.9404 30.7228 31.7821 30.7228 31.7821C30.7228 31.7821 31.8811 30.5405 32.3394 29.9739C32.606 29.6406 32.9143 29.2489 33.2468 28.8156C33.2468 28.8573 33.2551 28.899 33.2551 28.949C33.2443 30.4405 31.8119 31.4487 31.162 31.8487H31.1645ZM38.2955 30.2238C38.1289 30.1072 38.1539 29.7156 38.7122 28.499C38.9288 28.024 39.428 27.2241 40.2954 26.4575C40.3936 26.7477 40.447 27.0511 40.4537 27.3574C40.4454 29.2323 39.1038 29.9322 38.2964 30.2238H38.2955Z"
            fill="black"
          />
        </svg>
        <svg
          aria-label="bootstrap"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M26.998 24.9937C26.998 28.7804 23.4516 28.6929 23.0766 28.6929H15.8542V21.3991H23.0766C26.8766 21.3991 26.998 24.2473 26.998 24.9937ZM22.5203 18.4643C22.5801 18.4643 25.9525 18.5536 25.9525 15.2223C25.9525 13.8366 25.6391 12.0196 22.5203 12.0196H15.8542V18.4643H22.5203V18.4643ZM40.8998 6.66696V33.333C40.8946 35.0996 40.1905 36.7924 38.9413 38.0416C37.6922 39.2907 35.9994 39.9948 34.2328 40H7.56674C5.80015 39.9948 4.10739 39.2907 2.85821 38.0416C1.60904 36.7924 0.904962 35.0996 0.89978 33.333L0.89978 6.66696C0.904962 4.90037 1.60904 3.20761 2.85821 1.95843C4.10739 0.709256 5.80015 0.00518205 7.56674 0H34.2328C35.9994 0.00518205 37.6922 0.709256 38.9413 1.95843C40.1905 3.20761 40.8946 4.90037 40.8998 6.66696V6.66696ZM31.0828 25.5232C31.0828 23.5973 30.4891 20.3188 26.7034 19.5098V19.4446C28.7489 18.5714 30.0373 16.9223 30.0373 14.4768C30.0373 13.8518 30.2159 8.69286 23.1087 8.69286H11.7694V32.0259C23.2185 32.0259 24.2578 32.1759 26.3766 31.5161C27.6453 31.1214 31.0828 29.9107 31.0828 25.5232V25.5232Z"
            fill="black"
          />
        </svg>
        <svg
          aria-label="tailwind css"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M20.3448 10C16.1948 10 13.6048 12.0367 12.5664 16.1117C14.1214 14.0733 15.9381 13.3117 18.0114 13.82C19.1948 14.11 20.0398 14.9533 20.9748 15.8867C22.5014 17.4067 24.3081 19.1667 28.1214 19.1667C32.2714 19.1667 34.8614 17.13 35.8998 13.055C34.3448 15.0933 32.5281 15.855 30.4548 15.3467C29.2714 15.0567 28.4264 14.2133 27.4914 13.28C25.9648 11.76 24.1998 10 20.3448 10ZM13.6781 20.8333C9.52811 20.8333 6.93811 22.87 5.89978 26.945C7.45478 24.9067 9.27145 24.145 11.3448 24.6533C12.5281 24.9433 13.3731 25.7867 14.3081 26.72C15.8348 28.24 17.5998 30 21.4548 30C25.6048 30 28.1948 27.9633 29.2331 23.8883C27.6781 25.9267 25.8614 26.6883 23.7881 26.18C22.6048 25.89 21.7598 25.0467 20.8248 24.1133C19.2981 22.5933 17.5331 20.8333 13.6781 20.8333Z"
            stroke="black"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="flex flex-wrap flex-col gap-4 md:gap-10 md:ml-10 md:flex-row">
        <svg
          aria-label="javascript"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0.89978 0V40H40.8998V0H0.89978ZM22.6676 31.1964C22.6676 35.0893 20.3819 36.8661 17.0516 36.8661C14.0426 36.8661 12.3016 35.3125 11.4087 33.4286L14.4712 31.5804C15.0605 32.625 15.5962 33.5089 16.8909 33.5089C18.123 33.5089 18.9087 33.0268 18.9087 31.1429V18.3661H22.6676V31.1964V31.1964ZM31.5605 36.8661C28.0694 36.8661 25.8105 35.2054 24.7123 33.0268L27.7748 31.2589C28.5784 32.5714 29.6319 33.5446 31.4801 33.5446C33.0337 33.5446 34.0337 32.7679 34.0337 31.6875C34.0337 30.4018 33.0159 29.9464 31.2926 29.1875L30.3551 28.7857C27.6409 27.6339 25.8462 26.1786 25.8462 23.1161C25.8462 20.2946 27.998 18.1518 31.3462 18.1518C33.7391 18.1518 35.4534 18.9821 36.6855 21.1607L33.7569 23.0357C33.1141 21.8839 32.4176 21.4286 31.3373 21.4286C30.2391 21.4286 29.5426 22.125 29.5426 23.0357C29.5426 24.1607 30.2391 24.6161 31.8551 25.3214L32.7926 25.7232C35.9891 27.0893 37.7837 28.4911 37.7837 31.6339C37.7837 35.0089 35.123 36.8661 31.5605 36.8661V36.8661Z"
            fill="black"
          />
        </svg>
        <svg
          aria-label="react js"
          width="47"
          height="40"
          viewBox="0 0 47 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M38.2371 12.9625C37.755 12.8018 37.2728 12.65 36.7907 12.5071C36.8711 12.1768 36.9425 11.8465 37.0139 11.5161C38.1121 6.19498 37.3889 1.91842 34.9515 0.507785C32.6034 -0.840357 28.7733 0.561353 24.8985 3.93617C24.5146 4.26651 24.1396 4.61471 23.7825 4.9629C23.5414 4.73077 23.2914 4.49864 23.0415 4.27544C18.9792 0.668491 14.908 -0.849285 12.4706 0.570282C10.1314 1.92735 9.43504 5.95392 10.4171 10.9894C10.5153 11.4893 10.6225 11.9804 10.7475 12.4804C10.1761 12.6411 9.6136 12.8196 9.08684 13.0071C4.31924 14.6588 0.89978 17.2658 0.89978 19.9621C0.89978 22.7477 4.54244 25.5422 9.49754 27.2385C9.8993 27.3724 10.3011 27.5063 10.7118 27.6224C10.5778 28.1581 10.4618 28.6849 10.3546 29.2295C9.41718 34.1846 10.1493 38.1129 12.4884 39.4611C14.899 40.8538 18.9524 39.4253 22.8986 35.9702C23.2111 35.6934 23.5236 35.4077 23.8361 35.1042C24.2289 35.4881 24.6396 35.8541 25.0503 36.2112C28.8715 39.4968 32.6481 40.8271 34.9783 39.4789C37.3889 38.0861 38.1746 33.8631 37.1568 28.7206C37.0764 28.3277 36.9871 27.926 36.8889 27.5153C37.1746 27.4349 37.4514 27.3456 37.7282 27.2564C42.8797 25.5511 46.6116 22.7923 46.6116 19.9621C46.6116 17.2569 43.094 14.632 38.2371 12.9625V12.9625ZM26.1574 5.38253C29.4786 2.48982 32.5767 1.35595 33.9873 2.16841C35.4961 3.03444 36.0765 6.53425 35.1301 11.1322C35.0676 11.4358 35.0051 11.7304 34.9248 12.025C32.9427 11.5786 30.9339 11.2572 28.9161 11.0786C27.7555 9.41802 26.4877 7.82882 25.1128 6.33783C25.461 6.00749 25.8002 5.69501 26.1574 5.38253V5.38253ZM15.8276 24.5958C16.2829 25.3725 16.7471 26.1493 17.2382 26.9082C15.8454 26.7564 14.4616 26.5332 13.0956 26.2386C13.4884 24.9529 13.9794 23.6226 14.5508 22.2656C14.9615 23.0512 15.3811 23.828 15.8276 24.5958V24.5958ZM13.1223 13.8553C14.408 13.5696 15.774 13.3375 17.1936 13.1589C16.7204 13.8999 16.2561 14.6588 15.8186 15.4266C15.3812 16.1855 14.9526 16.9623 14.5508 17.7479C13.9884 16.4176 13.5152 15.1141 13.1223 13.8553ZM15.5686 20.0067C16.1579 18.7747 16.8007 17.5694 17.4793 16.3819C18.1578 15.1945 18.8899 14.0428 19.6577 12.9089C20.9969 12.8107 22.3629 12.7571 23.7557 12.7571C25.1485 12.7571 26.5234 12.8107 27.8537 12.9089C28.6126 14.0338 29.3358 15.1856 30.0232 16.3641C30.7107 17.5426 31.3535 18.7479 31.9606 19.971C31.3624 21.2031 30.7196 22.4173 30.0322 23.6137C29.3536 24.8011 28.6304 25.9529 27.8716 27.0957C26.5413 27.1939 25.1574 27.2385 23.7557 27.2385C22.354 27.2385 20.9969 27.1939 19.6845 27.1135C18.9077 25.9796 18.1756 24.819 17.4882 23.6316C16.8007 22.4441 16.1668 21.2388 15.5686 20.0067ZM31.6928 24.5779C32.1481 23.7923 32.5767 22.9977 32.9963 22.1941C33.5677 23.4887 34.0677 24.8011 34.5051 26.1493C33.1213 26.4618 31.7196 26.7028 30.3089 26.8635C30.791 26.1136 31.2464 25.3457 31.6928 24.5779ZM32.9784 17.7479C32.5588 16.9623 32.1303 16.1766 31.6839 15.4088C31.2464 14.6499 30.791 13.8999 30.3179 13.1589C31.7553 13.3375 33.1302 13.5785 34.4158 13.8731C34.0052 15.1945 33.523 16.4801 32.9784 17.7479V17.7479ZM23.7736 7.70383C24.711 8.72163 25.5949 9.793 26.4163 10.9001C24.6485 10.8197 22.8718 10.8197 21.1041 10.9001C21.979 9.74836 22.8808 8.67699 23.7736 7.70383ZM13.417 2.23091C14.9169 1.35595 18.2471 2.60589 21.7558 5.71286C21.979 5.90928 22.2022 6.12356 22.4343 6.33783C21.0505 7.82882 19.7738 9.41802 18.6042 11.0786C16.5864 11.2572 14.5866 11.5697 12.6045 12.0072C12.4884 11.5518 12.3902 11.0876 12.292 10.6233C11.4528 6.30212 12.0063 3.04336 13.417 2.23091V2.23091ZM11.2296 25.7654C10.8546 25.6582 10.4886 25.5422 10.1225 25.4172C8.22082 24.819 6.06022 23.8726 4.4978 22.6316C3.59606 22.0066 2.98895 21.0424 2.81932 19.9621C2.81932 18.3283 5.6406 16.2391 9.71181 14.8195C10.2207 14.641 10.7385 14.4803 11.2564 14.3285C11.8635 16.2659 12.5956 18.1676 13.4438 20.0067C12.5867 21.8727 11.8456 23.8012 11.2296 25.7654V25.7654ZM21.6397 34.5149C20.1666 35.863 18.4613 36.9344 16.6043 37.6665C15.6133 38.1397 14.4705 38.1843 13.4527 37.7826C12.0331 36.9612 11.4439 33.8096 12.2474 29.5687C12.3456 29.0688 12.4527 28.5688 12.5777 28.0777C14.5776 28.5063 16.5954 28.8009 18.6399 28.9527C19.8184 30.6222 21.113 32.2204 22.4968 33.7203C22.2111 33.9971 21.9254 34.2649 21.6397 34.5149ZM23.8271 32.3454C22.9165 31.3633 22.0058 30.2741 21.1219 29.1045C21.979 29.1402 22.8629 29.158 23.7557 29.158C24.6753 29.158 25.577 29.1402 26.4698 29.0955C25.6485 30.2294 24.7646 31.3097 23.8271 32.3454V32.3454ZM35.4961 35.0238C35.4158 36.113 34.8801 37.1308 34.023 37.8183C32.6034 38.6397 29.5768 37.5683 26.3091 34.7649C25.9342 34.4435 25.5592 34.0953 25.1753 33.7382C26.5413 32.2293 27.8001 30.6312 28.9429 28.9527C30.9875 28.7831 33.0231 28.4706 35.0319 28.0152C35.1212 28.3813 35.2015 28.7473 35.2729 29.1045C35.7104 31.0329 35.7818 33.0418 35.4961 35.0238V35.0238ZM37.1211 25.4261C36.8711 25.5064 36.6211 25.5868 36.3622 25.6582C35.7372 23.7119 34.9694 21.8102 34.0855 19.9621C34.9426 18.1408 35.6658 16.2659 36.2729 14.3463C36.7372 14.4803 37.1836 14.6231 37.6121 14.766C41.7726 16.1944 44.6921 18.3193 44.6921 19.9442C44.6921 21.6942 41.5762 23.953 37.1211 25.4261ZM23.7557 24.0869C26.0145 24.0869 27.8448 22.2566 27.8448 19.9978C27.8448 17.739 26.0145 15.9087 23.7557 15.9087C21.4969 15.9087 19.6666 17.739 19.6666 19.9978C19.6666 22.2566 21.4969 24.0869 23.7557 24.0869Z"
            fill="black"
          />
        </svg>
        <svg
          aria-label="storybook"
          width="41"
          height="40"
          viewBox="0 0 41 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M27.8441 0.397511L27.6429 4.91626C27.6366 5.17001 27.9291 5.32626 28.1316 5.17001L29.8954 3.83501L31.3929 5.00001C31.5879 5.13001 31.8491 5.00001 31.8616 4.76501L31.6929 0.168761L33.9129 1.07936e-05C35.0654 -0.0787392 36.0479 0.840011 36.0479 1.99876V38.0013C36.0479 39.1475 35.0904 40.0588 33.9454 40L7.10913 38.8025C6.06788 38.7575 5.22788 37.9175 5.19538 36.8688L3.94538 3.86751C3.88038 2.76126 4.72038 1.81001 5.82663 1.75126L27.8254 0.365011L27.8441 0.397511ZM22.7279 15.5013C22.7279 16.2825 27.9954 15.8988 28.7104 15.365C28.7104 10.0325 25.8454 7.21376 20.6116 7.21376C15.3641 7.21376 12.4479 10.085 12.4479 14.3688C12.4479 21.7838 22.4479 21.9138 22.4479 25.9638C22.4479 27.1363 21.9141 27.8 20.6966 27.8C19.0954 27.8 18.4441 26.9863 18.5291 24.2C18.5291 23.6013 12.4479 23.3988 12.2466 24.2C11.7979 30.9188 15.9641 32.865 20.7429 32.865C25.3979 32.865 29.0304 30.385 29.0304 25.8988C29.0304 17.95 18.8616 18.1638 18.8616 14.2325C18.8616 12.6175 20.0666 12.4025 20.7429 12.4025C21.4979 12.4025 22.8266 12.52 22.7291 15.515L22.7279 15.5013Z"
            fill="black"
          />
        </svg>
        <svg
          aria-label="accessibilità"
          width="32"
          height="40"
          viewBox="0 0 32 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M31.8547 19.985L30.8469 32.2744C30.5891 35.4542 25.8546 35.0167 26.1124 31.8916L26.8937 22.321L23.6826 22.5007C24.4717 24.1179 24.917 25.9305 24.917 27.8524C24.917 31.0712 23.6592 34.001 21.6123 36.1729L18.5419 33.1025C23.0654 28.1258 19.5653 20.0397 12.7604 20.0397C10.7369 20.0397 8.89313 20.8131 7.51027 22.071L4.43987 19.0006C6.15867 17.3833 8.35405 16.2583 10.7994 15.8598L16.6824 9.16433L13.3542 7.22678L9.32283 10.8206C6.97901 12.9144 3.80704 9.37528 6.15867 7.27365L11.4713 2.53133C12.237 1.8438 13.3542 1.73443 14.2448 2.25007C14.2448 2.25007 25.128 8.57057 25.1436 8.58619C26.4093 9.37528 26.7608 11.3988 25.6202 12.6957L21.0576 17.8912L29.3469 17.4302C30.7922 17.3443 31.9719 18.5552 31.8547 19.985ZM26.7843 7.95336C28.9797 7.95336 30.761 6.17206 30.761 3.97668C30.761 1.7813 28.9797 0 26.7843 0C24.5889 0 22.8076 1.7813 22.8076 3.97668C22.8076 6.17206 24.5889 7.95336 26.7843 7.95336V7.95336ZM12.7682 35.6651C6.47118 35.6651 2.81482 28.5868 6.30711 23.4694L3.20546 20.3678C1.58041 22.4225 0.611633 25.0242 0.611633 27.8446C0.611633 38.0558 12.3854 43.5794 20.2528 37.4152L17.1512 34.3135C15.9011 35.1651 14.3933 35.6651 12.7682 35.6651Z"
            fill="black"
          />
        </svg>
        <svg
          aria-label="figma"
          width="27"
          height="40"
          viewBox="0 0 27 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M7.35844 0C3.28011 0 0.000105841 3.42167 0.000105841 7.61333C0.000105841 10.1617 1.21344 12.425 3.07844 13.8067C2.11724 14.5268 1.33812 15.4621 0.803546 16.5376C0.26897 17.6132 -0.00619571 18.799 0.000105841 20C0.000105841 22.55 1.21344 24.8117 3.07844 26.1933C2.11724 26.9135 1.33812 27.8488 0.803546 28.9243C0.26897 29.9998 -0.00619571 31.1856 0.000105841 32.3867C0.000105841 36.5783 3.28011 40 7.35844 40C11.4351 40 14.7168 36.5783 14.7168 32.3867V25.95C16.0057 27.0246 17.6303 27.6138 19.3084 27.615C23.3868 27.6133 26.6668 24.1917 26.6668 20C26.6735 18.7989 26.3985 17.613 25.8639 16.5374C25.3293 15.4618 24.5499 14.5265 23.5884 13.8067C24.5496 13.0865 25.3288 12.1512 25.8633 11.0757C26.3979 10.0002 26.6731 8.81436 26.6668 7.61333C26.6668 3.42167 23.3868 0 19.3084 0H7.35844V0ZM2.76511 7.61333C2.76511 4.96167 4.83511 2.83833 7.35844 2.83833H11.9501V12.3883H7.35844C4.83511 12.3883 2.76511 10.2633 2.76511 7.61333V7.61333ZM19.3084 12.3867H14.7168V2.83667H19.3084C21.8334 2.83667 23.9018 4.96167 23.9018 7.61333C23.9018 10.2633 21.8334 12.3867 19.3084 12.3867ZM2.76677 20C2.76677 17.35 4.83677 15.225 7.36011 15.225H11.9518V24.775H7.35844C4.83344 24.775 2.76511 22.65 2.76511 20H2.76677ZM14.7168 20C14.7168 17.35 16.7868 15.225 19.3101 15.225C21.8351 15.225 23.9034 17.3483 23.9034 20C23.9034 22.65 21.8351 24.775 19.3101 24.775C16.7868 24.775 14.7184 22.6517 14.7184 20H14.7168ZM2.76677 32.3867C2.76677 29.7367 4.83677 27.6133 7.36011 27.6133H11.9518V32.3867C11.9518 35.0383 9.88511 37.1617 7.36011 37.1617C4.83677 37.1617 2.76677 35.0383 2.76677 32.3867Z"
            fill="black"
          />
        </svg>
      </div>
    </div>
  )
}
