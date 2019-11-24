import { Doctor } from  './backend.js';
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
      const response = await doctor.getDoctor();
      getElements(response);
    })();

    const getElements = function(response) {
      $('#docAnswer').text(response.explanation);
    };

  });
