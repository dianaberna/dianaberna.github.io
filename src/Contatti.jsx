export const Contatti = () => {
  return (
    <div className="flex flex-row gap-4">
      <a
        role="button"
        className="px-6 py-2 bg-black text-white border-solid border-2 border-black flex items-center text-lg hover:bg-white hover:text-black"
        href="mailto:bernabei.d@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        Contattami
      </a>
      <a
        role="button"
        className="px-6 py-2 border-solid border-2 border-black flex items-center text-lg hover:bg-black hover:text-white"
        href="https://calendly.com/diana-bernabei/consulenza-gratuita"
        target="_blank"
        rel="noreferrer"
      >
        Prenota una call
      </a>
    </div>
  )
}
