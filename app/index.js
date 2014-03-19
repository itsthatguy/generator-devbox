'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var RailsboxGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = require('../package.json');

    this.on('end', function () {
      if (!this.options['skip-install']) {
        this.installDependencies();
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    this.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    this.log(chalk.magenta('You\'re using the fantastic Railsbox generator.'));

    done();

  },

  app: function () {
    this.copy('Cheffile', 'Cheffile');
    this.template('_Vagrantfile', 'Vagrantfile');
    this.template('_README.md', 'README.md');

    this.copy('_package.json', 'package.json');
    this.copy('_bower.json', 'bower.json');

  },

  projectfiles: function () {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = RailsboxGenerator;
