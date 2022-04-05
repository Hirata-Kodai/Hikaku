var noodleFrameNum = 0;

document.getElementById("submit-button").onclick = function() {

    var noodle = $('#noodle').val();
    var soupKoku =  $('#soup-koku').val();
    var price = $('#price').val();
    noodleFrameNum += 1;
    console.log(noodle);
    var appendTag = "<li id='noodle-frame-" +  noodleFrameNum + "'> \
                        <div class='submit-area' > \
                            <div class='submit-area-img' > \
                                <img src='images/ra-men_sample.jpg' alt='ラーメンの画像' title='ラーメン' class='submitted_img' /> \
                            </div>\
                            <div class='submit-area-compared_things' > \
                                <ul class='detail-things'> \
                                    <li class='compared_thing'> \
                                        <input type='range' id='noodle' name='noodle' \
                                            min='0' max='100' value='" + noodle + "'> \
                                        <label for='noodle'>麺のうまさ</li></label> \
                                    </li> \
                                    <li class='compared_thing'> \
                                        <input type='range' id='soup-koku' name='soup-koku' \
                                            min='0' max='100' value='" + soupKoku + "'> \
                                        <label for='soup-koku'>スープのうまさ</label> \
                                    </li> \
                                    <li class='compared_thing'> \
                                        <input type='number' id='price' name='price' min='0' max='10000' value='" + price + "'> \
                                        <label for='price'>価格</label> \
                                    </li> \
                                </ul> \
                                <input id='delete-button' class='delete-button-" +  noodleFrameNum + "' type='button' name='submit' value='削除' onclick='deleteClick(" + noodleFrameNum + ")'/> \
                            </div> \
                        </div> \
                    </li>" 
    
    $("#element-list").append(appendTag);
};

function deleteClick(noodleFrameNum){
    console.log(noodleFrameNum);
    deleteId = "#noodle-frame-" + noodleFrameNum;
    $(deleteId).remove();
}