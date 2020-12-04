const myFunction = require('./myFunction');

/**
 *  我們把這份程式碼當作 Azure Function 服務
 */

 /**
  * azureServe 是一個 function 用來執行使用者要託管的function
  */
function azureServe(context, req, customFunc) {
    // 執行我們的function
    customFunc(context, req);

    // 執行完成之後，我們的function會在 context 裡面建立一個 res 物件，
    // azure會幫我們處理response。
    azureSendHttpResponse(context);
}


/**
  * azureGetHttpRequest 是一個 function 用來代替使用者接受http request,並將處理的結果
  * 放在req物件裡面。
  */
function azureGetHttpRequest() {

    /**
     * 模擬收到http request
     */
    let req = {}

    /**
     * 模擬處理 url_Query_string 結束。
     */

    let parsed_Query_string_obj = {
        name: 'Allen',
        age: '2'
    }

    /**
     * 在req物件裡面新增一個 query 物件，存url所攜帶的參數
     */
    req.query = parsed_Query_string_obj;


    /**
     * 回傳 request 物件
     */
    return req;
    
}

/**
  * azureGetHttpRequest 是一個 function 用來代替使用者接受http request,並將處理的結果
  * 放在req物件裡面。
  */
 function azureSendHttpResponse(Azure_context) {

    /**
     * 模擬送出 httpResponse
     */
    console.log('!!!Azure is sending response!!!')
     console.log({azureSendHttpResponse: Azure_context.res})
}

class Context {

    constructor() {
        this.context = '';
    }


    log(content) {
        console.log(content);
    }
}

let myContext = new Context();

let req = azureGetHttpRequest();

azureServe(myContext, req, myFunction);