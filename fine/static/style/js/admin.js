$(document).ready(function(){
    // admin search date-range
    $('.input-date-range').datepicker({
        format: 'yyyy-mm-dd',
        todayBtn: "linked",
        clearBtn: true,
        language: "zh-CN",
        autoclose: true,
        todayHighlight: true
    });
    // admin select open right url
    $('li#listtype select').change(function(){
      var url = $(this).val();
      /* can not change the selected after redirect from /admin/posts to /admin/links
      * so let the python generate the right selected="selected" */
      /* $('li#listtype select option[value="' + url + '"]').attr('selected','selected');*/
      window.location = url;
    });
});
