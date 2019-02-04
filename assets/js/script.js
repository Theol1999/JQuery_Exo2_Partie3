$(function(){
    $(document).ready(function(){
        $('#clickBtnMore, #clickBtnLess').on('click', function(){
            var $test = $('#clickNmb').text();
            if($(this).attr('id') == 'clickBtnMore'){
                $test++;
                $('#clickNmb').text($test);
            }else{
                $test--;
                $('#clickNmb').text($test);
            }
        });
    });
});
