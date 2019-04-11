// document ready
$(function() {
    //文字框賦值
    $("#input_name").val('李小華');
    //文字框取值
    let name = $("#input_name").val();
    console.log("name is: " + name);

    $("#sel_bdy").val('1983');
    let bdy = $("#sel_bdy").val();
    console.log("bdy: " + bdy);

    $("#sel_bdm").val('2');
    let bdm = $("#sel_bdm").val();
    console.log("bdm: " + bdm);

    $("#sel_bdd").val('12');
    let bdd = $("#sel_bdd").val();
    console.log("bdd: " + bdd);

    $("input[name='radio_gender'][value='f']").prop("checked", true)
    let gender = $("input[name='radio_gender']:checked").val()
    console.log("gender: " +  gender)

    $("input[name='check_games'][value='0']").prop("checked", true)
    $("#check_games_1").prop("checked", true)
    let games = []
    $.map($("input[name='check_games']:checked"), function (el) {
        games.push($(el).val())
    })
    console.log("games is: " + games);

    //textarea賦值
    $("#text_note").val('Hi!餵食叔叔');
    //textarea取值
    let note = $("#text_note").val();
    console.log("note is: " + note);

    //按鈕送出事件，二選一
    // $("#send").on('click', function(e){ send(e); });
    $("#send").click(function(e){ send(e); });

    function send(e)
    {
       e.preventDefault();
       console.log("name is: " + name);
       console.log("bd is: " + bdy + "-" + bdm + "-" + bdd);
       console.log("gender is: " + gender);
       console.log("games is: " + games);
       console.log("note is: " + note);
    }
    

})