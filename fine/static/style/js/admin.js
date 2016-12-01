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
    // select all
    $('#select_all').click(function() {
        var c = this.checked;
        $(':checkbox').prop('checked',c);
    });
    $('#select_reverse').click(function() {
        $('input.page:checkbox').each(function(){
          var that = $(this);
          var oldValue = that.is(':checked');
          that.prop('checked', !oldValue);
        })
    });
    $('#delete').click(deleteEvent);

    function deleteEvent(){
      // delete selected checkbox rows
      var selectedIds = {};
      selectedIds.selects = [];
      $('input.page:checkbox').each(function(){
        var that = $(this);
        if(that.is(':checked')){
          selectedIds.selects.push(that.val());
        }
      });

      var cur_type = $('#type_selected option:selected').val();
      // /admin/posts --> posts
      cur_type = cur_type.replace('/admin/', '');

      var url = '/api/' + cur_type + '/delete';
      $.ajax({
        type:"POST",
        contentType:"application/json; charset=utf-8",
        url:url,
        data: JSON.stringify(selectedIds.selects),
        dataType: "json",
        success:function(){
          alert("success");
          // var message="<span id='tmp'>链接删除成功</span>"
          setTimeout("window.location.reload()",2000);
        },
        error:function(xhr, ajaxOptions, thrownError){
          alert("error");
        }
      });
      return false;
    }
});
