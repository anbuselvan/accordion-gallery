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
  Template.accordion.rendered = function() {
    //Create Accordion
    $accordion = $("#accordion").accordion({"path":"accordion/"});
    //Autoplay
    $('#play').click();
  };
```

### Gallery Assets

Please keep all the gallery images in **/public/accordion** folder.

Also copy and paste the **img** folder that contains **controller** images, from **/examples/simple-app/public/accordion/img** into your projects **/public/accordion/** folder, and the final structure will be:

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

### Sample App

Check the simple-app project from **examples/simple-app** folder.

