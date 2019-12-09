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
    const userInput = $('input#docSearch').val();
    console.log(userInput);
    // (async () => {
      let doctor = new Doctor();
      // const response = await doctor.getDoctor(userInput);
      const response = doctor.getDoctor(userInput);
      console.log(response);
      console.log(response.data[0]);
      console.log(response.data[0].practices[0]);
      console.log(response.data[0].practices[0].phones[0]);

    // })();
    const getElements = function(response, i) {
      let htmlForDoctorInfo = "<div> <p>" + response.data[i].profile.first_name + response.data[i].profile.last_name + "</p> <p>" + response.data[i].practices[0].visit_address + "</p> <p>" + response.data[i].practices[0].phones[0].number + "</p> <p>" + response.data[i].practices[0].website.url + "</p> <p>" + response.data[i].practices[0].accepts_new_patients + "</p> </div> <hr>";
      return htmlForDoctorInfo;
    };
    let doctorHTML = "";
    for (var i = 0; i < response.data.length; i++) {
      let singleDoc = getElements(response, i);
      doctorHTML = doctorHTML + singleDoc;
    }
    $("#docResponse").html(doctorHTML);

    // if (response.includes("You have encountered an error.")){
    //   $('#error').show();
    //   $('#errorMessage').text('You have encountered an error.'+ response);
    // }
  });
  $('form#symptom').submit(function(event){
    event.preventDefault();

    $('#error').hide();
    const userInput = $('input#userSearch').val();
    console.log(userInput);
    // (async () => {
      let doctor = new Doctor();
      // const response = await doctor.getDoctor(userInput);
      const response = doctor.getDoctor(userInput);
      console.log(response);
      console.log(response.data[0]);
      console.log(response.data[0].practices[0]);
      console.log(response.data[0].practices[0].phones[0]);

    // })();
    const getElements = function(response, i) {
      let htmlForDoctorInfo = "<div> <p>" + response.data[i].profile.first_name + response.data[i].profile.last_name + "</p> <p>" + response.data[i].practices[0].visit_address + "</p> <p>" + response.data[i].practices[0].phones[0].number + "</p> <p>" + response.data[i].practices[0].website.url + "</p> <p>" + response.data[i].practices[0].accepts_new_patients + "</p> </div> <hr>";
      return htmlForDoctorInfo;
    };
    let doctorHTML = "";
    for (var i = 0; i < response.data.length; i++) {
      let singleDoc = getElements(response, i);
      doctorHTML = doctorHTML + singleDoc;
    }
    $("#docResponse").html(doctorHTML);

    // if (response.includes("You have encountered an error.")){
    //   $('#error').show();
    //   $('#errorMessage').text('You have encountered an error.'+ response);
    // }
  });
  });
