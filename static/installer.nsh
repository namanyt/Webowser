!macro customInstall
  WriteRegStr SHCTX "SOFTWARE\RegisteredApplications" "Webowser" "Software\Clients\StartMenuInternet\Webowser\Capabilities"

  WriteRegStr SHCTX "SOFTWARE\Classes\Webowser" "" "Webowser HTML Document"
  WriteRegStr SHCTX "SOFTWARE\Classes\Webowser\Application" "AppUserModelId" "Webowser"
  WriteRegStr SHCTX "SOFTWARE\Classes\Webowser\Application" "ApplicationIcon" "$INSTDIR\Webowser.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\Webowser\Application" "ApplicationName" "Webowser"
  WriteRegStr SHCTX "SOFTWARE\Classes\Webowser\Application" "ApplicationCompany" "Webowser"      
  WriteRegStr SHCTX "SOFTWARE\Classes\Webowser\Application" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser"      
  WriteRegStr SHCTX "SOFTWARE\Classes\Webowser\DefaultIcon" "DefaultIcon" "$INSTDIR\Webowser.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Classes\Webowser\shell\open\command" "" '"$INSTDIR\Webowser.exe" "%1"'

  WriteRegStr SHCTX "SOFTWARE\Classes\.htm\OpenWithProgIds" "Webowser" ""
  WriteRegStr SHCTX "SOFTWARE\Classes\.html\OpenWithProgIds" "Webowser" ""

  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser" "" "Webowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\DefaultIcon" "" "$INSTDIR\Webowser.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\Capabilities" "ApplicationDescription" "A privacy-focused, extensible and beautiful web browser, Free and open source."
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\Capabilities" "ApplicationName" "Webowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\Capabilities" "ApplicationIcon" "$INSTDIR\Webowser.exe,0"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\Capabilities\FileAssociations" ".htm" "Webowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\Capabilities\FileAssociations" ".html" "Webowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\Capabilities\URLAssociations" "http" "Webowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\Capabilities\URLAssociations" "https" "Webowser"
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\Capabilities\StartMenu" "StartMenuInternet" "Webowser"
  
  WriteRegDWORD SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\InstallInfo" "IconsVisible" 1
  
  WriteRegStr SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser\shell\open\command" "" "$INSTDIR\Webowser.exe"
!macroend
!macro customUnInstall
  DeleteRegKey SHCTX "SOFTWARE\Classes\Webowser"
  DeleteRegKey SHCTX "SOFTWARE\Clients\StartMenuInternet\Webowser"
  DeleteRegValue SHCTX "SOFTWARE\RegisteredApplications" "Webowser"
!macroend