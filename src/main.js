import { Doctor } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//UI

$('form#doctor').submit



(async () => {
  let doctor = new Doctor();
  const response = await marsphoto.getDoctor();
  getElements(response);
})();

const getElements = function(response) {
  $('#dailyDesc').text(response.explanation);
};




'No docotors fit your request'

''
