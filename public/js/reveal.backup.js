// Constructor
App.Reveal = function() {
  this.workEntries_ = $('.section--work');
  this.workPassedArray = [];

  this.workEntries_.each(function(workIndex, workElement) {
    var watcher = scrollMonitor.create(workElement, -300);
    var imgRevArray = [];
    var imgLoaded = 0;

    $(workElement).find('.img__img').each(function(index, imgElement) {
      $(imgElement).children('img').load(function() {
        console.log(index + ' loaded');
        console.log('this.workPassedArray: ' + this.workPassedArray);
        imgLoaded++;

        if (imgLoaded == 3 && this.workPassedArray.indexOf(workIndex) != -1) {
          console.log("Display imgss");
        }
      }.bind(this));

      // var rev = new RevealFx(imgElement, {
      //   revealSettings : {
      //     bgcolor: '#e4e4e4',
      //     // bgcolor: '#9b9b9b',
      //     direction: 'lr',
      //     delay: index * 200,
      //     onCover: function(contentEl, revealerEl) {
      //       contentEl.style.opacity = 1;
      //     }
      //   }
      // });
      //
      // imgRevArray.push(rev);
    }.bind(this));

    watcher.enterViewport(function() {
      console.log(imgLoaded);

      if (imgLoaded == 3) {
        imgRevArray.forEach(function(rev) {
          rev.reveal();
        });
      } else {
        this.workPassedArray.push(workIndex);
      }

      watcher.destroy();
    }.bind(this));
  }.bind(this));
};

// App.Reveal.prototype.init_ = function() {
  // this.addEventListenners_();
// };

// App.Reveal.prototype.addEventListenners_ = function() {
//
// };
