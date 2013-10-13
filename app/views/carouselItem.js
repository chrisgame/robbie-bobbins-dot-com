var CarouselItemView = Ember.View.extend({
  templateName: 'carouselItem',
  classNames: ['carousel', 'slide'],
  init: function() {
    this._super.apply(this, arguments);
    $(document).off('data-api');

    var obj = this.get('content.firstObject');
    Ember.set(obj, 'isactive', true);
  },
  previousSlide: function() {
    this.$().carousel('prev');
  },
  nextSlide: function() {
    this.$().carousel('next');
  },
  didInsertElement: function() {
    this.$().carousel();
  },
  indicatorsView: Ember.CollectionView.extend({
    tagName: 'ol',
    classNames: ['carousel-indicators'],
    contentBinding: 'parentView.content',
    itemViewClass: Ember.View.extend({
      click: function() {
        var $elem = this.get("parentView.parentView").$();
        $elem.carousel(this.get("contextIndex"));
      },
      template: Ember.Handlebars.compile(''),
      classNameBindings: ['context.isActive:active']
    })
  }),
  itemsView: Ember.CollectionView.extend({
    classNames: ['carousel-inner'],
    contentBinding: 'parentView.content',
    itemViewClass: Ember.view.extend({
      classNames: ['item'],
      classNameBindings: ['content.isActive:active'],
      template: Ember.Handlebars.compile('\
        <img {{bindAttr src="view.content.imageUrl"}} alt=""/>\
        <div class="carousel-caption">\
          <p>{{view.content.description}}</p>\
        </div>')
    })
  })
});
