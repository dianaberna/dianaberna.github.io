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
          <div className="text-2xl font-bold">2-5 Giugno</div>
          <div className="text-lg">PYCON Italia 2022</div>
          <div className="font-light my-2">Talk: Web Accessibility in mind</div>
          <a
            className="underline"
            href="https://pycon.it/en/talk/web-accessibility-in-mind?day=2022-06-04"
            target="_blank"
            rel="noreferrer"
          >
            Link per iscriversi all'evento
          </a>
        </div>
        <div className="flex flex-col border-solid border-2 border-black p-4 w-3/5 relative mt-10">
          <div className="border-solid border-2 border-black w-[5px] h-[20px] bg-black -mt-6 absolute ml-[10px]">
            {' '}
          </div>
          <div className="border-solid border-2 border-black w-[5px] h-[20px] bg-black -mt-6 absolute right-[20px]">
            {' '}
          </div>
          <div className="text-2xl font-bold">16-18 Giugno</div>
          <div className="text-lg">Web Marketing Festival</div>
          <div className="font-light my-2">
            Talk: Design system accessibile in React
          </div>
          <a
            className="underline"
            href="https://www.webmarketingfestival.it/"
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
