const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('');


const gsheet=async()=>{
await doc.useServiceAccountAuth({
    client_email: process.env.Gmail,
    private_key: process.env.GPassword,
  });
 
   
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  await doc.updateProperties({ title: 'renamed doc' });
   
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  console.log('title:'+sheet.title);
  console.log(sheet.rowCount);

}


module.exports = gsheet;