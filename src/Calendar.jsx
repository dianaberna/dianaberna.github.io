const Calendar = () => {
  return (
    <div className="mt-10 lg:w-2/5">
      <h2>Prossimi eventi a cui parteciperò</h2>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col border-solid border-2 border-black p-4 w-3/5 relative mt-10">
          <div className="border-solid border-2 border-black w-[5px] h-[20px] bg-black -mt-6 absolute ml-[10px]">
            {' '}
          </div>
          <div className="border-solid border-2 border-black w-[5px] h-[20px] bg-black -mt-6 absolute right-[20px]">
            {' '}
          </div>
          <div className="text-2xl font-bold">19 - 20 Novembre</div>
          <div className="text-lg">Devfest Pescara 2022</div>
          <div className="font-light my-2">
            Talk: Componenti accessibili per un frontend inclusivo
          </div>
          <a
            className="underline"
            href="https://devfest.gdgpescara.it/"
            target="_blank"
            rel="noreferrer"
          >
            Link per iscriversi all'evento
          </a>
        </div>
      </div>
    </div>
  )
}

export default Calendar
