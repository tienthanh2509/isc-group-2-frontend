/*
 * Copyright (c) 2017 PT Studio
 *
 * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)
 */

"use strict";

module.exports = function (grunt) {
    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    // Cấu hình tùy chỉnh & biến
    var resources = './resources/assets';
    var bower = './bower_components';
    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: '/*!\n' +
        ' * app <%= pkg.name %> v<%= pkg.version %> (<%= pkg.homepage %>)\n' +
        ' * Build on <%= grunt.template.today("yyyy-mm-dd hh:mm:ss") %>\n' +
        ' * Copyright 2017\n' +
        ' * Licensed under GPL-3.0 (https://github.com/tienthanh2509/isc-group-2-frontend/blob/master/LICENSE)\n' +
        ' */\n',
        // Tasks configuration
        sass: {
            dist: {
                options: {
                    cacheLocation: '/tmp/.sass',
                    style: 'expanded'
                },
                files: {
                    'public/assets/css/app.css': resources + '/stylesheets/app.scss'
                }
            }
        },
        concat: {
            options: {
                stripBanners: true,
                banner: '<%= banner %>'
            },
            dist: {
                src: [
                    resources + '/javascripts/app-utils.js',
                    resources + '/javascripts/app.js',
                    resources + '/javascripts/app/services/apiService.js',
                    resources + '/javascripts/app/controllers/headerNavbarController.js',
                    resources + '/javascripts/app/controllers/finalExamController.js'
                ],
                dest: 'public/assets/js/app.js'
            }
        },
        cssmin: {
            dist: {
                options: {
                    sourceMap: true
                },
                files: [{
                    expand: true,
                    cwd: 'public/assets/css',
                    src: ['*.css', '!*.min.css'],
                    dest: 'public/assets/css',
                    ext: '.min.css'
                }]
            }
        },
        uglify: {
            dist: {
                options: {
                    banner: '<%= banner %>',
                    sourceMap: true,
                    mangle: false
                },
                files: [{
                    'public/assets/js/app.min.js': ['public/assets/js/app.js']
                }]
            }
        },
        copy: {
            img: {
                expand: true,
                cwd: resources + '/images/',
                src: '**',
                dest: 'public/assets/img/'
            }
        },
        watch: {
            sass_app: {
                files: [resources + '/stylesheets/*.scss'],
                tasks: ['sass'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            cssmin_app: {
                files: ['public/assets/css/app.css'],
                tasks: ['cssmin'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            concat_app: {
                files: [resources + '/javascripts/*.js'],
                tasks: ['concat'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            },
            uglify_app: {
                files: ['public/assets/js/app.js'],
                tasks: ['uglify'],
                options: {
                    debounceDelay: 1000,
                    spawn: false
                }
            }
        },
        clean: {
            dist: 'public/assets/'
        }
    });
    // Load the plugin
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-copy');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    // Register task(s).
    grunt.registerTask('default', ['sass', 'concat', 'cssmin', 'uglify', 'copy']);
};