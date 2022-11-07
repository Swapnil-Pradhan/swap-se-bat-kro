const firebaseConfig = {
apiKey: "AIzaSyASqu2nCrCqmjXipWrWiidyxGaCzhs__EQ",
authDomain: "talk-69.firebaseapp.com",
databaseURL: "https://talk-69-default-rtdb.firebaseio.com",
projectId: "talk-69",
storageBucket: "talk-69.appspot.com",
messagingSenderId: "964265791782",
appId: "1:964265791782:web:4284320b2a4c14f22bb1e7"
};

firebase.initializeApp(firebaseConfig);

function linkify(inputText) {
var replacedText, replacePattern1, replacePattern2, replacePattern3;
replacePattern1 = /(\b(https?|ftp):\/\/[-A-Z0-9+&@#\/%?=~_|!:,.;]*[-A-Z0-9+&@#\/%=~_|])/gim;
replacedText = inputText.replace(replacePattern1, '<a href="$1" target="_blank">$1</a>');
replacePattern2 = /(^|[^\/])(www\.[\S]+(\b|$))/gim;
replacedText = replacedText.replace(replacePattern2, '$1<a href="http://$2" target="_blank">$2</a><code>');
replacePattern3 = /(([a-zA-Z0-9\-\_\.])+@[a-zA-Z\_]+?(\.[a-zA-Z]{2,6})+)/gim;
replacedText = replacedText.replace(replacePattern3, '<a href="mailto:$1">$1</a>');
return replacedText;
}