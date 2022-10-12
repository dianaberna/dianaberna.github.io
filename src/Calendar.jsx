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
          <div className="text-2xl font-bold">17-18-19 Ottobre</div>
          <div className="text-lg">
            WPC 22 - La più importante conferenza italiana sulle tecnologie
            Microsoft
          </div>
          <div className="font-light my-2">
            Talk: Una introduzione all'accessibilità
          </div>
          <a
            className="underline"
            href="https://www.wpc2022.it/"
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
