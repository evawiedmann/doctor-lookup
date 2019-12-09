
export class Doctor {
  // async getDoctor(doctorInfo) {
    getDoctor(doctorInfo) {
      // let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${doctorInfo}&location=Portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
        //
        //   let jsonifiedResponse = await response.json();
        console.log(doctorInfo);
        var response = {
          "data": [
            {
              "practices": [
                {
                  "website": {
                    "url": "fakesite.com"
                  },
                  "accepts_new_patients": true,
                  "visit_address": "fake address",
                  "phones": [
                    {
                      "number": "09384029384"
                    }
                  ]
                }
              ],
              "profile": {
                "first_name": "Eva",
                "last_name": "Wiedmann",
              }
            }
          ]
        }
        return response;
      } catch (error) {
        return 'You have encountered an error.'+ error.message;
      }
      getDoctorSymptom(symptom) {
        // let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${symptom}&location=Portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);
          //
          //   let jsonifiedResponse = await response.json();
          console.log(symptom);
          var response = {
            "data": [
              {
                "practices": [
                  {
                    "website": {
                      "url": "fakesite.com"
                    },
                    "accepts_new_patients": true,
                    "visit_address": "fake address",
                    "phones": [
                      {
                        "number": "09384029384"
                      }
                    ]
                  }
                ],
                "profile": {
                  "first_name": "Eva",
                  "last_name": "Wiedmann",
                }
              }
            ]
          }
          return response;
        }
        // catch (error) {
          // return 'You have encountered an error.'+ error.message;
        // }
      }
