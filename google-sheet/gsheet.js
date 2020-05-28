const { GoogleSpreadsheet } = require('google-spreadsheet');
const doc = new GoogleSpreadsheet('1qp1ELP_Ryz_SUn4xTLRiBDyo1nkPtI8Wb9FNAO0OoEQ');


const gsheet=async()=>{
await doc.useServiceAccountAuth({
    client_email: 'prathambhat1980@gmail.com',
    private_key: 'bhatpprathamesh1999',
  });
 
   
  await doc.loadInfo(); // loads document properties and worksheets
  console.log(doc.title);
  await doc.updateProperties({ title: 'renamed doc' });
   
  const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
  console.log('title:'+sheet.title);
  console.log(sheet.rowCount);

}


module.exports = gsheet;