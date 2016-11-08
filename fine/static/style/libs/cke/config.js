/**
 * @license Copyright (c) 2003-2016, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
  // Define changes to default configuration here. For example:
  // config.language = 'fr';
  // config.uiColor = '#AADC6E'; 
  config.language = 'zh-cn';
  config.height = 360;
  config.width = 831;
  config.toolbar = [
    { name: 'document', items: [ 'Source', '-', 'Save', 'Preview' ] },
    { name: 'paragraph', items: [ 'NumberedList', 'BulletedList', '-', 'Outdent', 'Indent', '-', 'Blockquote', '-', 'JustifyLeft', 'JustifyCenter', 'JustifyRight' ] },
    { name: 'clipboard', items: [ 'Copy' ] },
    { name: 'basicstyles', items: [ 'Bold', 'Italic', 'Underline', 'Strike', '-', 'RemoveFormat' ] },
    { name: 'editing', items: [ 'SelectAll' ] },
    { name: 'forms', items: [ 'Form', 'Checkbox', 'Radio', 'TextField', 'Textarea', 'Select', 'Button' ] },
    '/',
    { name: 'insert', items: [ 'CodeSnippet', 'Image', 'Smiley', 'SpecialChar', 'Iframe' ] },
    { name: 'colors', items: [ 'TextColor', 'BGColor' ] },
    { name: 'links', items: [ 'Link', 'Unlink', 'Anchor' ] },
    { name: 'styles', items: [ 'Styles', 'Format', 'Font', 'FontSize' ] },
    { name: 'tools', items: [ 'Maximize' ] }
  ];
  config.codeSnippet_theme = 'rainbow';
  config.codeSnippet_languages = {		
    python: 'Python',
    bash: 'Bash',
    cpp: 'C++',
    css: 'CSS',
    ini: 'Ini',
    java: 'Java',
    javascript: 'JavaScript',
    json: 'JSON',
    markdown: 'Markdown',
    makefile: 'Makefile',
    nginx: 'Nginx',
    yaml: 'YAML',
    sql: 'SQL',
    html: 'HTML',
    xml: 'XML',
  };
};
