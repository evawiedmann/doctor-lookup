import { Doctor } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//UI
$(document).ready(function(){
  $('form#dr').submit(function(event){
    event.preventDefault();

    const userInput = $('input#userSearch').val();
    console.log(userInput);

    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor(userInput);
      getElements(response);
    })();

    const getElements = function(response) {
      $('#firstN').text(response.data[0].profile.first_name);
      $('#lastN').text(response.data[0].profile.last_name);
      $('#address').text(response.data[0].profile.);
      $('#phone').text(response.data[0].profile.);
      $('#web').text(response.data[0].profile.);
      $('#newPatients').text(response.data[0].profile.);
    };

  });
