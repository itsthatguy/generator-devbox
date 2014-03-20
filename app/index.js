'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var DevboxGenerator = yeoman.generators.Base.extend({
  init: function() { },

  askFor: function() {
    var done = this.async();

    this.log(chalk.yellow(" \
                                   ,|       \n\
                                 //|                              ,|  \n\
                               //,/                             -~ |  \n\
                             // / |                         _-~   /  ,  \n\
                           /'/ / /                       _-~   _/_-~ |  \n\
                          ( ( / /'                   _ -~     _-~ ,/'  \n\
                           \\~\\/'/|             __--~~__--\\ _-~  _/,  \n\
                   ,,)))))));, \\/~-_     __--~~  --~~  __/~  _-~ /  \n\
                __))))))))))))));,>/\\   /        __--~~  \\-~~ _-~  \n\
               -\\(((((''''(((((((( >~\\/     --~~   __--~' _-~ ~|  \n\
      --==//////((''  .     `)))))), /     ___---~~  ~~\\~~__--~   \n\
              ))| @    ;-.     (((((/           __--~~~'~~/  \n\
              ( `|    /  )      )))/      ~~~~~__\\__---~~__--~~--_  \n\
                 |   |   |       (/      ---~~~/__-----~~  ,;::'  \\         ,  \n\
                 o_);   ;        /      ----~~/           \\,-~~~\\  |       /|  \n\
                       ;        (      ---~~/         `:::|      |;|      < >  \n\
                      |   _      `----~~~~'      /      `:|       \\;\\_____//   \n\
                ______/\\/~    |                 /        /         ~------~  \n\
              /~;;.____/;;'  /          ___----(   `;;;/                 \n\
             / //  _;______;'------~~~~~    |;;/\\    /            \n\
            //  | |                        /  |  \\;;,\\                \n\
           (<_  | ;                      /',/-----'  _>  \n\
            \\_| ||_                     //~;~~~~~~~~~   \n\
                `\\_|                   (,~~   \n\
                                        \\~\\   \n\
                                         ~~   \n"));
    // replace it with a short and sweet description of your generator
    this.log("       " + chalk.bold.black.bgYellow('  You\'re using the fantastic Devbox generator.  '));
    this.log("\n");

    done();

  },

  app: function() {
    this.mkdir('apps');
    this.copy('Cheffile', 'Cheffile');
    this.template('_Vagrantfile', 'Vagrantfile');
    this.template('_README.md', 'README.md');

    this.directory('chef', 'chef');

  },

  projectfiles: function() {
    this.copy('editorconfig', '.editorconfig');
    this.copy('jshintrc', '.jshintrc');
  }
});

module.exports = DevboxGenerator;
