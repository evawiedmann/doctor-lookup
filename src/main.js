import { Doctor } from './backend.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

//UI
$(document).ready(function(){
  $('form#dr').submit(function(event){
    event.preventDefault();

    $('#error').hide();
    const userInput = $('input#userSearch').val();
    console.log(userInput);
    const docInput =$('input#docSearch').val();
    console.log(docInput);

    (async () => {
      let doctor = new Doctor();
      const response = await doctor.getDoctor(userInput);
      getElements(response);
    })();
    for (var i = 0; i < response.data.length; i++) {
      getElements(response, i);
    };

    const getElements = function(response, i) {
      htmlForDoctorInfo +=
        "<div> <p>" + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + " " + "</p> <p>" response.data[i].practices[0].visit_address + " " + "</p> <p>" response.data[i].practices[0].phones[0].number + " " + response.data[i].practices[0].website + " " + "</p> <p>" response.data[i].practices[0].accepts_new_patients + "</p> </div>";
    };
    if (response.includes('You have encountered an error.')){
      $('#error').show();
      $('#errorMessage').text('You have encountered an error.'+ response);
    }
  });
