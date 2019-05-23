var aliasConfig = {
	appName : ["", "", ""],
	totalPageCount : [],
	largePageWidth : [],
	largePageHeight : [],
	normalPath : [],
	largePath : [],
	thumbPath : [],
	
	ToolBarsSettings:[],
	TitleBar:[],
	appLogoIcon:["appLogoIcon"],
	appLogoLinkURL:["appLogoLinkURL"],
	bookTitle : [],
	bookDescription : [],
	ButtonsBar : [],
	ShareButton : [],
	ShareButtonVisible : ["socialShareButtonVisible"],
	ThumbnailsButton : [],
	ThumbnailsButtonVisible : ["enableThumbnail"],
	ZoomButton : [],
	ZoomButtonVisible : ["enableZoomIn"],
	FlashDisplaySettings : [],
	MainBgConfig : [],
	bgBeginColor : ["bgBeginColor"],
	bgEndColor : ["bgEndColor"],
	bgMRotation : ["bgMRotation"],
	backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
	pageBackgroundColor : ["pageBackgroundColor"],
	flipshortcutbutton : [],
	BookMargins : [],
	topMargin : [],
	bottomMargin : [],
	leftMargin : [],
	rightMargin : [],
	HTMLControlSettings : [],
	linkconfig : [],
	LinkDownColor : ["linkOverColor"],
	LinkAlpha : ["linkOverColorAlpha"],
	OpenWindow : ["linkOpenedWindow"],
	searchColor : [],
	searchAlpha : [],
	SearchButtonVisible : ["searchButtonVisible"],
	
	productName : [],
	homePage : [],
	enableAutoPlay : ["autoPlayAutoStart"],
	autoPlayDuration : ["autoPlayDuration"],
	autoPlayLoopCount : ["autoPlayLoopCount"],
	BookMarkButtonVisible : [],
	googleAnalyticsID : ["googleAnalyticsID"],
	OriginPageIndex : [],	
	HardPageEnable : ["isHardCover"],	
	UIBaseURL : [],	
	RightToLeft: ["isRightToLeft"],	
	
	LeftShadowWidth : ["leftPageShadowWidth"],	
	LeftShadowAlpha : ["pageShadowAlpha"],
	RightShadowWidth : ["rightPageShadowWidth"],
	RightShadowAlpha : ["pageShadowAlpha"],
	ShortcutButtonHeight : [],	
	ShortcutButtonWidth : [],
	AutoPlayButtonVisible : ["enableAutoPlay"],	
	DownloadButtonVisible : ["enableDownload"],	
	DownloadURL : ["downloadURL"],
	HomeButtonVisible :["homeButtonVisible"],
	HomeURL:['btnHomeURL'],
	BackgroundSoundURL:['bacgroundSoundURL'],
	//TableOfContentButtonVisible:["BookMarkButtonVisible"],
	PrintButtonVisible:["enablePrint"],
	toolbarColor:["mainColor","barColor"],
	loadingBackground:["mainColor","barColor"],
	BackgroundSoundButtonVisible:["enableFlipSound"],
	FlipSound:["enableFlipSound"],
	MiniStyle:["userSmallMode"],
	retainBookCenter:["moveFlipBookToCenter"],
	totalPagesCaption:["totalPageNumberCaptionStr"],
	pageNumberCaption:["pageIndexCaptionStrs"]
	};
	var aliasLanguage={
	frmPrintbtn:["frmPrintCaption"],
	frmPrintall : ["frmPrintPrintAll"],
	frmPrintcurrent : ["frmPrintPrintCurrentPage"],
	frmPrintRange : ["frmPrintPrintRange"],
	frmPrintexample : ["frmPrintExampleCaption"],
	btnLanguage:["btnSwicthLanguage"],
	btnTableOfContent:["btnBookMark"]
	}
	;
		var bookConfig = {
		appName:'flippdf',
		totalPageCount : 0,
		largePageWidth : 1080,
		largePageHeight : 1440,
		normalPath : "files/page/",
		largePath : "files/large/",
		thumbPath : "files/thumb/",
		
		ToolBarsSettings:"",
		TitleBar:"",
		appLogoLinkURL:"",
		bookTitle:"FLIPBUILDER",
		bookDescription:"",
		ButtonsBar:"",
		ShareButton:"",
		
		ThumbnailsButton:"",
		ThumbnailsButtonVisible:"Hide",
		ZoomButton:"",
		ZoomButtonVisible:"No",
		FlashDisplaySettings:"",
		MainBgConfig:"",
		bgBeginColor:"#cccccc",
		bgEndColor:"#eeeeee",
		bgMRotation:45,
		pageBackgroundColor:"#FFFFFF",
		flipshortcutbutton:"Hide",
		BookMargins:"",
		topMargin:10,
		bottomMargin:10,
		leftMargin:10,
		rightMargin:10,
		HTMLControlSettings:"",
		linkconfig:"",
		LinkDownColor:"#808080",
		LinkAlpha:0.5,
		OpenWindow:"_Blank",
	
		BookMarkButtonVisible:'False',
		productName : 'Demo created by Flip PDF',
		homePage : 'http://www.html5.com/',
		isFlipPdf : "False",
		TableOfContentButtonVisible:"False",
		searchTextJS:'javascript/search_config.js',
		searchPositionJS:undefined
	};
		
		
		;bookConfig.loadingCaption="正在加载，请稍后";bookConfig.loadingCaptionColor="#DDDDDD";bookConfig.loadingBackground="#000000";bookConfig.appLogoIcon="files/extfiles/appLogoIcon.png";bookConfig.appLogoLinkURL="";bookConfig.logoHeight="40";bookConfig.logoPadding="0";bookConfig.logoTop="0";bookConfig.HomeURL="http://www.html5.com";bookConfig.appLogoOpenWindow="Blank";bookConfig.toolbarColor="#000000";bookConfig.iconColor="#ECF5FB";bookConfig.pageNumColor="#333333";bookConfig.iconFontColor="#FFFFFF";bookConfig.FlipSound="Disable";bookConfig.QRCode="Hide";bookConfig.HomeButtonVisible="Hide";bookConfig.ShareButtonVisible="Hide";bookConfig.ThumbnailsButtonVisible="Show";bookConfig.thumbnailColor="#333333";bookConfig.thumbnailAlpha="70";bookConfig.ZoomButtonVisible="No";bookConfig.BookMarkButtonVisible="Hide";bookConfig.TableOfContentButtonVisible="Hide";bookConfig.bookmarkBackground="#000000";bookConfig.bookmarkFontColor="#cccccc";bookConfig.SearchButtonVisible="Hide";bookConfig.leastSearchChar="3";bookConfig.searchFontColor="#FFFFFF";bookConfig.PrintButtonVisible="No";bookConfig.BackgroundSoundButtonVisible="Enable";bookConfig.BackgroundSoundLoop="-1";bookConfig.AutoPlayButtonVisible="No";bookConfig.autoPlayAutoStart="No";bookConfig.autoPlayDuration="9";bookConfig.autoPlayLoopCount="1";bookConfig.minZoomWidth="700";bookConfig.minZoomHeight="518";bookConfig.mouseWheelFlip="No";bookConfig.DownloadButtonVisible="Hide";bookConfig.DownloadURL="http://www.html5.com/";bookConfig.enableDownload="No";bookConfig.downloadURL="http://www.html5.com/";bookConfig.bgBeginColor="#E2E2E2";bookConfig.bgEndColor="#E2E2E2";bookConfig.bgMRotation="90";bookConfig.backGroundImgURL="files/mobile-ext/backGroundImgURL.jpg";bookConfig.LeftShadowWidth="90";bookConfig.LeftShadowAlpha="0.6";bookConfig.RightShadowWidth="55";bookConfig.RightShadowAlpha="0.6";bookConfig.HardPageEnable="No";bookConfig.hardCoverBorderWidth="8";bookConfig.borderColor="#572F0D";bookConfig.outerCoverBorder="No";bookConfig.cornerRound="8";bookConfig.pageBackgroundColor="#E8E8E8";bookConfig.flipshortcutbutton="Hide";bookConfig.BindingType="side";bookConfig.RightToLeft="No";bookConfig.flippingTime="0.3";bookConfig.retainBookCenter="No";bookConfig.FlipStyle="Flip";bookConfig.HideDoublePage="No";bookConfig.topMargin="10";bookConfig.bottomMargin="10";bookConfig.leftMargin="10";bookConfig.rightMargin="10";bookConfig.leftMarginOnMobile="0";bookConfig.topMarginOnMobile="0";bookConfig.rightMarginOnMobile="0";bookConfig.bottomMarginOnMobile="0";bookConfig.maxWidthToSmallMode="400";bookConfig.maxHeightToSmallMode="300";bookConfig.LinkDownColor="#800080";bookConfig.LinkAlpha="0.2";bookConfig.OpenWindow="Blank";bookConfig.HideLinkHint="No";bookConfig.searchFontColor="#FFFDDD";bookConfig.totalPageCount=42;bookConfig.largePageWidth=1024;bookConfig.largePageHeight=1448;;bookConfig.securityType="1";bookConfig.bookTitle="２０１６年《医师—妇产科》";bookConfig.productName="html5tricks";bookConfig.homePage="http://www.html5.com/";bookConfig.searchPositionJS="javascript/search_config.js";bookConfig.searchTextJS="javascript/search_config.js";bookConfig.normalPath="files/mobile/";bookConfig.largePath="files/mobile/";bookConfig.thumbPath="files/thumb/";bookConfig.userListPath="files/extfiles/users.js";var language = [];;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};; var pageEditor = {"setting":{}, "pageAnnos":[[],[],[],[],[],[],[],[],[],[],[],[]]};

		console.log(bookConfig);
		
		
	try{
		for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
			if(pageEditor[i].length==0){
				continue;
			}
			for(var j=0;j<pageEditor[i].length;j++){
				var anno=pageEditor[i][j];
				if(anno==undefined)continue;
				if(anno.overAlpha==undefined){
					anno.overAlpha=bookConfig.LinkAlpha;
				}
				if(anno.outAlpha==undefined){
					anno.outAlpha=0;
				}
				if(anno.downAlpha==undefined){
					anno.downAlpha=bookConfig.LinkAlpha;
				}
				if(anno.overColor==undefined){
					anno.overColor=bookConfig.LinkDownColor;
				}
				if(anno.downColor==undefined){
					anno.downColor=bookConfig.LinkDownColor;
				}
				if(anno.outColor==undefined){
					anno.outColor=bookConfig.LinkDownColor;
				}
				if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
					anno.alpha=bookConfig.LinkAlpha;
				}
			}
		}
	}catch(e){
	}
	try{
		$.browser.device = 2;
	}catch(ee){
	}
	