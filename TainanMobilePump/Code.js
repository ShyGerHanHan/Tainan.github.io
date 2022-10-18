
// 連結HTML檔案           
function doGet(){
  var html=HtmlService.createTemplateFromFile("page1"); //本行用變數"html" 來抓html資料，括號裡面是檔案名稱，注意大小寫要依樣
  var check=html.evaluate(); //檢查檔案，要檢查(固定要檢查的)
  var show =check.setXFrameOptionsMode(HtmlService.XFrameOptionsMode.ALLOWALL); //把它秀出來在網頁上面
  return show; //回傳完成的東西
            }


  function getData(){
            
    var SpreadSheet = SpreadsheetApp.openById("1dt13ySycn3P7ZC1v03m6JY8iZS4Iklne-Q2RecJjSZM");
     // 連結試算表，請更改成您的試算表名稱
    var b=SpreadSheet.getSheetByName("工作表1");
    var c=b.getDataRange();
    return c.getValues();
            }