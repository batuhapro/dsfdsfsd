if("undefined"==typeof RedactorPlugins)var RedactorPlugins={};!function(b,k,f,d){if(showtemplatebutton)b(f).on("EditorInit",function(f,g){var e=g.editor,a=g.config,h=function(c,a){c.saveSelection();var d=e.getText("kl_ept_title");c.modalInit(d,{url:e.dialogUrl+"&dialog=klEpt"},600,b.proxy(function(){b("#kl_ept_template_chooser").append(templatesOption);b("#kl_ept_template_chooser").on("change",function(){var c=b("#kl_ept_template_chooser").val();b("#kl_ept_template_content").val(templates[c])});b("#kl_ept_template_insert").click(function(a){a=b("#kl_ept_template_content").val();a=XenForo.htmlspecialchars(a);a=a.replace(/\t/g,"\t").replace(/ /g,"&nbsp;").replace(/\n/g,"\n<br/>");c.restoreSelection();c.execCommand("inserthtml",a)})},c))};typeof a.buttonsCustom!=d&&typeof a.buttonsCustom.custom_demo!=d&&(a.buttonsCustom.custom_demo.callback=h);RedactorPlugins.klEpt={init:function(){this.addBtn("kl_ept",e.getText("kl_ept_title"),this.eptBtnCallback);this.eptBtnFormatLayout("kl_ept")},eptBtnCallback:function(a,b){h(a,b)},eptBtnFormatLayout:function(a){var b=this.$toolbar;b.find(".redactor_btn_"+
a).appendTo(b).wrap('<li class="redactor_btn_group redactor_btn_right">').wrap("<ul>").wrap('<li class="redactor_btn_container_'+a+'">')}};typeof a.plugins!==d&&b.isArray(a.plugins)||(a.plugins=[]);a.plugins.push("klEpt")})}(jQuery,this,document,"undefined");