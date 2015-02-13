var xmlSkinData = "";
xmlSkinData += '<?xml version=\"1.0\" encoding=\"utf-8\"?>';
xmlSkinData += '<CatapultSkin Version=\"1\" Comment=\"This is the default skin\" Anchors=\"Width,Height\" Width=\"800px\" Height=\"600px\" Top=\"0px\" Left=\"0px\" Bottom=\"0px\" Right=\"0px\" Tabs=\"TOC,Index,Search,Community\" DefaultTab=\"TOC\" UseBrowserDefaultSize=\"True\" UseDefaultBrowserSetup=\"True\">';
xmlSkinData += '    <Index BinaryStorage=\"True\" />';
xmlSkinData += '    <HtmlHelpOptions ShowMenuBar=\"False\" TopmostWindowStyle=\"False\" Buttons=\"Hide,Locate,Back,Forward,Stop,Refresh,Home,Font,Print\" EnableButtonCaptions=\"True\" />';
xmlSkinData += '    <Stylesheet Link=\"Stylesheet.xml\" />';
xmlSkinData += '</CatapultSkin>';
CMCXmlParser._FilePathToXmlStringMap.Add('Skin', xmlSkinData);
