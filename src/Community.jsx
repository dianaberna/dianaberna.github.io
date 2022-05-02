import { COMMUNITY } from './Community.const'

export const Community = () => {
  return (
    <div id="community" className="mt-20">
      <h2>Community</h2>
      <p>
        Da quando ho inziato ad essere presente sui social ho avuto modo di
        conoscere e collaborare con diverse community e voglio dedicare uno
        spazio per loro.
      </p>
      <div className="flex flex-wrap flex-row">
        {COMMUNITY.map((e, index) => (
          <div
            className="w-full md:w-1/5 p-4 flex flex-col items-center justify-center"
            key={index}
          >
            <a
              href={e.link}
              className="flex flex-col items-center justify-center"
            >
              <img src={`./assets/community/${e.file}`} alt="" />
              <p>{e.name}</p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}
