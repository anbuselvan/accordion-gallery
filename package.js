Package.describe({
  name: 'anbuselvan:accordion-gallery',
  version: '0.0.6',
  // Brief, one-line summary of the package.
  summary: 'Accorion image gallery',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/anbuselvan/accordion-gallery.git',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');

  api.use('jquery', 'client');

  api.addFiles([
    'vendor/accordion/css/accordion.css',
    'vendor/accordion/js/accordion.min.js',
    'vendor/accordion/lightbox/jquery.fs.boxer.min.css',
    'vendor/accordion/lightbox/jquery.fs.boxer.min.js'
  ], "client");
});
