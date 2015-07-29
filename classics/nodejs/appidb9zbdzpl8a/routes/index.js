var express = require('express');
var router = express.Router();

//引入模块将markdown格式文件转换为html文件
var markdown = require( "markdown" ).markdown;
//console.log(  markdown.toHTML("Hello *World*!" ) );

var fs = require('fs');




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
  	title: 'HTML5 中 div section article 的区别' ,
  	date : '0707 2015',
  	tag1 : 'nodejs',
  	tag2 : 'html',
  	tag3 : 'javascript',
  	text : 'text'
  });

});
router.get('/article', function (req, res) {


	/*为文件提供制度数据流*/
	var pathname = "./public/data/0511.md";


	// 读入 Markdown 源文件
	fileContent = fs.readFileSync(pathname, 'utf8');
	// 使用 MarkdownJS 模块把源文件转换为 HTML 源代码
	fileContent = markdown.toHTML(fileContent);
	/*为文件提供制度数据流*/
	var src = "./public/data/0511.md";
	var dst = "./views/a.ejs";

	// 保存
	fs.writeFileSync(dst, fileContent);
	console.log('Done!');

	res.render('article', {
	  	title: 'HTML5 中 div section article 的区别' ,
	  	date : '0707 2015',
	  	tags : 'nodejs',
	  	text : fileContent
	});
});
module.exports = router;
