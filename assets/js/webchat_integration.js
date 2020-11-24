
var token = '';
var xhr = new XMLHttpRequest();
xhr.open('GET', "https://webchat.botframework.com/api/tokens", true);
xhr.setRequestHeader('Authorization', 'Bearer ' + '6Wh-PI8j5iw.e_kwWl_byq0Yz2D_Itm4hL3oGSM1Pc_jNUG57Bhg8SQ');
xhr.send();
xhr.onreadystatechange = processRequest;

console.log('height', window.innerHeight)
function processRequest(e) {
    if (xhr.readyState == 4 && xhr.status == 200) {
        token = JSON.parse(xhr.responseText);

        //LocalHost
        // console.log('res', window.location.href)
        if (true) {
            const styleOptions = {
                sendBoxBackground: '#f5f6fa !important',
                sendBoxTextColor: 'black',
                sendBoxPlaceholderColor: 'black',
                bubbleBorderRadius: 16,
                rootHeight: window.innerHeight - 150
            };
            const store = window.WebChat.createStore({}, ({ dispatch }) => next => action => {
                // if (action.type === 'DIRECT_LINE/CONNECT_FULFILLED') {
                //     dispatch({
                //         type: 'WEB_CHAT/SEND_MESSAGE_BACK',
                //         payload: {
                //             text: ''
                //         }
                //     });
                // }
                return next(action);
            });

            window.WebChat.renderWebChat(
                {
                    directLine: window.WebChat.createDirectLine({ token }),
                    userID: 'WebChat_UserId',
                    locale: 'en-US',
                    username: 'Web Chat User',
                    locale: 'en-US',
                    store,
                    styleOptions,
                },

                document.getElementById('webchat')
            );
            document.querySelector('#webchat > *').focus();
        }
    }
}
