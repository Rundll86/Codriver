import * as chatnio from "chatnio";
import * as marked from "marked";
import hljs from "highlight.js";
import "highlight.js/styles/vs2015.css";
chatnio.setKey(apikey);
const ai = new chatnio.Chat(-1);
const show = document.getElementById("show");
const inputer = document.getElementById("inputer");
const apikeyer = document.getElementById("apikeyer");
const drop = document.getElementById("drop");
var sayok = true;
function expose(obj, name) {
    window[name] = obj;
};
function eletree(tag, childs = []) {
    /**
     * @type {HTMLElement}
     */
    let result = document.createElement(tag);
    childs.forEach(e => result.appendChild(e.result));
    return {
        result,
        clsname(...clses) {
            clses.forEach(e => {
                this.result.classList.add(e);
            });
            return this;
        },
        attr(n, v) {
            result[n] = v;
            return this;
        }
    };
};
function askAI(message) {
    if (sayok) {
        let lastsaying = "";
        sayok = false;
        show.appendChild(
            eletree("div", [
                eletree("div").clsname("msgbox", "left").attr("innerText", message)
            ]).clsname("msgbox-c").result
        );
        let msgboxthis = eletree("div").clsname("msgbox", "right");
        show.appendChild(
            eletree("div", [
                msgboxthis
            ]).clsname("msgbox-c").result
        );
        msgboxthis.result.innerText = "";
        ai.askStream({ message, model: "gpt-4o", web: true }, e => {
            lastsaying += e.message;
            msgboxthis.result.innerHTML = marked.marked(lastsaying);
            hljs.highlightAll();
            sayok = e.end;
            document.body.scrollTop = document.body.scrollHeight;
        });
    };
};
expose(askAI, "askAI");
inputer.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        askAI(inputer.value);
        inputer.value = "";
    };
});
apikeyer.addEventListener("keydown", e => {
    if (e.key === "Enter") {
        updateapikey(apikeyer.value);
        sendclose();
    };
});
document.addEventListener("mouseover", () => {
    drop.style.display = "none";
});
document.addEventListener("mouseleave", () => {
    drop.style.display = "flex";
});
/*
show.appendChild(
    eletree("div", [
        eletree("div").clsname("msgbox", "left").attr("innerHTML", marked.marked("```\nlet randomNumber = Math.random();\nconsole.log(randomNumber);\n```"))
    ]).clsname("msgbox-c").result
);
//*/