'use strict';

var expect = require('chai').expect;
var code = require('../');

var fs = require('fs')
var file = require.resolve('..')
var content = fs.readFileSync(file)

describe("print-code", function(){
	it("basic print", function(){
		code(content)
		  .highlight(4)
		  .slice(1, 6)
		  .max_columns(68)
		  .print()
	})
	
	it("arrow", function(){
		code(content)
		  .highlight(4)
		  .slice(1, 6)
		  .max_columns(68)
		  .arrow_mark(4, 10)
		  .print()
	})
	
	it("custom color", function(){
		code(content)
		  .highlight(4)
		  .slice(1, 6)
		  .color('yellow')
		  .max_columns(68)
		  .print()
	})
	
	it("highlight index range", function(){
		code(content)
		  .highlightRange({line:3, column:2},{line:4, column:6})
		  .slice(1, 8)
		  .color('green')
		  .max_columns(68)
		  .print()
	})
	
	it("highlight index range 2", function(){
		code(content)
		  .highlightRange({line:3, column:2},{line:3, column:9})
		  .slice(1, 8)
		  .color('magenra')
		  .max_columns(68)
		  .print()
	})
	
	it("highlight line range", function(){
		code(content)
		  .highlightLineRange(3,4)
		  .slice(1, 8)
		  .color('yellow')
		  .max_columns(68)
		  .print()
	})
	
	it("no indent", function(){
		code(content)
		  .highlight(4)
		  .slice(1, 6)
		  .indent('')
		  .max_columns(68)
		  .arrow_mark(4, 10)
		  .print()
	})
})
