$(function(){

//HTMLを初期化
$("table.tbl tbody").html("");

//HTMLを生成
for(var index in data.release){
$('<tr>'+
'<th>'+data.release[index].day+'</th>'+
'<td class="label"><span class="' +
data.release[index].label + '">' +
data.release[index].category +
'</span></td>'+
'<td><a href="' + data.release[index].url +
'" target="' + data.release[index].target +
'">' + data.release[index].content + '</a></td>'+
'</tr>').appendTo('table.tbl tbody');
}
});
