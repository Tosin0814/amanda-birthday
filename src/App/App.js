import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from '../pages/Home/Home';
import { getPhotos } from '../utilities/api/photos';

export default function App() {
  const [photos, setPhotos] = useState([]);

  const fetchPhotos = async () => {
    try {
      const photos = await getPhotos();
      setPhotos(photos)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <main className="App">
      <>
        <Routes>
          {/* <Route path="/" element={<Home user={user} />} /> */}
          <Route path='/*' element={<Home photos={photos} />} />
        </Routes>
      </>
    </main>
  );
}
