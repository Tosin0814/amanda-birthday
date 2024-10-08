import Card from '../../components/Card/Card'
import Gallery from '../../components/Gallery/Gallery'
import './Home.css'

export default function Home({photos}) {
  return (
    <div className='Home'>
      <div className='header'>
        <div>
          <svg width={60} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 120.85" style={{"enableBackground":"new 0 0 122.88 120.85"}} xmlSpace="preserve" fill='red'>
            <g>
              <path className="st0" d="M62.88,25.44c9.88-5.98,17.15-11.49,29.41-9.66c18.59,2.76,31.57,21.8,26.75,39.29 c-3.81-2.95-8.39-5.01-13.44-5.76c-7.69-1.15-12.85,0.66-17.97,3.5c-3.77-5.85-7.97-10.31-17.17-12.91 c-0.44-0.12-0.92-0.25-1.42-0.36c-6.74-1.55-13.63-0.71-19.4,2.36c-5.92,3.15-10.6,8.55-12.71,16.03 c-0.12,0.42-0.24,0.88-0.35,1.38c-3.84,16.71,6.08,32.86,14.74,46.38l-11.73,6.71L29.3,95.34C16.93,74.82-4.85,47.31,0.97,22.03 C5.04,4.32,21.9-3.21,37.76,1.26C51.94,5.27,56.03,13.94,62.88,25.44L62.88,25.44L62.88,25.44L62.88,25.44z"/>
              <path className="st1" d="M85.02,63.27c6.54-3.96,11.36-7.61,19.47-6.4c15.24,2.27,24.79,21.05,13.33,33.95 c-3.26,3.68-8.94,7.56-15.06,11.24c-6.71,4.03-13.95,7.8-19.11,10.75l-14.06,8.04l-6.81-11.29c-8.19-13.59-22.61-31.8-18.76-48.54 c2.7-11.73,13.86-16.71,24.37-13.76C77.78,49.91,80.48,55.65,85.02,63.27L85.02,63.27L85.02,63.27L85.02,63.27z"/>
            </g>
          </svg>
        </div>
        <div className='Title'>
          Happy Birthday Amanda!!
        </div>
        <div>
          <svg width={60} xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 122.88 120.85" style={{"enableBackground":"new 0 0 122.88 120.85"}} xmlSpace="preserve" fill='red'>
            <g>
              <path className="st0" d="M62.88,25.44c9.88-5.98,17.15-11.49,29.41-9.66c18.59,2.76,31.57,21.8,26.75,39.29 c-3.81-2.95-8.39-5.01-13.44-5.76c-7.69-1.15-12.85,0.66-17.97,3.5c-3.77-5.85-7.97-10.31-17.17-12.91 c-0.44-0.12-0.92-0.25-1.42-0.36c-6.74-1.55-13.63-0.71-19.4,2.36c-5.92,3.15-10.6,8.55-12.71,16.03 c-0.12,0.42-0.24,0.88-0.35,1.38c-3.84,16.71,6.08,32.86,14.74,46.38l-11.73,6.71L29.3,95.34C16.93,74.82-4.85,47.31,0.97,22.03 C5.04,4.32,21.9-3.21,37.76,1.26C51.94,5.27,56.03,13.94,62.88,25.44L62.88,25.44L62.88,25.44L62.88,25.44z"/>
              <path className="st1" d="M85.02,63.27c6.54-3.96,11.36-7.61,19.47-6.4c15.24,2.27,24.79,21.05,13.33,33.95 c-3.26,3.68-8.94,7.56-15.06,11.24c-6.71,4.03-13.95,7.8-19.11,10.75l-14.06,8.04l-6.81-11.29c-8.19-13.59-22.61-31.8-18.76-48.54 c2.7-11.73,13.86-16.71,24.37-13.76C77.78,49.91,80.48,55.65,85.02,63.27L85.02,63.27L85.02,63.27L85.02,63.27z"/>
            </g>
          </svg>
        </div>
      </div>
      <Gallery photos={photos} />
      <Card />
    </div>
  )
}
