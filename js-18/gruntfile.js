module.exports = function(grunt) {

  grunt.initConfig({
    concat: {
      js: {
        src: ['goit/js-18/js-temp/*.js'],
        dest: 'goit/js-18/js/script.main.js'
      },
      css: {
        src: ['goit/js-18/css-temp/*.css'],
        dest: 'goit/js-18/css/style.main.css'
      }
    },
    uglify: {
      dist: {
        src: ['goit/js-18/js/script.main.js'],
        dest: 'goit/js-18/js/script.main.js'
      }
    },
    cssmin: {
      dist: {
        src: ['goit/js-18/css/style.main.css'],
        dest: 'goit/js-18/css/style.main.css'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['concat', 'uglify', 'cssmin']);

};