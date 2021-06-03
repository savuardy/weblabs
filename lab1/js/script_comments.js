<script type="text/javascript">
$(function() {
$("#send").click(function(){
var author = $("#author").val();
var message = $("#message").val();
var stranica = $("#stranica").val();
$.ajax({
type: "POST",
url: "sendMessage.php",
data: {"author": author, "message": message, "stranica": stranica},
cache: false,
success: function(response){
var messageResp = new Array();
var resultStat = messageResp[Number(response)];
if(response == 0){
$("#author").val("");
$("#message").val("");
$("#commentBlock").append("<div class='comment'><strong>"+author+"</strong><br>"+message+"</div>");
}$("#resp").text(resultStat).show().delay(1500).fadeOut(800);}});return false;});});
</script>