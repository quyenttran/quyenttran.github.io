(function() {
  var app;

  $(document).ready(function() {
    app.init();
    $(".about-project").hide();
    $("a").mouseenter(function() {
      var imgId = $(this).find("img").attr('id');
      $("." + imgId).show();
    })

    $("a").mouseleave(function() {
      var imgId = $(this).find("img").attr('id');
      $("." + imgId).hide();
    })
  });

  app = {
    text: "Hello, I'm Quyen.",
    index: 0,
    chars: 0,
    speed: 100,
    container: ".text .content",
    init: function() {
      this.chars = this.text.length;
      return this.write();
    },
    write: function() {
      $(this.container).append(this.text[this.index]);
      if (this.index < this.chars) {
        this.index++;
        return window.setTimeout(function() {
          return app.write();
        }, this.speed);
      }
    }
  };

}).call(this);
