// JavaScript source code
function initViz(){
	var ContainerDiv= document.getElementbyId("TableauAnalysis"),
	url="https://public.tableau.com/views/ExploringDataAnalysisofLendingClubsloan/ExploringDataAnalysisofLendingClubsloan?:language=en&:display_count=y&publish=yes&:origin=viz_share_link";
	var viz= new tableau.Viz(ContainerDiv, url)
}
               
