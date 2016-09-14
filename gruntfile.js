//module.exports = function(grunt) {
//
//  grunt.initConfig({
////    concat: {
////      js: {
////        src: ['goit/js-18/js-temp/*.js'],
////        dest: 'goit/js-18/js/script.main.js'
////      },
////      css: {
////        src: ['goit/js-18/css-temp/*.css'],
////        dest: 'goit/js-18/css/style.main.css'
////      }
////    },
////    uglify: {
////      dist: {
////        src: ['goit/js-18/js/script.main.js'],
////        dest: 'goit/js-18/js/script.main.js'
////      }
////    },
////    cssmin: {
////      dist: {
////        src: ['goit/js-18/css/style.main.css'],
////        dest: 'goit/js-18/css/style.main.css'
////      }
////    },
//    sass: {
//        dist: {
//            files: [{
//                expand: true,
//                cwd: 'goit/js-20/css/',
//                src: ['*.scss'],
//                dest: 'goit/js-20/css/',
//                ext: '.sass.css'
//            }]
//        }
//    },
//    watch: {
//        sass: {
//            files: ['goit/js-20/css/*.scss'],
//            tasks: ['sass']
//        }
//    }
//  });
//
////  grunt.loadNpmTasks('grunt-contrib-concat');
////  grunt.loadNpmTasks('grunt-contrib-uglify');
////  grunt.loadNpmTasks('grunt-contrib-cssmin');
//  grunt.loadNpmTasks('grunt-contrib-sass');
//  grunt.loadNpmTasks('grunt-contrib-watch');
//
////  grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'sass']);
//  grunt.registerTask('default', ['sass']);
//
//};

module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);
    
    grunt.initConfig({
        babel: {
            options: {
                sourceMap: false,
                presets: ['es2015']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: 'goit/js-22/js/',
                    src: ['*.js'],
                    dest: 'goit/js-22/js/dist',
                    ext: '.js',
                    extDot: 'first'
                }]
            }
        },
        watch: {
            babel: {
                files: 'goit/js-22/js/*.js',
                tasks: ['babel']
            },
        }
    });
    
    grunt.loadNpmTasks('grunt-contrib-watch');
    
    grunt.registerTask('default', ['babel']);
    
};