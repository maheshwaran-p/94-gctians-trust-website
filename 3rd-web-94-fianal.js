
function doGet(e) {
 
  var htmlOutput =  HtmlService.createTemplateFromFile('UploadFile');
  htmlOutput.message = '';
  return htmlOutput.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
  
}

function doPost(e,username,month,fee) {
  
  Logger.log(JSON.stringify(e,username,month,fee));

if(e.parameter.month=='april'){
    
  var destination_id = '1zC6HOloERnet5nwtFFlONmfcXAbx0gB3';  
  var destination = DriveApp.getFolderById(destination_id);
  //var username = "e.parameter.fileName";
  //var destination2 =DriveApp.createFolder("Mahesh") ;
 // var destination2=destination.createFolder(e.parameter.username)

  var data = Utilities.base64Decode(e.parameter.fileData);
  var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  destination.createFile(blob);
  }

if(e.parameter.month=='May' )

{


// var folders = destination.getFolders();
// while (folders.hasNext()) {
//   var folder = folders.next();
//   Logger.log(folder.getName());
// }

  var destination_id = '1E7RDxxsqo8EMjjTm4YVPWWQIzBzZEXjI'; 
  // var destination_id2 = '158zIMcy89fXYGIfLvrSOWgCF4MNj-Lv4';  
  var destination = DriveApp.getFolderById(destination_id);
  //var username = "e.parameter.fileName";
  // var destination2 =DriveApp.createFolder("Mahesh") ;
   //var destination2 = destination.getFoldersByName(e.parameter.fee) ;
 // var destination2=destination.createFolder(e.parameter.username);
//  var destination2= destination.getFolderById(destination_id2);


var folders = destination.getFolders();
 var count=0;
while (folders.hasNext()) {
  var folder = folders.next();
  Logger.log(folder.getName());
  //var destination2 =folder.getName();
 

  if(folder.getName() == e.parameter.fee ){
    var  destination4 = folder.getId();
    count++;
    
    }
}
  //if(destination2 == e.parameter.fee){


switch(count){
  case 0:{

      var destination3=destination.createFolder(e.parameter.fee);

       var data = Utilities.base64Decode(e.parameter.fileData);
  var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  destination3.createFile(blob);

  break;
     

  }
  case 1:{
    var destination5 = DriveApp.getFolderById(destination4);

  //var destination4 = destination.getFoldersByName(e.parameter.fee);
  //var destination6=destination5.createFolder(e.parameter.username);

  var data = Utilities.base64Decode(e.parameter.fileData);
  var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  destination5.createFile(blob);

    break;
  }
  default:
     {
  

      var destination5 = DriveApp.getFolderById(destination4);

  //var destination4 = destination.getFoldersByName(e.parameter.fee);
  //var destination6=destination5.createFolder(e.parameter.username);

  var data = Utilities.base64Decode(e.parameter.fileData);
  var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  destination5.createFile(blob);

  //count=count+1;
       // var destination4 = destination2;

       // var destination4 = destination.getFoldersByName(destination2)
    
    }
  }


  //  if(folder.getName() == e.parameter.fee ){
  //  var  destination4 = folder.getId();
  //     var destination5 = DriveApp.getFolderById(destination4);

  // //var destination4 = destination.getFoldersByName(e.parameter.fee);
  // var destination6=destination5.createFolder(e.parameter.username);

  // var data = Utilities.base64Decode(e.parameter.fileData);
  // var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  // destination6.createFile(blob);

  // count=count+1;
  //      // var destination4 = destination2;

  //      // var destination4 = destination.getFoldersByName(destination2)


  // } 

  
  // else if(folder.getName() != e.parameter.fee &&count==0 ){

  //    var destination3=destination.createFolder(e.parameter.fee);

  //      var data = Utilities.base64Decode(e.parameter.fileData);
  // var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  // destination3.createFile(blob);

    
  // }

//}

//  if(count>0){


//   var destination4 = destination.getFoldersByName(e.parameter.fee)


//   var data = Utilities.base64Decode(e.parameter.fileData);
//   var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
//   destination4.createFile(blob);
//   // var data = Utilities.base64Decode(e.parameter.fileData);
//   // var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
//   // destination2.createFile(blob);
//   } 


  // if(folder.getName() != e.parameter.fee&&count>0 ){

  //    var destination3=destination.createFolder(e.parameter.fee);

  //      var data = Utilities.base64Decode(e.parameter.fileData);
  // var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
  // destination3.createFile(blob);

    
  // }
  



// if(destination2==e.parameter.fee){

//   var data = Utilities.base64Decode(e.parameter.fileData);
//   var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
//   destination2.createFile(blob);
//   }
//   if(destination2!=e.parameter.fee){

//      var destination3=destination2.createFolder(e.parameter.fee);

//        var data = Utilities.base64Decode(e.parameter.fileData);
//   var blob = Utilities.newBlob(data, e.parameter.mimeType, e.parameter.fileName);
//   destination3.createFile(blob);
//   }


  }


  

  
  
 



  listRecord(e.parameter.username,e.parameter.academicyear,e.parameter.department,e.parameter.semester,e.parameter.month,e.parameter.fee,e.parameter.description,e.parameter.fileName); 
  var htmlOutput =  HtmlService.createTemplateFromFile('UploadFile');
  htmlOutput.message = 'File Uploaded';
  return htmlOutput.evaluate().setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL);
}

function listRecord(username,academicyear,department,semester,month,fee,description,fileName)
{
  var url = 'https://docs.google.com/spreadsheets/d/17bYw1TsWQpoysQcCpTUTwAVn42ZaQx38fE6mA-jZhVQ/edit#gid=0'; 
  var ss= SpreadsheetApp.openByUrl(url);
  var recordsSheet = ss.getSheetByName("3rd-web");
  recordsSheet.appendRow([username,academicyear,department,semester,month,fee,description,fileName, new Date()]);
}


function getUrl() {
 var url = ScriptApp.getService().getUrl();
 return url;
}
