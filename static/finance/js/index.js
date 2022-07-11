window.addEventListener("load", function (){

    let today   = new Date();

    let year    = String(today.getFullYear());
    let month   = ("0" + String(today.getMonth() + 1)).slice(-2);
    let day     = ("0" + String(today.getDate())).slice(-2);

    let date    = year + "-" + month + "-" + day;

    let config_date = {
        locale: "ja",
        dateFormat: "Y-m-d",
        defaultDate: date
    }

    flatpickr("#date", config_date);

    //チェックボックスがチェックされた時に発動するイベント
    $("#income_chk").on("change", function(){ change_expense_item( $(this).prop("checked") ); });

});

//費目の選択肢を収支のチェックに合わせてレンダリングする。
function change_expense_item(income){

    //TODO:ここでAjaxが発動して、selectタグの選択肢をレンダリング
    console.log(income)
}
