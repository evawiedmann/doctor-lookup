import { Doctor } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

// API Framework
(async () => {
  let doctor = new Doctor();
  const response = await marsphoto.getDoctor();
  getElements(response);
})();

const getElements = function(response) {
  $('#marsPhotos').attr("src", response.photos[100].img_src);
};




'No docotors fit your request'

''
