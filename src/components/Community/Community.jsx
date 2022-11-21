import { COMMUNITY } from './Community.const'
import PropTypes from 'prop-types'

const ImgWithFallback = ({
  src,
  fallback,
  type = 'image/webp',
  alt,
  ...delegated
}) => {
  return (
    <picture>
      <source srcSet={src} type={type} />
      <img src={fallback} {...delegated} alt={alt} width="200px" />
    </picture>
  )
}

ImgWithFallback.propTypes = {
  src: PropTypes.string,
  fallback: PropTypes.string,
  type: PropTypes.string,
  alt: PropTypes.string,
}

const Community = () => {
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
              target="_blank"
              rel="noreferrer"
            >
              <ImgWithFallback
                src={`./assets/community/${e.fileCompr}`}
                fallback={`./assets/community/${e.file}`}
                alt={e.name + 'logo'}
              />
              <p className="underline underline-offset-2 text-sm font-bold">
                {e.name}
              </p>
            </a>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Community
