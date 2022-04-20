function sendMailVida() {
  var nome = 0;
  var email = 1;
 
  
    
  var emailTemp = HtmlService.createTemplateFromFile('emailVIDA');
  
  var ws = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('email');
  
  var data = ws.getRange('A6:C' + ws.getLastRow()).getValues();
  
  data = data.filter(function(r){ return r[2] == true});
    
  data.forEach(function(row){
    
    emailTemp.nome = row[nome];
    
        
    var htmlMessage = emailTemp.evaluate().getContent();
    GmailApp.sendEmail(
      row[email],
      emailTemp.Empresa = row[nome] +" | Notificação | Parcela em aberto",
      "Seu email não suporta HTML.",
      {name: "Financeiro", htmlBody: htmlMessage}
    );
                   
  });
}