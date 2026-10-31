document.getElementById('d').min=new Date().toISOString().split('T')[0];
document.getElementById('f').addEventListener('submit',function(e){
e.preventDefault();
var m='Hi, I’m '+n.value+'. I’d like to book '+s.value+' on '+d.value+' at '+t.value+'.';
window.open('https://wa.me/919999999999?text='+encodeURIComponent(m),'_blank');
});
