export class Doctor {
  async getDoctor() {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?location=Portland&skip=0&limit=10&user_key=${process.env.API_KEY}`);


      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;


    } catch (error) {
      console.error('You have encountered an error.'+error.message);
    }

  }
