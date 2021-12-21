

document.getElementById('backBtn').addEventListener('click', goBack);

function goBack(){
    history.back();
}

document.getElementById('calendar').addEventListener('click', function(){
    console.log('button clicked')
    gotoURL('players.html');
})

function gotoURL(URL){
    document.location.href = URL;
}