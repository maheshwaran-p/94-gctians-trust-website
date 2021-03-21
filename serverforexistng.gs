function doGet(e) {
 
  var htmlOutput =  HtmlService.createTemplateFromFile('UploadFile');
  htmlOutput.message = '';
  return htmlOutput.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
}

function doPost(e,username) {
  
  Logger.log(JSON.stringify(e,username));

  var destination_id = '1h_PVwC3USGAgLtKA0sOfmkbAij9lHSdu';  
  var destination = DriveApp.getFolderById(destination_id);
  //var username = "e.parameter.fileName";
  //var destination2 =DriveApp.createFolder("Mahesh") ;
  var destination2=destination.createFolder(e.parameter.username)

  var data = Utilities.base64Decode(e.parameter.fileData);
  var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  destination2.createFile(blob);
  
  

  
  var data2 = Utilities.base64Decode(e.parameter.fileData2);
  var blob2= Utilities.newBlob(data2,e.parameter.mimeType2,e.parameter.fileName2);
  destination2.createFile(blob2);
  
    var data3 = Utilities.base64Decode(e.parameter.fileData3);
  var blob3= Utilities.newBlob(data3,e.parameter.mimeType3,e.parameter.fileName3);
  destination2.createFile(blob3);

var data4 = Utilities.base64Decode(e.parameter.fileData4);
  var blob4= Utilities.newBlob(data4,e.parameter.mimeType4,e.parameter.fileName4);
  destination2.createFile(blob4);

  var data5 = Utilities.base64Decode(e.parameter.fileData5);
  var blob5= Utilities.newBlob(data5,e.parameter.mimeType5,e.parameter.fileName5);
  destination2.createFile(blob5);

  var data6 = Utilities.base64Decode(e.parameter.fileData6);
  var blob6= Utilities.newBlob(data6,e.parameter.mimeType6,e.parameter.fileName6);
  destination2.createFile(blob6);


  listRecord(e.parameter.username,e.parameter.academicyear,e.parameter.department,e.parameter.semester,e.parameter.fileName,e.parameter.fileName2,e.parameter.fileName3,e.parameter.fileName4,e.parameter.fileName5,e.parameter.fileName6); 
  var htmlOutput =  HtmlService.createTemplateFromFile('UploadFile');
  htmlOutput.message = 'File Uploaded';
  return htmlOutput.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function listRecord(username,academicyear,department,semester,fileName,fileName2,fileName3,fileName4,fileName5,fileName6)
{
  var url = 'https://docs.google.com/spreadsheets/d/1c2sxuLVz4O0JHtmYN3xFqkIw1wohG4F4eEum-cqmKn0/edit#gid=0'; 
  var ss= SpreadsheetApp.openByUrl(url);
  var recordsSheet = ss.getSheetByName("Existing");
  recordsSheet.appendRow([username,academicyear,department,semester,fileName,fileName2,fileName3,fileName4,fileName5,fileName6, new Date()]);
}


function getUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}
