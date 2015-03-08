this["JST"] = this["JST"] || {};
this["JST"]["checkbox"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "<div class=\"dept\">\n  <input type=\"checkbox\" value=\"None\" id=\"roundedOne\" class=\"dept-btn\" name=\""
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "\" / >\n  <label for=\"dept\"></label><p>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</p>\n</div>\n\n<!-- Rounded ONE -->\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["contactsHead"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <th>"
    + escapeExpression(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"name","hash":{},"data":data}) : helper)))
    + "</th>\n";
},"useData":true});
this["JST"] = this["JST"] || {};
this["JST"]["contactsRow"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
  var helper, functionType="function", helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;
  return "  <td class=\"photo\"><img src="
    + escapeExpression(((helper = (helper = helpers.Photo || (depth0 != null ? depth0.Photo : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Photo","hash":{},"data":data}) : helper)))
    + "></td>\n  <td class=\"name\">"
    + escapeExpression(((helper = (helper = helpers.Name || (depth0 != null ? depth0.Name : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Name","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"role\">"
    + escapeExpression(((helper = (helper = helpers.Role || (depth0 != null ? depth0.Role : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Role","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"manager\">"
    + escapeExpression(((helper = (helper = helpers.Manager || (depth0 != null ? depth0.Manager : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Manager","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"phone\">"
    + escapeExpression(((helper = (helper = helpers.Phone || (depth0 != null ? depth0.Phone : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Phone","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"dept\">"
    + escapeExpression(((helper = (helper = helpers.Dept || (depth0 != null ? depth0.Dept : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Dept","hash":{},"data":data}) : helper)))
    + "</td>\n  <td class=\"start\"><time datetime=\""
    + escapeExpression(((helper = (helper = helpers.Start || (depth0 != null ? depth0.Start : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Start","hash":{},"data":data}) : helper)))
    + "\">"
    + escapeExpression(((helper = (helper = helpers.Start || (depth0 != null ? depth0.Start : depth0)) != null ? helper : helperMissing),(typeof helper === functionType ? helper.call(depth0, {"name":"Start","hash":{},"data":data}) : helper)))
    + "</time></td>\n";
},"useData":true});