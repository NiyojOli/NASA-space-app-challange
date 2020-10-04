


  /*...............loader..........*/
  
const loaderEl = document.getElementsByClassName('fullpage-loader')[0];
document.addEventListener('readystatechange', (event) => {
  // const readyState = "interactive";
  const readyState = "complete";
      
  if(document.readyState == readyState) {
    // when document ready add lass to fadeout loader
    loaderEl.classList.add('fullpage-loader--invisible');
    
    // when loader is invisible remove it from the DOM
    setTimeout(()=>{
      loaderEl.parentNode.removeChild(loaderEl);
    }, 2000)
  }
});

/*...........typewriter-main...........*/

$(window).scroll(function() {
if ($(this).scrollTop() > 1){  
    $('.site-header').addClass("navbar-sticky");
  }
  else{
    $('.site-header').removeClass("navbar-sticky");
  }
});


var TxtType = function(el, toRotate, period) {
        this.toRotate = toRotate;
        this.el = el;
        this.loopNum = 0;
        this.period = parseInt(period, 10) || 50;
        this.txt = '';
        this.tick();
        this.isDeleting = false;
    };

    TxtType.prototype.tick = function() {
        var i = this.loopNum % this.toRotate.length;
        var fullTxt = this.toRotate[i];

        if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
        } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
        }

        this.el.innerHTML = '<span class="wrap">'+this.txt+'</span>';

        var that = this;
        var delta = 120 - Math.random() * 100;

        if (this.isDeleting) { delta /= 2; }

        if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = false;
        } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = true;
        this.loopNum++;
        delta = 500;
        }

        setTimeout(function() {
        that.tick();
        }, delta);
    };

    window.onload = function() {
        var elements = document.getElementsByClassName('typewrite');
        for (var i=0; i<elements.length; i++) {
            var toRotate = elements[i].getAttribute('data-type');
            var period = elements[i].getAttribute('data-period');
            if (toRotate) {
              new TxtType(elements[i], JSON.parse(toRotate), period);
            }
        }
        // INJECT CSS
        var css = document.createElement("style");
        css.type = "text/css";
        css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
        document.body.appendChild(css);
    };

    /*..............click to down...........*/

    $(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

/*......body color  change on scroll funchion........*/
const [red, green, blue] = [16, 26, 54]
const section1 = document.querySelector('.section1')

window.addEventListener('scroll', () => {
  const y = 1 + (window.scrollY || window.pageYOffset) / 150
  const [r, g, b] = [red/y, green/y, blue/y].map(Math.round)
  section1.style.backgroundColor = `rgb(${r}, ${g}, ${b})`
})

/*...........wow js...........*/
 new WOW().init();

/*........typewriter2...................*/
  var typed3 = new Typed('#typed3', {
    strings: ['Rocket is loaded with required amount of fuel and proper equipment and launched from a space port.', 'The rocket lifts off from ground using its first stage solid engine and strap on boosters.', 'As it travels through earth atmosphere, boosters and first state solid engine burns out which is removed from the main stage.', 'The second stage liquid  engine and takes over the final maneuver.', 'The second stage engine burns out and then gets separated from the vehicle.', 'The fairing, casing the satellite separates out.', 'The satellite opens up its antenna, solar cells and with proper utilization of solar energy and thrusters follows an elliptical trajectory.', 'On board engine ignites up and pushes the probe in another elliptical orbit.', 'As soon as it gains enough acceleration, it leaves earth orbit and heads towards the Proxima Centauri.'],
    typeSpeed: 15,
    backSpeed: 0,
    smartBackspace: true, // this is a default
    loop: true
  });

