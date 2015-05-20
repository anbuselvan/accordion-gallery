# Accordion Gallery

#### A cool accordion gallery for your meteor projects.

Please read the complete documentation from [cssjquery](www.cssjquery.com).

## License

Please read the license from [Accordion Website](http://www.cssjquery.com/accordion.php).

Basically, you are allowed to use Accordion CJ in any way you like, in both free and commercial projects, as long as you keep the "cssjquery" watermark visible on the top-left corner of the Accordion.

[Click](http://www.cssjquery.com/gopro.php?plugin=accordion) here if you want to get rid of the "cssjquery" watermark.

### Installation

    meteor add anbuselvan:accordion-gallery

### Integration

Check the documentation [here](http://www.cssjquery.com/accordion.php#publish).

The integration is very simple. Create an accordion object and set the gallery images path in the parameter.

```js
  Template.carousel.rendered = function() {
    //Create Accordion
    $accordion = $("#accordion").accordion({"path":"accordion/"});
    //Autoplay
    $('#play').click();
  };
```

### Gallery Assets

Please keep all the gallery images in **/public/accordion** folder.

Also copy and paste the **img** folder that contains **controller** images, from **/examples/accordion-gallery/public/accordion/img** into your projects **/public/accordion/** folder, and the final structure will be:

```
your-app
├── public
│   └── accordion
│       ├── 01.jpg
│       ├── 02.jpg
│       ├── 03.jpg
│       ├── 04.jpg
│       ├── 05.jpg
│       ├── 06.jpg
│       └── img
│           └── controller
│               ├── next.png
│               ├── pause.png
│               └── play.png
```

### Sample App

Please check out the [accordion-gallery](https://github.com/anbuselvan/accordion-gallery/tree/master/examples/accordion-gallery) project inside the [examples](https://github.com/anbuselvan/accordion-gallery/tree/master/examples) folder.

### Quick preview

![Screen Capture](https://raw.githubusercontent.com/anbuselvan/accordion-gallery/master/screenshot/accordion-gallery.jpg)

### See it in action

[Meteor - Accordion Gallery](http://accordion-gallery.meteor.com)
