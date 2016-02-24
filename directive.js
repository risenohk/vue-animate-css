/**
 * Created by ryanchan on 25/2/2016.
 */

Vue.directive('animation', {
  params: ['animate', 'loop'],

  bind: function () {
    var self = $(this.el);

    if (!self.hasClass('animated')) {
      self.addClass('animated')
    }

    if (this.params.loop) {
      self.addClass('infinite');
    }

    if (this.params.animate) {
      self.addClass(this.params.animate);
    }
  }
});