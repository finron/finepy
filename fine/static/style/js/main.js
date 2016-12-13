$(document).ready(function(){

  //Check to see if the window is top if not then display button
  $(window).scroll(function(){
    if ($(this).scrollTop() > 200) {
      $('.goTop').fadeIn();
    } else {
      $('.goTop').fadeOut();
    }
  });

  //Click event to scroll to top
  $('.goTop').click(function(){
    $('html, body').animate({scrollTop : 0},300);
    return false;
  });

});
window.onload = function () {
  /**table of content in post */
  var toc = "";
  var level = 0;

  document.getElementById("post_content").innerHTML =
    document.getElementById("post_content").innerHTML.replace(
      /<h([\d])>([^<]+)<\/h([\d])>/gi,
      function (str, openLevel, titleText, closeLevel) {
        if (openLevel != closeLevel) {
          return str;
        }

        if (openLevel > level) {
          toc += (new Array(openLevel - level + 1)).join("<ul>");
        } else if (openLevel < level) {
          toc += (new Array(level - openLevel + 1)).join("</ul>");
        }

        level = parseInt(openLevel);

        var anchor = titleText.replace(/ /g, "_");
        toc += "<li><a href=\"#" + anchor + "\">" + titleText
        + "</a></li>";

        return "<h" + openLevel + "><a name=\"" + anchor + "\">"
        + titleText + "</a></h" + closeLevel + ">";
      }
    );

    if (level) {
      toc += (new Array(level + 1)).join("</ul>");
    }

    document.getElementById("toc_content").innerHTML += toc;
};
