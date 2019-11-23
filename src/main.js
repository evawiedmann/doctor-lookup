import { Doctor } from  './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//UI
$(document).ready(function(){
  $('form#doctor').submit(function(event){
    event.preventDefault();

    const userInput = $('input#userSearch').val();



    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor();
      getElements(response);
    })();

    const getElements = function(response) {
      $('#dr').text(response.explanation);
    };




    'No docotors fit your request'

    ''
  });
