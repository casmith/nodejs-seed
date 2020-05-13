import officers from '../dummy/officers.js';

class OfficerController {
   
    static list(req, res) {
          return res.status(200).json({
                officers,
                message: "All the students",
          });
    }
    
    static get(req, res) {
           const officer = officers.find(officer => officer.id === parseInt(req.params.id, 10));
           if (officer) {
               return res.status(200).json({officer});
           }
           return res.status(404).json({
                 message: "Not Found",
           });
    }
}
export default OfficerController;
