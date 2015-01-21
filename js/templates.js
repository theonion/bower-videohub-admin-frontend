angular.module("videoHub").run(["$templateCache",function($templateCache){"use strict";$templateCache.put("shared/alert/alert-directive.html",'<div ng-messages=alertStatus><div ng-message=success class="alert alert-success">{{alertStatus.success}}</div><div ng-message=info class="alert alert-info">{{alertStatus.info}}</div><div ng-message=error class="alert alert-danger">{{alertStatus.error}}</div></div>'),$templateCache.put("shared/articletools/articletools.html",'<div><div class=dropdown><button class="btn btn-info dropdown-toggle" type=button id=settingsButtonMenu data-toggle=dropdown aria-expanded=true>Article Tools</button><ul class=dropdown-menu role=menu aria-labelledby=settingsButtonMenu><li role=presentation><a role=menuitem data-toggle=modal data-target=#deleteModal tabindex=-1>Delete</a></li></ul></div></div>'),$templateCache.put("shared/autocomplete/autocomplete.html",'<div ng-form=autocomplete><div class="col-md-5 input-group"><input type=hidden ng-required=isRequired ng-model=model> <input ng-change=doSearchAndUpdateCurrentModels() name=search class="form-control autocomplete-select" ng-keyup=controlSelectedElementWithKeyboard($event) placeholder={{placeholderText}} ng-model=search ng-disabled=modelSelected ng-model-options="{ debounce: 500 }" data-toggle=dropdown ng-class="{\'ng-invalid-required\': isRequired && (modelId === null || modelId === undefined)}"> <span class=input-group-btn><button class="btn btn-danger" ng-show=modelSelected ng-click=clear()><i class="glyphicon glyphicon-remove"></i></button></span><ul class=autocomplete-menu role=menu ng-if=showDropdown><li role=menuitem ng-repeat="model in currentModels" ng-class="{active: selectedElement === $index}" ng-click=updateModel(model)>{{model[labelAttr]}}</li></ul></div></div>'),$templateCache.put("shared/bettycropper/bettyeditable.html",'<button class=betty-editable-add-image ng-click=upload(); ng-hide="image && image.id" ng-class=addStyles><span>{{placeholderText}}</span></button><div ng-show="image && image.id" ng-style=imageStyling class=image-edit-container><div class=image-edit-overlay ng-show=editable><div class=remove><button ng-click=removeImage(); class="glyphicon glyphicon-trash"></button></div><div class=edit><button name=inline_edit ng-click=edit();>EDIT</button></div></div></div>'),$templateCache.put("shared/bettycropper/bettyimage.html","<div class=cropped-image></div>"),$templateCache.put("shared/bettycropper/image-crop-modal.html",'<div class=image-cropper-modal tabindex=1><div class=modal-header><button type=button class=close ng-click=$dismiss(); aria-hidden=true>&times;</button><h4 class=modal-title ng-hide=cropMode>Edit Image Options</h4><h4 class=modal-title ng-show=cropMode>Crop Image</h4></div><div class=modal-body><div ng-hide=cropMode><h5>Set Image Crops</h5><ul class=thumb-list><li ng-repeat="ratio in ratios"><div class=cropped-thumb-container ng-style=thumb_container_styles[ratio] ng-click=selectCrop(ratio)><div ng-style=thumb_styles[ratio] class=cropped-thumb></div></div><span class=fa ng-class=isCropDone(ratio)><strong>{{ ratio }}</strong></span></li></ul><div ng-show="imageData.hasOwnProperty(\'caption\')" class=caption-container><hr><div class=row><div class="form-group col-md-6"><label class="control-label small">Caption / Photo Credit</label><input class=form-control placeholder="Brief explanation of image" ng-model="imageData.caption"></div><div class="form-group col-md-6"><label class="control-label small">Alt Text</label><input class=form-control placeholder="Describe image\'s contents" ng-model="imageData.alt"></div></div></div></div><div ng-show=cropMode><div class=crop-image-container><img ng-src="{{ image_url }}" width="{{ scaleData.width }}" height="{{ scaleData.height }}"></div><div class=ratio-paginator><span ng-repeat="ratio in ratios" ng-class=image.selections[ratio].source class=fa ng-click=selectCrop(ratio)>{{ ratio }}</span></div></div></div><div class=modal-footer><div ng-hide=cropMode><button class="btn btn-success" ng-click=$close(imageData);>Done</button></div><div ng-show=cropMode><button class="btn btn-link" ng-click=saveAndQuit() ng-hide=finished>Save and Finish</button> <button class="btn btn-success" ng-click=saveAndNext() ng-hide=finished>Save & Continue</button> <button class="btn btn-success" ng-click=saveAndQuit() ng-show=finished>Save & Finish</button></div></div></div>'),$templateCache.put("shared/create-content/create-content.html",'<div class=btn-group><a href=# data-target=#create role=button class="btn btn-primary" data-toggle=modal><i class="fa-plus-circle fa"></i> Create content</a></div><div id=create class="modal fade" tabindex=-1 role=dialog aria-labelledby=create-new aria-hidden=true data-backdrop=false><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title>Create Content</h4></div><div class=modal-body><div class="form-group container-fluid" id=createcontent-01><div id=choose-articletype class=row><section id=choose-contenttype class="primary col-xs-4" data-toggle=buttons><h5>1. Choose a type:</h5><ul class="nav nav-pills nav-stacked"><li><a class=create-content data-toggle=pill ng-click="setContentType(\'video\');">Video</a></li><li><a class=create-content data-toggle=pill ng-click="setContentType(\'channel\');">Channel</a></li><li><a class=create-content data-toggle=pill ng-click="setContentType(\'series\');">Series</a></li><li><a class=create-content data-toggle=pill ng-click="setContentType(\'sponsors\');">sponsors</a></li></ul></section><div class="tab-content col-xs-8"><section id=create-video class="panel panel-default" ng-if="contentType === \'video\'"><div class=panel-heading><h6 class=panel-title>Video</h6></div><div class=panel-body><p>Bet you can\'t guess what kind of content this is!</p></div></section><section id=create-channel class="panel panel-default" ng-if="contentType === \'channel\'"><div class=panel-heading><h6 class=panel-title>Channel</h6></div><div class=panel-body><p>Bet you can\'t guess what kind of content this is!</p></div></section><section id=create-series class="panel panel-default" ng-if="contentType === \'series\'"><div class=panel-heading><h6 class=panel-title>Series</h6></div><div class=panel-body><p>Bet you can\'t guess what kind of content this is!</p></div></section><section id=create-sponsors class="panel panel-default" ng-if="contentType === \'sponsors\'"><div class=panel-heading><h6 class=panel-title>sponsors</h6></div><div class=panel-body><p>Bet you can\'t guess what kind of content this is!</p></div></section></div></div></div></div><div class=modal-footer><button class="btn btn-default" data-dismiss=modal aria-hidden=true>Cancel</button> <button type=button class="btn btn-success go" data-dismiss=modal ng-click=goToContentTypesCreationPage();>Go</button></div></div></div></div>'),$templateCache.put("shared/datetimeselectionmodal/datetimeselectionmodal.html",'<div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-hidden=true>&times;</button><h4 class=modal-title>{{ modalTitle || \'Choose a Time\' }}</h4></div><div class=modal-body><div class=well><datetimepicker type=text date=published></datetimepicker></div></div><div class=modal-footer><button class="btn btn-success" data-dismiss=modal><i class="glyphicon glyphicon-ok"></i> Done</button></div></div></div>'),$templateCache.put("shared/detailsnavbar/detailsnavbar.html",'<div class="navbar navbar-fixed-top" role=navigation><div class=container-fluid><div class=navbar-header><a class=navbar-brand href="cms/"><h1 class=visuallyhidden>Onion Video Server</h1><img ng-src={{logoUrl}} alt="Logo"></a></div><div class=col-md-2><article-tools></article-tools></div><div><div class=col-md-2 ng-hide=hideDatetimeSelectionModal><button class="btn btn-info" data-toggle=modal data-target=#datetimeSelectionModal>published</button></div></div><div class=col-md-2><button class="btn btn-success" ng-click=save()>Save</button></div></div></div><div class="modal fade" id=deleteModal tabindex=-1 role=dialog aria-labelledby=deleteModalLabel aria-hidden=true><div class=modal-dialog><div class=modal-content><div class=modal-header><button type=button class=close data-dismiss=modal aria-label=Close><span aria-hidden=true>&times;</span></button><h4 class=modal-title id=myModalLabel>Delete</h4></div><div class=modal-body>Are you sure you want to delete this?</div><div class=modal-footer><button type=button class="btn btn-default" data-dismiss=modal>Close</button> <button type=button class="btn btn-danger" data-dismiss=modal ng-click=delete()>Delete</button></div></div></div></div><alertbar></alertbar><div id=datetimeSelectionModal class="modal fade" role=dialog><datetime-selection-modal></datetime-selection-modal></div>'),$templateCache.put("shared/dropdownselector/dropdownselector.html",'<div><select ng-required=ngRequired class=form-control ng-model=ngModel ng-options="item as item.name for item in currentItems track by item.id | orderBy: \'name\'"><option value="">{{placeholderText}}</option></select></div>'),$templateCache.put("shared/listnavbar/listnavbar.html",'<div class="navbar navbar-fixed-top" role=navigation><div class=container-fluid><div class=navbar-header><a class=navbar-brand href="cms/"><h1 class=visuallyhidden>Onion Video Server</h1><img ng-src={{logoUrl}} alt="Logo"></a></div><div class=col-md-2><a href="/cms/">Content</a></div><div class=col-md-2><a href="/promotions/">Promotion</a></div><div class="navbar-form navbar-right">Logged in as {{currentUserName}}</div></div></div><alertbar></alertbar>'),$templateCache.put("shared/pagination/dirPagination.tpl.html",'<ul class=pagination ng-if="1 < pages.length"><li ng-if=boundaryLinks ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click=setCurrent(1)>&laquo;</a></li><li ng-if=directionLinks ng-class="{ disabled : pagination.current == 1 }"><a href="" ng-click="setCurrent(pagination.current - 1)">&lsaquo;</a></li><li ng-repeat="pageNumber in pages track by $index" ng-class="{ active : pagination.current == pageNumber, disabled : pageNumber == \'...\' }"><a href="" ng-click=setCurrent(pageNumber)>{{ pageNumber }}</a></li><li ng-if=directionLinks ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click="setCurrent(pagination.current + 1)">&rsaquo;</a></li><li ng-if=boundaryLinks ng-class="{ disabled : pagination.current == pagination.last }"><a href="" ng-click=setCurrent(pagination.last)>&raquo;</a></li></ul>'),$templateCache.put("shared/pagination/testTemplate.tpl.html","<div id=test-template><div id=tt-pagination-current>{{ pagination.current }}</div><div id=tt-pagination-last>{{ pagination.last }}</div><div id=tt-range-lower>{{ range.lower }}</div><div id=tt-range-upper>{{ range.upper }}</div><div id=tt-range-total>{{ range.total }}</div></div>"),$templateCache.put("shared/tags-autocomplete/tags-autocomplete.html",'<div class="col-md-5 input-group"><ul><li role=menuitem ng-repeat="item in items">{{item[labelAttr]}} <button class="btn btn-danger" ng-click=removeItem(item)><i class="glyphicon glyphicon-remove"></i></button></li></ul><input name=search class="form-control autocomplete-select" ng-keyup=controlSelectedElementWithKeyboard($event) placeholder={{placeholderText}} ng-model=search ng-model-options="{ debounce: 500 }" ng-change=fetchItemsThatMatchSearch() data-toggle=dropdown><ul class=autocomplete-menu role=menu ng-if="currentItems.length > 0"><li role=menuitem ng-repeat="item in currentItems" ng-class="{active: selectedElement === $index}" ng-click=addItem(item)>{{item[labelAttr]}}</li></ul></div>'),$templateCache.put("shared/videoplayer/videoplayer.html",'<div class=video-player><video class="video-js vjs-default-skin"><source ng-repeat="source in video.sources" ng-src={{source.url}} type="{{source.content_type}}"></video></div>'),$templateCache.put("components/channeldetail/channeldetail.html",'<details-nav-bar></details-nav-bar><div class="row video-ad-form"><div class=col-md-12><ng-form class=form-horizontal name=channelDetailForm novalidate><div class=form-group><label for=name class="col-md-3 control-label">Name</label><div class=col-md-6><input name=Name class=form-control placeholder="Channel Name" required ng-model=channel.name></div></div><div class=form-group><label for=name class="col-md-3 control-label">Description</label><div class=col-md-6><textarea name=Name class=form-control placeholder=Description ng-model=channel.description></textarea></div></div><div class=form-group><label for=Partner class="col-md-3 control-label">Sponsor</label><div class=col-md-6><dropdown-selector service=SponsorService placeholder-text="Search for a Sponsor" ng-model=dropdownFields.partner></dropdown-selector></div></div><div class=form-group><label for=graphic class="col-md-3 control-label">Graphic</label><div class=col-md-4><div class="seriess-container clearfix well logo-container"><bettyeditable name="Large Graphic" editable=true image=channel.graphic_image ratio=16x9 placeholder-text="Add Image"></bettyeditable></div></div></div><div class=form-group><label for=logo class="col-md-3 control-label">Logo</label><div class=col-md-4><div class="seriess-container clearfix well logo-container"><bettyeditable name=Logo editable=true image=channel.logo_image ratio=16x9 placeholder-text="Add Image"></bettyeditable></div></div></div></ng-form></div></div>'),$templateCache.put("components/channellist/channellist.html",'<list-nav-bar></list-nav-bar><div class=row><div class=col-md-2><create-content></create-content></div><div class=col-md-1><div class=dropdown><button class="btn btn-default dropdown-toggle" id=navDropdown data-toggle=dropdown aria-expanded=true>Channel <i class=caret></i></button><ul id=nav class=dropdown-menu role=menu aria-labelledby=navDropdown><li><a href="cms/" role=presentation>Videos</a></li><li><a href="cms/series/" role=presentation>Series</a></li><li class=active><a href="cms/channels/" role=presentation>Channels</a></li><li><a href="cms/sponsors/" role=presentation>Sponsors</a></li></ul></div></div><form ng-submit=setSearchAndUpdateList()><div class=col-md-2><div class=input-group><input id=searchBox class=form-control ng-model=params.q placeholder="Filter List..."><span ng-show="params.q.length > 0" ng-click=clearSearchAndUpdateList() class="btn btn-danger input-group-addon">X</span> <span ng-show=!params.q ng-click=selectSearchBox() class="btn btn-info input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></form></div><div class=row><div class=col-md-12><table class="table table-striped"><tr><thead><th ng-class="{\'active\': (params.order_by.indexOf(\'name\') > -1)}"><a ng-click="setOrderAndUpdateList(\'name\');">Title <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'name\', \'fa-chevron-down\' : params.order_by == \'-name\'}"></i></a></th><th ng-class="{\'active\': (params.order_by.indexOf(\'partner\') > -1)}"><a ng-click="setOrderAndUpdateList(\'partner\');">Sponsor <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'partner\', \'fa-chevron-down\' : params.order_by == \'-partner\'}"></i></a></th></thead></tr><tr dir-paginate="channel in list | itemsPerPage: 8" total-items=totalItems ng-click=changeToEditPage(channel.id)><td class=name>{{channel.name}}</td><td>{{channel.partner.name}}</td></tr><tr ng-if="list.length < 1"><td>No results found.</td></tr></table></div><div class="col-sm-9 col-sm-offset-3 col-md-12 col-md-offset-2 main"><div class="loading col-md-12 on-fade" ng-if=loading><span><div class=loader></div>Loading</span></div><div class="loading col-md-12 on-fade" ng-if=errors><span>Oh noes! Something went amuck. Holler at us: webtech@theonion.com</span></div><dir-pagination-controls on-page-change=pageChanged(newPageNumber)></dir-pagination-controls></div></div>'),$templateCache.put("components/login/login.html",'<alertbar></alertbar><div class=login-container><div class=login-form><form><input class=form-control ng-model=username placeholder=Name required> <input type=password class=form-control ng-model=password placeholder=Password required> <button class="btn add-btn btn-success" type=submit ng-click=submitLogin()><span>Login</span></button></form></div></div>'),$templateCache.put("components/seriesdetail/seriesdetail.html",'<details-nav-bar></details-nav-bar><div class="row series-ad-form"><div class=col-md-12><ng-form class=form-horizontal name=seriesDetailForm novalidate><input type=hidden ng-model=series.id name=id value="{{series.id}}"><div class=form-group><label for=name class="col-md-3 control-label">Name</label><div class=col-md-6><input name=Name class=form-control placeholder=Name required ng-model=series.name required></div></div><div class=form-group><label for=client class="col-md-3 control-label">Description</label><div class=col-md-6><textarea name=Description class=form-control placeholder=Description ng-model=series.description></textarea></div></div><div class=form-group><label for=Channel class="col-md-3 control-label">Channel</label><div class=col-md-6><dropdown-selector service=ChannelService ng-required=true placeholder-text="Search for a Channel" ng-model=dropdownFields.channel></dropdown-selector></div></div><div class=form-group><label for=Series class="col-md-3 control-label">Sponsor</label><div class=col-md-6><dropdown-selector service=SponsorService placeholder-text="Search for a Sponsor" ng-model=dropdownFields.sponsor></dropdown-selector></div></div><div class=form-group><label for=logo class="col-md-3 control-label">Small Graphic</label><div class=col-md-4><div class="seriess-container clearfix well logo-container"><bettyeditable name="Small Graphic" editable=true image=series.small_graphic_image ratio=16x9 placeholder-text="Add Image"></bettyeditable></div></div></div><div class=form-group><label for=logo class="col-md-3 control-label">Large graphic</label><div class=col-md-4><div class="seriess-container clearfix well logo-container"><bettyeditable name="Large Graphic" editable=true image=series.large_graphic_image ratio=16x9 placeholder-text="Add Image"></bettyeditable></div></div></div></ng-form></div></div>'),$templateCache.put("components/serieslist/serieslist.html",'<list-nav-bar></list-nav-bar><div class=row><div class=col-md-2><create-content></create-content></div><div class=col-md-1><div class=dropdown><button class="btn btn-default dropdown-toggle" id=navDropdown data-toggle=dropdown aria-expanded=true>Series <i class=caret></i></button><ul id=nav class=dropdown-menu role=menu aria-labelledby=navDropdown><li><a href="cms/" role=presentation>Videos</a></li><li class=active><a href="cms/series/" role=presentation>Series</a></li><li><a href="cms/channels/" role=presentation>Channels</a></li><li><a href="cms/sponsors/" role=presentation>Sponsors</a></li></ul></div></div><form ng-submit=setSearchAndUpdateList()><div class=col-md-2><div class=input-group><input id=searchBox class=form-control ng-model=params.q placeholder="Filter List..."><span ng-show="params.q.length > 0" ng-click=clearSearchAndUpdateList() class="btn btn-danger input-group-addon">X</span> <span ng-show=!params.q ng-click=selectSearchBox() class="btn btn-info input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></form></div><div class=row><div class=col-md-12><table class="table table-striped"><tr><thead><th ng-class="{\'active\': (params.order_by.indexOf(\'name\') > -1)}"><a ng-click="setOrderAndUpdateList(\'name\');">Title <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'name\', \'fa-chevron-down\' : params.order_by == \'-name\'}"></i></a></th><th ng-class="{\'active\': (params.order_by.indexOf(\'channel\') > -1)}"><a ng-click="setOrderAndUpdateList(\'channel\');">Channel <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'channel\', \'fa-chevron-down\' : params.order_by == \'-channel\'}"></i></a></th><th ng-class="{\'active\': (params.order_by.indexOf(\'sponsor\') > -1)}"><a ng-click="setOrderAndUpdateList(\'sponsor\');">Sponsor <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'sponsor\', \'fa-chevron-down\' : params.order_by == \'-sponsor\'}"></i></a></th></thead></tr><tr dir-paginate="series in list | itemsPerPage: 8" total-items=totalItems ng-click=changeToEditPage(series.id)><td class=name>{{series.name}}</td><td>{{series.channel.name}}</td><td>{{series.sponsor.name}}</td></tr><tr ng-if="list.length < 1"><td>No results found.</td></tr></table></div><div class="col-sm-9 col-sm-offset-3 col-md-12 col-md-offset-2 main"><div class="loading col-md-12 on-fade" ng-if=loading><span><div class=loader></div>Loading</span></div><div class="loading col-md-12 on-fade" ng-if=errors><span>Oh noes! Something went amuck. Holler at us: webtech@theonion.com</span></div><dir-pagination-controls on-page-change=pageChanged(newPageNumber)></dir-pagination-controls></div></div>'),$templateCache.put("components/sponsordetail/sponsordetail.html",'<details-nav-bar></details-nav-bar><div class="row sponsor-ad-form"><div class=col-md-12><ng-form class=form-horizontal name=sponsorDetailForm novalidate><input type=hidden ng-model=sponsor.id name=id value="{{sponsor.id}}"><div class=form-group><label for=name class="col-md-3 control-label">Name</label><div class=col-md-6><input name=Name class=form-control placeholder=Name required ng-model=sponsor.name required></div></div><div class=form-group><label for=link class="col-md-3 control-label">Link</label><div class=col-md-6><input name=link class=form-control placeholder=Link ng-model=sponsor.link></div></div><div class=form-group><label for=pixel class="col-md-3 control-label">Pixel</label><div class=col-md-6><input name=pixel class=form-control placeholder=Pixel ng-model=sponsor.pixel></div></div><div class=form-group><label for=logo class="col-md-3 control-label">Logo</label><div class=col-md-4><div class="sponsors-container clearfix well logo-container"><bettyeditable name=logo editable=true image=sponsor.logo_image ratio=16x9 placeholder-text="Add Image"></bettyeditable></div></div></div></ng-form></div></div>'),$templateCache.put("components/sponsorlist/sponsorlist.html",'<list-nav-bar></list-nav-bar><div class=row><div class=col-md-2><create-content></create-content></div><div class=col-md-1><div class=dropdown><button class="btn btn-default dropdown-toggle" id=navDropdown data-toggle=dropdown aria-expanded=true>Sponsor <i class=caret></i></button><ul id=nav class=dropdown-menu role=menu aria-labelledby=navDropdown><li><a href="cms/" role=presentation>Videos</a></li><li><a href="cms/series/" role=presentation>Series</a></li><li><a href="cms/channels/" role=presentation>Channels</a></li><li class=active><a href="cms/sponsors/" role=presentation>Sponsors</a></li></ul></div></div><form ng-submit=setSearchAndUpdateList()><div class=col-md-2><div class=input-group><input id=searchBox class=form-control ng-model=params.q placeholder="Filter List..."><span ng-show="params.q.length > 0" ng-click=clearSearchAndUpdateList() class="btn btn-danger input-group-addon">X</span> <span ng-show=!params.q ng-click=selectSearchBox() class="btn btn-info input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></form></div><div class=row><div class=col-md-12><table class="table table-striped"><tr><thead><th ng-class="{\'active\': (params.order_by.indexOf(\'name\') > -1)}"><a ng-click="setOrderAndUpdateList(\'name\');">Title <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'name\', \'fa-chevron-down\' : params.order_by == \'-name\'}"></i></a></th></thead></tr><tr dir-paginate="sponsor in list | itemsPerPage: 8" total-items=totalItems ng-click=changeToEditPage(sponsor.id)><td class=name>{{sponsor.name}}</td></tr><tr ng-if="list.length < 1"><td>No results found.</td></tr></table></div><div class="col-sm-9 col-sm-offset-3 col-md-12 col-md-offset-2 main"><div class="loading col-md-12 on-fade" ng-if=loading><span><div class=loader></div>Loading</span></div><div class="loading col-md-12 on-fade" ng-if=errors><span>Oh noes! Something went amuck. Holler at us: webtech@theonion.com</span></div><dir-pagination-controls on-page-change=pageChanged(newPageNumber)></dir-pagination-controls></div></div>'),$templateCache.put("components/videodetail/channelselection.html",'<div class=form-group><label for=Channel class="col-md-3 control-label">Channel</label><div class=col-md-4><select name=channel class=form-control ng-model=data.channel ng-options="channel as channel.name for channel in data.channelList track by channel.id | orderBy:\'name\'" ng-change=channelFieldChanged() ng-required=true><option value="">Select Channel</option></select></div></div><div class=form-group ng-if=data.channel.id><label for=Series class="col-md-3 control-label">Series</label><div class=col-md-4><select class=form-control ng-model=data.series ng-options="series as series.name for series in data.seriesList track by series.id | orderBy:\'name\'" ng-change=seriesFieldChanged()><option value="">Select Series</option></select></div></div><div class=form-group ng-if=data.series.id><label for=season class="col-md-3 control-label">Season</label><div class=col-md-1><select class=form-control ng-model=data.season ng-options="season as season.description for season in data.seasonList track by season.id | orderBy:\'name\'"><option value="">Select Season</option></select></div></div>'),$templateCache.put("components/videodetail/videodetail.html",'<details-nav-bar></details-nav-bar><div class="row video-ad-form"><div class=col-md-12><ng-form class=form-horizontal name=videoDetailForm novalidate><input type=hidden ng-model=video.id name=id value="{{video.id}}"><div class=form-group><label for=name class="col-md-3 control-label">Name</label><div class=col-md-6><input name=Name class=form-control placeholder=Name required ng-model=video.title required></div></div><div class=form-group><label for=client class="col-md-3 control-label">Description</label><div class=col-md-6><textarea name=Description class=form-control placeholder=Description ng-model=video.description></textarea></div></div><channel-selection></channel-selection><div class=form-group><label for=Sponsor class="col-md-3 control-label">Sponsor</label><div class=col-md-4><dropdown-selector ng-model=dropdownFields.sponsor service=SponsorService placeholder-text="Select Sponsor"></dropdown-selector></div></div><div class=form-group><label for=video class="col-md-3 control-label">Tags</label><div class=col-md-4><tags-autocomplete items=autocompleteFields.tagObjects service=TagsService label-attr=name placeholder-text="Search for a tag..."></tags-autocomplete></div></div><div ng-show=!video.id><div class=form-group><label for=video class="col-md-3 control-label">Video <button data-toggle=tooltip id=videoMustBeSavedBeforeUpload data-placement=left title="Please save before uploading a video." class="glyphicon glyphicon-info-sign btn-info"></button></label><div class=col-md-4><button ng-click=showVideoTooltip(); class="btn btn-danger" style="width: 100%"><span class="fa fa-video-camera"></span>Upload Video</button> <input type=file id={{video.id}}-file-field style=display:none></div></div></div><div ng-show=video.id><div class=form-group><label for=video class="col-md-3 control-label">Video</label><div class=col-md-4><video-field></video-field></div></div></div></ng-form></div></div>'),$templateCache.put("components/videodetail/videofield.html",'<div ng-if="video.sources.length > 0" class=video-embed-container style="position: relative"><video-player video-id={{video.id}}></video-player></div><div ng-if="video.sources.length === 0" class=video-upload-container style="position: relative"><button ng-click=uploadVideo(); class="btn btn-success" style="width: 100%"><span class="fa fa-video-camera"></span>Upload Video</button> <input type=file id={{video.id}}-file-field style=display:none></div>'),$templateCache.put("components/videolist/videolist.html",'<list-nav-bar></list-nav-bar><div class=row><div class=col-md-2><create-content></create-content></div><div class=col-md-1><div class=dropdown><button class="btn btn-default dropdown-toggle" id=navDropdown data-toggle=dropdown aria-expanded=true>Videos <i class=caret></i></button><ul id=nav class=dropdown-menu role=menu aria-labelledby=navDropdown><li class=active><a href="cms/" role=presentation>Videos</a></li><li><a href="cms/series/" role=presentation>Series</a></li><li><a href="cms/channels/" role=presentation>Channels</a></li><li><a href="cms/sponsors/" role=presentation>Sponsors</a></li></ul></div></div><div class="col-md-3 btn-group"><button class="btn btn-default" ng-class="{\'active\': (params.f === null || params.f === undefined)}" ng-click=setFilterAndUpdateList(null);><a>All</a></button> <button class="btn btn-default" ng-class="{\'active\': (params.f === \'status:draft\')}" ng-click="setFilterAndUpdateList(\'status:draft\');"><a>Draft</a></button> <button class="btn btn-default" ng-class="{\'active\': (params.f === \'status:published\')}" ng-click="setFilterAndUpdateList(\'status:published\');"><a>Published</a></button> <button class="btn btn-default" ng-class="{\'active\': (params.f === \'status:scheduled\')}" ng-click="setFilterAndUpdateList(\'status:scheduled\');"><a>Scheduled</a></button></div><form ng-submit=setSearchAndUpdateList()><div class=col-md-4><div class=input-group><input id=searchBox class=form-control ng-model=params.q placeholder="Filter list..."><span ng-show="params.q.length > 0" ng-click=clearSearchAndUpdateList() class="btn btn-danger input-group-addon">X</span> <span ng-show=!params.q ng-click=selectSearchBox() class="btn btn-info input-group-addon"><i class="glyphicon glyphicon-search"></i></span></div></div></form></div><div class=row><div class=col-md-12><table class="table table-striped"><tr><thead><th ng-class="{\'active\': (params.order_by.indexOf(\'title\') > -1)}"><a ng-click="setOrderAndUpdateList(\'title\');">Title <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'title\', \'fa-chevron-down\' : params.order_by == \'-title\'}"></i></a></th><th ng-class="{\'active\': (params.order_by.indexOf(\'channel\') > -1)}"><a ng-click="setOrderAndUpdateList(\'channel\');">Channel <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'channel\', \'fa-chevron-down\' : params.order_by == \'-channel\'}"></i></a></th><th ng-class="{\'active\': (params.order_by.indexOf(\'series\') > -1)}"><a ng-click="setOrderAndUpdateList(\'series\');">Series <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'series\', \'fa-chevron-down\' : params.order_by == \'-series\'}"></i></a></th><th ng-class="{\'active\': (params.order_by.indexOf(\'published\') > -1)}"><a ng-click="setOrderAndUpdateList(\'published\');">Date <i class=fa ng-class="{\'fa-chevron-up\' : params.order_by == \'published\', \'fa-chevron-down\' : params.order_by == \'-published\'}"></i></a></th></thead></tr><tr dir-paginate="video in list | itemsPerPage: 8" total-items=totalItems ng-click=changeToEditPage(video.id)><td class=name>{{video.title}}</td><td>{{video.channel.name}}</td><td>{{video.series.name}}</td><td>{{video.published|convertToLocal}}</td></tr><tr ng-if="list.length < 1"><td>No results found.</td></tr></table></div><div class="col-sm-9 col-sm-offset-3 col-md-12 col-md-offset-2 main"><div class="loading col-md-12 on-fade" ng-if=loading><span><div class=loader></div>Loading</span></div><div class="loading col-md-12 on-fade" ng-if=errors><span>Oh noes! Something went amuck. Holler at us: webtech@theonion.com</span></div><dir-pagination-controls on-page-change=pageChanged(newPageNumber)></dir-pagination-controls></div></div>')}]);
//# sourceMappingURL=templates.js.map