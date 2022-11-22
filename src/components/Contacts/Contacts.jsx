const Contacts = () => {
  return (
    <div className="flex flex-row gap-4">
      <form action="mailto:bernabei.d@gmail.com">
        <input
          className="px-6 py-2 bg-black text-white border-solid border-2 border-black flex items-center text-lg hover:bg-white hover:text-black cursor-pointer"
          type="submit"
          value="Contattami"
        />
      </form>
      <form action="https://calendly.com/diana-bernabei/consulenza-gratuita">
        <input
          className="px-6 py-2 border-solid border-2 border-black flex items-center text-lg hover:bg-black hover:text-white cursor-pointer"
          type="submit"
          value="Prenota una call"
        />
      </form>
    </div>
  )
}

export default Contacts
