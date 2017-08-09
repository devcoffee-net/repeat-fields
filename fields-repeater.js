/*
 * jQuery Repeat Fields v1.0.0
 * https://github.com/devcoffee-net/repeat-fields
 *
 * Copyright (c) 2017 Hieu Nguyen
 * License MIT
 */

(function ($) {
    $.fn.repeat_fields = function (custom_settings) {
        var default_settings = {
            wrapper: '.repeat-wrapper',
            container: '.repeat-container',
            row: '.repeat-row',
            add: '.repeat-add',
            remove: '.repeat-remove',
            move: '.repeat-move',
            template: '.repeat-template',
            is_sortable: true,
            use_prepend: false,
            before_add: null,
            after_add: after_add,
            before_remove: null,
            after_remove: null,
            sortable_options: null,
            row_count_placeholder: '{{repeat-row-count-placeholder}}'
        };

        var settings = $.extend({}, default_settings, custom_settings);

        // Initialize all repeatable field wrappers
        initialize(this);

        function initialize(parent) {
            $(settings.wrapper, parent).each(function (index, element) {
                var wrapper = this;

                var container = $(wrapper).children(settings.container);

                // Disable all form elements inside the row template
                $(container).children(settings.template).hide().find(':input').each(function () {
                    $(this).prop('disabled', true);
                });

                var row_count = $(container).children(settings.row).filter(function () {
                    return !$(this).hasClass(settings.template.replace('.', ''));
                }).length;

                $(container).attr('data-rf-row-count', row_count);

                $(wrapper).on('click', settings.add, function (event) {
                    event.stopImmediatePropagation();

                    var row_template = $($(container).children(settings.template).clone().removeClass(settings.template.replace('.', ''))[0].outerHTML);

                    // Enable all form elements inside the row template
                    $(row_template).find(':input').each(function () {
                        $(this).prop('disabled', false);
                    });

                    var new_row = $(row_template);

                    if (typeof settings.before_add === 'function' ) {
                        switch (settings.before_add(container, new_row)) {
                            case false:
                                return;
                        }
                    }

                    if(settings.use_prepend){
                        $(new_row).show().prependTo(container);
                    }else{
                        $(new_row).show().appendTo(container);
                    }

                    if (typeof settings.after_add === 'function') {
                        settings.after_add(container, new_row, after_add);
                    }

                    // The new row might have it's own repeatable field wrappers so initialize them too
                    initialize(new_row);
                });

                $(wrapper).on('click', settings.remove, function (event) {
                    event.stopImmediatePropagation();

                    var row = $(this).parents(settings.row).first();

                    if (typeof settings.before_remove === 'function') {
                        switch (settings.before_remove(container, row)){
                            case false:
                                return;
                        }
                    }

                    row.remove();

                    if (typeof settings.after_remove === 'function') {
                        settings.after_remove(container);
                    }
                });

                if (settings.is_sortable === true && typeof $.ui !== 'undefined' && typeof $.ui.sortable !== 'undefined') {
                    var sortable_options = settings.sortable_options !== null ? settings.sortable_options : {};

                    sortable_options.handle = settings.move;

                    $(wrapper).find(settings.container).sortable(sortable_options);
                }
            });
        }

        function after_add(container, new_row) {
            var row_count = $(container).attr('data-rf-row-count');

            row_count++;

            $('*', new_row).each(function () {
                $.each(this.attributes, function (index, element) {
                    this.value = this.value.replace(settings.row_count_placeholder, row_count - 1);
                });
            });

            $(container).attr('data-rf-row-count', row_count);
        }
    }
})(jQuery);