let name;
let bdy;
let bdm;
let bdd;
let gender;
let games = [];
let note;

// document ready
$(function() {
    //文字框賦值
    $("#input_name").val('李小華');
    $("#sel_bdy").val('1983');
    $("#sel_bdm").val('2');
    $("#sel_bdd").val('12');
    $("input[name='radio_gender'][value='f']").prop("checked", true)
    $("input[name='check_games'][value='0']").prop("checked", true)
    $("#check_games_1").prop("checked", true)
    $("#text_note").val('Hi!餵食叔叔');

    //按鈕送出事件，二選一
    // $("#send").on('click', function(e){ send(e); });
    $("#send").click(function(e){ send(e); });
})

function send(e)
{
    e.preventDefault();
    name = $("#input_name").val();
    bdy = $("#sel_bdy").val();
    bdm = $("#sel_bdm").val();
    bdd = $("#sel_bdd").val();
    gender = $("input[name='radio_gender']:checked").val();
    games = [];
    $.map($("input[name='check_games']:checked"), function (el) {
        games.push($(el).val());
    });
    note = $("#text_note").val();

    console.log("name is: " + name);
    console.log("bd is: " + bdy + "-" + bdm + "-" + bdd);
    console.log("gender is: " + gender);
    console.log("games is: " + games);
    console.log("note is: " + note);
}