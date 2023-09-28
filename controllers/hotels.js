import fs from 'fs'

const getAllHotels = (req, res) => {
res.header('Access-Control-Allow-Origin', '*')
const jsonFile = './mockup/hotels.json'

fs.readFile(jsonFile, (err, data) => {
  if (err) {
    return res.status(500).json({ error: err })
  }
  else {
    const jsonData = JSON.parse(data)
    res.status(200).json(jsonData)
  }
})
}

const getHotelById = (req, res) => {
  res.header('Access-Control-Allow-Origin', '*');
  const jsonFile = './mockup/hotels.json';
  const hotelId = req.params.id; // Obtén el ID del hotel desde los parámetros de la solicitud

  fs.readFile(jsonFile, (err, data) => {
    if (err) {
      return res.status(500).json({ error: err });
    } else {
      const jsonData = JSON.parse(data);
      const hotel = jsonData.find((hotel) => hotel.id == hotelId); // Busca el hotel por su ID en los datos JSON
    
      if (hotel) {
        res.status(200).json(hotel); // Si se encuentra el hotel, lo devuelve en la respuesta
      } else {
        res.status(404).json({ error: 'Hotel not found' }); // Si no se encuentra el hotel, devuelve un error 404
      }
    }
  });
};



export {getAllHotels, getHotelById}