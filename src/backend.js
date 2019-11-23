export class Doctor {
  async getDoctor() {
    let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?first_name=First&last_name=Last&query=query&location=Location&skip=0&limit=10&user_key=API_KEY`);

      let jsonifiedResponse = await response.json();
      return jsonifiedResponse;
    }

  }
