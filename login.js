    function createRandomToken() {
        var result = '';
        var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var charactersLength = characters.length;
        for (var i = 0; i < 20; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    }

    function setCookie(name, value, hours) {
        var expires = "";
        if (hours) {
            var date = new Date();
            date.setTime(date.getTime() + (hours*60*60*1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + (value || "")  + expires + "; path=/";
    }

    function getCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i=0;i < ca.length;i++) {
            var c = ca[i];
            while (c.charAt(0)==' ') c = c.substring(1,c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
        }
        return null;
    }

    function eraseCookie(name) {   
        document.cookie = name+'=; Max-Age=-99999999;';  
    }

    var loginBtn = document.getElementById('login-btn');

    if(getCookie('token')) {
        loginBtn.innerText = 'Logout';
    }

    loginBtn.addEventListener('click', function() {
        if(loginBtn.innerText === 'Login') {
            var token = createRandomToken();
            setCookie('token', token, 5);
            loginBtn.innerText = 'Logout';
        } else {
            eraseCookie('token');
            loginBtn.innerText = 'Login';
        }
    });