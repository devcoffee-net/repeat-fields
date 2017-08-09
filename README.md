# Repeatable Fields

[Plugin's Homepage with Demo](https://github.com/devcoffee-net/repeat-fields)

Many thanks to [Rhyzz](https://github.com/Rhyzz/repeatable-fields)
This plugin is my custom of Rhyzz's repeatable-fields v 1.4.8

## Description

Fields Repeat is a jQuery plugin which let's you create a set of fields that can be made to repeat. You can do the following to a field that is repeatable:

* Add new instance
* Remove existing instance
* Reposition an instance

The functionality that is provided by this plugin can also be referred to as:

* Dynamic Fields Plugin
* Dynamic Rows plugin
* Add Remove Rows Plugin

## Requirements

This plugin requires [jQuery](http://jquery.com/) and [jQuery UI Sortable](https://jqueryui.com/sortable/).

### Example

#### HTML

    <div class="repeat">
    	<table class="repeat-wrapper" width="100%">
    		<thead>
    			<tr>
					<td width="10%" colspan="4"><span class="repeat-add">Add</span></td>
    			</tr>
    		</thead>
    		<tbody class="repeat-container">
    		<tr class="repeat-template repeat-row">
    			<td width="10%"><span class="repeat-move">Move</span></td>
    	
    			<td width="10%">An Input Field</td>
    			
    			<td width="70%">
    				<input type="text" name="input[{{repeat-row-count-placeholder}}]" />
    			</td>
    			
    			<td width="10%"><span class="repeat-remove">Remove</span></td>
    		</tr>
    		</tbody>
    	</table>
    </div>

#### JavaScript

    jQuery(function() {
    	jQuery('.repeat').each(function() {
    		jQuery(this).repeat_fields();
    	});
    });

## Options

```
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
row_count_placeholder: '{{repeat-row-count-placeholder}}',
```

<dl>
<dt>wrapper</dt>
<dd>Specifies an element that acts as a wrapper.</dd>

<dt>container</dt>
<dd>Specifies an element within the wrapper which acts as a container.</dd>

<dt>row</dt>
<dd>Specifies an element within the container that acts as a row holder. The row is what is repeated.</dd>

<dt>add</dt>
<dd>Specifies an element within the wrapper which let's you add more more</dd>

<dt>remove</dt>
<dd>Specifies an element within the row which let's you remove the current row</dd>

<dt>move</dt>
<dd>Specifies an element within the row which let's you reposition the current row.</dd>

<dt>template</dt>
<dd>Specifies an element within the container which acts as a row template.</dd>

<dt>is_sortable</dt>
<dd>Specifies whether rows can be sorted</dd>

<dt>use_prepend</dt>
<dd>Default new row will be appended to container. If  want to add row to prepend set it true.</dd>

<dt>before_add</dt>
<dd>Specifies a function to run before a row is added. If custom function return false add event will be cancel</dd>

<dt>after_add</dt>
<dd>Specifies a function to run after a row is added</dd>

<dt>before_remove</dt>
<dd>Specifies a function to run before a row is removed.If custom function return false remove event will be cancel</dd>

<dt>after_remove</dt>
<dd>Specifies a function to run after a row is removed</dd>

<dt>sortable_options</dt>
<dd>Specifies an object that can contain Options, Methods and Events which are passed to jQuery UI Sortable</dd>

<dt>row_count_placeholder</dt>
<dd>Specifies the row count placeholder to be used</dd>
</dl>