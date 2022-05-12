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
          <div className="text-2xl font-bold">19 Maggio</div>
          <div className="text-lg">Meetup MiaPlatform Online</div>
          <div className="font-light my-2">
            Accessibilità e tecnologia, da che parte cominciare?
          </div>
          <a
            className="underline"
            href="https://www.meetup.com/mia-platform-cultura-innovazione-team/events/285718193/"
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
          <div className="text-2xl font-bold">20-21 Maggio</div>
          <div className="text-lg">Accessibility Days Milano + Online</div>
          <div className="font-light my-2">
            Talk: Accessible React, Track 2, 15:30 - 16:15
          </div>
          <a
            className="underline"
            href="https://accessibilitydays.it/2022/it/"
            target="_blank"
            rel="noreferrer"
          >
            Link per iscriversi all'evento
          </a>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row gap-10">
        <div className="flex flex-col border-solid border-2 border-black p-4 w-3/5 relative mt-10">
          <div className="border-solid border-2 border-black w-[5px] h-[20px] bg-black -mt-6 absolute ml-[10px]">
            {' '}
          </div>
          <div className="border-solid border-2 border-black w-[5px] h-[20px] bg-black -mt-6 absolute right-[20px]">
            {' '}
          </div>
          <div className="text-2xl font-bold">24-25 Maggio</div>
          <div className="text-lg">Workshop Fest Codemotion</div>
          <div className="font-light my-2">
            C’era una volta un componente #Storybook
          </div>
          <a
            className="underline"
            href="https://www.meetup.com/mia-platform-cultura-innovazione-team/events/285718193/"
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
