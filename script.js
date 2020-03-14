var increase = document.createElement("img");

increase.onclick = function()
{
    var curl = window.location.pathname.split("");
    var numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (numList.indexOf(curl[curl.length-1]) < numList.length - 1)
    {
        curl[curl.length - 1] = numList[numList.indexOf(curl[curl.length - 1]) + 1];
    }
    else
    {

        var i = curl.length - 1;
        while(true)
        {
            if (i > 1) {
                curl[i] = numList[0];

                if (numList.indexOf(curl[i - 1]) < numList.length - 1) {
                    curl[i - 1] = numList[numList.indexOf(curl[i - 1]) + 1];
                    break;
                }
                else {
                    i--;
                    continue;
                }
            }
            else
            {
                if (numList.indexOf(curl[1]) < numList.length - 1) {
                    curl[1] = numList[numList.indexOf(curl[1]) + 1];
                    break;
                }
                else
                {
                    curl[1] = numList[0];
                    curl[0] = numList[1];
                    curl.unshift("/")
                    break;
                }
            }
        }
    }
    document.location.href = curl.join("");
};

increase.setAttribute("class","rightArrow");
increase.setAttribute("src",chrome.runtime.getURL('images/rightArrow2.png'));


var decrease = document.createElement("img");
decrease.onclick = function()
{

    var curl = window.location.pathname.split("");
    var numList = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

    if (numList.indexOf(curl[curl.length - 1]) > 0)
    {
        curl[curl.length - 1] = numList[numList.indexOf(curl[curl.length - 1]) - 1];
    }
    else
    {

        var i = curl.length - 1;

        while (true) {
            if (i > 1)
            {
                curl[i] = numList[numList.length -1];

                if (numList.indexOf(curl[i - 1]) > 0 && i-1 > 1)
                {
                    curl[i - 1] = numList[numList.indexOf(curl[i - 1]) - 1];
                    break;
                }
                else {
                    i--;
                    continue;
                }
            }
            else {

                if (numList.indexOf(curl[1]) > 1) {
                    curl[1] = numList[numList.indexOf(curl[1]) - 1];
                    break;
                }
                else
                {
                    curl[1] = "";
                    break;
                }
            }
        }
    }
    document.location.href = curl.join("");




};

decrease.setAttribute("class","leftArrow");
decrease.setAttribute("src",chrome.runtime.getURL('images/leftArrow2.png'));



var lol = document.getElementsByTagName("body");

lol[0].appendChild(increase);
lol[0].appendChild(decrease);